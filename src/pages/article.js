/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useEffect, useState } from 'react';
import { ThemeContext } from '../components/themeContext';
import { useParams, useHistory } from 'react-router-dom';
import blog from '../blog.json';

function Article(props) {
    const history = useHistory();
    const { id } = useParams();
    const [ article, setArticle ] = useState({});

    useEffect(() => {
        if (Object.keys(article).length === 0 && article.constructor === Object) {
            const holder = blog.filter(b => b.id === id);
            if (holder.length === 0) {
                history.push('/404');
            }
            setArticle(holder[0]);
        }

    }, [] );

    return (
        <div className="article-box">
            <div className="article-box">
                <h1> - {article.title} - </h1>
                <div className="date">{article.date}</div>
            </div>
        <p>{article.body}</p>
    </div>
    )
}

export default Article