import * as React from 'react';

function SvgSearchMinor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M16.796 14.969l-2.921-2.921a.703.703 0 00-.498-.205h-.478A6.093 6.093 0 008.094 2a6.093 6.093 0 100 12.186c1.415 0 2.716-.48 3.75-1.289v.478c0 .187.074.366.206.498l2.92 2.92a.7.7 0 00.994 0l.83-.829a.706.706 0 00.002-.995zm-8.702-3.126a3.748 3.748 0 01-3.75-3.75 3.748 3.748 0 013.75-3.75 3.748 3.748 0 013.75 3.75 3.748 3.748 0 01-3.75 3.75z" />
        </svg>
    );
}

export default SvgSearchMinor;
