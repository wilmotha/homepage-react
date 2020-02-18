/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useContext } from 'react';
// import { ThemeContext } from '../themeContext';


function Projects(props) {
    const styles = css`
        width: auto;
        margin-left: auto;
        margin-right: auto;
    `;

    return (
        <div css={styles}>
            <h1> - Projects - </h1>
            <h2> Programing Projects </h2>
                <a href="https://github.com/wilmotha">GitHub</a>
            <h2> Music Projects </h2>
                <a href="https://soundcloud.com/austin-wilmoth">SoundCloud</a>
        </div>
    );
}

export default Projects