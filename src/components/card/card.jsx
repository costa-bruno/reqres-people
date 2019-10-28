import React from 'react';

import './card.scss';

const Card = (props) => {

  const { avatar, firstName, lastName, email } = props;

  return (
    <div className="card">
      <img src={avatar} alt="" className="avatar"/>
      <div className="cardInfo">
        <span className="nameInfo">{`${firstName} ${lastName}`}</span>
        <span className="emailInfo">{email}</span>
      </div>
    </div>
  )
}

export default Card;
