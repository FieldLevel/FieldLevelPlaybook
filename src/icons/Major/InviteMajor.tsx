import * as React from 'react';

function SvgInviteMajor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M19.5 8.5h-2v-2c0-.275-.225-.5-.5-.5h-1c-.275 0-.5.225-.5.5v2h-2c-.275 0-.5.225-.5.5v1c0 .275.225.5.5.5h2v2c0 .275.225.5.5.5h1c.275 0 .5-.225.5-.5v-2h2c.275 0 .5-.225.5-.5V9c0-.275-.225-.5-.5-.5zM7 10a4 4 0 100-8 4 4 0 000 8zm2.8 1h-.522a5.445 5.445 0 01-4.556 0H4.2A4.201 4.201 0 000 15.2v1.3A1.5 1.5 0 001.5 18h11a1.5 1.5 0 001.5-1.5v-1.3c0-2.319-1.881-4.2-4.2-4.2z" />
        </svg>
    );
}

export default SvgInviteMajor;
