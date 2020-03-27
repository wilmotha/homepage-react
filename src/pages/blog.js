/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useContext } from 'react';
import { ThemeContext } from '../components/themeContext';
import blogs from '../blog.json';
import { useHistory } from 'react-router-dom';

function Blog(props) {
    const theme = useContext(ThemeContext);
    const history = useHistory();

    const styles = css`
        #blog-container {
            display: flex;
            flex-direction: column;
            
        }

        .blog-box {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .2), 0 1.5px 5px 0 rgba(0, 0, 0, 0.19);
            padding: 5px 25px;
            border-radius: 5px;
            margin-bottom: 20px;
            background-color: ${theme.contentBox}
        }

        .blog-box:hover {
            cursor: pointer;
            background-color: #fcfcff;
        }

        .title-box {
            display: flex;
            flex-direction: row;
            border-bottom: 1px solid lightgray;
            justify-content: space-between;
            padding-top: 4px;
            padding-bottom: 4px;
        }
    

        h2 {
            margin: 0;
        }

        .date {
            margin: 0px;
            margin-top: 5px;
            color: gray;
        }

        p {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
        }
    `;

    return (
        <div css={styles}>
            <h1> - Blog - </h1>
            
            <div id="blog-container">
                {blogs.map(blog => (
                    <div onClick={() => history.push(`/blog/${blog.id}`)} key={blog.id} className="blog-box">
                        <div className="title-box">
                            <h2>{blog.title}</h2>
                            <div className="date">{blog.date}</div>
                        </div>
                        <p>{blog.body}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Blog