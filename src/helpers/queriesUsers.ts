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
    const res: FullUserInfoResponse = await response.json();
    return res.allUsers;
  } catch (error) {
    if (error instanceof Error) return error;

    throw new Error("Error desconocido");
  }
};

export const createUser = async (user: ValuesCreateUser) => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error(
      "No tienes los permisos necesarios para realizar esta acción"
    );
  }
  try {
    const response = await fetch(`${URL}/users`, {
      method: "POST",
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
        role: "admin",
      }),
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

    throw new Error("Error desconocido");
  }
};

export const editUser = async (userName: string, id: string) => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error(
      "No tienes los permisos necesarios para realizar esta acción"
    );
  }
  try {
    const response = await fetch(`${URL}/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name: userName }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });
    if (!response.ok) {
      const errorResponse: ErrorMessage = await response.json();
      throw new Error(errorResponse.msg);
    }
    const res: EditUserResponse = await response.json();
    return res;
  } catch (error) {
    if (error instanceof Error) return error;

    throw new Error("Error desconocido");
  }
};

export const deleteUser = async (id: string) => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error(
      "No tienes los permisos necesarios para realizar esta acción"
    );
  }
  try {
    const response = await fetch(`${URL}/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });
    if (!response.ok) {
      const errorResponse: ErrorMessage = await response.json();
      throw new Error(errorResponse.msg);
    }
    const res: { msg: string } = await response.json();
    return res;
  } catch (error) {
    if (error instanceof Error) return error;

    throw new Error("Error desconocido");
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

    throw new Error("Error desconocido");
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

    throw new Error("Error desconocido");
  }
};
