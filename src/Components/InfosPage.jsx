import "./CSS/infosPage.css";
import protest2 from "../assets/protest2.jpg";
import InfosCard from "./InfosCard";

const InfosPage = () => {
  const location = window.location.pathname === "/InfosPage";

  return (
    <div
      style={location ? { marginTop: "90px" } : {}}
      className="infos-container"
    >
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
