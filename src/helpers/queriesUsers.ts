import { URL } from "../constants/const";

export const getUsers = async () => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error(
      "No tienes los permisos necesarios para realizar esta acción"
    );
  }
  try {
    const response = await fetch(`${URL}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });
    if (!response.ok) {
      const errorResponse: ErrorMessage = await response.json();
      throw new Error(errorResponse.msg);
    }
    const res: UserResponse[] = await response.json();
    return res;
  } catch (error) {
    if (error instanceof Error) return error;

    return new Error("Error desconocido");
  }
};

export const createUser = async (user: CreateUser) => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error(
      "No tienes los permisos necesarios para realizar esta acción"
    );
  }
  try {
    const response = await fetch(`${URL}/users`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });
    if (!response.ok) {
      const errorResponse: ErrorMessage = await response.json();
      throw new Error(errorResponse.msg);
    }
    const res: CreateUserResponse = await response.json();
    return res;
  } catch (error) {
    if (error instanceof Error) return error;
  }
};

export const loginAdmin = async (user: User) => {
  try {
    const response = await fetch(`${URL}/users/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorResponse: ErrorMessage = await response.json();
      throw new Error(errorResponse.msg);
    }
    const res: LoginResponse = await response.json();
    return res;
  } catch (error) {
    if (error instanceof Error) return error;

    return new Error("Error desconocido");
  }
};

export const checkAuth = async (token: string) => {
  const parsedToken = JSON.parse(token);
  try {
    const response = await fetch(`${URL}/users/verify-token`, {
      method: "POST",
      body: JSON.stringify({ token: parsedToken }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const errorResponse: ErrorMessage = await response.json();
      throw new Error(errorResponse.msg);
    }
    const res: AuthResponse = await response.json();
    return res;
  } catch (error) {
    if (error instanceof Error) return error;

    return new Error("Error desconocido");
  }
};
