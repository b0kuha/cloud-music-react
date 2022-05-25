import React, { useEffect, useState } from 'react';
import Slider from '../../components/Slider';
import { getBanner } from '../../api';

function Recommend(props) {
  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    getBanner({ type: 2 }).then(res => {
      setBannerList(res.banners);
    });
  }, []);

  return (
    <Slider bannerList={ bannerList }></Slider>
  );
}

export default React.memo(Recommend);
