import {useState} from "react"

function App(){
    const [count, setCount] = useState(0);
    return(
        <div>
            <Count count = {count} setCount = {setCount} />
            
        </div>
    )
}

function Count({count, setCount}){
    return <div>
        <CountRenderer count = {count}/>
        <Button count = {count} setCount={setCount}/>
    </div>
}

function CountRenderer({count}){
    const count = 1;
    return <div>
        {count}
    </div>
}

function Button({count, setCount}){
    const count = 1;
    return <div>
        <button onClick = {() => {
            setCount(count+1)
        }}>Increase</button>

        <button onClick = {() => {
            setCount(count-1)
        }}>Decrease</button>
    </div>
}


//                App.jsx
//                   |
//                   |
//                 count
//                  / \ 
//                 /   \
//                /     \
//   CountRenderer       Buttons