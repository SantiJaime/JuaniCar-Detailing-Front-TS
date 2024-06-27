import { useEffect, useState } from "react";
import { getAllTurns } from "../helpers/queriesTurns";
import { toast } from "sonner";

const useTurns = () => {
  const [turns, setTurns] = useState<Turn[]>([]);

  useEffect(() => {
    getAllTurns()
      .then((res) => {
        if (res instanceof Error) {
          toast.error(res.message);
          return;
        }
        setTurns(res);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);

  return { turns, setTurns };
};

export default useTurns;
