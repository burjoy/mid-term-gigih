import React, { useState, useContext, useEffect } from 'react';
import getComments from '../server/apis/getComments';
// import { GlobalContext } from '../context/context';
import { useGlobalContext } from '../context/context';
import Product from '../components/products';
import VideoPlayer from '../components/videoPlayer';
import DisplayComment from '../components/displayComment';
import AddComment from '../components/addComment';
import postKomen from '../server/apis/postComment';
import getProducts from '../server/apis/getProducts';

const MediaPlayers = ({id}) => {
  const {name} = useGlobalContext();
  const [komentar, setKomentar] = useState([]);
  const [product, setProduct] = useState([]);

  //To call comments and products
  useEffect(() => {
    const fetchKomentar = async () => {
      const komen = await getComments(id);
      if(komen.length){
        setKomentar(komen);
      }
      console.log(komen);
    };
    fetchKomentar();

    const fetchProduk = async () => {
      const produk = await getProducts(id);
      console.log(produk);
      setProduct(produk);
    }
    fetchProduk();
  }, [id]);

  const handleCommentSubmit = (newCommentText) => {
    const komenBaru = {
      Name: name, // Replace with the actual username
      Comment: newCommentText,
    };
    postKomen(id, komenBaru)
    .then(() => setKomentar((prevComment) => {
      return [...prevComment, {
        username: name,
        comment: newCommentText
      }]}));
    // setComments((prevComments) => [newComment, ...prevComments]);
  };

  return (
    <div className='flex justify-center h-screen items-center'>
    <div className="flex flex-row h-[85%] bg-gray-100 w-[85%] rounded-lg">
      {/*Product*/}
      <Product iklan={product}/>

      {/* Video Player */}
      <VideoPlayer id={id}/>

      {/* Comment Section */}
      <div className="w-1/4 bg-white p-4 rounded-r-lg">
        <DisplayComment
        komentar={komentar}/>

        {/* Add Comment Form */}
        <AddComment 
        onCommentSubmit={handleCommentSubmit}/>
      </div>
    </div>
    </div>
  );
};

export default MediaPlayers;
