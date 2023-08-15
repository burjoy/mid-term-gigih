async function postKomen(id, message){
    const params = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    }
    const ambil_data = await fetch(`https://mid-term-gigih-api.vercel.app/video/${id}/comments/post`, params);
    const response = ambil_data.json();
    console.log(response);
}

export default postKomen
