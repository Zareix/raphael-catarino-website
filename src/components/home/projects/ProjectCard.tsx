import type { CollectionEntry } from 'astro:content';
import { Drawer } from 'vaul';
import { useTranslations, type Lang, formatList } from '~/i18n';

type Props = {
  project: CollectionEntry<'projects'>;
  lang: Lang;
  image?: React.ReactNode;
  content?: React.ReactNode;
};

const ProjectCard = ({ project, image, content, lang }: Props) => {
  const t = useTranslations(lang);

  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <button className="relative m-4 block cursor-pointer overflow-hidden rounded-md bg-stone-100 transition hover:opacity-65 hover:shadow-xl hover:ring sm:hover:opacity-100 sm:hover:ring-0">
          {image}
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-40 bg-black/40 backdrop-blur" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 mx-[-1px] flex flex-col">
          <div className="border-b-none mx-auto flex max-w-[600px] flex-1 flex-col rounded-t-[10px] border border-gray-200 bg-stone-50 p-4 pb-12 md:px-12 dark:border-slate-800 dark:bg-slate-900">
            <Drawer.Close
              className="mx-auto mb-4 h-1.5 w-12 flex-shrink-0 rounded-full bg-stone-300"
              aria-label="close"
            />
            <div className="mx-auto max-w-md">
              <Drawer.Title className="mx-0">{project.data.title}</Drawer.Title>
              <div className="text-xs italic">
                {formatList(lang, project.data.technologies)}
              </div>
              <div className="prose prose-sm dark:text-stone-50">{content}</div>
              <div className="mt-4 flex w-full items-center justify-center gap-2">
                {project.data.publicUrl && (
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={project.data.publicUrl}
                    className="mr-2 mt-2 flex gap-1 text-sm text-slate-500 hover:text-slate-400 dark:text-slate-300 dark:hover:text-slate-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-link"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>{' '}
                    {t('projects.project.publicLink')}
                  </a>
                )}
                {project.data.repoUrl && (
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={project.data.repoUrl}
                    className="mr-2 mt-2 flex gap-1 text-sm text-slate-500 hover:text-slate-400 dark:text-slate-300 dark:hover:text-slate-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-github"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>{' '}
                    {t('projects.project.sourceLink')}
                  </a>
                )}
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default ProjectCard;
