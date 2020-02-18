/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useContext } from 'react';
import {ThemeContext} from '../themeContext';
import { NavLink } from 'react-router-dom';


function NavBarIcons(props) {
    const theme = useContext(ThemeContext);
    
    const styles = css`
        list-style: none;
        padding: 10px;
        padding-left: 0px;
        display: inline-flex;
        margin: 0;
  
  
        li a {
          font-size: 18px;
          display: inline-block;
          padding: 15px;
          padding-top: 23px;
          text-decoration: none;
          color: ${theme.textColor};
        }
  
        a:hover {
          color: ${theme.accent};
        }
  
        .active {
          border-bottom: 3px solid ${theme.accent};
        }
    `;
  
    return (
      <ul css={styles} {... props}>
          {Object.keys(props.links).map((title) => (
            <li key={title+props.links[title]}>
              <a 
                href={props.links[title]}
                class={title}
              />
            </li>
          ))}
        </ul>
    );
  }

  export default NavBarIcons