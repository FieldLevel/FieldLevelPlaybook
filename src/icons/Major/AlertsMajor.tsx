import * as React from 'react';

function SvgAlertsMajor(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M10.421 20c1.328 0 2.405-1.12 2.405-2.5h-4.81c0 1.38 1.077 2.5 2.405 2.5zm8.097-5.848c-.726-.811-2.085-2.03-2.085-6.027 0-3.035-2.048-5.465-4.81-6.06V1.25c0-.69-.538-1.25-1.202-1.25C9.757 0 9.22.56 9.22 1.25v.814c-2.762.596-4.81 3.026-4.81 6.061 0 3.996-1.359 5.216-2.085 6.027A1.247 1.247 0 002 15c.004.64.488 1.25 1.207 1.25h14.428c.72 0 1.203-.61 1.207-1.25a1.247 1.247 0 00-.324-.848z" />
        </svg>
    );
}

export default SvgAlertsMajor;
