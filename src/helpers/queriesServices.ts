import { URL } from "../constants/const";

export const getServices = async () => {
  try {
    const response = await fetch(`${URL}/services`);
    if (!response.ok) {
      const errorResponse: ErrorMessage = await response.json();
      throw new Error(errorResponse.msg);
    }
    const res: ServicesResponse = await response.json();
    return res.services;
  } catch (error) {
    if (error instanceof Error) return error;

    return new Error("Error desconocido");
  }
};

export const deleteService = async (id: string) => {
  const token = sessionStorage.getItem("token");
  if (!token) throw new Error("No estás autorizado");

  try {
    const response = await fetch(`${URL}/services/${id}`, {
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

    return new Error("Error desconocido");
  }
};
