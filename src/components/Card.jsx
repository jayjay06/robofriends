import React from 'react';

const Card = ({name, email, id }) => {
  return (
    <li className="card tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow">
      <img src={`https://robohash.org/${id}?200x200`} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-email">
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </li>
  );
}
export default Card;