/* eslint-disable comma-dangle */
import asyncCompnent from '@/utils/asyncCompoent';

export const ListComponent = asyncCompnent.load(
  import(/* webpackChunkName: "ListComponent" */ './List.vue')
);
export const RecommendComponent = asyncCompnent.load(
  import(/* webpackChunkName: "RecommendComponent" */ './Recommend.vue')
);
export const SearchPageCompoent = asyncCompnent.load(
  import(/* webpackChunkName: "SearchPageCompoent" */ './Search.vue')
);
