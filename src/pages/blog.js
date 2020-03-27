/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useContext } from 'react';
import { ThemeContext } from '../components/themeContext';
import blogs from '../blog.json';

function Blog(props) {
    const theme = useContext(ThemeContext);

    const styles = css`
        
        h2 {
            margin-top: 8px;
            border-bottom: 1px solid lightgray;
        }

        #blog-container {
            display: flex;
            flex-direction: column;
            
        }

        .blog-box {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .2), 0 1.5px 5px 0 rgba(0, 0, 0, 0.19);
            padding: 5px 25px;
            border-radius: 5px;
            margin-bottom: 20px;
            max-width: 800px;
        }
    `;

    return (
        <div css={styles}>
            <h1> - Blog - </h1>
            
            <div id="blog-container">
                {blogs.map(blog => (
                    <div className="blog-box">
                        <h2>{blog.title}</h2>
                        <div>{blog.date}</div>
                        <p>{blog.body}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Blog