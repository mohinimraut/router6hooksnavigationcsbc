import {useLocation,Link} from "react-router-dom";
function UseLocationEx(){
    const location=useLocation();
    console.log(location);
    return(
        <>
        <h1>useLocation Example</h1>
<p>Hello this is UseLocation Page</p>
<p>We are learning react router here</p>
<Link to="/about">Go to About Page</Link>
        </>

    );
}
export default UseLocationEx;