import React, { useEffect } from 'react';
import Slider from '@/components/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { setBnanerList, setRecommendList } from '@/store/slice/recommend';
import { RecommendListWrap } from '@/views/Recommend/style';
// import { IconStyle } from '@/assets/iconfont/iconfont';

function Recommend(props) {
  const { bannerList,recommendList } = useSelector(state => state.recommend);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBnanerList({ type: 2 }));
    dispatch(setRecommendList())
  }, [dispatch]);

  return (
    <div>
      <Slider bannerList={ bannerList }></Slider>
      <div>
        <h4>推荐歌单</h4>
        <RecommendListWrap>
          <div className="recommend-list-wrap">
            <div className="list-item"></div>
          </div>
        </RecommendListWrap>
      </div>
    </div>
  );
}

export default React.memo(Recommend);
