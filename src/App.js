import React from 'react';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from 'react-router-dom'
import Frontpage from './routes/frontpage'
import Marathon from './routes/marathon';
import Blog from './routes/blog';
import About from './routes/about';
import Contact from './routes/contact';
import Gallery from './routes/gallery';
import Voyage from './routes/voyage';
import News from './routes/news';


// import react-bootstrap from 'react-bootstrap'
class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          
      }
  }
  render() {
      return (
        
        <div className="containerFluid" style={{ position: 'absolute', marginLeft: '10vw', marginRight: '10vw'}}>
        
            <Router>
                <div>
                    
                    <div style={{position: 'relative', width: '60vw', top: '0vw', marginLeft: '10vw', marginRight: '10vw'}}>
                        <Route exact path="/" render={() =>
                            <Frontpage/>}
                        />
                        <Route path="/blog" render={() =>
                            <Blog/>}
                        />
                        <Route path="/voyage" render={() =>
                            <Voyage/>}
                        />
                        <Route path="/marathon" render={() =>
                            <Marathon/>}
                        />
                        <Route path="/news" render={() =>
                            <News/>}
                        />
                        <Route path="/about" render={() =>
                            <About/>}
                        />
                        <Route path="/gallery" render={() =>
                            <Gallery/>}
                        />
                        <Route path="/contact" render={() =>
                            <Contact/>}
                        />
                    </div>
                </div>
            </Router>
            
        </div>
    )
  }
}

export default App;
