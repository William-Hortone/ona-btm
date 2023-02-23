import React, { useEffect } from "react";
import "./team.css";
import images from "../../constants/images";
import { CardImage, HeadText } from "../../components";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="app__team section__padding">
      <div className="app__team-left-box">
        <HeadText title="Equipe Et Services" />
        <p>
          L'équipe permanente est composée : d'un gérant, par ailleurs
          responsable travaux, d'un ingénieur structure & Économiste, d'un
          ingénieur travaux par ailleurs coordinateur de travaux, de 3 chefs de
          chantier, de 5 compagnons permanents, et d'un nombre variable
          d'intérimaires et de sous-traitant. <br /> <br /> Cette hiérarchie
          très horizontale nous permet une réactivité quasiment instantanée dans
          nos décisions. Le peu de procédure hiérarchique interne nous permet
          également d'être au plus près de nos équipes tout au long des travaux
          et ainsi de maîtriser parfaitement le déroulement d'un projet.
          <br /> Fort de notre expérience et de notre savoir-faire, que vous
          soyez particulier, professionnel, ou collectivité, nous vous
          accompagnons dans tous vos projets de constructions.
          <br /> <br />
          De la conception architecturale, à la réalisation de votre projet, en
          passant par le choix des fournitures ainsi que leurs qualités, Notre
          client demeure présent tout au long de la réalisation du projet. Et
          nos équipes sont disponibles afin d'apporter les conseils nécessaires
          à la réussite de votre projet.
          <br /> <br />
          Nous avons à cœur la réalisation de tous nos chantiers, conformément
          aux normes en vigueur, en respectant les termes de nos engagements,
          tant dans la maîtrise de votre budget que dans les délais de
          réalisation des travaux.
        </p>
      </div>
      <div
        data-aos="fade-left"
        data-aos-once="true"
        className="app__team-right-box"
      >
        <CardImage img={images.boss} />
      </div>
    </div>
  );
};

export default Team;
