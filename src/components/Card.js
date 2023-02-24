import Checkbox from "../components/Checkbox"
import { arrayIsEmpty } from "../utils/helper"
const Card = ({ elements, checkBoxOnCheck }) => {

  return (
    <>
    {
      arrayIsEmpty(elements) || elements === undefined? <></>:
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-0">
        <div id="card" className="m-4">
          <Checkbox className="delete-checkbox" onCheck={() => checkBoxOnCheck(elements["id"])} />
          <div className="text-center h5 m-1">{elements["sku"]}</div>
          <div className="text-center h5 m-1">{elements["name"]}</div>
          <div className="text-center h5 m-1">{elements["price"]} $</div>
          {
            elements["type"] === "Book"? 
            <div className="text-center h5 m-1">Weight: {elements["weight"]} Kg</div>: 
            elements["type"] === "DVD"?
            <div className="text-center h5 m-1">Size: {elements["size"]} MB</div>: 
            <div className="text-center h5 m-1">Dimensions: {elements["height"]}x{elements["width"]}x{elements["length"]}</div>
          }
        </div>
    </div>
  }
  </>
  )
}

export default Card