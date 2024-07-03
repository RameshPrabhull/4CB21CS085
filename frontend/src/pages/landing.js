import { useNavigate } from "react-router-dom";
function Landing(){
    const nav=useNavigate();
    return(
        <>
        <h1>landing</h1>
        <button onClick={()=>nav('\products')}>click</button>
        </>
    )
}
export default Landing;