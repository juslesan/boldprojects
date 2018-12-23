import React from 'react';
import './index.css';
import logo from './img/logo.png';

// import react-bootstrap from 'react-bootstrap'
class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          
      }
  }
  render() {
      return (
        <div className="container" style={{ position: 'relative', marginLeft: '20%', marginTop:'30px', marginRight: '20%'}}>
            <div className="front" >
                <img src={logo} alt='logo' width='450px' style={{marginLeft: '13%'}}></img>
                <p>asdasdasdasd</p>
            </div>
        </div>
    )
  }
}

export default App;
