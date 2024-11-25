import * as React from 'react';

function SvgErrorMinor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M10 18a8 8 0 100-16.001A8 8 0 0010 18zM7.469 7.469a.747.747 0 011.06 0l1.468 1.468 1.469-1.468a.75.75 0 011.06 1.06l-1.47 1.468 1.469 1.469a.75.75 0 01-1.06 1.06l-1.468-1.47-1.469 1.469a.75.75 0 01-1.06-1.06l1.47-1.468-1.47-1.469a.747.747 0 010-1.06z" />
        </svg>
    );
}

export default SvgErrorMinor;
