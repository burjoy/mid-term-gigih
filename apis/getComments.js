async function getComments(id){
    const encodedUrl = encodeURI(id);
    const ambil_data = await fetch(`http://localhost:3000/video/${encodedUrl}/comments`);
    const response = await ambil_data.json();
    console.log(response);
    return response
}

export default getComments;