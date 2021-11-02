import React, {useState} from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

function PostForm({ create }) {
    const [post, setPost] = useState({ title: '', body: '' })

    function addNewPost(e) {
        e.preventDefault(); // cancel page reload
    
        const newPost = {
            ...post, id: Date.now()
        }

        create(newPost);

        setPost({ title: '', body: '' }); // clear inputs
      }

    return (
        <form>
            <MyInput 
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text" 
                placeholder="Post name" 
            />
            <MyInput 
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text" 
                placeholder="Post description" 
            />
            <MyButton onClick={addNewPost}>Create Post</MyButton>
      </form>
    )
}


export default PostForm;
