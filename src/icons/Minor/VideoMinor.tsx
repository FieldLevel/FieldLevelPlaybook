import * as React from 'react';

function SvgVideoMinor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M15.61 8.87l-8.8-5.69C6.095 2.717 5 3.166 5 4.309v11.377c0 1.026 1.018 1.643 1.81 1.13l8.8-5.688c.785-.506.788-1.753 0-2.258z" />
        </svg>
    );
}

export default SvgVideoMinor;
