export const GENDER = {
  MALE: 'male',
  FEMALE: 'female',
} as const;

export const GENDER_STRING = {
  [GENDER.MALE]: '남자',
  [GENDER.FEMALE]: '여자',
};
