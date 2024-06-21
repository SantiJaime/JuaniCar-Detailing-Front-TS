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
import { TABLE_HEAD_SERVICES } from "../constants/const";
import { TABLE_TD_CLASSES } from "../constants/classes";

const TableComp = () => {
  const { services, setServices } = useServices();

  const handleDeleteService = async (id: string) => {
    try {
      const res = await deleteService(id);

      if (res instanceof Error) {
        toast.error(res.message);
        return;
      }
      toast.success(res.msg);
      setServices(services.filter((service) => service._id !== id));
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
        return;
      }
      throw new Error("Error desconocido");
    }
  };

  return (
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
                  <Typography color="white" className="font-bold leading-none">
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
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
                    content="Eliminar producto"
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
  );
};

export default TableComp;
