import * as React from 'react';

function SvgWarningMinor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M9.999 2c.444 0 .853.268 1.078.707l6.75 13.143c.228.443.228.99.006 1.432-.222.443-.637.718-1.084.718h-13.5c-.447 0-.863-.275-1.085-.718a1.614 1.614 0 01.007-1.432L8.92 2.707C9.146 2.267 9.555 2 9.999 2zm0 4.571c-.416 0-.75.383-.75.858v4c0 .475.334.857.75.857.415 0 .75-.382.75-.857v-4c0-.475-.335-.858-.75-.858zm1 8a1.23 1.23 0 00-.293-.808.941.941 0 00-.707-.334c-.265 0-.52.12-.707.334a1.23 1.23 0 00-.293.808c0 .303.105.594.293.809a.941.941 0 00.707.334c.265 0 .52-.12.707-.334.188-.215.293-.506.293-.809z" />
        </svg>
    );
}

export default SvgWarningMinor;
