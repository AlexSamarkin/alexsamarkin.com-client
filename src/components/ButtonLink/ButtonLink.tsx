import React, { useCallback } from "react";

export interface ButtonLinkProps {
  title: string;
  href: string;
  icon?: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  title,
  href,
  icon,
}) => {
  const renderIcon = useCallback(() => {
    if (!icon) {
      return null;
    }

    const className = `font-icon ${icon}`;
    return <i className={className} />;
  }, [icon]);

  return (
    <a className="btn" rel="noreferrer" target={"_blank"} href={href ?? "#"}>
      {icon && renderIcon()}
      {title}
    </a>
  );
};

export default ButtonLink;
