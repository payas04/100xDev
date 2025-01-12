import {atom, selector} from 'recoil'

export const counterState = atom({
    key: 'counterState',
    default: 0
})

// like in useState we need to use useMemo so that 
//the  expensive function does not get calculated everytime 
//instead we use selector in Recoil 
export const isEven = selector({
    key: "isEven",
    get: ({get})=>{
        const counter = get(counterState);
        if(counter % 2 ===0){
            return 'It is Even';
        }   
    }
})