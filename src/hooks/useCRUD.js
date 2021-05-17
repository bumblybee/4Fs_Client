import { useState, useEffect, useCallback } from "react";

const useCRUD = (getter, setter, destroyer) => {
  const [state, setState] = useState([]);

  const getData = useCallback(async () => {
    const res = await getter();

    setState(res && res.data && res.data.length ? [...res.data] : []);
  }, []);

  const setData = async (data, id) => {
    const res = await setter(data, id);
    console.log(res);

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
