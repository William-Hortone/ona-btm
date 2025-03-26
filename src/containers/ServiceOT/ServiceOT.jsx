// import React from "react";
import { HeadText } from "../../components";
import "./serviceOT.css";

// const ServiceOT = () => {
//   return (
//     <div className="app__serviceOT">
//       <div className="app__serviceOT-left-box">
//         <HeadText title="Travaux Tvx" />
//         <h3>
//           Votre Partenaire pour Tous Vos Projets de Construction et de
//           Réhabilitation
//         </h3>
//         <p>
//           Entreprise générale qui vous accompagne dans la réalisation de vos
//           projets de construction ou de réhabilitation, en mettant l'accent sur
//           la qualité et la rigueur. Notre équipe expérimentée et compétente vous
//           garantit des prestations techniques de haut niveau dans divers
//           domaines de la construction.
//         </p>
//       </div>
//       <div className="app__serviceOT-right-box">
//         <ul>
//           <li>Gros oeuvre</li>
//           <li>VRD</li>
//           <li>Maçonnerie</li>
//           <li>Ouvrages "clés en main" </li>
//           <li>Peinture</li>
//           <li>Plomberie</li>
//           <li>Assainissement</li>
//           <li>Pose des pavés</li>
//           <li>Électricité</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ServiceOT;

import * as React from "react";
import { styled } from "@mui/material/styles";
// import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function ServiceOT() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <section className="p-4">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography component="span">Notre Expertise</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Entreprise générale qui vous accompagne dans la réalisation de vos
            projets de construction ou de réhabilitation, en mettant l'accent
            sur la qualité et la rigueur. Notre équipe expérimentée et
            compétente vous garantit des prestations techniques de haut niveau
            dans divers domaines de la construction
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography component="span">Gros Œuvre </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Réalisation des fondations, structures porteuses et des travaux de
            gros œuvre pour garantir la solidité de vos constructions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography component="span">
            VRD (Voirie et Réseaux Divers) :
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Travaux d’aménagements extérieurs, d’assainissement, d’adduction
            d’eau, et d’éclairage public.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography component="span">Maçonnerie</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Construction de murs, cloisons et autres structures en béton ou en
            pierres.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography component="span">Ouvrages "Clés en Main</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Conception et exécution complète de projets, de la planification à
            la remise des clés
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography component="span">Peinture</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Application de peintures intérieures et extérieures pour finition et
            esthétique.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography component="span">Plomberie</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Installation et maintenance des systèmes de plomberie.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography component="span">Assainissement</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Mise en place de solutions pour l'évacuation des eaux usées et
            pluviales.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
      >
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography component="span">Pose de Pavés</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Réalisation d'aménagements extérieurs avec des pavés, pour allées,
            terrasses, etc.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel10"}
        onChange={handleChange("panel10")}
      >
        <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
          <Typography component="span">Électricité</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Installation et mise en conformité des systèmes électriques dans les
            bâtiments.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel11"}
        onChange={handleChange("panel11")}
      >
        <AccordionSummary aria-controls="panel11d-content" id="panel11d-header">
          <Typography component="span">Nos Valeurs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Grâce à une équipe de techniciens et d'ingénieurs qualifiés, ainsi
            qu’à la collaboration avec des partenaires expérimentés, nous
            assurons un suivi rigoureux de chaque étape des travaux, de la
            planification à la réception des chantiers. La qualité, le respect
            des délais, et la sécurité sont au cœur de nos priorités
          </Typography>
        </AccordionDetails>
      </Accordion>
    </section>
  );
}
