import * as React from 'react';

function SvgMoreActionsHorizontalMinor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx={15.838} cy={10.162} r={2.162} transform="rotate(90 15.838 10.162)" />
            <circle cx={10} cy={10.162} r={2.162} transform="rotate(90 10 10.162)" />
            <circle cx={4.162} cy={10.162} r={2.162} transform="rotate(90 4.162 10.162)" />
        </svg>
    );
}

export default SvgMoreActionsHorizontalMinor;
