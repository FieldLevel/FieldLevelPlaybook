import * as React from 'react';

function SvgMoreActionsHorizontalMajor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx={16.75} cy={10} r={2.5} transform="rotate(90 16.75 10)" />
            <circle cx={10} cy={10} r={2.5} transform="rotate(90 10 10)" />
            <circle cx={3.25} cy={10} r={2.5} transform="rotate(90 3.25 10)" />
        </svg>
    );
}

export default SvgMoreActionsHorizontalMajor;
