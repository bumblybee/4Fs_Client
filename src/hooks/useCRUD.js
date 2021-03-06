import { useState, useEffect, useCallback, useContext } from "react";
import { NotificationContext } from "../context/notification/NotificationContext";
import { pushToLogin } from "../utils/customHistory";

const useCRUD = (getter, setter, destroyer) => {
  const [state, setState] = useState([]);
  const { setNotificationMessage, clearNotificationMessage } =
    useContext(NotificationContext);

  const getData = useCallback(async () => {
    const res = await getter();

    if (res && res.error) {
      setNotificationMessage(res.error, "error", true);

      if (res.error === "Your session has expired.") {
        pushToLogin();
      }
    }

    setState(res && res.data && res.data.length ? [...res.data] : []);
  }, [getter, setNotificationMessage]);

  const setData = async (data, id) => {
    if (data) {
      const res = await setter(data, id);

      if (res && res.error) {
        setNotificationMessage(res.error, "error", true);

        if (res.error === "Your session has expired.") {
          pushToLogin();
        }
        return;
      }

      clearNotificationMessage();
      setState(res && res.data && res.data.length ? [...res.data] : []);
    }
  };

  const destroyData = async (id) => {
    const res = await destroyer(id);

    if (res && res.error) {
      setNotificationMessage(res.error, "error", true);

      if (res.error === "Your session has expired.") {
        pushToLogin();
      }
      return;
    }

    setState(res && res.data && res.data.length ? [...res.data] : []);
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return [state, setData, destroyData];
};

export default useCRUD;
