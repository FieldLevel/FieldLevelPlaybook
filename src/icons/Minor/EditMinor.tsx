import * as React from 'react';

function SvgEditMinor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M17.587 5.161l-1.35 1.35a.352.352 0 01-.499 0L12.486 3.26a.352.352 0 010-.498l1.35-1.351a1.41 1.41 0 011.99 0l1.76 1.76c.552.549.552 1.44 0 1.99zm-6.261-1.24l-7.694 7.695-.621 3.56a.704.704 0 00.815.814l3.56-.624 7.693-7.694a.352.352 0 000-.498l-3.252-3.252a.355.355 0 00-.501 0zm-5.748 9.5h1.406v1.063l-1.89.33-.911-.91.331-1.89h1.064v1.406z" />
        </svg>
    );
}

export default SvgEditMinor;
