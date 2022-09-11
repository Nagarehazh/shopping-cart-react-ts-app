import { useEffect, useState } from "react";

export function useLocalStorage<T>(key:string, initialValue: T | (() => T)) {
    const [storedValue, setStoredValue] = useState<T>(() => {
       
            const jsonValue = localStorage.getItem(key);
            if (jsonValue !== null) {
                return JSON.parse(jsonValue);
            }

            if (initialValue instanceof Function) {
                return (initialValue as () => T)();
            } else {
                return initialValue;
            }
            
    });


useEffect(() => {
  localStorage.setItem(key, JSON.stringify(storedValue));
}, [key, storedValue]);

return [storedValue, setStoredValue] as[typeof storedValue, typeof setStoredValue]
}


