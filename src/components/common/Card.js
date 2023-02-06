import Checkbox from "./Checkbox"

const Card = () => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-0">
        <div className="m-4" style={{ height: "211px", border: "1px solid black", borderRadius: "3px" }}>
            <Checkbox />
            <div className="text-center m-1">SKU</div>
            <div className="text-center m-1">Name</div>
            <div className="text-center m-1">Price</div>
            <div className="text-center m-1">Description</div>
        </div>
    </div>
  )
}

export default Card