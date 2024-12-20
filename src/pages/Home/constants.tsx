import {
  ArtCategoryIcon,
  BookCategoryIcon,
  CookCategoryIcon,
  CycleCategoryIcon,
  ExerciseCategoryIcon,
  MountainCategoryIcon,
  MusicCategoryIcon,
  PictureCategoryIcon,
  TechCategoryIcon,
  WineCategoryIcon,
} from '@@pages/Home/icons';

export const CATEGORY = {
  ART: 'ART',
  READING: 'READING',
  COOK: 'COOK',
  CYCLE: 'CYCLE',
  EXERCISE: 'EXERCISE',
  HIKING: 'HIKING',
  MUSIC: 'MUSIC',
  PHOTO: 'PHOTO',
  TECH: 'TECH',
  WIN: 'WINE',
} as const;

export const ALL_CATEGORIES = Object.values(CATEGORY);

export const CATEGORY_STRINGS = {
  [CATEGORY.ART]: '아트',
  [CATEGORY.READING]: '독서',
  [CATEGORY.COOK]: '쿠킹',
  [CATEGORY.CYCLE]: '사이클',
  [CATEGORY.EXERCISE]: '운동',
  [CATEGORY.HIKING]: '등산',
  [CATEGORY.MUSIC]: '음악',
  [CATEGORY.PHOTO]: '사진',
  [CATEGORY.TECH]: '기술',
  [CATEGORY.WIN]: '와인',
} as const;

export const CATEGORY_ICONS = {
  [CATEGORY.ART]: <BookCategoryIcon />,
  [CATEGORY.READING]: <CookCategoryIcon />,
  [CATEGORY.COOK]: <CycleCategoryIcon />,
  [CATEGORY.CYCLE]: <ExerciseCategoryIcon />,
  [CATEGORY.EXERCISE]: <MountainCategoryIcon />,
  [CATEGORY.HIKING]: <MusicCategoryIcon />,
  [CATEGORY.MUSIC]: <PictureCategoryIcon />,
  [CATEGORY.PHOTO]: <TechCategoryIcon />,
  [CATEGORY.TECH]: <ArtCategoryIcon />,
  [CATEGORY.WIN]: <WineCategoryIcon />,
} as const;

export const MEETING_ORDER_TYPE = {
  LATEST: 'LATEST',
  PRICE: 'PRICE',
  REQUEST_COUNT: 'REQUEST_COUNT',
} as const;
