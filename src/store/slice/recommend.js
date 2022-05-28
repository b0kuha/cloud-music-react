import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBanneList, getRecommendList } from '@/api';

export const setBnanerList = createAsyncThunk('recomend/bannerList', async (params) => {
  const res = await getBanneList(params);
  return res;
});

// export const setRecommendList =createAsyncThunk('recommend/recommendList',async (params)=>{
//   const res = await getRecommendList()
//   return res
// })


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
    setRecommendList: async (state, { payload }) => {
      const res = await getRecommendList()
      state.recommendList = res.result
    },
  },
  extraReducers: {
    [setBnanerList.fulfilled]: (state, { payload }) => {
      state.bannerList = payload.banners;
    },
    [setBnanerList.rejected]: (state, err) => {
      console.log(state,err);
    },
  },
});

export const {  setRecommendList } = recommendSlice.actions;

export default recommendSlice.reducer;
