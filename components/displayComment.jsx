function DisplayComment({komentar}){
    return(
    <>
        <h2 className="text-xl font-semibold mb-2">Comments</h2>
        <div
          className="overflow-y-auto"
          style={{ maxHeight: 'calc(100vh - 350px)' }}
        >
          {/* Displayed Comments */}
          {komentar.length > 0 ? (
            komentar.map((komen, index) => (
              <div key={index} className="border-b p-2">
                <div className="font-semibold">{komen?.username}</div>
                 <p>{komen?.comment}</p>
            </div>
          ))
          ) : (
            <p>No comments available.</p>
          )}
        </div>
    </>
    )
}
DisplayComment.propTypes;

export default DisplayComment