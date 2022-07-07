import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getListProductVendor } from "../utils/data";

const Detail = () => {
  let { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isError, isLoading, isFetching, refetch } = useQuery(
    ["trans", currentPage, id],
    () => getListProductVendor(currentPage, id),
    { keepPreviousData: true }
  );
  const config: Array<{ title: string; key: string; type?: string }> = [
    { title: "Photo", key: "photo", type: "image" },
    { title: "Name", key: "name" },
    { title: "Date", key: "created_at" },
    { title: "Price", key: "price" },
    { title: "Unit", key: "unit" },
    { title: "Location", key: "location" },
    { title: "Description", key: "description" },
    { title: "Status", key: "status", type: "status" },
  ];
  console.log(data);
  const handleChange = (value: number) => {
    setCurrentPage(value);
  };
  return <div>{id}</div>;
};

export default Detail;
