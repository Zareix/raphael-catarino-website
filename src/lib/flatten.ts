type FlattenObjectKeys<
  T extends Record<string, unknown>,
  Key = keyof T
> = Key extends string
  ? T[Key] extends Record<string, unknown>
    ? `${Key}.${FlattenObjectKeys<T[Key]>}`
    : `${Key}`
  : never;

const flatten = (data: object, prefix: string = '') => {
  const result: { [key: string]: string | number | null } = {};

  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === 'object') {
      Object.assign(result, flatten(value, `${prefix}${key}.`));
    } else {
      result[`${prefix}${key}`] = value;
    }
  });

  return result;
};

export { flatten, type FlattenObjectKeys };
