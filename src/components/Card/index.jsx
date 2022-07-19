import React from 'react';
import { CardWrapper } from './style';
import { getCount } from '@/utils';
import LazyLoad from 'react-lazyload';

function Card(props) {
  const { item } = props;
  return (
    <CardWrapper>
      <div className="views">
        <i className="iconfont play">&#xe885;</i>
        <span>{ getCount(item.playCount) }</span>
      </div>
      <LazyLoad placeholder={ <img width="100%" src={ require('@/assets/music.png') } alt="music"/> }>
        <img src={ item.picUrl + '?param=300*300' } alt="music"/>
      </LazyLoad>
      <span className="content">{ item.name }</span>
    </CardWrapper>
  );
}

export default Card;
