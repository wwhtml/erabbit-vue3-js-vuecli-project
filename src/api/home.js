import request from "@/utils/request";

export const findBrand = (limit) => {
  return request("/home/brand", "get", { limit });
};

//轮播图图片
export const findBanner = () => {
  return request("/home/banner", "get");
};

//新鲜好物
export const findNew = () => {
  return request("home/new", "get");
};

//人气推荐
export const findHot = () => {
  return request("home/hot", "get");
};
