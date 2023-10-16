import React from "react";

/**
 * Render a card component with the provided name and image.
 *
 * @param {object} props - The properties object.
 * @param {string} props.name - The name of the card.
 * @param {string} props.img - The image file name.
 * @return {JSX.Element} The rendered card component.
 */
function Card({ name, img }) {
  return (
    <div className="card">
      <a href="">
        <img className="cardimg" src={require(`../images/${img}`)} alt={name} />
      </a>
      <h1 className="cardtitle">{name}</h1>
      <a
        className="cardlink"
        target="_blank"
        href={`https://api.whatsapp.com/send?phone=5511976478132&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20o%20or%C3%A7amento%20de%3A%20${name}`}
      >
        <button className="cardbutton">Solicitar o orçamento</button>
      </a>
    </div>
  );
}

export default Card;
