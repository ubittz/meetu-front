import Flex from '@@components/Flex';
import Slider from '@@components/Slider';
import Banner_1 from '@@pages/Home/images/banner_1.png';
import Banner_2 from '@@pages/Home/images/banner_2.png';
import Banner_3 from '@@pages/Home/images/banner_3.png';
import Banner_4 from '@@pages/Home/images/banner_4.png';

const BANNER_ITEMS = [Banner_1, Banner_2, Banner_3, Banner_4].map((image, index) => (
  <img className='tw-w-[248px]' key={index} src={image} alt={`Banner ${index}`} />
));

function MainBanner() {
  return (
    <Flex.Horizontal className='tw-px-[20px]'>
      <Slider items={BANNER_ITEMS} itemSize={248} gap={10} />
    </Flex.Horizontal>
  );
}

export default MainBanner;
