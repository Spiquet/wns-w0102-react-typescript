export type Skill = {
  title: string;
  voteCount: number;
};

export type Wilder = {
  name: string;
  city: string;
  skills: Skill[];
};
