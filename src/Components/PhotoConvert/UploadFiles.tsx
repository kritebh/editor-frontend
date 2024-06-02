import { OnChangeInputType } from "./constants";

const UploadFiles = ({
  acceptFileType,
  handleFileUpload,
}: {
  acceptFileType: string;
  handleFileUpload: OnChangeInputType;
}) => {
  return (
    <div className="p-4 border-4 border-dashed my-2 mt-6 items-center">
      <input
        multiple
        type="file"
        accept={acceptFileType}
        onChange={handleFileUpload}
        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-green-700s hover:file:bg-blue-100 m-2"
      />
    </div>
  );
};

export default UploadFiles;
