import "./CSS/arrestedLost.css";
import PeoplesCard from "./PeoplesCard";
import man from "../assets/man.png";

const ArrestedLost = () => {
  const location = window.location.pathname === "/Lost&Arrested";

  return (
    <div
      style={location ? { marginTop: "90px" } : {}}
      className="arrested-lost-container"
    >
      <h1 style={{ textAlign: "center" }}>
        დაკავებული და დაკარგული ადამიანების სია:
      </h1>

      <PeoplesCard
        imageUrl={man}
        personName={"გიორგი ჩოხატაური"}
        lostPlace={"ბათუმი, ჭავჭავაძის ქუჩა"}
        contactNum={"+995 555 55 55 55"}
        status={"დაკარგული"}
      />
    </div>
  );
};

export default ArrestedLost;
