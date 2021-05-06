import { useState, useEffect, useCallback } from "react";

const useCRUD = (getter, setter, destroyer) => {
  const [state, setState] = useState([]);

  const getData = useCallback(async () => {
    const res = await getter();
    console.log(res);
    setState(res && res.data && res.data.length ? [...res.data] : []);
  }, []);

  const setData = async (data, id) => {
    // Need to generalize this check
    console.log(data);
    const field = Object.keys(data)[0];
    if (destroyer && field !== "milestone" && data[field] == null) {
      const res = await destroyer(id);

      await getData();
    } else {
      // Best to call getData again or return dataset from server like above example?

      const res = await setter(data, id);

      await getData();
    }
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return [state, setData];
};

export default useCRUD;
