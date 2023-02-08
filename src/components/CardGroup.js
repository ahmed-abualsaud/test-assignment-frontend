import Card from './Card'


const CardGroup = ({cardElements}) => {
  return (

    <div className="row">
        {Array.from({ length: 12 }).map((_val, _idx) => (
            <Card  elements={cardElements}/>
        ))}
    </div>
  )
}

export default CardGroup