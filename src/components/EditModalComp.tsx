import {
  CurrencyDollarIcon,
  PencilIcon,
  TagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Button, IconButton, Tooltip } from "@material-tailwind/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import InputComp from "./InputComp";
import { DisketteIcon } from "./Icons";
import { editUser } from "../helpers/queriesUsers";
import { toast } from "sonner";
import {
  errorEditServiceSchema,
  errorEditUserSchema,
} from "../utils/validationSchemas";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/16/solid";
import { editService } from "../helpers/queriesServices";

interface Props {
  type: Type;
  userName?: string;
  userId?: string;
  setUsers?: React.Dispatch<React.SetStateAction<FullUserInfo[]>>;
  service?: Service;
  setServices?: React.Dispatch<React.SetStateAction<Service[]>>;
}

const EditModalComp: React.FC<Props> = ({
  type,
  userName,
  userId,
  setUsers,
  service,
  setServices,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEditUser = async (values: { name: string }) => {
    try {
      const res = await editUser(values.name, userId as string);

      if (res instanceof Error) {
        toast.error(res.message);
        return;
      }
      const { updatedUser, msg } = res;
      toast.success(msg);

      if (!setUsers) {
        toast.error("Error al mostrar actualización de usuarios", {
          description: "Prueba recargando la página",
        });
        return;
      }
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, ...updatedUser } : user
        )
      );
      handleClose();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const handleEditService = async (values: ValuesService) => {
    try {
      const res = await editService(values, service?._id as string);

      if (res instanceof Error) {
        toast.error(res.message);
        return;
      }

      const { updatedService, msg } = res;
      toast.success(msg);

      if (!setServices) {
        toast.error("Error al mostrar actualización de servicios", {
          description: "Prueba recargando la página",
        });
        return;
      }
      setServices((prevServices) =>
        prevServices.map((service) =>
          service._id === service?._id
            ? { ...service, ...updatedService }
            : service
        )
      );
      handleClose();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <>
      {type === "users" ? (
        <>
          <Tooltip
            content="Editar usuario"
            className="bg-gray-100 text-gray-900"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <IconButton
              variant="text"
              className="text-gray-50 hover:bg-gray-300/20 hover:text-blue-500"
              onClick={handleShow}
            >
              <PencilIcon className="size-6" />
            </IconButton>
          </Tooltip>

          <Modal show={show} onHide={handleClose}>
            <div className="bg-gray-900 text-gray-50">
              <Modal.Header closeButton>
                <Modal.Title>Editar este usuario</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Formik
                  initialValues={{
                    name: userName || "",
                  }}
                  onSubmit={(values) => handleEditUser(values)}
                  validationSchema={errorEditUserSchema}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      <InputComp
                        type="text"
                        name="name"
                        placeholder="Ej: Juan Perez"
                        onChange={handleChange}
                        id="nameEditUserId"
                        value={values.name}
                        errors={errors.name}
                        touched={touched.name}
                        label={"Nombre y apellido"}
                        icon={
                          <UserCircleIcon className="size-5 text-gray-50" />
                        }
                      />
                      <Button
                        type="submit"
                        color="white"
                        className="flex items-center justify-center gap-2"
                        fullWidth
                      >
                        <DisketteIcon className="size-5" />
                        <span>Guardar cambios</span>
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Modal.Body>
            </div>
          </Modal>
        </>
      ) : (
        <>
          <Tooltip
            content="Editar servicio"
            className="bg-gray-100 text-gray-900"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <IconButton
              variant="text"
              className="text-gray-50 hover:bg-gray-300/20 hover:text-blue-500"
              onClick={handleShow}
            >
              <PencilIcon className="size-6" />
            </IconButton>
          </Tooltip>

          <Modal show={show} onHide={handleClose}>
            <div className="bg-gray-900 text-gray-50">
              <Modal.Header closeButton>
                <Modal.Title>Editar este servicio</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Formik
                  initialValues={{
                    nombre: service?.nombre || "",
                    precio: service?.precio || 0,
                    descripcion: service?.descripcion || "",
                  }}
                  onSubmit={(values) => handleEditService(values)}
                  validationSchema={errorEditServiceSchema}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      <InputComp
                        type="text"
                        name="nombre"
                        placeholder="Ej: Lavado completo del vehículo"
                        onChange={handleChange}
                        id="nameEditServiceId"
                        value={values.nombre}
                        errors={errors.nombre}
                        touched={touched.nombre}
                        label={"Nombre del servicio"}
                        icon={<TagIcon className="size-5 text-gray-50" />}
                      />
                      <InputComp
                        type="number"
                        name="precio"
                        placeholder="99999"
                        onChange={handleChange}
                        id="priceEditServiceId"
                        value={values.precio}
                        errors={errors.precio}
                        touched={touched.precio}
                        label={"Precio"}
                        icon={
                          <CurrencyDollarIcon className="size-5 text-gray-50" />
                        }
                      />
                      <InputComp
                        type="textarea"
                        name="descripcion"
                        placeholder="Pequeña descripción del servicio"
                        onChange={handleChange}
                        id="descEditServiceId"
                        value={values.descripcion}
                        errors={errors.descripcion}
                        touched={touched.descripcion}
                        label={"Descripción"}
                        icon={
                          <ChatBubbleBottomCenterTextIcon className="size-5 text-gray-50" />
                        }
                      />
                      <Button
                        type="submit"
                        color="white"
                        className="flex items-center justify-center gap-2"
                        fullWidth
                      >
                        <DisketteIcon className="size-5" />
                        <span>Guardar cambios</span>
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Modal.Body>
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default EditModalComp;
