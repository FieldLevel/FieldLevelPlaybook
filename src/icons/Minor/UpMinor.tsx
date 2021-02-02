import * as React from 'react';

function SvgUpMinor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M10.372 6.154l6.474 6.422a.525.525 0 010 .743l-.866.866a.525.525 0 01-.744 0L10 9.002l-5.236 5.183a.525.525 0 01-.744 0l-.866-.866a.525.525 0 010-.743l6.474-6.422a.525.525 0 01.744 0z" />
        </svg>
    );
}

export default SvgUpMinor;
