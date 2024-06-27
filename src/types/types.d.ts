interface Service {
  _id: string;
  nombre: string;
  imagen: string;
  precio: number;
  descripcion: string;
}

interface ServiceProps {
  service: Service;
}

type InputType = "text" | "email" | "password" | "textarea" | "date" | "number";

interface InputAndSelect {
  id: string;
  name: string;
  label: string;
  value: string | number;
  icon: JSX.Element;
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

interface ErrorMessage {
  msg: string;
}

interface FullUserInfo {
  _id: string;
  email: string;
  name: string;
  role: string;
}

interface CreateUserResponse {
  msg: string;
  newUser: FullUserInfo;
}

interface ValuesCreateUser {
  name: string;
  email: string;
  password: string;
}

interface FullUserInfoResponse {
  msg: string;
  allUsers: UserResponse[];
}

interface LoginResponse {
  msg: string;
  token: string;
  user: UserResponse;
}
interface AuthResponse {
  msg: string;
  isAuthenticated: boolean;
}

interface ServicesResponse {
  msg: string;
  services: Service[];
}

interface OneServiceResponse {
  msg: string;
  service: Service;
}

interface EditUserResponse {
  msg: string;
  updatedUser: FullUserInfo;
}
interface EditServiceResponse {
  msg: string;
  updatedService: Service;
}

interface ValuesService {
  nombre: string;
  precio: number;
  descripcion: string;
}

interface CreateServiceValues extends ValuesService {
  imagen: File | null;
}

interface NewServiceResponse extends ValuesService {
  _id: string;
  imagen: string;
}

interface CreateServiceResponse {
  msg: string;
  newService: NewServiceResponse;
}

type Type = "users" | "services" | "turns";

interface AvailableSchedulesResponse {
  msg: string;
  availableSchedules: string[];
}

interface ValuesTurn {
  email: string;
  name: string;
  service: string;
  vehicle: string;
  date: string;
  hour: string;
  details: string;
}

interface Turn extends ValuesTurn {
  _id: string;
}

interface TurnResponse {
  msg: string;
  allTurns: Turn[];
}
