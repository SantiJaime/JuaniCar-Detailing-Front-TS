import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import {
  DIV_ICON_CLASSES,
  TURN_INPUT_CLASSES,
  TURN_LABEL_CLASSES,
} from "../constants/classes";
import { type ReactNode } from "react";

interface Props extends InputAndSelect {
  placeholder: string;
  type: InputType;
  showPassButton?: ReactNode;
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
  showPassButton,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className={TURN_LABEL_CLASSES}>
        {label}
      </label>
      <div className="relative">
        <div className={`${DIV_ICON_CLASSES} start-0 ps-3.5`}>{icon}</div>
        {type !== "textarea" ? (
          <input
            type={type}
            id={id}
            name={name}
            onChange={onChange}
            className={`${TURN_INPUT_CLASSES} ${
              errors && touched && "!border-red-500"
            }`}
            placeholder={placeholder}
            value={value}
          />
        ) : (
          <textarea
            id={id}
            rows={3}
            name={name}
            onChange={onChange}
            className={TURN_INPUT_CLASSES}
            placeholder={placeholder}
            value={value}
          />
        )}
        {name === "password" && (
          <div className="absolute inset-y-0 end-0 flex items-center pe-0.5">
            {showPassButton}
          </div>
        )}
        {errors && touched && (
          <div
            className={`${DIV_ICON_CLASSES} end-0 ${
              name === "password" ? "pe-5" : "pe-3.5"
            }`}
          >
            <ExclamationCircleIcon className="size-5 text-red-500" />
          </div>
        )}
      </div>
      <small className="text-danger">{errors && touched && errors}</small>
    </div>
  );
};

export default InputComp;
