import React from 'react';
import PropTypes from 'prop-types';
import Menu from "../../Header/Menu";
import "../Catalog/Catalog.css";

const cardsData = [
  { imageUrl: "/img/iguape/FabianoConceição-1.svg", photographer: "Fabiano Conceição", texAlt: "Imagem de um menino pescando" },
  { imageUrl: "/img/iguape/FabianoConceição-2.svg", photographer: "Fabiano Conceição", texAlt: "Imagem de um menino de cabelo curto" },
  { imageUrl: "/img/iguape/FabianoConceição-3.svg", photographer: "Fabiano Conceição", texAlt: "Imagem de um menino de cabelo longo" },
  { imageUrl: "/img/iguape/FabianoConceição-4.svg", photographer: "Fabiano Conceição", texAlt: "Imagem de um menino de cabelo curto" },
  { imageUrl: "/img/iguape/FabianoConceição-5.svg", photographer: "Fabiano Conceição", texAlt: "Imagem de um menino de cabelo longo" },
  { imageUrl: "/img/iguape/FernandadeJesus-6.svg", photographer: "Fernanda de Jesus", texAlt: "Imagem de um menino de cabelo longo" },

  { imageUrl: "/img/iguape/RayanedeJesus-1.svg", photographer: "Rayane de Jesus", texAlt: "Por do Sol" },
  { imageUrl: "/img/iguape/RayanedeJesus-2.svg", photographer: "Rayane de Jesus", texAlt: "Por do Sol sobre Rio Paraguassu em Santiago do Iguape" },
  { imageUrl: "/img/iguape/RayanedeJesus-3.svg", photographer: "Rayane de Jesus", texAlt: "Por do Sol sobre o Rio Paraguassum com Canoas" },

  { imageUrl: "/img/iguape/RayanedeJesus-5.svg", photographer: "Rayane de Jesus", texAlt: "Por do Sol sobre o Rio Paragussu com Crianças tomando baanho" },
  { imageUrl: "/img/iguape/RayanedeJesus-6.svg", photographer: "Rayane de Jesus", texAlt: "Por do Sol sobre Rio Paraguaçu com crinanças tomando banho" },


  
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
