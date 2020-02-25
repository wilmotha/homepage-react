/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useContext } from 'react';
// import { ThemeContext } from '../themeContext';


function Projects(props) {
    const styles = css`
        width: auto;
        margin-left: auto;
        margin-right: auto;
        ul {
            padding-left: 0;
            list-style: none;
        }
        li {
            padding-bottom: 10px;
            display: inline;
        }
        p {
            display: inline;
            padding-left: 5px;
        }
    `;

    return (
        <div css={styles}>
            <h1> - Projects - </h1>
            <h2> Programing Projects </h2>
                <ul>
                    <li>
                        <a href="https://mixed-spotify.herokuapp.com/">Mixed</a>
                        <p>
                            - A react app that uses Spotify APIs to mix two playlists
                        </p>
                    </li>
                    <br/>
                    <br/>
                    <li>
                        <a href="https://github.com/wilmotha">GitHub</a>
                        <p>
                            - Other programing projects
                        </p>
                    </li>
                    <br/>
                </ul>
            <h2> Music Projects </h2>
                <ul>
                    <li>
                        <a href="https://soundcloud.com/austin-wilmoth">SoundCloud</a>
                        <p>
                            - Some music I made in my free time
                        </p>
                    </li>

                </ul>
        </div>
    );
}

export default Projects