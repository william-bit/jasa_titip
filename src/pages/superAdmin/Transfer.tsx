import { AxiosError } from "axios";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import InputForm from "../../components/custom/InputForm";
import { TableCustom } from "../../components/custom/table/Table";
import Admin from "../../components/layouts/Admin";
import SuperAdmin from "../../components/layouts/SuperAdmin";
import { getListTransactionVendor } from "../../utils/data";
import { storeApprovalOrder } from "../../utils/postData";
const Transfer = () => {
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

  const approvalPost = useMutation(
    (dataPost: { type: string; id: string }) => {
      return storeApprovalOrder(dataPost.type, dataPost.id);
    },
    {
      onSuccess: (res) => {
        refetch();
        toast("Success Submit ", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      },
      onError: (err: AxiosError) => {
        toast("Failed Submit " + err.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      },
    }
  );
  const handleApproval = (id: string, action: string) => {
    approvalPost.mutate({ type: action, id });
  };

  return (
    <SuperAdmin>
      <div className="flex-initial w-full overflow-auto">
        <TableCustom
          data={data}
          config={config}
          currentPage={currentPage}
          error={error}
          isLoading={isLoading}
          isError={isError}
          isFetching={isFetching}
          subTitle="List Transfer"
          title="Transfer"
          handleChange={handleChange}
          handleCustom={(id: string, action: string) =>
            handleApproval(id, action)
          }
        ></TableCustom>
      </div>
    </SuperAdmin>
  );
};

export default Transfer;
