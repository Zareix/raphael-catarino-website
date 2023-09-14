<script lang="ts">
  export let translations = {
    title: 'Contact me',
    emailLabel: 'Your email',
    emailPlaceholder: 'name@example.com',
    nameLabel: 'Your name',
    namePlaceholder: 'John Doe',
    messageLabel: 'Your message',
    messagePlaceholder: 'Type here your message...',
    sending: 'Sending...',
    send: 'Send',
  };

  let name = '';
  let email = '';
  let message = '';

  let state: 'idle' | 'loading' | 'error' | 'success' = 'idle';

  const submit = () => {
    state = 'loading';
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.success) {
          alert('Message sent!');
        } else {
          alert('Message failed to send.');
        }
        state = 'idle';
        name = '';
        email = '';
        message = '';
      })
      .catch((err) => {
        console.error(err);
        alert('Message failed to send.');
        state = 'idle';
      });
  };
</script>

<form class="flex flex-col gap-4" on:submit|preventDefault={submit}>
  <h2 class="text-center">{translations.title}</h2>
  <div>
    <label
      for="email"
      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >{translations.emailLabel}</label
    >
    <input
      type="email"
      id="email"
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      placeholder={translations.emailPlaceholder}
      required
      bind:value={email}
    />
  </div>
  <div>
    <label
      for="name"
      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >{translations.nameLabel}</label
    >
    <input
      type="name"
      id="name"
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      placeholder={translations.namePlaceholder}
      required
      bind:value={name}
    />
  </div>
  <div>
    <label
      for="message"
      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
    >
      {translations.nameLabel}
    </label>
    <textarea
      id="message"
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      placeholder={translations.messagePlaceholder}
      rows="4"
      cols="50"
      required
      bind:value={message}
    />
  </div>
  <button
    type="submit"
    class="ml-auto mr-2 rounded-lg border border-gray-300 bg-gradient-to-br from-purple-700 via-blue-400 to-purple-700 bg-size-200 bg-pos-0 px-4 py-1.5 text-center text-sm font-medium text-white shadow transition-all hover:bg-pos-100 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-500 dark:from-purple-800 dark:via-blue-600 dark:to-purple-800 dark:focus:ring-blue-800"
    disabled={state === 'loading'}
  >
    {state === 'loading' ? translations.sending : translations.send}
  </button>
</form>
