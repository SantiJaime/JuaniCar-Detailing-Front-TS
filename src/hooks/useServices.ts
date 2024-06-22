import { useEffect, useState } from "react";
import { getServices } from "../helpers/queriesServices";
import { toast } from "sonner";

const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    getServices()
      .then((data) => {
        if (data instanceof Error) {
          toast.error(data.message);
          return;
        }
        setServices(data);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);

  return { services, setServices };
};

export default useServices;
