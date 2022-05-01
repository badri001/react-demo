import { ChildComponent } from "./ChildComponent"

export const ParentComponent =()=>{
    const greetParent = (childName)=>{
        alert (`Hello Parent of ${childName} `)
    }
    return <ChildComponent greetHandler={greetParent}/>
}