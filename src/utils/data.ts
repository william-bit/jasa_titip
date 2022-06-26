import axios from "axios";
import { Url } from "./constanst";

interface IFilter {
  city?: number;
  province?: number;
  rentDate?: {
    from: string;
    until: string;
  };
  ranting?: number;
  price?: {
    from: number;
    until: number;
  };
}
let filter: IFilter = {};
export const setFilterProduct = (filterParam: IFilter) => {
  filter = filterParam;
};

export const getDetailProduct = (id: number) => {
  return axios.post(Url.register + "/" + id);
};

export const getListShop = () => {
  return axios.get(Url.home);
};

export const getListProduct = () => {
  return axios.get(Url.shop);
};
