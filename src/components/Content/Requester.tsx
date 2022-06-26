interface ITextInput {
  label?: string;
  placeholder: string;
}
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
const Requester = () => {
  return (
    <div className="flex flex-col w-1/3 bg-black shadow-md rounded-2xl">
      <div className="w-full py-2 text-2xl font-bold text-center text-white">
        Requester Info
      </div>
      <div className="w-full h-full bg-gray-200 border-2 rounded-2xl">
        <div className="px-5 py-3">
          <TextInput
            label="Requester"
            placeholder="Pilih negara yang di minta"
          ></TextInput>
          <TextInput placeholder="Pilih Penitip"></TextInput>
          <TextInput
            label="Score dari penitip"
            placeholder="4 Kali berhasil mengirimkan barang"
          ></TextInput>
          <TextInput placeholder="Bintang 4"></TextInput>
          <TextInput
            label="Note dari penitip"
            placeholder="Full time traveler menerima titipan barang jika sedang belibur"
          ></TextInput>
        </div>
      </div>
    </div>
  );
};

export default Requester;
