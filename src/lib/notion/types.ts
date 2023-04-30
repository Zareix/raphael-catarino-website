// ----- NOTION BASE -----
type NotionPropertyBase = {
  id: string;
  type: string;
};

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

type NotionFile = {
  name: string;
  type: string;
  file: {
    url: string;
    expiry_time: string;
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
type ExperiencePage = NotionPage<{
  lang: NotionSelectProperty;
  date: NotionRichTextProperty;
  dateRange: NotionDateProperty;
  dateIncludeMonth: NotionCheckboxProperty;
  entreprise: NotionRichTextProperty;
  icon: NotionFileProperty;
  url: NotionURLProperty;
  title: NotionTitleProperty;
  order: NotionNumberProperty;
}>;

type SkillsPage = NotionPage<{
  title: NotionTitleProperty;
  icon: NotionURLProperty;
  'domain-en': NotionSelectProperty;
  'domain-fr': NotionSelectProperty;
  order: NotionNumberProperty;
}>;

type ProjectsPage = NotionPage<{
  lang: NotionSelectProperty;
  title: NotionTitleProperty;
  featuredImage: NotionFileProperty;
  repoUrl: NotionURLProperty;
  publicUrl: NotionURLProperty;
  order: NotionNumberProperty;
}>;
// ----- END PAGES -----
