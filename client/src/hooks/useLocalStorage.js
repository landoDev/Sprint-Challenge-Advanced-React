import {useState} from 'react';

export const  useLocalStorage = (key, initialValue) =>{
    const [storedValue, setStoredValue] = useState(()=>{
       const item  = window.localStorage.getItem(key);
       return item ? JSON.parse(item) : initialValue;
    });
    // setValue is the setter function
    // HOW DOES THE SETTER WORK? I need this explained again
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    return [storedValue, setValue]
};
