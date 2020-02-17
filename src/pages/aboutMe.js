/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useContext } from 'react';
// import { ThemeContext } from '../themeContext';

function AboutMe(props) {
    
    return (
        <div>
            <h1> - About Me - </h1>
            <div>
                <img width="300" height="auto" src={require("../photos/profile.jpg")}/>
                <div>
                    <h4> Austin Wilmoth </h4>
                    <h5> Oregon State University - June 2020</h5>
                    <h6> Compute Science </h6>
                            
                    <p>
                        I am passionate about many aspects of computer 
                        science and am excited about the opportunities 
                        that await me in the field.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe