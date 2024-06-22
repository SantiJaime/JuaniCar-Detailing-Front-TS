import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/outline";
import useServices from "../hooks/useServices";
import { deleteService } from "../helpers/queriesServices";
import { toast } from "sonner";
import { TABLE_HEAD_SERVICES, TABLE_HEAD_USERS } from "../constants/const";
import { TABLE_TD_CLASSES } from "../constants/classes";
import useUsers from "../hooks/useUsers";
import { deleteUser } from "../helpers/queriesUsers";
import Swal from "sweetalert2";

interface Props {
  type: string;
}

const TableComp: React.FC<Props> = ({ type }) => {
  const { services, setServices } = useServices();
  const { users, setUsers } = useUsers();

  const handleDeleteService = (id: string) => {
    Swal.fire({
      title: "¿Estás seguro de borrar este servicio?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00913f",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await deleteService(id);

          if (res instanceof Error) {
            toast.error(res.message);
            return;
          }
          toast.success(res.msg);
          setServices((prevServices) =>
            prevServices.filter((service) => service._id !== id)
          );
        } catch (error) {
          if (error instanceof Error) {
            toast.error(error.message);
            return;
          }
        }
      }
    });
  };

  const handleDeleteUser = async (id: string) => {
    Swal.fire({
      title: "¿Estás seguro de borrar este usuario?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00913f",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await deleteUser(id);
          if (res instanceof Error) {
            toast.error(res.message);
            return;
          }
          toast.success(res.msg);
          setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
        } catch (error) {
          if (error instanceof Error) {
            toast.error(error.message);
            return;
          }
        }
      }
    });
  };

  return (
    <>
      {type === "services" ? (
        <Card className="size-full bg-gray-900">
          <CardHeader
            floated={false}
            shadow={false}
            className="rounded-none bg-gray-900"
          >
            <div className="tableHead flex items-center justify-between gap-4">
              <div>
                <Typography variant="h5" color="white">
                  Lista de servicios
                </Typography>
                <Typography color="white" className="mt-1 font-normal">
                  Observe cada servicio agregado en la página
                </Typography>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                {/* <CreateModalComp
            type={"prod"}
            setData={setData}
            setDataAux={setDataAux}
            data={data}
          /> */}
              </div>
            </div>
          </CardHeader>
          <CardBody className="overflow-scroll">
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD_SERVICES.map((head) => (
                    <th
                      key={head}
                      className="border-white-100 border-y bg-gray-900 p-4"
                    >
                      <Typography
                        color="white"
                        className="font-bold leading-none"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-gray-800">
                {services.map((service: Service) => (
                  <tr key={service._id}>
                    <td className={TABLE_TD_CLASSES}>
                      <div className="flex flex-col gap-3">
                        <img
                          src={service.imagen}
                          alt={service.nombre}
                          className="max-w-48 rounded-full text-gray-50"
                        />
                        <Typography
                          variant="small"
                          color="white"
                          className="font-normal"
                        >
                          {service.nombre}
                        </Typography>
                      </div>
                    </td>
                    <td className={TABLE_TD_CLASSES}>
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal"
                      >
                        ${service.precio}
                      </Typography>
                    </td>

                    <td className={TABLE_TD_CLASSES}>
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal"
                      >
                        {service.descripcion}
                      </Typography>
                    </td>
                    <td className={TABLE_TD_CLASSES}>
                      {/* <EditModalComp
                        type="user"
                        data={user}
                        setData={setData}
                        setDataAux={setDataAux}
                      /> */}
                    </td>
                    <td className={TABLE_TD_CLASSES}>
                      <Tooltip
                        content="Eliminar servicio"
                        className="bg-gray-100 text-gray-900"
                        animate={{
                          mount: { scale: 1, y: 0 },
                          unmount: { scale: 0, y: 25 },
                        }}
                      >
                        <IconButton
                          variant="text"
                          className="text-gray-50 hover:bg-gray-300/20 hover:text-red-600"
                          onClick={() => handleDeleteService(service._id)}
                        >
                          <TrashIcon className="size-6" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      ) : (
        <Card className="size-full bg-gray-900">
          <CardHeader
            floated={false}
            shadow={false}
            className="rounded-none bg-gray-900"
          >
            <div className="tableHead flex items-center justify-between gap-4">
              <div>
                <Typography variant="h5" color="white">
                  Lista de usuarios administradores
                </Typography>
                <Typography color="white" className="mt-1 font-normal">
                  Observe todos los administradores registrados
                </Typography>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                {/* <CreateModalComp
          type={"prod"}
          setData={setData}
          setDataAux={setDataAux}
          data={data}
        /> */}
              </div>
            </div>
          </CardHeader>
          <CardBody className="overflow-scroll">
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD_USERS.map((head) => (
                    <th
                      key={head}
                      className="border-white-100 border-y bg-gray-900 p-4"
                    >
                      <Typography
                        color="white"
                        className="font-bold leading-none"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-gray-800">
                {users.map((user: FullUserInfo) => (
                  <tr key={user._id}>
                    <td className={TABLE_TD_CLASSES}>
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal"
                      >
                        {user.email}
                      </Typography>
                    </td>
                    <td className={TABLE_TD_CLASSES}>
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal"
                      >
                        {user.name}
                      </Typography>
                    </td>
                    <td className={TABLE_TD_CLASSES}>
                      {/* <EditModalComp
                      type="user"
                      data={user}
                      setData={setData}
                      setDataAux={setDataAux}
                    /> */}
                    </td>
                    <td className={TABLE_TD_CLASSES}>
                      <Tooltip
                        content="Eliminar usuario"
                        className="bg-gray-100 text-gray-900"
                        animate={{
                          mount: { scale: 1, y: 0 },
                          unmount: { scale: 0, y: 25 },
                        }}
                      >
                        <IconButton
                          variant="text"
                          className="text-gray-50 hover:bg-gray-300/20 hover:text-red-600"
                          onClick={() => handleDeleteUser(user._id)}
                        >
                          <TrashIcon className="size-6" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default TableComp;
