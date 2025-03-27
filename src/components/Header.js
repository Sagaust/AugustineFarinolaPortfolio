import React from 'react';



function Wrapper(props) {
  return <main className="wrapper">{props.children}</main>;
}


function Header() {
  return (
    <header>
   <Wrapper /> 
    
    </header>
  );
}

export default Header;
