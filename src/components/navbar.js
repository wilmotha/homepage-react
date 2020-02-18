/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useContext } from 'react';
import { ThemeContext } from './themeContext';

import HamburgerMenu from './navbarElements/HamburgerMenu';
import SiteTitle from './navbarElements/SiteTitle';
import NavBarLinks from './navbarElements/NavbarLinks';
import NavBarIcons from './navbarElements/NavbarIcons';
import DarkMode from './navbarElements/DarkMode';

function NavBar(props) {
  const theme = useContext(ThemeContext);

  const styles = css`
      position: fixed;
      top: 0;
      display: flex;
      width: 100%;
      background-color: ${theme.themeColor};
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .2), 0 1.5px 5px 0 rgba(0, 0, 0, 0.19);

    @media screen and (max-width: 768px) {
      ul {
          display: none;
        }
      }
  `;

  const title = css`
    padding-left: 30px;
    @media screen and (max-width: 768px) {
      padding-left: 10px;
    }
  `;

  return (
    <nav css={styles}>
      <HamburgerMenu darkModeHandler={props.darkModeHandler} links={props.links} icons={props.icons}/>
      <SiteTitle name={props.name} style={title}/>
      <NavBarLinks links={props.links}/>
      <DarkMode darkModeHandler={props.darkModeHandler}/>
      <NavBarIcons links={props.icons}/>
    </nav>
  );
}


export default NavBar