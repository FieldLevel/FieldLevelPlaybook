import * as React from 'react';

function SvgInformationMinor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M10 2a8.001 8.001 0 000 16 8.001 8.001 0 000-16zm0 3.548a1.355 1.355 0 110 2.71 1.355 1.355 0 010-2.71zm1.806 8.194a.387.387 0 01-.387.387H8.581a.387.387 0 01-.387-.387v-.774c0-.214.173-.387.387-.387h.387v-2.065H8.58a.387.387 0 01-.387-.387v-.774c0-.214.173-.387.387-.387h2.064c.214 0 .387.173.387.387v3.226h.387c.214 0 .387.173.387.387v.774z" />
        </svg>
    );
}

export default SvgInformationMinor;
