import React from 'react';

const Footer = (props) => {

    return (
        <div>
            <footer className="text-muted">
                <div><strong>{props.environment}</strong></div>
            </footer>
        </div>
    );
};

export default Footer;