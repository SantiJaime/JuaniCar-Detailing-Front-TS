import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";
import {
  DIV_ICON_CLASSES,
  TURN_INPUT_CLASSES,
  TURN_LABEL_CLASSES,
} from "../constants/classes";

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
      <label htmlFor={id} className={TURN_LABEL_CLASSES}>
        {label}
      </label>
      <div className="relative">
        <div className={`${DIV_ICON_CLASSES} start-0 ps-3.5`}>{icon}</div>
        <select
          id={id}
          name={name}
          onChange={onChange}
          value={value}
          className={`${TURN_INPUT_CLASSES} ${errors && touched && "!border-red-500"}`}
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
          <div className={`${DIV_ICON_CLASSES} end-0 pe-4`}>
            <ExclamationCircleIcon className="size-5 text-red-500" />
          </div>
        )}
      </div>
      <small className="text-danger">{errors && touched && errors}</small>
    </div>
  );
};

export default SelectComp;
