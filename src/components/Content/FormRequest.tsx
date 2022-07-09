import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getDetailVendor } from "../../utils/data";
import { Link } from "../Links";

interface ITextInput {
  label?: string;
  placeholder: string;
}

const FileUpload = () => {
  return (
    <>
      <div className="mb-2">
        <div className="rounded-lg shadow-xl bg-gray-50">
          <div className="p-4">
            <label className="inline-block mb-2 text-gray-500">
              Upload Image(jpg,png,svg,jpeg)
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                <div className="flex flex-col items-center justify-center pt-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                    Select a photo
                  </p>
                </div>
                <input type="file" className="opacity-0" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const TextInput = ({ label, placeholder }: ITextInput) => {
  return (
    <>
      {label ? (
        <label className="block mb-2 text-sm text-lg font-medium text-gray-900">
          {label}
        </label>
      ) : null}
      <input
        type="text"
        id={label}
        className="bg-gray-50 my-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </>
  );
};
const useGetVendor = (id: string | undefined) => {
  return useQuery(["vendor", id], () => getDetailVendor(id));
};
const FormRequest = () => {
  const { id } = useParams();
  const { data: dataVendor } = useGetVendor(id);
  console.log(dataVendor);
  return (
    <div className="w-1/4 bg-black shadow-md rounded-2xl ">
      <Link
        href={`/detail/${id}`}
        className="block w-full py-2 text-2xl font-bold text-center text-white"
      >
        Request Item {dataVendor?.data.name}
      </Link>
      <div className="w-full bg-gray-200 border-2 rounded-2xl">
        <div className="w-full py-2 text-2xl font-bold text-center text-black">
          Location {dataVendor?.data.address}
        </div>
        <div className="px-5 py-3">
          <TextInput label="Request" placeholder="Requested item"></TextInput>
          <TextInput placeholder="Price prediction"></TextInput>
          <TextInput placeholder="Note"></TextInput>
          <FileUpload></FileUpload>
          <button className="w-full px-4 py-2 text-2xl font-bold text-white bg-black rounded-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormRequest;
