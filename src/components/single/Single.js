import React from "react";
import "./single.scss";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function Single(props) {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {props.image && (
              <img
                src={props.image || "https://i.ibb.co/1KwfzCK/Noavatar.jpg"}
                alt=""
              />
            )}
            <h1>{props.name}</h1>
            <button>Update</button>
          </div>    
          <div className="details">
            <div className="item">
              <div className="itemWrapper">
                <span className="itemTitle">Email</span>
                <span className="itemValue">{props.email}</span>
              </div>
              <div className="itemWrapper">
                <span className="itemTitle">Phone</span>
                <span className="itemValue">{props.mobilenumber}</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {props.chart && (
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {props.chart.dataKeys.map((dataKey) => (
                  <Line
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className="activities">
        <h2>Latest Activities</h2>
        {props.activities && (
          <ul>
            {props.activities.map((activity) => (
              <li key={activity.text}>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
