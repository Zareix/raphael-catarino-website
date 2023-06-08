// ----- NOTION BASE -----
type NotionPropertyBase = {
  id: string;
  type: string;
};

type NotionColor =
  | 'default'
  | 'gray'
  | 'brown'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red'
  | 'gray_background'
  | 'brown_background'
  | 'orange_background'
  | 'yellow_background'
  | 'green_background'
  | 'blue_background'
  | 'purple_background'
  | 'pink_background'
  | 'red_background';

type NotionAnnotations = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
};

type NotionRichText = {
  type: string;
  text: { content: string; link: null };
  annotations: NotionAnnotations;
  plain_text: string;
  href: null;
};

type NotionRichTextProperty = NotionPropertyBase & {
  rich_text: Array<NotionRichText>;
};

type NotionFile =
  | {
      name: string;
      type: 'file';
      file: {
        url: string;
        expiry_time: string;
      };
    }
  | {
      name: string;
      type: 'external';
      external: {
        url: string;
      };
    };

type NotionFileProperty = NotionPropertyBase & {
  files: Array<NotionFile>;
};

type NotionTitle = {
  type: string;
  text: { content: string; link: null };
  annotations: NotionAnnotations;
  plain_text: string;
  href: null;
};

type NotionTitleProperty = NotionPropertyBase & {
  title: Array<NotionTitle>;
};

type NotionSelect = {
  id: string;
  name: string;
  color: string;
};

type NotionSelectProperty = NotionPropertyBase & {
  select: NotionSelect;
};

type NotionURLProperty = NotionPropertyBase & {
  url: string;
};

type NotionDateProperty = NotionPropertyBase & {
  date: {
    start: string;
    end?: string;
  };
};

type NotionCheckboxProperty = NotionPropertyBase & {
  checkbox: boolean;
};

type NotionCover = {
  type: 'external';
  external: {
    url: string;
  };
};

type NotionIcon =
  | {
      type: 'emoji';
      emoji: string;
    }
  | {
      type: 'external';
      external: {
        url: string;
      };
    };

type NotionNumberProperty = NotionPropertyBase & {
  number: number;
};

type NotionMultiselectProperty = NotionPropertyBase & {
  multi_select: Array<{
    id: string;
    name: string;
    color: NotionColor;
  }>;
};

type NotionPage<T extends Record<string, NotionPropertyBase>> = {
  object: string;
  id: string;
  created_time: Date;
  last_edited_time: Date;
  created_by: { object: string; id: string };
  last_edited_by: {
    object: string;
    id: string;
  };
  cover?: NotionCover;
  icon?: NotionIcon;
  parent: {
    type: string;
    database_id: string;
  };
  archived: boolean;
  properties: T;
  url: string;
};
// ----- END NOTION BASE -----

// ----- PAGES -----
type ProjectsPage = NotionPage<{
  lang: NotionSelectProperty;
  title: NotionTitleProperty;
  featuredImage: NotionFileProperty;
  repoUrl: NotionURLProperty;
  publicUrl: NotionURLProperty;
  technologies: NotionMultiselectProperty;
  order: NotionNumberProperty;
}>;
// ----- END PAGES -----
