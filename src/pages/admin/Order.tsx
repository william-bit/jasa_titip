import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import InputForm from "../../components/custom/InputForm";
import { TableCustom } from "../../components/custom/Table";
import Admin from "../../components/layouts/Admin";
import { getListTransactionVendor } from "../../utils/data";
import { storeApprovalOrder } from "../../utils/postData";
const Order = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isError, isLoading, isFetching, refetch } = useQuery(
    ["trans", currentPage],
    () => getListTransactionVendor(currentPage),
    { keepPreviousData: true }
  );
  const config: Array<{ title: string; key: string; type?: string }> = [
    { title: "Photo Product", key: "photo", type: "image" },
    { title: "Photo Payment", key: "photoPayment", type: "image" },
    { title: "Name Customer", key: "custName" },
    { title: "Total", key: "price" },
    { title: "Unit", key: "unit" },
    { title: "Status", key: "status", type: "status" },
  ];
  console.log(data);
  const handleChange = (value: number) => {
    setCurrentPage(value);
  };

  const approvalPost = useMutation((dataPost: { type: string; id: string }) => {
    return storeApprovalOrder(dataPost.type, dataPost.id);
  });
  const handleApproval = (id: string, action: string) => {
    approvalPost.mutate({ type: action, id });
  };

  return (
    <Admin>
      <div className="flex-initial w-full overflow-auto">
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
          handleCustom={(id: string, action: string) =>
            handleApproval(id, action)
          }
        ></TableCustom>
      </div>
    </Admin>
  );
};

export default Order;
