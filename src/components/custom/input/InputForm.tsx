import { Path, UseFormRegister } from "react-hook-form";
import { TextInput } from "./TextInput";
import { FileUpload } from "./FileUpload";
import { SelectInput } from "./SelectInput";

export interface IInput {
  label?: string;
  disabled?: boolean;
  placeholder: string;
  name: Path<any>;
  type?: string;
  error?: string[];
  register: UseFormRegister<any>;
}

const InputForm = ({
  register,
  onReset,
  handleSubmit,
  formError,
}: {
  register: UseFormRegister<any>;
  formError?: {
    [error: string]: string[];
  };
  handleSubmit: any;
  onReset: () => void;
}) => {
  return (
    <div className="border-2 shadow-md ">
      <div className="w-full py-2 text-2xl font-bold text-center text-black">
        Add / Edit New Product
      </div>
      <div className="w-full ">
        <form className="px-5 py-3" onSubmit={handleSubmit}>
          <div className="hidden">
            <TextInput
              label="Add /edit product"
              name="id"
              type="text"
              disabled={true}
              error={formError?.id}
              placeholder="Id Product (auto generate)"
              register={register}
            ></TextInput>
          </div>
          <TextInput
            name="name"
            type="text"
            placeholder="Product Name"
            error={formError?.name}
            register={register}
          ></TextInput>
          <TextInput
            name="price"
            placeholder="Price"
            type="number"
            error={formError?.price}
            register={register}
          ></TextInput>
          <SelectInput
            name="location"
            placeholder="country"
            error={formError?.location}
            register={register}
          ></SelectInput>
          <TextInput
            name="description"
            placeholder="Description"
            error={formError?.description}
            register={register}
          ></TextInput>
          <FileUpload
            name="image"
            placeholder="upload"
            register={register}
            error={formError?.image}
          ></FileUpload>
          <div className="flex space-x-1">
            <button className="w-1/2 px-2 py-2 font-bold text-white bg-black rounded-md hover:bg-gray-700 text-md">
              Submit
            </button>
            <button
              type="button"
              onClick={onReset}
              className="w-1/2 px-2 py-2 font-bold text-white bg-black rounded-md hover:bg-gray-700 text-md"
            >
              Reset Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
