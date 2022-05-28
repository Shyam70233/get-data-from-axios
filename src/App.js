import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import { useHttp } from './hooks';

export default function App() {
  const { data, isloadning, error } = useHttp(
    'https://jsonplaceholder.typicode.com/users'
  );
  if (isloadning) return <h1> Loading..............</h1>;
  if (error) return <mark> {JSON.stringify(error)} </mark>;
  return (
    <div>
      {data?.map((d) => (
        <h4>{d.id}</h4>
      ))}
    </div>
  );
}
