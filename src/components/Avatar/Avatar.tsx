import React from 'react';

export interface AvatarProps {
    avatar: string;
}

export const Avatar: React.FC<AvatarProps> = ({ avatar }) => {
    return (
        <svg className="avatar avatar--180" viewBox="0 0 188 188">
            <g className="avatar__box">
                <image xlinkHref={avatar} height="100%" width="100%" />
            </g>
        </svg>
    );
};

export default Avatar;
