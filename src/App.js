import React from 'react';
import Cards from './components/Cards';

const wrapperStyle = {
  padding: '1rem'
} 
function App() {
  return (
    <div className="ui fluid container" style={wrapperStyle}>
      <h2 className="ui header">Active Users in the App</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus.
      </p>
      <Cards />
    </div>
  );
}

export default App;
