export type TSkill = {
  title: string;
  voteCount: number;
};

export type TWilder = {
  name: string;
  city?: string;
  skills: TSkill[];
};
