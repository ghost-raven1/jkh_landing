import { createSlice } from "@reduxjs/toolkit";
import api from "../../../scripts/api.js";
import { APIUrlPrefix } from "../../../utils/constants.js";

const commonCatalogSlice = createSlice({
  name: "commonCatalog",
  initialState: {
    servicesList: [],
    servicesListCount: 0,
    newsList: [],
    newsListCount: 0,
  },
  reducers: {
    setServicesList: (state, action) => {
      state.servicesList = [...action.payload];
    },
    setServicesListCount: (state, action) => {
      state.servicesListCount = action.payload;
    },
    setNewsList: (state, action) => {
      state.newsList = [...action.payload];
    },
    setNewsListCount: (state, action) => {
      state.newsListCount = action.payload;
    },
  },
});

export const getServicesListAsync = (params) => async (dispatch) => {
  await api
    .get(`${APIUrlPrefix}/common/catalog/service/`, { params: params })
    .then((r) => {
      dispatch(setServicesList(r?.data?.results));
      dispatch(setServicesListCount(r?.data?.count));
    });
};

export const getNewsListAsync = (params) => async (dispatch) => {
  await api
    .get(`${APIUrlPrefix}/common/catalog/news/`, { params: params })
    .then((r) => {
      dispatch(setNewsList(r?.data?.results));
      dispatch(setNewsListCount(r?.data?.count));
    });
};

export const {
  setServicesList,
  setServicesListCount,
  setNewsList,
  setNewsListCount,
} = commonCatalogSlice.actions;
export default commonCatalogSlice.reducer;
