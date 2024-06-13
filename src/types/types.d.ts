interface Service {
  nombre: string;
  img: string;
  precio: number;
  descripcion: string;
}
interface ServiceProps {
  service: Service;
}
interface InputAndSelect {
  id: string;
  name: string;
  label: string;
  value: string;
  errors?: string;
  touched?: boolean;
}