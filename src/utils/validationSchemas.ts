import * as yup from "yup";

export const errorTurnSchema = yup.object().shape({
  nombre: yup.string().required("Campo nombre y apellido obligatorio"),
  email: yup
    .string()
    .required("Campo correo electrónico obligatorio")
    .email("Formato de correo electrónico inválido"),
  detalles: yup.string(),
  vehiculo: yup.string().required("Campo tipo de vehículo obligatorio"),
  servicio: yup.string().required("Campo servicio a solicitar obligatorio"),
  fecha: yup.string().required("Campo fecha obligatorio"),
  horario: yup.string().required("Campo horario obligatorio"),
});
