import { useState, useEffect, useCallback, useContext } from "react";
import { NotificationContext } from "../context/notification/NotificationContext";

const useCRUD = (getter, setter, destroyer) => {
  const [state, setState] = useState([]);
  const { setNotificationMessage, clearNotificationMessage } =
    useContext(NotificationContext);

  const getData = useCallback(async () => {
    const res = await getter();
    console.log(res);
    setState(res && res.data && res.data.length ? [...res.data] : []);
  }, [getter]);

  const setData = async (data, id) => {
    if (data) {
      const res = await setter(data, id);
      console.log(res);

      if (res.error) {
        setNotificationMessage(res.error, "error");
        return;
      }
      clearNotificationMessage();
    }
    await getData();
  };

  const destroyData = async (id) => {
    const res = await destroyer(id);
    console.log(res);
    await getData();
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return [state, setData, destroyData];
};

export default useCRUD;
