import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useHttp = (url) => {
  const [isloadning, setisloadning] = useState(false);
  const [error, seterror] = useState(null);
  const [data, setdata] = useState(null);

  const boot = () => {
    axios
      .get(url)
      .then((d) => setdata(d.data))
      .then((d) => seterror(null))
      .then((d) => setisloadning(false))
      .catch((err) => {
        seterror(err);
        setisloadning(false);
      });
  };
  useEffect(boot, []);
  return {
    isloadning,
    error,
    data,
  };
};
