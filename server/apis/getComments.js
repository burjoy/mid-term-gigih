async function getComments(id){
    const encodedUrl = encodeURI(id);
    const ambil_data = await fetch(`https://mid-term-gigih-api.vercel.app/video/${encodedUrl}/comments`);
    const response = await ambil_data.json();
    console.log(response);
    return response
}

export default getComments;
