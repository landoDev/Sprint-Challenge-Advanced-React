import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);
    useEffect(()=>{
        if(value === false){
            const bodyHTML = document.getElementsByTagName("body")
            const body = bodyHTML[0].classList.add("dark-mode")
            return body;
            // There's a better way to do this lol
        }else{
            const bodyHTML = document.getElementsByTagName("body")
            const body = bodyHTML[0].classList.remove("dark-mode")
            return body;
        }
    }, [value])
    return [value, setValue]
}