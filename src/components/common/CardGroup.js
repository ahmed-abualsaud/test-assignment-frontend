import Card from './Card'


const CardGroup = () => {
  return (

    <div className="row">
        {Array.from({ length: 4 }).map((_, idx) => (
            <Card />
        ))}
    </div>
  )
}

export default CardGroup