import { BADGE_THEME } from '@@components/Badge/constants';
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
import Class1Image from '@@pages/Home/images/class_1.png';
import Class2Image from '@@pages/Home/images/class_2.jpeg';
import Class3Image from '@@pages/Home/images/class_3.jpeg';
import Class4Image from '@@pages/Home/images/class_4.jpeg';

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

export const CLASS_LIST = [
  {
    id: 1,
    ownerId: 1,
    title: '와인과 사람, 무제한 와인 파티',
    description: '와인의 매력을 탐험하며 다양한 사람들과 교류할 수 있는 무제한 와인 파티. 편안한 분위기에서 와인과 이야기를 즐겨보세요.',
    image: Class1Image,
    price: 70000,
    badgeList: [
      {
        theme: BADGE_THEME.PRIMARY,
        title: 'HOT',
      },
      {
        theme: BADGE_THEME.OUTLINE,
        title: 'SEOUL',
      },
    ],
  },
  {
    id: 2,
    ownerId: 1,
    title: '리듬 속에 빠져들다, 음악 즉흥연주 모임',
    description: '다양한 악기와 함께 즉흥적으로 연주하며 음악을 나누는 즐거움. 초보자부터 전문가까지 모두 함께 연주를 즐길 수 있습니다.',
    image: Class2Image,
    price: 35000,
    badgeList: [
      {
        theme: BADGE_THEME.PRIMARY,
        title: 'HOT',
      },
      {
        theme: BADGE_THEME.OUTLINE,
        title: 'SEOUL',
      },
    ],
  },
  {
    id: 3,
    ownerId: 1,
    title: '빛으로 담는 순간, 포토그래피 클래스',
    description: '사진 찍는 법을 배우고, 함께 촬영하면서 포토그래피에 대한 이해도를 높여보세요. 이론과 실습이 함께 진행됩니다.',
    image: Class3Image,
    price: 45000,
    badgeList: [
      {
        theme: BADGE_THEME.PRIMARY,
        title: 'HOT',
      },
      {
        theme: BADGE_THEME.OUTLINE,
        title: 'SEOUL',
      },
    ],
  },
  {
    id: 4,
    ownerId: 1,
    title: '미식가들의 쿠킹 클래스',
    description: '새로운 요리 기술을 배우고, 맛있는 음식을 함께 만들고 나누는 시간. 미식가들의 만남을 통해 새로운 레시피도 얻어가세요.',
    image: Class4Image,
    price: 50000,
    badgeList: [
      {
        theme: BADGE_THEME.PRIMARY,
        title: 'HOT',
      },
      {
        theme: BADGE_THEME.OUTLINE,
        title: 'SEOUL',
      },
    ],
  },
];
