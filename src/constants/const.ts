export const SERVICES: Service[] = [
  {
    nombre: "Lavado premium",
    descripcion:
      "Lavado que incluye enjabonado, enjuagado y encerado del vehículo",
    img: "https://imgfz.com/i/tDWQMeN.png",
    precio: 5000,
  },
  {
    nombre: "Limpieza de tapizados",
    descripcion: "Limpieza de cubiertas de los asientos del vehículo",
    img: "https://imgfz.com/i/G9ixErn.png",
    precio: 3000,
  },
  {
    nombre: "Abrillantado y sellado",
    descripcion:
      "Aplicación de sellador que permitirá realzar el color y aumentar el brillo, prologar el lavado y proteger al vehículo de los factores climáticos.",
    img: "https://imgfz.com/i/LPlORAh.png",
    precio: 7000,
  },
  {
    nombre: "Limpieza de motor",
    descripcion: "Limpieza de la parte interna del vehículo.",
    img: "https://www.grupoherres.com.mx/wp-content/uploads/2019/05/actividades-mantenimiento-motores.jpg",
    precio: 6500,
  },
  {
    nombre: "Restauración de ópticas",
    descripcion:
      "Limpieza y pulido de ópticas, con un resultado completamente transparente.",
    img: "https://imgfz.com/i/C6Pu4hX.png",
    precio: 4000,
  },
];

export const PHONE_NUMBER: string = import.meta.env.VITE_PHONE_NUMBER;

export const VEHICLES = ["Sin seleccionar opción", "Auto", "Camioneta", "Moto"];

export const SERVICES_NAMES = [
  "Sin seleccionar opción",
  "Lavado premium",
  "Limpieza de tapizados",
  "Abrillantado y sellado",
  "Limpieza de motor",
  "Restauración de öpticas",
];

export const SCHEDULES = [
  "Sin seleccionar opción",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];
