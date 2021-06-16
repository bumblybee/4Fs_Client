import { useState, useEffect, useCallback, useContext } from "react";
import { NotificationContext } from "../context/notification/NotificationContext";

const useCRUD = (getter, setter, destroyer) => {
  const [state, setState] = useState([]);
  const { setNotificationMessage, clearNotificationMessage } =
    useContext(NotificationContext);

  const getData = useCallback(async () => {
    const res = await getter();
    setState(res && res.data && res.data.length ? [...res.data] : []);

    if (res && res.error) {
      // If error is that user is logged out, don't auto clear, else do
      if (res.error === "Your session has expired. Click here to log in.") {
        setNotificationMessage(res.error, "error");
      } else {
        setNotificationMessage(res.error, "error", true);
      }
    }
  }, [getter]);

  const setData = async (data, id) => {
    if (data) {
      const res = await setter(data, id);

      if (res && res.error) {
        setNotificationMessage(res.error, "error", true);
        return;
      }

      clearNotificationMessage();
      setState(res && res.data && res.data.length ? [...res.data] : []);
    }
  };

  const destroyData = async (id) => {
    const res = await destroyer(id);
    setState(res && res.data && res.data.length ? [...res.data] : []);
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return [state, setData, destroyData];
};

export default useCRUD;
