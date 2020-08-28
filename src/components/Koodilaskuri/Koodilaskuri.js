import React from "react";
import "./koodilaskuri.css";
//import testdata from "../testdata.js";

function Koodilaskuri(koodipropsii, koodipropsii2) {
  console.log(
    "// Koodilaskuri   propsii",
    koodipropsii.koodipropsii,
    koodipropsii2
  );
  let propstesti = koodipropsii.data;
  let rivit = koodipropsii.koodipropsii.reverse().map((jotain) => {
    return (
      <div className="rivitbox">
        <div className="tyyppi">{jotain.koodityyppi}</div>
        <div className="tyyppi_pvm"> {jotain.pvm}</div>
        <div className="tyyppi_info"> {jotain.kooditunnit}h </div>
        <div className="tyyppi_tehot">
          {(jotain.tehot / jotain.kooditunnit) * 100}%
        </div>
        <br />
      </div>
    );
  });

  return <div className="koodilaskuri">{rivit}</div>;
}

export default Koodilaskuri;
