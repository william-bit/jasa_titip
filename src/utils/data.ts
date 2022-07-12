import axios from "axios";
import { Url } from "./constanst";

export const home = () => {
  return axios.get(Url.home);
};

export interface ICard {
  src: string;
  alt: string;
  title: string;
  origin: string;
  description: string;
}

export const VendorDataCard: Array<ICard> = [
  {
    title: "John Doe",
    alt: "John Doe",
    origin: "UK",
    description: "Foreign Contractor from uk",
    src: "https://www.masterclass.com/course-images/attachments/rBJAtj5pz7vfNYdcbNsjkHeE?width=400&height=400&fit=cover&dpr=2",
  },
  {
    title: "Jane Doe",
    alt: "Jane Doe",
    origin: "Italy",
    description: "Foreign Contractor from uk",
    src: "https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg",
  },
];
export const HomeDataCard: Array<ICard> = [
  {
    title: "Baju Liverpool",
    alt: "Baju liverpool",
    origin: "UK",
    description: "Cloting from liverpool",
    src: "https://s0.bukalapak.com/img/55682253531/s-330-330/data.png.webp",
  },
  {
    title: "Tas Gucci",
    alt: "Tas Gucci",
    origin: "Italy",
    description: "Bag From Italy",
    src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-select-2019-family_GEO_EMEA?wid=882&hei=1058&fmt=jpeg&qlt=90&.v=1567022219953",
  },
  {
    title: "IPhone X",
    alt: "IPhone",
    origin: "China",
    description: "Phone From china",
    src: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/11/28/d1ad1c55-dc4a-4457-b8f5-857ab4c69f29.jpg",
  },
];

export const listNation: Array<string> = [
  "Malaysia",
  "Singapore",
  "China",
  "Italy",
  "German",
  "UK",
  "US",
];

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

export const getDetailProduct = (id: string | undefined) => {
  return axios.get(Url.detailProduct + "/" + id);
};

export const getDetailVendor = (id: string | undefined) => {
  return axios.get(Url.detailVendor + "/" + id);
};

export const getListTransactionVendor = (currentPage: number) => {
  return axios.get(Url.transactionVendor + "?page=" + currentPage); // credentials didn't match
};

export const getListRequestVendor = (currentPage: number) => {
  return axios.get(Url.requestVendor + "?page=" + currentPage); // credentials didn't match
};

export const getListShop = (search: string) => {
  return axios.get(Url.home + "?search=" + search);
};

export const getListTransaction = (currentPage: number) => {
  return axios.get(Url.transaction + "?page=" + currentPage); // credentials didn't match
};

export const getListProduct = (currentPage: number) => {
  return axios.get(Url.listProduct + "?page=" + currentPage); // credentials didn't match
};
export const getListRequest = (currentPage: number) => {
  return axios.get(Url.listProduct + "?page=" + currentPage); // credentials didn't match
};
export const getListProductVendor = (
  currentPage: number,
  id: string | undefined,
  search: string
) => {
  return axios.get(
    Url.listProductVendor +
      "?page=" +
      currentPage +
      "&id=" +
      id +
      "&search=" +
      search
  ); // credentials didn't match
};
export const getListVendor = (search: string) => {
  return axios.get(Url.listVendor + "?search=" + search); // credentials didn't match
};

export const getDetailTransaction = (id: string | undefined) => {
  return axios.get(Url.invoice + "/" + id);
};
