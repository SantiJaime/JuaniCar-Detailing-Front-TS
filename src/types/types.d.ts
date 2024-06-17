interface Service {
  nombre: string;
  img: string;
  precio: number;
  descripcion: string;
}

interface ServiceProps {
  service: Service;
}

type InputType = "text" | "email" | "password" | "textarea" | "date";

interface InputAndSelect {
  id: string;
  name: string;
  label: string;
  value: string;
  icon: React.JSX.Element;
  errors?: string;
  touched?: boolean;
}