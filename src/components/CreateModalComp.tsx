import {
  CurrencyDollarIcon,
  EyeIcon,
  EyeSlashIcon,
  KeyIcon,
  TagIcon,
  UserCircleIcon,
  UserPlusIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
import { Button, IconButton, Spinner } from "@material-tailwind/react";
import { Formik } from "formik";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import InputComp from "./InputComp";
import { DisketteIcon } from "./Icons";
import { toast } from "sonner";
import {
  errorCreateServiceSchema,
  errorEditUserSchema,
} from "../utils/validationSchemas";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/16/solid";
import { createUser } from "../helpers/queriesUsers";
import Form from "react-bootstrap/Form";
import { TURN_LABEL_CLASSES } from "../constants/classes";
import { createService } from "../helpers/queriesServices";

interface Props {
  type: Type;
  setUsers?: React.Dispatch<React.SetStateAction<FullUserInfo[]>>;
  setServices?: React.Dispatch<React.SetStateAction<Service[]>>;
}

const CreateModalComp: React.FC<Props> = ({ type, setUsers, setServices }) => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const iconClasses = "size-5 text-gray-50";
  const button = (
    <IconButton onClick={() => setShowPassword((prevState) => !prevState)}>
      {!showPassword ? (
        <EyeIcon className={iconClasses} />
      ) : (
        <EyeSlashIcon className={iconClasses} />
      )}
    </IconButton>
  );

  const handleCreateUser = async (values: ValuesCreateUser) => {
    try {
      const res = await createUser(values);

      if (res instanceof Error) {
        toast.error(res.message);
        return;
      }
      toast.success(res.msg);
      if (!setUsers) {
        toast.error("Error al mostrar actualización de usuarios", {
          description: "Prueba recargando la página",
        });
        return;
      }
      setUsers((prevUsers) => [...prevUsers, res.newUser]);
      handleClose();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const handleCreateService = async (values: CreateServiceValues) => {
    try {
      setIsLoading(true);
      const res = await createService(values);

      if (res instanceof Error) {
        toast.error(res.message);
        return;
      }

      setIsLoading(false);
      toast.success(res.msg);

      if (!setServices) {
        toast.error("Error al mostrar actualización de servicios", {
          description: "Prueba recargando la página",
        });
        return;
      }

      setServices((prevServices) => [...prevServices, res.newService]);
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
          <Button
            color="white"
            onClick={handleShow}
            className="flex items-center justify-center gap-2"
          >
            <UserPlusIcon className="size-5" />
            <span>Crear nuevo administrador</span>
          </Button>

          <Modal show={show} onHide={handleClose}>
            <div className="bg-gray-900 text-gray-50">
              <Modal.Header closeButton>
                <Modal.Title>Crear nuevo usuario administrador</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    password: "",
                  }}
                  onSubmit={(values) => handleCreateUser(values)}
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
                        type="email"
                        name="email"
                        placeholder="example@email.com"
                        onChange={handleChange}
                        id="emailCreateUserId"
                        value={values.email}
                        errors={errors.email}
                        touched={touched.email}
                        label={"Correo electrónico"}
                        icon={<UserCircleIcon className={iconClasses} />}
                      />
                      <InputComp
                        type="text"
                        name="name"
                        placeholder="Ej: Juan Perez"
                        onChange={handleChange}
                        id="nameCreateUserId"
                        value={values.name}
                        errors={errors.name}
                        touched={touched.name}
                        label={"Nombre y apellido"}
                        icon={<UserCircleIcon className={iconClasses} />}
                      />
                      <InputComp
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="**************"
                        onChange={handleChange}
                        id="passCreateUserId"
                        value={values.password}
                        errors={errors.password}
                        touched={touched.password}
                        label={"Contraseña"}
                        showPassButton={button}
                        icon={<KeyIcon className={iconClasses} />}
                      />
                      <Button
                        type="submit"
                        color="white"
                        className="flex items-center justify-center gap-2"
                        fullWidth
                      >
                        <DisketteIcon className="size-5" />
                        <span>Crear nuevo administrador</span>
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
          <Button
            color="white"
            onClick={handleShow}
            className="flex items-center justify-center gap-2"
          >
            <WrenchIcon className="size-5" />
            <span>Crear nuevo servicio</span>
          </Button>

          <Modal show={show} onHide={handleClose}>
            <div className="bg-gray-900 text-gray-50">
              <Modal.Header closeButton>
                <Modal.Title>Crear nuevo servicio</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Formik
                  initialValues={{
                    nombre: "",
                    precio: "",
                    descripcion: "",
                    imagen: null,
                  }}
                  onSubmit={(values) => {
                    const submitValues = {
                      ...values,
                      precio: Number(values.precio),
                    };
                    handleCreateService(submitValues);
                  }}
                  validationSchema={errorCreateServiceSchema}
                >
                  {({
                    values,
                    setFieldValue,
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
                        id="nameCreateServiceId"
                        value={values.nombre}
                        errors={errors.nombre}
                        touched={touched.nombre}
                        label={"Nombre del servicio"}
                        icon={<TagIcon className={iconClasses} />}
                      />
                      <InputComp
                        type="number"
                        name="precio"
                        placeholder="99999"
                        onChange={handleChange}
                        id="priceCreateServiceId"
                        value={values.precio}
                        errors={errors.precio}
                        touched={touched.precio}
                        label={"Precio"}
                        icon={<CurrencyDollarIcon className={iconClasses} />}
                      />
                      <InputComp
                        type="textarea"
                        name="descripcion"
                        placeholder="Pequeña descripción del servicio"
                        onChange={handleChange}
                        id="descCreateServiceId"
                        value={values.descripcion}
                        errors={errors.descripcion}
                        touched={touched.descripcion}
                        label={"Descripción"}
                        icon={
                          <ChatBubbleBottomCenterTextIcon
                            className={iconClasses}
                          />
                        }
                      />
                      <Form.Group className="mb-3">
                        <label
                          className={TURN_LABEL_CLASSES}
                          htmlFor="imageCreateServiceId"
                        >
                          Imagen del servicio
                        </label>
                        <Form.Control
                          type="file"
                          id="imageCreateServiceId"
                          name="imagen"
                          onChange={(ev) => {
                            const file = (ev.currentTarget as HTMLInputElement)
                              .files?.[0];
                            setFieldValue("imagen", file);
                          }}
                          accept="image/jpeg, image/png, image/jpg, image/svg+xml, image/webp"
                          className={`
                              ${
                                errors.imagen && touched.imagen && "is-invalid"
                              }`}
                        />
                        <small className="text-danger">
                          {errors.imagen && touched.imagen && errors.imagen}
                        </small>
                      </Form.Group>
                      {values.imagen && (
                        <div className="flex flex-col items-center justify-center">
                          <img
                            src={URL.createObjectURL(values.imagen)}
                            alt={values.nombre}
                          />
                          <small className="mb-3 mt-1 font-bold">
                            ----- Previsualización de imagen -----
                          </small>
                        </div>
                      )}
                      <Button
                        type="submit"
                        color="white"
                        className="flex items-center justify-center gap-2"
                        fullWidth
                      >
                        {!isLoading ? (
                          <>
                            <DisketteIcon className="size-5" />
                            <span>Crear servicio</span>
                          </>
                        ) : (
                          <>
                            <Spinner />
                            <span>Creando servicio...</span>
                          </>
                        )}
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

export default CreateModalComp;
