import * as React from 'react';

function SvgAddMinor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M16 8.5h-4.5V4a1 1 0 00-1-1h-1a1 1 0 00-1 1v4.5H4a1 1 0 00-1 1v1a1 1 0 001 1h4.5V16a1 1 0 001 1h1a1 1 0 001-1v-4.5H16a1 1 0 001-1v-1a1 1 0 00-1-1z" />
        </svg>
    );
}

export default SvgAddMinor;
