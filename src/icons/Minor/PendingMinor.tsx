import * as React from 'react';

function SvgPendingMinor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M10 2.5A7.499 7.499 0 002.5 10c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5-3.357-7.5-7.5-7.5zm2.897 9.592l-.586.732a.468.468 0 01-.659.073L9.69 11.441a1.172 1.172 0 01-.439-.915V5.969c0-.26.21-.469.469-.469h.937c.26 0 .469.21.469.469v4.218l1.7 1.245a.469.469 0 01.072.66z" />
        </svg>
    );
}

export default SvgPendingMinor;
