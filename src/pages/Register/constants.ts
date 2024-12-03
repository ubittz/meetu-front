export const GENDER = {
  MALE: 'T',
  FEMALE: 'F',
} as const;

export const GENDER_STRING = {
  [GENDER.MALE]: '남자',
  [GENDER.FEMALE]: '여자',
};
