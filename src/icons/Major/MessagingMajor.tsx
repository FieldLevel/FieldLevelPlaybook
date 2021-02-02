import * as React from 'react';

function SvgMessagingMajor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M14.444 8.556V3.159c0-1.19-.996-2.159-2.222-2.159h-10C.997 1 0 1.968 0 3.159v5.397c0 1.19.997 2.159 2.222 2.159v1.828c0 .27.316.425.538.263l2.875-2.095h6.587c1.226.004 2.222-.964 2.222-2.155zm3.334-2.159h-2.222v2.159c0 1.785-1.497 3.238-3.334 3.238H6.667v2.16c0 1.19.996 2.158 2.222 2.158h4.365l2.874 2.095c.223.162.539.007.539-.263v-1.832h1.11c1.226 0 2.223-.968 2.223-2.159V8.556c0-1.19-.997-2.159-2.222-2.159z" />
        </svg>
    );
}

export default SvgMessagingMajor;
