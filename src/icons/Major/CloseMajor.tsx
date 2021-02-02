import * as React from 'react';

function SvgCloseMajor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12.654 10l3.98-3.98a1.251 1.251 0 000-1.77l-.885-.884a1.251 1.251 0 00-1.769 0L10 7.346l-3.98-3.98a1.251 1.251 0 00-1.77 0l-.884.885a1.251 1.251 0 000 1.769L7.346 10l-3.98 3.98a1.251 1.251 0 000 1.77l.885.884c.488.488 1.28.488 1.769 0l3.98-3.98 3.98 3.98c.489.488 1.28.488 1.77 0l.884-.885a1.251 1.251 0 000-1.769L12.654 10z" />
        </svg>
    );
}

export default SvgCloseMajor;
