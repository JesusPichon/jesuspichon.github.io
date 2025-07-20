export type Technology = {
  name: string;
  color: string;
};

export type Project = {
  img?: string;
  title?: string;
  description?: string;
  technologies?: Technology[];
};

