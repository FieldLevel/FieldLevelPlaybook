import * as React from 'react';

function SvgSelectMinor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M6.538 11.5h6.924c.479 0 .718.612.38.97l-3.461 3.664a.519.519 0 01-.762 0L6.16 12.47c-.34-.358-.1-.97.38-.97zM13.462 8.3H6.538c-.479 0-.718-.612-.38-.97L9.62 3.667a.519.519 0 01.762 0l3.46 3.663c.34.358.1.97-.38.97z" />
        </svg>
    );
}

export default SvgSelectMinor;
