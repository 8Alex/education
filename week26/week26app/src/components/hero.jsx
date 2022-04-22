import "./hero.css";

function Hero(props) {
  return (
    <div>
      <figure>
        <img className='img' src={props.img} alt='hero' />
        <figcaption>
          <h2>{props.name}</h2>
          <div className='innerContainer'>Вселенная: {props.universe};</div>
          <div className='innerContainer'>Альтер эго: {props.alterEgo};</div>
          <div className='innerContainer'>
            Род деятельности: {props.career};
          </div>
          <div className='innerContainer'>Друзья: {props.friends};</div>
          <div className='innerContainer'>Суперсилы: {props.superpowers};</div>
          <div className='innerContainer'>Подробнее: {props.more}</div>
          <div className='titleRating'>Рейтинг:</div>
          <div className='rating rating_set'>
            <div className='rating__body'>
              <div className='rating__active'></div>
              <div className='rating__items'>
                <input
                  type='radio'
                  className='rating__item'
                  name='rating'
                  value='1'
                />
                <input
                  type='radio'
                  className='rating__item'
                  name='rating'
                  value='2'
                />
                <input
                  type='radio'
                  className='rating__item'
                  name='rating'
                  value='3'
                />
                <input
                  type='radio'
                  className='rating__item'
                  name='rating'
                  value='4'
                />
                <input
                  type='radio'
                  className='rating__item'
                  name='rating'
                  value='5'
                />
              </div>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default Hero;
