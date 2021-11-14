import React from 'react'
import Sidebar from '../Sidebar';
import Header from '../Header';

interface ContainerProps {
  children: React.ReactNode;
  title: string;
}

function Container (props: any) { // should change the type :|
  const { children, title }: ContainerProps = props;
  return (
    <div id="wrapper">
      <Sidebar />
      <div className="main_content">
        <Header />
        <div className="container m-auto">
          <h1 className="lg:text-2xl text-lg font-extrabold leading-none text-gray-900 tracking-tight mb-5">
            {title || 'No title'}
          </h1>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Container
