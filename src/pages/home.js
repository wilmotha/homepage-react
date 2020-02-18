/** @jsx jsx */
import { jsx, css } from '@emotion/core';
// import { useContext } from 'react';
// import { ThemeContext } from '../themeContext';

function Home(props) {
    const styles = css`
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;

        img {
            width: 100%;
        }
    `;

    return (
        <div css={styles}>
            <h1> - Home - </h1>
            <img src={require("../photos/SnowJeep.jpg")} />
        </div>
    );
}

export default Home