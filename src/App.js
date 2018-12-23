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
        <div className="containerFluid" style={{ position: 'relative', marginLeft: '20vw', marginTop: '10vw', marginRight: '20vw'}}>
            <div className="front" >
                <div className="logoContainer" style={{maxWidth: '600px', marginLeft: '15vw', marginRight: '15vw'}}>
                    <img src={logo} alt='logo' width='100%'></img>
                </div>


                <div className="frontCont">
                    <div className="rightLean">
                        <p>pic here</p>
                    </div>
                </div>


                <div className="frontCont">
                    <div className="leftLean">
                        <p>pic here</p>
                    </div>
                </div>
                
                <div className="frontCont">
                    <div className="rightLean">
                        <p>pic here</p>
                    </div>
                </div>
                <div className="frontCont">
                    <div className="leftLean">
                        <p>pic here</p>
                    </div>
                </div>

                <div className="frontCont" >
                    <div className="rightLean">
                        <p>pic here</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default App;
