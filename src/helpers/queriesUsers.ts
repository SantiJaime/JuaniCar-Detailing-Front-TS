import { TOKEN, URL } from "../constants/const";

export const getUsers = async () => {
  try {
    const response = await fetch(`${URL}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    if (!response.ok) {
      const errorResponse: { msg: string } = await response.json();
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
  try {
    const response = await fetch(`${URL}/users`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    if (!response.ok) {
      const errorResponse: { msg: string } = await response.json();
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
      const errorResponse: { msg: string } = await response.json();
      throw new Error(errorResponse.msg);
    }
    const res: LoginResponse = await response.json();
    return res;
  } catch (error) {
    if (error instanceof Error) return error;

    return new Error("Error desconocido");
  }
};
