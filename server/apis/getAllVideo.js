async function getAllVideos() {
    const ambil_data = await fetch("https://mid-term-gigih-api.vercel.app/");
    const response = await ambil_data.json();
    console.log(response);
    return response
}

export default getAllVideos
