import * as React from 'react';

function SvgCheckCircleMinor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M16.781 10A6.781 6.781 0 113.22 10a6.781 6.781 0 0113.562 0zm-7.565 3.59l5.03-5.03a.438.438 0 000-.62l-.618-.618a.438.438 0 00-.619 0l-4.103 4.103L6.991 9.51a.438.438 0 00-.62 0l-.618.62a.438.438 0 000 .618l2.844 2.844c.17.17.448.17.619 0z" />
        </svg>
    );
}

export default SvgCheckCircleMinor;
