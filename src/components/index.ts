import SvgIcon from './svg-icon';
import DataEmpty from './data-empty';

const customComponents = {
  SvgIcon,
  CDataEmpty: DataEmpty,
};

export const installComponent = (app) => {
  // 自定义注册全局组件
  Object.keys(customComponents).forEach((key: string) => {
    app.component(key, customComponents[key]);
  });
};
