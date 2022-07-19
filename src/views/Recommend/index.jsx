import React, { useEffect } from 'react';
import Slider from '@/components/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { setBannerList, setRecommendList } from '@/store/slice/recommend';
import { Content, RecommendListWrap } from './style';
import Card from '@/components/Card';
import Scroll from '@/components/Scroll';
import { forceCheck } from 'react-lazyload';

function Recommend(props) {
  const { bannerList, recommendList } = useSelector(state => state.recommend);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBannerList({ type: 2 }));
    dispatch(setRecommendList());
  }, [dispatch]);

  return (
    <Content>
      <Scroll className="list" onScroll={forceCheck}>
        <div>
          <Slider bannerList={ bannerList }></Slider>
          <div>
            <h4 style={ { margin: '10px 0' } }>推荐歌单</h4>
            <RecommendListWrap>
              {
                recommendList.map(item => {
                  return (
                    <Card item={ item } key={ item.id }>
                    </Card>
                  );
                })
              }
            </RecommendListWrap>
          </div>
        </div>
      </Scroll>
    </Content>
  );
}

export default React.memo(Recommend);
