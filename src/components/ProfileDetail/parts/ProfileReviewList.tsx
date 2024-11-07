import Flex from '@@components/Flex';
import { PROFILE_TAB_LIST_BY_ACCOUNT_TYPE } from '@@components/ProfileDetail/constants';
import ReviewImage from '@@components/ProfileDetail/images/review_iamge.jpeg';
import ReviewProfileImage from '@@components/ProfileDetail/images/review_profile_image.png';
import ProfileReviewClassBox from '@@components/ProfileDetail/parts/ProfileReviewClassBox';
import { AccountType, ProfileReviewClass } from '@@components/ProfileDetail/types';
import TabHeader from '@@components/Tab/TabHeader';
import Class1Image from '@@pages/Home/images/class_1.png';

const REVIEW_CLASS_LIST: ProfileReviewClass[] = [
  {
    id: 1,
    image: Class1Image,
    title: '와인과 사람, 무제한 와인 파티',
    description: '와인의 매력을 탐험하며 다양한 사람들과 교류할 수 있는 무제한 와인 파티. 편안한 분위기에서 와인과 이야기를 즐겨보세요.',
    reviews: [
      {
        classId: 1,
        id: 1,
        title: '모임명입니다.',
        score: 5,
        description: '리뷰 내용입니다. 최대 두줄까지 노출됩니다.리뷰 내용입니다. 최대 두줄까지 노출됩니다.리뷰 내용입니다. 최대 두줄까지 노출됩니다.',
        image: ReviewImage,
        profileImage: ReviewProfileImage,
        writer: 'kimj****',
        createdAt: new Date(),
      },
      {
        classId: 1,
        id: 2,
        title: '모임명입니다.',
        score: 3,
        description: '리뷰 내용입니다. 최대 두줄까지 노출됩니다.리뷰 내용입니다. 최대 두줄까지 노출됩니다.리뷰 내용입니다. 최대 두줄까지 노출됩니다.',
        image: ReviewImage,
        profileImage: ReviewProfileImage,
        writer: 'kimj****',
        createdAt: new Date(),
      },
    ],
  },
  {
    id: 2,
    image: Class1Image,
    title: '와인과 사람, 무제한 와인 파티',
    description: '와인의 매력을 탐험하며 다양한 사람들과 교류할 수 있는 무제한 와인 파티. 편안한 분위기에서 와인과 이야기를 즐겨보세요.',
    reviews: [
      {
        classId: 1,
        id: 1,
        title: '모임명입니다.',
        score: 5,
        description: '리뷰 내용입니다. 최대 두줄까지 노출됩니다.리뷰 내용입니다. 최대 두줄까지 노출됩니다.리뷰 내용입니다. 최대 두줄까지 노출됩니다.',
        image: ReviewImage,
        profileImage: ReviewProfileImage,
        writer: 'kimj****',
        createdAt: new Date(),
      },
      {
        classId: 1,
        id: 2,
        title: '모임명입니다.',
        score: 3,
        description: '리뷰 내용입니다. 최대 두줄까지 노출됩니다.리뷰 내용입니다. 최대 두줄까지 노출됩니다.리뷰 내용입니다. 최대 두줄까지 노출됩니다.',
        image: ReviewImage,
        profileImage: ReviewProfileImage,
        writer: 'kimj****',
        createdAt: new Date(),
      },
    ],
  },
];

function ProfileReviewList({ accountType, onChangeTab }: { accountType: AccountType; onChangeTab: (index: number) => void }) {
  return (
    <Flex.Vertical>
      <TabHeader itemList={PROFILE_TAB_LIST_BY_ACCOUNT_TYPE[accountType]} selectedIndex={1} onChange={onChangeTab} />
      <Flex.Vertical className='tw-px-[20px] tw-pt-[30px]' gap={20}>
        {REVIEW_CLASS_LIST.map((reviewClass) => (
          <ProfileReviewClassBox key={reviewClass.id} reviewClass={reviewClass} />
        ))}
      </Flex.Vertical>
    </Flex.Vertical>
  );
}

export default ProfileReviewList;
