import React from 'react'
import Navigation from '../../components/Navigation';
import Header from '../../components/Header';
import Intro from './Components/Intro';
import Form from './Components/Form';
import Info from './Components/Info';

const Support = () => {
  return (
    <div className="flex">
      <Navigation />
      <div className="flex-grow">
        <Header title={"Support"} />
        <div className=" bg-[#EEEEF4] h-[calc(100vh-64px)]">
          <div className="md:flex justify-center gap-6">
            <Intro />
            <Form />
          </div>
          <div className='flex justify-center'>
            <Info />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support