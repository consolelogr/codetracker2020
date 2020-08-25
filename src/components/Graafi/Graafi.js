import React from "react";
import "./graafi.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

function Graafi(koodipropsii) {
  let graphData = [...koodipropsii.koodipropsii];

  console.log("graphdata= ", graphData);
  return (
    <div className="baarit">
      <BarChart width={CountCode(graphData)} height={300} data={graphData}>
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis dataKey="koodityyppi" />
        <YAxis dataKey="kooditunnit" />
        <Bar dataKey="kooditunnit" stackId="a" fill="#8884d8" />
        <Bar dataKey="tehot" stackId="b" fill="red" />
      </BarChart>
    </div>
  );
} //function Graafi end

function CountCode(turbotiukka) {
  console.log("truboo", turbotiukka);

  let tiukka = 400;
  return tiukka;
}
export default Graafi;
