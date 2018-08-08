import React from 'react';

const PrivateCard = ({ firstname, lastname, age, job }) => {
  return (
    <section>
      <figure>
        <img src="http://via.placeholder.com/350x150" />
      </figure>
      <ul>
        <li>{ firstname }</li>
        <li>{ lastname }</li>
        <li>{ job }</li>
      </ul>
      { age >= 18 && <p>Can drive</p> }
      { age < 18 && <p>Can't drive</p> }
    </section>
  )
}

export default PrivateCard;
