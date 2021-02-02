import * as React from 'react';

function SvgBulletMinor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx={10} cy={10} r={3} />
        </svg>
    );
}

export default SvgBulletMinor;
