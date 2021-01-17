import React from 'react';

export const Footer: React.FC = () => {
    const year = new Date().getFullYear();
    return <footer className="footer">© {year} Alexander Samarkin</footer>;
};

export default Footer;
