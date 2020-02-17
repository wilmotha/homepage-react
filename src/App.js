/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeContext } from './components/themeContext';

// elements
import Navbar from './components/navbar';

// pages
import Home from './pages/home';
import Projects from './pages/projects';
import AboutMe from './pages/aboutMe';

const navlinks = {
    "Projects": "/projects",
    "About Me": "/about_me"
};

function App(props) {
  const theme = useContext(ThemeContext);

  const styles = css`
    background: ${theme.background};
    color: ${theme.textColor};
    main {
      padding: 25px;
      padding-top: 70px;
    }
  `;

  return (
    <div css={styles}>
      <Navbar name="AWebsite" darkModeHandler={props.darkModeHandler} links={navlinks}/>
      <main>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/about_me">
            <AboutMe/>
          </Route>
          <Route path="*">
            <h1> 404! </h1>
            <h3> You are in the wrong place... </h3>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
