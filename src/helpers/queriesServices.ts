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

    throw new Error("Error desconocido");
  }
};

export const getOneService = async (id: string) => {
  try {
    const response = await fetch(`${URL}/services/${id}`);
    if (!response.ok) {
      const errorResponse: ErrorMessage = await response.json();
      throw new Error(errorResponse.msg);
    }
    const res: OneServiceResponse = await response.json();
    return res.service;
  } catch (error) {
    if (error instanceof Error) return error;
  }
};

export const createService = async (values: CreateServiceValues) => {
  const token = sessionStorage.getItem("token");
  if (!token) throw new Error("No estás autorizado");

  try {
    const formData = new FormData();
    formData.append("nombre", values.nombre);
    formData.append("precio", values.precio.toString());
    formData.append("descripcion", values.descripcion);
    formData.append("file", values.imagen as File);

    const response = await fetch(`${URL}/services`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });

    if (!response.ok) {
      const errorResponse: ErrorMessage = await response.json();
      throw new Error(errorResponse.msg);
    }
    const res: CreateServiceResponse = await response.json();
    return res;
  } catch (error) {
    if (error instanceof Error) return error;

    throw new Error("Error desconocido");
  }
};

export const editService = async (values: ValuesService, id: string) => {
  const token = sessionStorage.getItem("token");
  if (!token) throw new Error("No estás autorizado");

  try {
    const response = await fetch(`${URL}/services/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        nombre: values.nombre,
        precio: values.precio,
        descripcion: values.descripcion,
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

    const res: EditServiceResponse = await response.json();
    return res;
  } catch (error) {
    if (error instanceof Error) return error;

    throw new Error("Error desconocido");
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

    throw new Error("Error desconocido");
  }
};
