import * as React from 'react';

function SvgMoreActionsVerticalMajor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx={10} cy={3.25} r={2.5} />
            <circle cx={10} cy={10} r={2.5} />
            <circle cx={10} cy={16.75} r={2.5} />
        </svg>
    );
}

export default SvgMoreActionsVerticalMajor;
