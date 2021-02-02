import * as React from 'react';

function SvgForwardMinor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M14.185 10.372l-6.421 6.474a.525.525 0 01-.744 0l-.866-.866a.525.525 0 010-.744L11.338 10 6.154 4.764a.525.525 0 010-.744l.866-.866a.525.525 0 01.744 0l6.421 6.474a.525.525 0 010 .744z" />
        </svg>
    );
}

export default SvgForwardMinor;
