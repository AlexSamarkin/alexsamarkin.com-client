import React from "react";

export interface CardProps {
  icon: string;
  title: string;
  children:
    | React.ReactNode
    | React.ReactNode[]
    | React.ReactNodeArray
    | React.ReactChildren
    | string;
}

export const Card: React.FC<CardProps> = (props) => {
  const { icon, title, children } = props;
  return (
    <div className="case-item box box__second">
      <img className="case-item__icon" src={icon} alt={title} />
      <div>
        <h3 className="title title--h5">{title}</h3>
        <p className="case-item__caption">{children}</p>
      </div>
    </div>
  );
};

export default Card;
