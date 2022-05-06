import "./card.css";

function Card(props) {
  const selectedСard = props.selected ? "selectedСard" : "";

  const handleClick = () => {
    props.onClick(props.id);
  };

  return (
    <div
      className={`cardContainer ${selectedСard}`}
      onClick={handleClick}
      id={props.id}>
      <div className={props.color}>
        <div className='cardRate'>Безлимитный {props.rate}</div>
        <div className='cardPrice'>
          <span className='cardPrice__rub'>руб</span>
          <span className='cardPrice__fontSize'>{props.price}</span>
          <span className='cardPrice__month'>/мес</span>
        </div>
      </div>
      <div className='cardFooter'>
        <div className='cardMegabit'>до {props.megabit} Мбит/сек</div>
        <div className='cardInfo'>Объем включенного трафика не ограничен</div>
      </div>
    </div>
  );
}

export default Card;
