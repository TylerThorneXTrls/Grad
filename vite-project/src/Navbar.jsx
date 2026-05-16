import {Link} from "react-router-dom";

export default function Nav (){
    
return (
    <nav> 
    <Link  className= "nav-link" to="./">Home</Link> 
    <Link  className="nav-link" to="./Form">Form</Link>
    </nav>

)
   

    
}