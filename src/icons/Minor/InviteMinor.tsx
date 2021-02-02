import * as React from 'react';

function SvgInviteMinor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M17.6 8.2H16V6.6c0-.22-.18-.4-.4-.4h-.8c-.22 0-.4.18-.4.4v1.6h-1.6c-.22 0-.4.18-.4.4v.8c0 .22.18.4.4.4h1.6v1.6c0 .22.18.4.4.4h.8c.22 0 .4-.18.4-.4V9.8h1.6c.22 0 .4-.18.4-.4v-.8c0-.22-.18-.4-.4-.4zm-10 1.2a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zm2.24.8h-.418a4.357 4.357 0 01-3.645 0H5.36A3.36 3.36 0 002 13.56v1.04a1.2 1.2 0 001.2 1.2H12a1.2 1.2 0 001.2-1.2v-1.04a3.36 3.36 0 00-3.36-3.36z" />
        </svg>
    );
}

export default SvgInviteMinor;
