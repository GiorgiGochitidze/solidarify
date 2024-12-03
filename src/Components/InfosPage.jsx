import "./CSS/infosPage.css";
import protest2 from "../assets/protest2.jpg";
import { useState } from "react";
import InfosCard from "./InfosCard";

const InfosPage = () => {

  return (
    <div className="infos-container">
      <h1>ინფორმაციები და განცხადებები აქციის შესახებ:</h1>

      <div className="infos-list">
        <InfosCard
          imageUrl={protest2}
          cardHeading={`არ დავემორჩილებით რეპრესიულ კანონს და რეჟიმს” – აქცია “ოცნების” ოფისთან.`}
          buttonUrl={""}
        />
        <InfosCard
          imageUrl={protest2}
          cardHeading={`არ დავემორჩილებით რეპრესიულ კანონს და რეჟიმს” – აქცია “ოცნების” ოფისთან.`}
          buttonUrl={""}
        />
        <InfosCard
          imageUrl={protest2}
          cardHeading={`არ დავემორჩილებით რეპრესიულ კანონს და რეჟიმს” – აქცია “ოცნების” ოფისთან.`}
          buttonUrl={""}
        />
      </div>
    </div>
  );
};

export default InfosPage;
