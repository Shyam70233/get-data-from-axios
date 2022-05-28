import React, { Suspense, lazy } from 'react';

const Demo = lazy(() => import('./Demo'));
export default function App() {
  return (
    <div>
      <h1>Lazy loadning.........</h1>
      <Suspense fallback={'pending'}>
        <Demo />
      </Suspense>
    </div>
  );
}
