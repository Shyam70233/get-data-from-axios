import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

export default function App() {
  const [a, seta] = useState([]);

  const load = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((d) => seta(d.data));
  };

  useEffect(load, []);
  return (
    <div>
      {a.map((d) => (
        <h4>{d.id}</h4>
      ))}
    </div>
  );
}
