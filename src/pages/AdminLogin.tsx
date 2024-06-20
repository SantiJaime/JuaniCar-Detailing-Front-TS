import { Form, Formik } from "formik";
import { Col, Container, Image, Row } from "react-bootstrap";
import InputComp from "../components/InputComp";
import { EmailIcon } from "../components/Icons";
import {
  ArrowRightCircleIcon,
  EyeIcon,
  EyeSlashIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { errorAdminLoginSchema } from "../utils/validationSchemas";
import { loginAdmin } from "../helpers/queriesUsers";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

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

  const handleClick = async (values: User) => {
    try {
      const res = await loginAdmin(values);

      if (res instanceof Error) {
        console.error(res.message);
        toast.error(res.message);
        return;
      }

      sessionStorage.setItem("token", JSON.stringify(res.token));
      navigate("/panel-administrador");
    } catch (error) {
      console.error("Error no manejado:", error);
      toast.error("Ha ocurrido un error inesperado");
    }
  };

  return (
    <Container className="my-8" fluid>
      <Row>
        <Col sm={12} className="my-2 flex justify-center">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => handleClick(values)}
            validationSchema={errorAdminLoginSchema}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <Form
                className="formWidth rounded-lg bg-gray-900 p-3"
                data-aos="zoom-in"
                onSubmit={handleSubmit}
              >
                <Typography variant="h3" color="white">
                  Iniciar sesión como administrador
                </Typography>
                <hr className="my-3 text-gray-50" />
                <InputComp
                  id="emailAdminId"
                  name="email"
                  placeholder="example@email.com"
                  type="email"
                  onChange={handleChange}
                  label="Correo electrónico"
                  icon={<EmailIcon className={iconClasses} />}
                  value={values.email}
                  errors={errors.email}
                  touched={touched.email}
                />
                <InputComp
                  id="passAdminId"
                  name="password"
                  placeholder="*************"
                  type={showPassword ? "text" : "password"}
                  onChange={handleChange}
                  label="Contraseña"
                  icon={<KeyIcon className={iconClasses} />}
                  value={values.password}
                  errors={errors.password}
                  touched={touched.password}
                  showPassButton={button}
                />
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    color="white"
                    className="flex items-center gap-1"
                  >
                    <span>Ingresar</span>
                    <ArrowRightCircleIcon className="size-5" />
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Col>
        <Col sm={12} className="my-2 flex justify-center">
          <Image src="/juani2.png" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLogin;
