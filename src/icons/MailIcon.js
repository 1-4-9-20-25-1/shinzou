import React from 'react';

function MailIcon({ color, size }) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill={color}
            viewBox='0 0 24 24'
            stroke='currentColor'
            height={size}
            width={size}
            style={{
                border: `solid 2px ${color}`,
                padding: '5px',
                borderRadius: '5px',
                transition: '0.2s',
            }}
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                fill='none'
                color={color}
                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
            />
        </svg>
    );
}

export default MailIcon;
