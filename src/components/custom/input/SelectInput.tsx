import { IInput } from "./InputForm";

export const SelectInput = ({
  label,
  placeholder,
  name,
  disabled,
  register,
  type,
  error,
}: IInput) => {
  return (
    <>
      {label ? (
        <label className="block mb-2 text-lg font-medium text-gray-900">
          {label}
        </label>
      ) : null}
      <select
        disabled={disabled}
        id={label}
        className="bg-gray-50 my-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
        {...register(name)}
      >
        <option value="" disabled selected>
          Select your option
        </option>
        <option>Indonesia</option>
        <option>Malaysia</option>
        <option>Singapore</option>
      </select>
      {error?.map((item: string, i: number) => (
        <div key={i} className="text-sm text-center text-red-600">
          {item}
        </div>
      ))}
    </>
  );
};
