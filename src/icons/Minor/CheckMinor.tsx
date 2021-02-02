import * as React from 'react';

function SvgCheckMinor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M7.406 14.5a.338.338 0 00.25-.094l9.375-9.375a.389.389 0 00.125-.281.297.297 0 00-.125-.25l-.875-.906a.457.457 0 00-.281-.094.338.338 0 00-.25.094l-8.219 8.25-3.031-3.032a.297.297 0 00-.25-.125.389.389 0 00-.281.125l-.875.875a.389.389 0 00-.125.282c0 .104.041.187.125.25l4.156 4.187a.457.457 0 00.281.094z" />
        </svg>
    );
}

export default SvgCheckMinor;
