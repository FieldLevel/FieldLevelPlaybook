import * as React from 'react';

function SvgDropdownMinor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M4.74 6h9.52c.658 0 .988.825.521 1.308l-4.758 4.938c-.288.3-.758.3-1.047 0L4.218 7.308C3.752 6.825 4.082 6 4.74 6z" />
        </svg>
    );
}

export default SvgDropdownMinor;
