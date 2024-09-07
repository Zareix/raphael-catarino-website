import { Drawer } from 'vaul';
import { useState } from 'react';
import { useTranslations, type Lang } from '~/i18n';

type Props = {
  lang: Lang;
};

const ContactButton = ({ lang }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [state, setState] = useState<'idle' | 'loading' | 'error' | 'success'>(
    'idle',
  );
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const t = useTranslations(lang);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState('loading');
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.success) {
          setState('success');
          alert('Message sent!');
          setModalOpen(false);
        } else {
          setState('error');
          alert('Message failed to send.');
        }
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.error(err);
        alert('Message failed to send.');
        setState('error');
      });
  };

  return (
    <Drawer.Root open={modalOpen} onOpenChange={setModalOpen}>
      <Drawer.Trigger asChild>
        <button className="text-gray-800 transition-colors hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200">
          {t('contact.buttonText')}
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-40 bg-black/40 backdrop-blur" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 mx-[-1px] flex flex-col">
          <div className="border-b-none mx-auto flex max-w-[600px] flex-1 flex-col rounded-t-[10px] border border-gray-200 bg-stone-50 p-4 md:px-12 dark:bg-slate-900">
            <Drawer.Close
              className="mx-auto mb-4 h-1.5 w-12 flex-shrink-0 rounded-full bg-stone-300"
              aria-label="close"
            />
            <div className="mx-auto max-w-md">
              <form className="flex flex-col gap-4 px-4" onSubmit={submit}>
                <Drawer.Title className="text-center">
                  {t('contact.title')}
                </Drawer.Title>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {t('contact.emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder={t('contact.emailPlaceholder')}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {t('contact.nameLabel')}
                  </label>
                  <input
                    type="name"
                    id="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder={t('contact.namePlaceholder')}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {t('contact.messageLabel')}
                  </label>
                  <textarea
                    id="message"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder={t('contact.messagePlaceholder')}
                    rows={4}
                    cols={50}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="group relative isolate ml-auto inline-flex items-center justify-center overflow-hidden rounded-md bg-purple-500 px-3 py-[0.1875rem] text-sm font-medium text-white shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] ring-1 ring-purple-500 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:from-white/20 before:opacity-50 before:transition-opacity before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay hover:before:opacity-100 dark:bg-purple-800 dark:ring-0"
                  disabled={state === 'loading'}
                >
                  {state === 'loading'
                    ? t('contact.sending')
                    : t('contact.send')}
                </button>
              </form>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default ContactButton;
