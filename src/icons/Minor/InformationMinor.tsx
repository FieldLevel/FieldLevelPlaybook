import * as React from 'react';

function SvgInformationMinor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M10 18a8 8 0 100-16.001A8 8 0 0010 18zm-1.25-5.5h.75v-2h-.75A.748.748 0 018 9.75c0-.416.334-.75.75-.75h1.5c.416 0 .75.334.75.75v2.75h.25c.416 0 .75.334.75.75s-.334.75-.75.75h-2.5a.748.748 0 01-.75-.75c0-.416.334-.75.75-.75zM10 6a1 1 0 110 2 1 1 0 010-2z" />
        </svg>
    );
}

export default SvgInformationMinor;
