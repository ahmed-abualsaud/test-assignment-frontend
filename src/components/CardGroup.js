import Card from './Card'


const CardGroup = ({constElements, varElements}) => {
  return (

    <div className="row">
        {Array.from(varElements).map((cardElement) => (
            <Card constElements={constElements}  varElements={cardElement}/>
        ))}
    </div>
  )
}

export default CardGroup