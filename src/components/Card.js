const Card = ({elements}) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-0">
        <div className="m-4" style={{ height: "209px", border: "1px solid black", borderRadius: "3px" }}>
            {elements}
        </div>
    </div>
  )
}

export default Card