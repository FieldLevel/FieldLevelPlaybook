import * as React from 'react';

function SvgCloseMinor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12.274 9.5l3.412-3.696a1.231 1.231 0 000-1.642l-.758-.822a1.015 1.015 0 00-1.517 0L10 7.036 6.589 3.34a1.015 1.015 0 00-1.517 0l-.758.822a1.231 1.231 0 000 1.642L7.725 9.5l-3.411 3.696a1.231 1.231 0 000 1.643l.758.82a1.015 1.015 0 001.517 0L10 11.965l3.412 3.696a1.015 1.015 0 001.516 0l.758-.822a1.231 1.231 0 000-1.642L12.274 9.5z" />
        </svg>
    );
}

export default SvgCloseMinor;
