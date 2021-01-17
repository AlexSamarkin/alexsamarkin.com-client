import React from 'react';
import { NavLink as Link } from 'react-router-dom';

export interface ArticleProps {
    date: Date;
    slug: string;
    thumb: string;
    title: string;
    excerpt: string;
}

export const Article: React.FC<ArticleProps> = (props) => {
    const { date, slug, thumb, title, excerpt } = props;
    return (
        <article className="news-item box">
            <div className="news-item__image-wrap overlay overlay--45">
                <div className="news-item__date">{date.toLocaleDateString()}</div>
                <Link className={'news-item__link'} to={`/articles/${slug}`} />
                <img className="cover lazyload" src={thumb} alt={title} />
            </div>
            <div className="news-item__caption">
                <h2 className="title title--h4">{title}</h2>
                <p>{excerpt}</p>
            </div>
        </article>
    );
};

export default Article;
