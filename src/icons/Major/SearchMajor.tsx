import * as React from 'react';

function SvgSearchMajor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M18.755 16.562l-3.505-3.505a.843.843 0 00-.598-.246h-.573a7.275 7.275 0 001.547-4.5A7.311 7.311 0 008.313 1 7.311 7.311 0 001 8.312a7.311 7.311 0 007.313 7.312c1.698 0 3.26-.577 4.5-1.547v.573c0 .225.088.44.246.597l3.506 3.505a.84.84 0 001.192 0l.995-.995c.33-.33.33-.864.003-1.195zm-10.442-3.75c-2.486 0-4.5-2.011-4.5-4.5 0-2.486 2.01-4.5 4.5-4.5 2.486 0 4.5 2.011 4.5 4.5 0 2.485-2.01 4.5-4.5 4.5z" />
        </svg>
    );
}

export default SvgSearchMajor;
