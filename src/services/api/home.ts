import { GenerateFetch } from '@/utils/GenerateFeatch';

import { Ajax } from '@/utils/Ajax';
import { PATH_URL } from '../path/index';

const apis = {
  get: {
    topgrosisingList: PATH_URL.topgrosisingList,
    topfreeapplications: PATH_URL.topfreeapplications,
  },
  post: {},
};

export default new GenerateFetch(apis, Ajax).fetchApi();
