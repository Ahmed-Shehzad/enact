export type Page = {
  name: string;
  data: Record<string, string>;
};

export type PageData = {
  isHeading: boolean;
  isSubHeading: boolean;
  text: string | JSX.Element | (string | JSX.Element)[];
};

export type GridItemText = {
  title: string;
  description: string[];
};
