import styled from 'styled-components';
import style from '@/assets/global-style';

export const SliderContainer = styled.div`
  position: relative;
  background: ${ style['theme-color'] } !important;

  .swiper-wrapper {
    .swiper-slide {
      border-radius: 6px !important;

      img {
        width: 100% !important;
        height: 100% !important;
        border-radius: 6px !important;
      }
    }
  }

  .swiper-pagination-bullet-active {
    background: ${ style['theme-color'] } !important;
  }

  .swiper-pagination-bullet {
    background: white !important;
  }

  .before {
    position: absolute;
    top: -300px;
    height: 400px;
    width: 100%;
    background: ${ style['theme-color'] };
  }
`;
