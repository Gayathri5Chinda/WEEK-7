import { countAtom } from "./count";

function App(){
    
    return(
        <div>
            <Count/> 
        </div>
    )
}

function Count(){
    return <div>
        <CountRenderer/>
        <Button />
    </div>
}

function CountRenderer(){
    const count= useRecoilValue(countAtom);
    return <div>
        {count}
    </div>
}

function Button(){
    const [count, setCount] = useRecoilState(countAtom);
    return <div>
        <button onClick = {() => {
            setCount(count+1)
        }}>Increase</button>

        <button onClick = {() => {
            setCount(count-1)
        }}>Decrease</button>
    </div>
}


export default App