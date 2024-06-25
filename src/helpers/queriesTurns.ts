import { URL } from "../constants/const";

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
