import React from 'react';
import PropTypes from 'prop-types';
import Menu from "../../Header/Menu";
import "../Catalog/Catalog.css";

const cardsData = [
  { imageUrl: "/src/assets/img/iguape/FabianoConceição-1.jpg", photographer: "Fabiano Conceição", texAlt: "Imagem de um menino pescando" },
  { imageUrl: "/src/assets/img/iguape/FabianoConceição-2.jpg", photographer: "Fabiano Conceição", texAlt: "Imagem de um menino de cabelo curto" },
  { imageUrl: "/src/assets/img/iguape/FabianoConceição-3.jpg", photographer: "Fabiano Conceição", texAlt: "Imagem de um menino de cabelo longo" },
  { imageUrl: "/src/assets/img/iguape/FabianoConceição-4.jpg", photographer: "Fabiano Conceição", texAlt: "Imagem de um menino de cabelo curto" },
  { imageUrl: "/src/assets/img/iguape/FernandadeJesus-6.jpg", photographer: "Fabiano Conceição", texAlt: "Imagem de um menino de cabelo longo" }
];

const Catalog = ({ photo, photographer, texAlt }) => {
  return (
    <div className="box-cards">
      <img src={photo} alt={texAlt} className="photoCard" />
      <h4>{photographer}</h4>
    </div>
  );
};

Catalog.propTypes = {
  photo: PropTypes.string.isRequired,
  photographer: PropTypes.string.isRequired,
  texAlt: PropTypes.string.isRequired
};

const CatalogComponent = () => {
  return (
    <div>
      <Menu />
      <article>
        <h1 className="title">Autorretrato Lab</h1>
        <div className="container">
          <div className="row">
            {cardsData.map((card, index) => (
              <div className="col-12 col-md-6" key={index}>
                <Catalog photo={card.imageUrl} photographer={card.photographer} texAlt={card.texAlt} />
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default CatalogComponent;
