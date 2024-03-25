import React from 'react';
import './App.css';
import MyFunctionalComponent from '@/components/MyFunctionalComponent/MyFunctionalComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <MyFunctionalComponent name="John" />
    </div>
  );
};

export default App;
