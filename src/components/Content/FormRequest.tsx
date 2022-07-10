import { AxiosError } from "axios";
import {
  Path,
  SubmitHandler,
  useForm,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getDetailVendor } from "../../utils/data";
import { IRequestParam, storeRequest } from "../../utils/postData";
import { Link } from "../Links";
import { FileUpload } from "./FileUpload";

interface IInput {
  label?: string;
  placeholder: string;
  name: Path<IRequestParam>;
  type?: string;
  register: UseFormRegister<IRequestParam>;
}

const TextInput = ({ label, placeholder, name, register, type }: IInput) => {
  return (
    <>
      {label ? (
        <label className="block mb-2 text-lg font-medium text-gray-900">
          {label}
        </label>
      ) : null}
      <input
        type={type}
        id={label}
        className="bg-gray-50 my-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
        {...register(name)}
      />
    </>
  );
};
const useGetVendor = (id: string | undefined) => {
  return useQuery(["vendor", id], () => getDetailVendor(id));
};
const usePostRequest = (
  id: string | undefined,
  reset: UseFormReset<any>,
  onSuccess: () => void,
  onFailed: () => void
) =>
  useMutation(
    (data: IRequestParam) => {
      const formData = new FormData();
      for (const property in data) {
        if (property == "image") {
          formData.append("image", data[property as keyof IRequestParam][0]);
        } else {
          formData.append(property, data[property as keyof IRequestParam]);
        }
      }
      return storeRequest(formData, id);
    },
    {
      onSuccess: (res) => {
        reset();
        toast("Success Request", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        onSuccess();
      },
      onError: (err: AxiosError) => {
        onFailed();
        toast("Failed login " + err.message, {
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
const FormRequest = () => {
  const { id } = useParams();
  const { data: dataVendor } = useGetVendor(id);
  let navigate = useNavigate();
  console.log(dataVendor);
  const { register, handleSubmit, reset } = useForm<IRequestParam>();
  const { isLoading: isPosting, mutate: requestPost } = usePostRequest(
    id,
    reset,
    () => {
      navigate(`/detail/${id}`);
    },
    () => console.log("fail")
  );

  const onSubmit: SubmitHandler<IRequestParam> = (data) => {
    requestPost(data);

    console.log(data);
  };
  return (
    <div className="w-1/4 bg-black shadow-md rounded-2xl ">
      <Link
        href={`/detail/${id}`}
        className="block w-full py-2 text-2xl font-bold text-center text-white"
      >
        Request Item {dataVendor?.data.name}
      </Link>
      <form
        className="w-full bg-gray-200 border-2 rounded-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full py-2 text-2xl font-bold text-center text-black">
          Location {dataVendor?.data.address}
        </div>
        <div className="px-5 py-3">
          <TextInput
            label="Request"
            register={register}
            name="name"
            placeholder="Requested item"
          ></TextInput>
          <TextInput
            name="price"
            type="number"
            register={register}
            placeholder="Price prediction"
          ></TextInput>
          <TextInput
            placeholder="Note"
            register={register}
            name="description"
          ></TextInput>
          <FileUpload
            name="image"
            placeholder="upload"
            register={register}
          ></FileUpload>
          <button className="w-full px-4 py-2 text-2xl font-bold text-white bg-black rounded-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormRequest;
