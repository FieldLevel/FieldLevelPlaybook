import * as React from 'react';

function SvgShareMinor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M16.773 7.316L11.96 3.16a.657.657 0 00-1.085.497v2.189C6.483 5.896 3 6.776 3 10.939c0 1.68 1.082 3.344 2.279 4.214.373.272.905-.07.767-.51-1.24-3.965.588-5.017 4.829-5.078v2.404c0 .566.665.86 1.085.496l4.813-4.156a.657.657 0 000-.993z" />
        </svg>
    );
}

export default SvgShareMinor;
