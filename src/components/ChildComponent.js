export const ChildComponent = (props) =>{
    return <button onClick={()=>props.greetHandler('childu chinna')}>
        Greet Parent
    </button>
}