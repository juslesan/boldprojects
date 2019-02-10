import React from 'react'
import './blog.css'
import vlog1 from '../img/Vlog1.png'
const Blog = () => {
    return(
        <div className="blog">
            <h1>
                Blog
            </h1>
            <div className="blogsWrapper" style={{position: 'relative'}}>
                <div className="blogsListed">
                    <a href='/blog/1' style={{}}>   
                        <img src={vlog1} alt="kuva" width="100%"></img>
                    </a>
                </div>
                
            </div>  
        </div>
    )
}

export default Blog