import * as React from 'react';

function SvgDownMinor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M9.628 14.185L3.154 7.764a.525.525 0 010-.744l.866-.866a.525.525 0 01.744 0L10 11.338l5.236-5.184a.525.525 0 01.744 0l.866.866a.525.525 0 010 .744l-6.474 6.421a.525.525 0 01-.744 0z" />
        </svg>
    );
}

export default SvgDownMinor;
