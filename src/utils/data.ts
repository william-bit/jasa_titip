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
