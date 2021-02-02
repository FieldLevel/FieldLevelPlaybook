import * as React from 'react';

function SvgEditMajor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M17.56 6.438L16.118 7.88a.375.375 0 01-.532 0L12.118 4.41a.375.375 0 010-.531l1.441-1.44a1.503 1.503 0 012.122 0l1.878 1.878a1.498 1.498 0 010 2.121zm-6.68-1.321l-8.206 8.206-.662 3.797a.751.751 0 00.869.869l3.797-.666 8.206-8.206a.375.375 0 000-.532l-3.469-3.468a.38.38 0 00-.534 0zM4.75 15.248h1.5v1.135l-2.016.353-.972-.972.353-2.016h1.134v1.5z" />
        </svg>
    );
}

export default SvgEditMajor;
