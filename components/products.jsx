function Product({iklan}){
    return(
        <div className="w-1/4 bg-white p-4 rounded-l-lg overflow-y-auto">
        <h2 className="text-xl font-semibold mb-2">Featured Product</h2>
        {iklan?.map((barang, index) => (
          <div className="hover:border border-black hover:cursor-pointer p-4 transition-transform transform-gpu hover:scale-105">
          <div className="mb-4" key={index}>
            <img 
              className="w-full h-auto"
              src={barang.productLink}
              alt="Product"/>
          </div>
          <div className="text-lg font-medium" key={index+1}>{barang.productTitle}</div>
          <div className="font-bold" key={index+2}>{`Rp${barang.productPrice}`}</div>
          </div>
        ))}
      </div>
    )
}

export default Product