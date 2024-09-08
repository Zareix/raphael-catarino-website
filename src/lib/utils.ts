type FlattenObjectKeys<
  T extends Record<string, unknown>,
  Key = keyof T,
> = Key extends string
  ? T[Key] extends Record<string, unknown>
    ? `${Key}.${FlattenObjectKeys<T[Key]>}`
    : `${Key}`
  : never;

const flatten = <T extends Record<string, unknown>>(
  data: object,
  prefix: string = '',
) => {
  const result: { [key: string]: string | number | null } = {};

  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === 'object') {
      Object.assign(result, flatten(value, `${prefix}${key}.`));
    } else {
      result[`${prefix}${key}`] = value;
    }
  });

  return result as {
    [K in FlattenObjectKeys<T>]: string;
  };
};

function groupBy<T, K extends keyof any>(
  list: T[],
  getKey: (item: T) => K,
): Record<K, T[]> {
  return list.reduce(
    (previous, currentItem) => {
      const group = getKey(currentItem);
      if (!previous[group]) previous[group] = [];
      previous[group].push(currentItem);
      return previous;
    },
    {} as Record<K, T[]>,
  );
}

const createObserver = (
  selector: string,
  className: string,
  options?: {
    root: null;
    rootMargin: string;
    threshold: number;
  },
) => {
  const observerOptions = {
    root: options?.root ?? null,
    rootMargin: options?.rootMargin ?? '-200px 0px',
    threshold: options?.threshold ?? 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(selector).forEach((element) => {
    observer.observe(element);
  });
};

export { flatten, type FlattenObjectKeys, groupBy, createObserver };
