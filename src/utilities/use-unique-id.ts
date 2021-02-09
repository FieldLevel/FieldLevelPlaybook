import { useRef } from 'react';

let uniqueId = 0;
const getUniqueId = () => uniqueId++;

export const useUniqueId = (prefix: string): string => {
    const idRef = useRef<number>();
    if (idRef.current === undefined) {
        idRef.current = getUniqueId();
    }
    return `${prefix}-${idRef.current}`;
};
