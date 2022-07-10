import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { TableCustom } from "../../components/custom/Table";
import Admin from "../../components/layouts/Admin";
import {
  getListRequestVendor,
  getListTransactionVendor,
} from "../../utils/data";
import { storeApprovalRequest } from "../../utils/postData";
const RequestAdmin = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isError, isLoading, isFetching } = useQuery(
    ["vendorRequest", currentPage],
    () => getListRequestVendor(currentPage),
    { keepPreviousData: true }
  );
  const config: Array<{ title: string; key: string; type?: string }> = [
    { title: "Photo Product", key: "photo", type: "image" },
    { title: "Name Customer", key: "custName" },
    { title: "Total", key: "price" },
    { title: "Status", key: "status", type: "status" },
  ];
  console.log(data);
  const handleChange = (value: number) => {
    setCurrentPage(value);
  };

  const approvalPost = useMutation((dataPost: { type: string; id: string }) => {
    return storeApprovalRequest(dataPost.type, dataPost.id);
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
          subTitle="List Request"
          title="Request"
          handleChange={handleChange}
          handleCustom={(id: string, action: string) =>
            handleApproval(id, action)
          }
        ></TableCustom>
      </div>
    </Admin>
  );
};

export default RequestAdmin;
