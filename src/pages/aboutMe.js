/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useContext } from 'react';
import { ThemeContext } from '../components/themeContext';

function AboutMe(props) {
    const theme = useContext(ThemeContext);

    const styles = css`
        /* width: auto; */
        margin-left: auto;
        margin-right: auto;

        @media screen and (min-width: 603px) {
            max-width: 600px;
            #box {
                display: inline-box;
                padding-right: 15px;
                padding-bottom: 0px;
                max-height: 279px; 
                max-width: auto;
                box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .2), 0 1.5px 5px 0 rgba(0, 0, 0, 0.19);
            }
        }

        #text {
            margin-left: 20px;
        }
        p {
            max-width: 200px;
        }

        @media screen and (max-width: 602px) {
            max-width: 300px;
            #box {
                background: ${theme.contentBox};
                display: block;
                padding-right: auto;
                padding-bottom: 15px;
                max-height: auto;
                max-width: 300px;
                box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .2), 0 1.5px 5px 0 rgba(0, 0, 0, 0.19);
            }
        }
    `;

    return (
        <div css={styles}>
            <h1> - About Me - </h1>
            <div id="box">
                <img width="300" height="auto" src={require("../photos/profile.jpg")}/>
                <div id="text">
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