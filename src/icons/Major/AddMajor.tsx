import * as React from 'react';

function SvgAddMajor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M16.857 8.286h-5.143V3.143c0-.631-.511-1.143-1.143-1.143H9.43c-.632 0-1.143.512-1.143 1.143v5.143H3.143C2.512 8.286 2 8.797 2 9.429v1.142c0 .632.512 1.143 1.143 1.143h5.143v5.143c0 .631.511 1.143 1.143 1.143h1.142c.632 0 1.143-.512 1.143-1.143v-5.143h5.143c.631 0 1.143-.511 1.143-1.143V9.43c0-.632-.512-1.143-1.143-1.143z" />
        </svg>
    );
}

export default SvgAddMajor;
