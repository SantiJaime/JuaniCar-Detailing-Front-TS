import { useEffect, useState } from "react";
import { getUsers } from "../helpers/queriesUsers";
import { toast } from "sonner";

const useUsers = () => {
  const [users, setUsers] = useState<FullUserInfo[]>([]);

  useEffect(() => {
    getUsers()
      .then((res) => {
        if (res instanceof Error) {
          toast.error(res.message);
          return;
        }
        setUsers(res);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);

  return { users, setUsers };
};

export default useUsers;
