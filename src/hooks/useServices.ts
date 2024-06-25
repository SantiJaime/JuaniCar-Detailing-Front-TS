import { useEffect, useState } from "react";
import { getServices } from "../helpers/queriesServices";
import { toast } from "sonner";

const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getServices()
      .then((data) => {
        setIsLoading(true);
        if (data instanceof Error) {
          toast.error(data.message);
          return;
        }
        setServices(data);
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { services, setServices, isLoading };
};

export default useServices;
