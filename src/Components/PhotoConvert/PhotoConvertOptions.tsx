import { OnChangeSelectType, formatTypeArray } from "./constants";

const PhotoConvertOptions = ({
  targetFormat,
  handleFormatChange,
}: {
  targetFormat: string;
  handleFormatChange: OnChangeSelectType;
}) => {
  return (
    <div className="m-2">
      <label
        htmlFor="output"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Select new format:
      </label>
      <select
        name="output"
        id="output"
        className="border border-gray-300 text-gray-900 rounded-lg
             focus:ring-blue-400 focus:border-blue-500 p-2.5 block w-full"
        value={targetFormat}
        onChange={handleFormatChange}
      >
        {formatTypeArray.map((format) => {
          return (
            <option key={format} value={format}>
              {format}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default PhotoConvertOptions;
