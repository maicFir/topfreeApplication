/* eslint-disable no-use-before-define */
import homeApi from '@/services/api/home';
import { randomNum } from '@/utils';

interface entryItem {
  'im:image': Array<{ attributes: Object; label: string }>;
  'im:name': { label: string };
  title: { label: string };
  category: { attributes: { 'im:id': string; label: string; scheme: string; term: string } };
}
// 中转字段
const transfromModelData = (entry: []) => {
  const result = [];
  if (entry instanceof Array && entry.length > 0) {
    entry.forEach((v: entryItem) => {
      const [itemSrc] = v['im:image'] || [];
      const { label: subTitle } = v['im:name'];
      const { label: title } = v.title;
      const hotNum = v.category.attributes['im:id'];
      result.push({
        title,
        subTitle,
        iconUrl: itemSrc.label,
        hotNum,
        starSource: randomNum(1, 5),
      });
    });
  }
  return result;
};
// 查询列表
export const querytopgrosisingListProxy = async (params = {}) => {
  try {
    const res = await homeApi.topgrosisingList(params);
    const {
      feed: { entry = [] },
    } = await res.json();
    return transfromModelData(entry);
  } catch (error) {
    newFunction(error);
  }

  function newFunction(error: any) {
    throw error;
  }
};

export const querytopfreeapplicationsProxy = async (params) => {
  try {
    const res = await homeApi.topfreeapplications(params);
    const {
      feed: { entry = [] },
    } = await res.json();
    return transfromModelData(entry);
  } catch (error) {
    newFunction(error);
  }

  function newFunction(error: any) {
    throw error;
  }
};
