import React from 'react';

import './index.scss';

import Clock from './Clock.jsx';

const App = () => {
  return (
    <>
      <Clock 
        location="New York"
        offset={-4}
      />
      <Clock 
        location="Kyiv"
        offset={3}
      />
      <Clock 
        location="London"
        offset={0}
      />
    </>
  )
}

export default App;