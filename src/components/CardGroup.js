import Card from './Card'


const CardGroup = ({elements, checkBoxOnCheck}) => {
  return (

    <div className="row">
        {Array.from(elements).map((cardElement, index) => (
            <Card key={index} elements={cardElement} checkBoxOnCheck={checkBoxOnCheck} />
        ))}
    </div>
  )
}

export default CardGroup