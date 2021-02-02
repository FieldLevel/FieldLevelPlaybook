import * as React from 'react';

function SvgBackMinor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M6.154 9.628l6.422-6.474a.525.525 0 01.743 0l.866.866a.525.525 0 010 .744L9.002 10l5.183 5.236a.525.525 0 010 .744l-.866.866a.525.525 0 01-.743 0l-6.422-6.474a.525.525 0 010-.744z" />
        </svg>
    );
}

export default SvgBackMinor;
