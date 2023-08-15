import { useState } from "react";
import { useGlobalContext } from "../context/context";

function AddComment({onCommentSubmit}){
    const [comment, setComment] = useState('');
    const {name} = useGlobalContext();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (comment.trim() === '') return;
        onCommentSubmit(comment);
        setComment('');
      };
      
    return(
        <>
        {name ? (<form onSubmit={handleFormSubmit} className="mt-4">
          <textarea
            className="w-full p-2 border rounded"
            rows="4"
            placeholder="Add a comment..."
            value={comment.toString()}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Comment
          </button>
        </form>) : (
          <p>To submit comment, please login first</p>
        )}
        </>
    )
}

AddComment.propTypes;
export default AddComment