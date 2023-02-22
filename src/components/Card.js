const Card = ({constElements, varElements}) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-0">
        <div className="m-4" style={{ height: "209px", border: "1px solid black", borderRadius: "3px" }}>
            {constElements}
            <div className="text-center h5 m-1">{varElements["sku"]}</div>
            <div className="text-center h5 m-1">{varElements["name"]}</div>
            <div className="text-center h5 m-1">{varElements["price"]} $</div>
            {
              varElements["type"] === "Book"? 
              <div className="text-center h5 m-1">Weight: {varElements["weight"]} Kg</div>: 
              varElements["type"] === "DVD-disc"?
              <div className="text-center h5 m-1">Size: {varElements["size"]} MB</div>: 
              <div className="text-center h5 m-1">Dimensions: {varElements["height"]}x{varElements["width"]}x{varElements["length"]}</div>
            }
        </div>
    </div>
  )
}

export default Card