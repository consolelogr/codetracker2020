import React from "react";
import "./koodilaskuri.css";

function Koodilaskuri(koodipropsii, koodipropsii2) {
  console.log(
    "// Koodilaskuri   propsii",
    koodipropsii.koodipropsii,
    koodipropsii2
  );
  let x= 0;
  let rivit = koodipropsii.koodipropsii.reverse().map((jotain) => {
    return (
      <div key={x=x+1} className="rivitbox">
        <div key="key1" className="tyyppi">{jotain.koodityyppi}</div>
        <div key="key2" className="tyyppi_pvm"> {jotain.pvm}</div>
        <div key="key3" className="tyyppi_info"> {jotain.kooditunnit}h </div>
        <div key="key4" className="tyyppi_tehot">
          { (jotain.tehot / jotain.kooditunnit) * 100}%
        </div>
        <br />
      </div>
    );
  });

  return <div key="key5" className="koodilaskuri">{rivit}</div>;
}

export default Koodilaskuri;
