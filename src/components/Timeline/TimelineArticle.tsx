import React from 'react';

export interface TimelineArticleProps {
    title: string;
    yearStart: number;
    yearEnd?: number;
    description?: string;
}

export const TimelineArticle: React.FC<TimelineArticleProps> = (props) => {
    const { title, yearStart, yearEnd, description } = props;
    return (
        <article className="timeline__item">
            <h5 className="title title--h5 timeline__title">{title}</h5>
            <span className="timeline__period">
                {yearStart} — {yearEnd ?? 'Present'}
            </span>
            <p className="timeline__description">{description ?? ''}</p>
        </article>
    );
};

export default TimelineArticle;
