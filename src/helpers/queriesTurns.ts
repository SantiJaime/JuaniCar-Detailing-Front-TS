import { URL } from "../constants/const";

export const getAllTurns = async () => {
  const token = sessionStorage.getItem("token");
  if (!token) throw new Error("No estás autorizado");
  try {
    const response = await fetch(`${URL}/turns`, {
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

    const res: TurnResponse = await response.json();
    return res.allTurns;
  } catch (error) {
    if (error instanceof Error) return error;

    throw new Error("Error desconocido");
  }
};

export const getAvailableSchedules = async (date: string) => {
  try {
    const response = await fetch(
      `${URL}/turns/available-schedules?date=${date}`
    );
    if (!response.ok) {
      const errorResponse: ErrorMessage = await response.json();
      throw new Error(errorResponse.msg);
    }

    const res: AvailableSchedulesResponse = await response.json();
    return res.availableSchedules;
  } catch (error) {
    if (error instanceof Error) return error;

    throw new Error("Error desconocido");
  }
};

export const createTurn = async (values: ValuesTurn) => {
  try {
    if (!values.details) {
      values.details = "Sin detalles adicionales";
    }
    const formatedDate = values.date.split("- ")[1];
    values.date = formatedDate;

    const response = await fetch(`${URL}/turns`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        name: values.name,
        vehicle: values.vehicle,
        service: values.service,
        date: values.date,
        hour: values.hour,
        details: values.details,
      }),
    });
    if (!response.ok) {
      const errorResponse: ErrorMessage = await response.json();
      throw new Error(errorResponse.msg);
    }

    const { msg } = await response.json();
    return msg;
  } catch (error) {
    if (error instanceof Error) return error;

    throw new Error("Error desconocido");
  }
};

export const deleteTurn = async (id: string) => {
  const token = sessionStorage.getItem("token");
  if (!token) throw new Error("No estás autorizado");
  try {
    const response = await fetch(`${URL}/turns/${id}`, {
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
