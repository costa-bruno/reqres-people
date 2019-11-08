import React from 'react';

import './card.scss';

const Card = (props) => {

  const { avatar, firstName, action } = props;

  return (
    <div className="card" onClick={action}>
      <img src={avatar} alt="avatar" className="avatar"/>
      <div className="cardInfo">
        <span className="nameInfo">{firstName}</span>
      </div>
    </div>
  )
}

export default Card;
