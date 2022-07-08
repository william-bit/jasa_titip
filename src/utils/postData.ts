import axios from "axios";
import { Url } from "./constanst";

export interface IProductParam {
  name: string;
  price: string;
  image: string;
  description: string;
  location: string;
}
export const storeProduct = (formData: FormData) => {
  return axios.post(Url.storeProduct, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export interface IProfilePicParam {
  name: string;
  price: string;
  image: string;
  description: string;
  location: string;
}
export const storeProfilePicVendor = (formData: FormData) => {
  return axios.post(Url.storeProfilePicVendor, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export interface ICheckoutParam {
  total: string;
  product: string;
  image: string;
}

export const storeCheckout = (formData: FormData) => {
  return axios.post(Url.storeCheckout, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
