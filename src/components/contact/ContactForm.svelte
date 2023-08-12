<script lang="ts">
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
  <h2 class="text-center">Contact me</h2>
  <div>
    <label
      for="email"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >Your email</label
    >
    <input
      type="email"
      id="email"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 px-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="name@example.com"
      required
      bind:value={email}
    />
  </div>
  <div>
    <label
      for="name"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >Your name</label
    >
    <input
      type="name"
      id="name"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 px-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="John Doe"
      required
      bind:value={name}
    />
  </div>
  <div>
    <label
      for="message"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Your message
    </label>
    <textarea
      id="message"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 px-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Type here your message..."
      rows="4"
      cols="50"
      required
      bind:value={message}
    />
  </div>
  <button
    type="submit"
    class="ml-auto transition-all shadow border border-gray-300 text-white bg-gradient-to-br from-purple-700 via-blue-400 to-purple-700 dark:from-purple-800 dark:via-blue-600 dark:to-purple-800 dark:border-gray-500 bg-size-200 bg-pos-0 hover:bg-pos-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-1.5 text-center mr-2"
    disabled={state === 'loading'}
  >
    {state === 'loading' ? 'Sending...' : 'Send'}
  </button>
</form>
