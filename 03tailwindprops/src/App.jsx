import React from 'react';
import Card from './components/card';

const App = () => {

  // let myObj = {
  //   username: 'Nikhil',
  //   age: 21,
  // };

  //  let newArr = [1,2,3]

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 flex-col p-4">
      <h1 className="rounded-xl mb-4 font-bold text-white bg-green-400 p-4">
        Tailwind Test
      </h1>
      <Card username="Chai aur Code" btnText="Click Me"  />
      <Card username="Nikhil" btnText="Visit Me" />
    </div>
  );
};

export default App;
