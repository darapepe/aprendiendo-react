import React from 'react'
import ReactDOM from 'react-dom/client'

const root  = ReactDOM.createRoot(document.getElementById('root'));

const Button = ({texto}) => {
  return(
    <button>{texto}</button>
  );
};

root.render(
  <React.Fragment>
    <Button texto="Button 1"></Button>
    <Button texto="Button 2"></Button>
    <Button texto="Button 3"></Button>
  </React.Fragment>,
)
