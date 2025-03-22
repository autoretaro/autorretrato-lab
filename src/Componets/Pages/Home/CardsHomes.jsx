import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const cardHomeData = [
  {
    imgSrc: "/img/main/EXPOR1.jpeg",
    description: "No dia 14 de dezembro de 2024, ocorreu na comunidade Opalma a exposição e a entrega de certificados da segunda edição do projeto O Autorretrato, no contexto do Laboratório de Fotografia Quilombola. Durante o evento, os jovens participantes apresentaram suas produções fotográficas, que incluíam obras experimentais, conceituais e documentais, abordando temas como identidade e cultura quilombola."
  },
  {
    imgSrc: "/img/main/EXPOR2.jpeg",
    description: "O projeto O Autorretrato está em sua segunda edição e é uma iniciativa de fotografia contemporânea que dá vida ao Laboratório de Fotografia Quilombola. A oficina tem como objetivo formar jovens quilombolas para a produção de fotografias experimentais, conceituais e documentais, ampliando o horizonte artístico nas comunidades quilombolas"
  }
];

const Cards = ({ description, imgSrc, textAlt }) => {
  return (
    <div className="card mb-4 shadow-lg card-responsive">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={imgSrc} className="img-fluid h-100 rounded-start card-image" alt={textAlt} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardsHomes = () => {
  return (
    <article className="container py-4">
      <div className="row justify-content-center">
        {cardHomeData.map((data, index) => (
          <div key={index} className="col-12 col-md-10 col-lg-8">
            <Cards description={data.description} imgSrc={data.imgSrc} textAlt={data.textAlt} />
          </div>
        ))}
      </div>
    </article>
  );
};

export default CardsHomes;
