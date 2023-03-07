import React from 'react';
import Jumbo from './jumbotron';


function Wrapper(props) {
  return <main className="wrapper">{props.children}</main>;
}


function Header() {
  return (
    <header>
   <Wrapper /> 
   <Jumbo />
    
    </header>
  );
}

export default Header;
