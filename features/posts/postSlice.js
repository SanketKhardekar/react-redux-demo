import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  posts: [],
  isError: null,
};

export const getPosts = createAsyncThunk("posts/getPosts", async (thunkApi) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const resData = await response.json();
    return resData;
  } catch (error) {
    throw error;
  }
});

export const addPost=createAsyncThunk("posts/addPost", async(newPost)=>{
    try{
        const response= await fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPost)
        })
        if(!response.ok)
        {
            throw Error("Something Went Wrong!")
        }
        return newPost;
    }
    catch(error)
    {
        throw error;
    }
});

const postSlice= createSlice({
    name:"post",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getPosts.pending,(state)=>{
                state.isLoading=true;
        });
        builder.addCase(getPosts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.posts=action.payload;
            state.isError="";
        })
        builder.addCase(getPosts.rejected,(state,action)=>{
            state.isLoading=false;
            state.posts=[];
            state.isError=action.error.message;
        })
        builder.addCase(addPost.pending,(state)=>{
            state.isLoading=true;
    });
    builder.addCase(addPost.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.posts.push(action.payload);
        state.isError="";
    })
    builder.addCase(addPost.rejected,(state,action)=>{
        state.isLoading=false;
        state.posts=[];
        state.isError=action.error.message;
    })
    
    }
})

export default postSlice.reducer;