import { useState, useEffect, useCallback, useContext } from "react";
import { ErrorContext } from "../context/error/ErrorContext";

const useCRUD = (getter, setter, destroyer) => {
  const [state, setState] = useState([]);
  const { setErrorMessage, clearErrorMessage } = useContext(ErrorContext);

  const getData = useCallback(async () => {
    const res = await getter();
    console.log(res);
    setState(res && res.data && res.data.length ? [...res.data] : []);
  }, [getter]);

  const setData = async (data, id) => {
    const res = await setter(data, id);
    console.log(res);

    if (res.error) {
      setErrorMessage(res.error);
      return;
    }
    clearErrorMessage();
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
