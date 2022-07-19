import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBannerList, getRecommendList } from '@/api';

export const setBannerList = createAsyncThunk(
  'recommend/bannerList',
  async (params) => {
    const res = await getBannerList(params);
    return res;
  },
);

export const setRecommendList = createAsyncThunk(
  'recommend/recommendList',
  async (params) => {
    const res = await getRecommendList();
    return res;
  },
);

export const recommendSlice = createSlice({
  name: 'recommend',
  initialState: {
    bannerList: [],
    recommendList: [],
  },
  reducers: {
    // setBannerList: (state, action) => {
    //   state.bannerList = action.payload.banners;
    // },
    // setRecommendList: async (state, { payload }) => {
    //   const res = await getRecommendList()
    //   state.recommendList = res.result
    // },
  },
  extraReducers: {
    [setBannerList.fulfilled]: (state, { payload }) => {
      state.bannerList = payload.banners;
    },
    [setBannerList.rejected]: (state, err) => {
      console.log(state, err);
    },
    [setRecommendList.fulfilled]: (state, { payload }) => {
      state.recommendList = payload.result;
    },
    [setRecommendList.rejected]: (state, err) => {
      console.log(state, err);
    },
  },
});

// export const {   } = recommendSlice.actions;

export default recommendSlice.reducer;
