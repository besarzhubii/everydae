import "./Widget.scss";
const Widget = (props) => {
  const { text, extraText, value, icon } = props;
  return (
    <div className="widget mb-3 mt-3">
      <img src={icon} alt="Img not found" className="icon" />
      <div className="midText">
        <span className="boldText">{value}</span>{" "}
        <span className="additionals">{extraText}</span>
      </div>
      <span className="lightText">{text}</span>
    </div>
  );
};

export default Widget;
