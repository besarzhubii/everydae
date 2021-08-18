import Widget from "../Widget/Widget";
import icon1 from "../../Icons/icon1.png";
import icon2 from "../../Icons/icon2.png";
import icon3 from "../../Icons/icon3.png";
import icon4 from "../../Icons/icon4.png";
const WidgetDisplayer = (props) => {
  const { data } = props;
  return (
    <div className="row">
      <div className="col-sm-6">
        <Widget
          text="Days until exam"
          icon={icon1}
          extraText={null}
          value={data?.days_until_exam}
        />
      </div>
      <div className="col-sm-6">
        <Widget
          text="Target sat score"
          icon={icon2}
          extraText="+"
          value={data?.target_sat_score}
        />
      </div>
      <div className="col-sm-6">
        <Widget
          text="challenges completed this week"
          icon={icon3}
          extraText={null}
          value={data?.total_finished}
        />
      </div>
      <div className="col-sm-6">
        <Widget
          text="total study time on everydae"
          icon={icon4}
          extraText="hrs"
          value={data?.hours_spent}
        />
      </div>
    </div>
  );
};

export default WidgetDisplayer;
