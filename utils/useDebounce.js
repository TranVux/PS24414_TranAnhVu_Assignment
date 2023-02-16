import { useEffect, useState } from 'react'
export const useDebounce = (_value, delay) => {
    const [value, setValue] = useState("");

    useEffect(() => {

        const delayTime = setTimeout(() => {
            setValue(_value);
        }, delay)

        return () => {
            clearTimeout(delayTime);
        }
    }, [value, delay])
    return value;
}