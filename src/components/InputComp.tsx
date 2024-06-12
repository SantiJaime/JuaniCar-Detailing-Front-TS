import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";

interface Props {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  label: string;
  icon: ReactNode;
  value: string;
  errors?: string;
  touched?: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const InputComp: React.FC<Props> = ({
  name,
  type,
  placeholder,
  id,
  label,
  icon,
  onChange,
  value,
  errors,
  touched,
}) => {
  return (
    <>
      {type !== "textarea" ? (
        <div className="mb-3">
          <label
            htmlFor={id}
            className="mb-2 block text-sm font-medium text-gray-50"
          >
            {label}
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
              {icon}
            </div>
            <input
              type={type}
              id={id}
              name={name}
              onChange={onChange}
              className={`block w-full rounded-lg border border-gray-900 bg-gray-900 p-2.5 ps-10 text-sm text-white focus:border-blue-500 focus:ring-blue-500 ${
                errors && touched && "!border-red-500"
              }`}
              placeholder={placeholder}
              value={value}
            />
            {errors && touched && (
              <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3.5">
                <ExclamationCircleIcon className="size-5 text-red-500" />
              </div>
            )}
          </div>
          <small className="text-danger">{errors && touched && errors}</small>
        </div>
      ) : (
        <div className="mb-3">
          <label
            htmlFor={id}
            className="mb-2 block text-sm font-medium text-gray-50"
          >
            {label}
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
              {icon}
            </div>
            <textarea
              id={id}
              rows={3}
              name={name}
              onChange={onChange}
              className="block w-full rounded-lg border border-gray-900 bg-gray-900 p-2.5 ps-10 text-sm text-white focus:border-blue-500 focus:ring-blue-500"
              placeholder={placeholder}
              value={value}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default InputComp;
