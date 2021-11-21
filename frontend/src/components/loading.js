import React from 'react';

export default function loading(props) {
    const class_attributes = "animate-spin fill-current " + props.color;
    return (
        <div>
            <svg version="1.0" width="48px" height="48px" viewBox="0 0 128 128" className={class_attributes}>
                <path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" />
            </svg>
        </div>
    )
}


