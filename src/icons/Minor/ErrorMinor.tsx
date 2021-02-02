import * as React from 'react';

function SvgErrorMinor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M18.188 9.688c0-1.42-.388-2.775-1.097-4a7.835 7.835 0 00-2.904-2.904c-1.225-.71-2.58-1.096-4-1.096-1.451 0-2.774.387-4 1.096-1.225.71-2.225 1.678-2.935 2.904a7.902 7.902 0 00-1.064 4c0 1.451.354 2.774 1.064 4a8.007 8.007 0 002.936 2.935 7.816 7.816 0 004 1.064c1.419 0 2.774-.354 4-1.064 1.225-.71 2.193-1.71 2.903-2.936.71-1.225 1.096-2.548 1.096-4zm-8 1.612c.387 0 .741.162 1.032.452.29.29.451.645.451 1.032 0 .42-.16.774-.451 1.065-.29.29-.645.42-1.033.42-.419 0-.774-.13-1.064-.42-.29-.29-.42-.645-.42-1.065 0-.387.13-.742.42-1.032.29-.29.645-.452 1.065-.452zm-1.42-5.322c0-.13.032-.226.097-.29a.409.409 0 01.29-.13h2.065c.096 0 .193.065.258.13.064.064.129.16.129.29l-.258 4.387c0 .097-.065.194-.13.258a.367.367 0 01-.257.097H9.413c-.129 0-.226-.033-.29-.097a.366.366 0 01-.097-.258l-.258-4.387z" />
        </svg>
    );
}

export default SvgErrorMinor;
