import React from "react";
import "./description.css";
import images from "../../constants/images";
import { HeadText, AnimateDiv } from "../../components";

const Description = () => {
  return (
    <div className="app__description section__padding">
      <div className="app__description-left-box">
        <HeadText title="Ona Bâtiment" />
        <h2 className="text-black">Où nous construisons vos visions</h2>
        <p>
          Chez ONA Bâtiment, nous transformons vos idées en réalisations
          concrètes grâce à l’expertise de nos équipes en études et travaux.
          Nous garantissons à nos clients et partenaires une exécution précise,
          optimisée et conforme aux normes les plus exigeantes. <br /> <br />
          Notre double compétence en maîtrise d’œuvre et en entreprise générale
          nous permet d’intervenir à chaque étape de votre projet, en assurant
          une gestion rigoureuse des coûts, des délais et de la qualité
          <br /> <br />
          Excellence dans l’exécution des travaux Nos équipes travaux disposent
          des meilleurs outils et techniques modernes pour mener à bien chaque
          chantier, en assurant une qualité irréprochable et le respect des
          normes en vigueur.
          <br /> 
          Avec ONA Bâtiment, vous bénéficiez d’un partenaire fiable et
          compétent, capable de répondre à toutes vos exigences avec rigueur et
          professionnalisme.
        </p>
      </div>
      <div className="app__description-right-box">
      <div className="">

        <AnimateDiv image={images.building11} />
      </div>
      </div>
    </div>
  );
};

export default Description;
