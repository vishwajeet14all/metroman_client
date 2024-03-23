import React from "react";
import "./adminHome.scss";
import TopBox from "../../../components/topBox/TopBox";
import ChartBox from "../../../components/chartBox/ChartBox";

export default function Adminhome() {
  return (
    <div className="adHome">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox />
      </div>
      <div className="box box3">Box 3</div>
      <div className="box box4">Box 4</div>
      <div className="box box5">Box 5</div>
      <div className="box box6">Box 6</div>
      <div className="box box7">Box 7</div>
      <div className="box box8">Box 8</div>
      <div className="box box9">Box 9</div>
    </div>
  );
}
