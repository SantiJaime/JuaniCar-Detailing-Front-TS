import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";

interface Props extends InputAndSelect {
  icon: ReactNode;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectComp: React.FC<Props> = ({
  label,
  onChange,
  name,
  id,
  icon,
  value,
  options,
  errors,
  touched,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-white">
        {label}
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
          {icon}
        </div>

        <select
          id={id}
          name={name}
          onChange={onChange}
          value={value}
          className={`block w-full rounded-lg border border-gray-900 bg-gray-900 p-2.5 ps-10 text-sm text-white focus:border-blue-500 focus:ring-blue-500 ${
            errors && touched && "!border-red-500"
          }`}
        >
          {options.map((option: string, index: number) => (
            <option
              key={index}
              value={option === "Sin seleccionar opción" ? "" : option}
            >
              {option}
            </option>
          ))}
        </select>
        {errors && touched && (
          <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-4">
            <ExclamationCircleIcon className="size-5 text-red-500" />
          </div>
        )}
      </div>
      <small className="text-danger">{errors && touched && errors}</small>
    </div>
  );
};

export default SelectComp;
