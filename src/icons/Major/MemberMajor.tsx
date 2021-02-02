import * as React from 'react';

function SvgMemberMajor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M10.5 10c2.683 0 4.857-2.238 4.857-5S13.183 0 10.5 0C7.817 0 5.643 2.238 5.643 5s2.174 5 4.857 5zm3.4 1.25h-.634a6.455 6.455 0 01-2.766.625c-.987 0-1.92-.227-2.766-.625H7.1c-2.816 0-5.1 2.352-5.1 5.25v1.625C2 19.16 2.816 20 3.821 20H17.18C18.184 20 19 19.16 19 18.125V16.5c0-2.898-2.284-5.25-5.1-5.25z" />
        </svg>
    );
}

export default SvgMemberMajor;
