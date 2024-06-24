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

export const errorAdminLoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Campo correo electrónico obligatorio")
    .email("Formado de correo electrónico inválido"),
  password: yup.string().required("Campo contraseña obligatorio"),
});

export const errorEditUserSchema = yup.object().shape({
  name: yup.string().required("Campo nombre y apellido obligatorio"),
});

export const errorEditServiceSchema = yup.object().shape({
  nombre: yup.string().required("Campo nombre del servicio obligatorio"),
  precio: yup.number().required("Campo precio del servicio obligatorio"),
  descripcion: yup
    .string()
    .required("Campo descripción del servicio obligatorio"),
});

export const errorCreateServiceSchema = yup.object().shape({
  nombre: yup.string().required("Campo nombre del servicio obligatorio"),
  descripcion: yup.string().required("Campo descripción del servicio obligatorio"),
  precio: yup.number().required("Campo precio del servicio obligatorio"),
  imagen: yup.string().required("Campo imagen del servicio obligatorio"),
})
