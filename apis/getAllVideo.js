async function getAllVideos() {
    const ambil_data = await fetch("http://localhost:3000");
    const response = await ambil_data.json();
    console.log(response);
    return response
}

export default getAllVideos