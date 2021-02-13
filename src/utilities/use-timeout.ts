import { useEffect, useCallback, useRef } from 'react';

// React hook for delaying calls with time
// returns callback to use for cancelling

export const useTimeout = (
    callback: () => void, // function to call. No args passed.
    timeout: number, // delay in ms
    condition: boolean = true // the condition to start the timeout
): (() => void) => {
    const timeoutIdRef = useRef<NodeJS.Timeout>();
    const cancel = useCallback(() => {
        const timeoutId = timeoutIdRef.current;
        if (timeoutId) {
            timeoutIdRef.current = undefined;
            clearTimeout(timeoutId);
        }
    }, [timeoutIdRef]);

    useEffect(() => {
        if (!condition) {
            return;
        }
        timeoutIdRef.current = setTimeout(callback, timeout);
        return cancel;
    }, [condition, callback, timeout, cancel]);

    return cancel;
};
