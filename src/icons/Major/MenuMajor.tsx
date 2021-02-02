import * as React from 'react';

function SvgMenuMajor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M.714 4.444h18.572c.394 0 .714-.343.714-.765V1.765c0-.422-.32-.765-.714-.765H.714C.32 1 0 1.343 0 1.765V3.68c0 .422.32.765.714.765zm0 7.653h18.572c.394 0 .714-.343.714-.765V9.418c0-.422-.32-.765-.714-.765H.714c-.394 0-.714.343-.714.765v1.914c0 .422.32.765.714.765zm0 7.653h18.572c.394 0 .714-.343.714-.765V17.07c0-.422-.32-.765-.714-.765H.714c-.394 0-.714.343-.714.765v1.914c0 .422.32.765.714.765z" />
        </svg>
    );
}

export default SvgMenuMajor;
