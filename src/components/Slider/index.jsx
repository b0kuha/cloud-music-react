import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SliderContainer } from './style';

function Slider(props) {
  const { bannerList } = props;

  return (
    <SliderContainer>
      <div className="before"></div>
      <Swiper modules={ [Pagination, Autoplay] }
              pagination={ { clickable: true } }
              autoplay
              loop
              style={ { height: '100%', width: '100%' } }>
        {
          bannerList.map(item => {
            return (<SwiperSlide key={ item.bannerId }>
              <img src={ item.pic } alt="推荐" style={ {
                width:
                  '100%', height: '100%', objectFit: 'cover',
              } }/>
            </SwiperSlide>);
          })
        }
      </Swiper>
    </SliderContainer>
  );
}

export default Slider;
