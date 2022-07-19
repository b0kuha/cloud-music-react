import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;

  img {
    width: 100%;
    border-radius: 5px;
  }

  .views {
    position: absolute;
    right: 0;
    padding: 4px;
    top: 0;
    color: #fff;
    font-size: 12px;
    display: flex;
    align-items: center;
  }

  .content {
    color: #666;
    font-size: 14px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
