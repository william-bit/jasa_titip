import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { TableCustom } from "../components/custom/table/Table";
import SidebarProfile from "../components/layouts/SidebarProfile";
import { Header } from "../components/Navbar/Header";
import { useStore } from "../store/store";
import { getListTransaction } from "../utils/data";

let listMenu = [
  { label: "Personal Info", href: "/profile" },
  { label: "Order List", href: "/order" },
  { label: "Transaction History", href: "/transaction" },
  { label: "History Request Product", href: "/request" },
];

export const OrderUser = () => {
  const userProfile = useStore((state) => state.userProfile);
  const userJoin = new Date(userProfile.join);

  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isError, isLoading, isFetching, refetch } = useQuery(
    ["trans", currentPage],
    () => getListTransaction(currentPage),
    { keepPreviousData: true }
  );
  const config: Array<{ title: string; key: string; type?: string }> = [
    { title: "Photo", key: "photoProduct", type: "image" },
    { title: "Name", key: "productName" },
    { title: "Date", key: "created_at" },
    { title: "Price", key: "productPrice" },
    { title: "Location", key: "location" },
    { title: "Total Payment", key: "total" },
  ];
  console.log(data);
  const handleChange = (value: number) => {
    setCurrentPage(value);
  };
  const navigate = useNavigate();

  return (
    <div>
      <Header></Header>
      <div className="flex">
        <SidebarProfile listMenu={listMenu}></SidebarProfile>
        <div className="flex mx-auto">
          <TableCustom
            data={data}
            config={config}
            currentPage={currentPage}
            error={error}
            isLoading={isLoading}
            isError={isError}
            isFetching={isFetching}
            subTitle="List Order"
            title="Order"
            handleChange={handleChange}
          ></TableCustom>
        </div>
      </div>
    </div>
  );
};