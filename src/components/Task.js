import React from 'react';
import { AiOutlineCheck, AiFillPlaySquare} from "react-icons/ai";

function Task(props){
    console.log(props);
let wallp = (props.status) ? "alert alert-success" : "alert alert-dark";


    return(
        // <div style = {{width: 80+"%"}} >
        //     <div class={wallp}  role="alert" >
        //         <div class="d-flex justify-content-between">
        //             <div class="one">
        //                 {props.status ? <AiOutlineCheck/> : <AiFillPlaySquare/>}
        //                 {props.text}
        //             </div>
        //             <div class="two">
        //                 <button onClick={() => props.statusChange(props.id)}>{props.status ? "Done" : "check"}</button>
        //                 <button onClick={() => props.deleteTask(props.id)}>delete</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        //-------------------------------------------------
        <div class="col-lg-4">
        {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
        <img class="bd-placeholder-img rounded-circle" width="140" height="140" src= {props.url}/>
        <h2>{props.name}</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div>
    )
}
export default Task;

