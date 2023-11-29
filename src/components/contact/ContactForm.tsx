import { component$, useSignal } from '@builder.io/qwik';

export const ContactForm = component$(() => {
  const counter = useSignal(0);

  return <button onClick$={() => counter.value++}>{counter.value}</button>;
});
