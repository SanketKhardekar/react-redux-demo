import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addPost } from "./postSlice"
const AddPost=(props)=>{
    const dispatch=useDispatch();
    const  [title, setTitle]=useState("");
    const [body, setBody]=useState('');
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        const addData={
            userId:10,
            id:101,
            title,
            body,
        }
        dispatch(addPost(addData));
    }
    return(
        <form style={{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"flex-start"}} onSubmit={onSubmitHandler}>
            <label style={{textAlign:"left",marginBottom:"20px"}}>Post Title</label>
            <input type="text" id="title" value={title} required onChange={(e)=>{ setTitle(e.target.value)}}/>
            <label style={{textAlign:"left",marginBottom:"20px", marginTop:"20px"}}>Post Body</label>
            <input type="text" id="body" value={body} aria-multiline required onChange={(e)=>{ setBody(e.target.value)}}/>
            <button type="submit" style={{textAlign:"left",height:"30px", marginTop:"20px"}}>Add Post</button>
        </form>
    );
}

export default AddPost;