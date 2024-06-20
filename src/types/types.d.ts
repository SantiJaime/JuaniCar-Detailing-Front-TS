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

interface User {
  email: string;
  password: string;
}

interface CreateUser extends User {
  name: string;
}

interface UserResponse {
  _id: string;
  email: string;
  name: string;
  role: string;
}

interface CreateUserResponse {
  msg: string;
  newUser: UserResponse;
}

interface LoginResponse {
  msg: string;
  token: string;
  user: UserResponse;
}
