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
import ScrollToTop from 'react-scroll-up'
import Backhome from './components/backhome.js'
import Arrow from './img/Up_icon.png'




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
                <Backhome/>

                    <div className="wrapper">
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
                    <ScrollToTop showUnder={600}>
                        <img src={Arrow} alt="back up" style={{width: '4vw'}}></img>
                    </ScrollToTop>
                </div>
                
            </Router>
            
        </div>
    )
  }
}

export default App;
