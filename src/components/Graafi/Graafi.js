import React from "react";
import "./graafi.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

function Graafi(koodipropsii) {
  let propsii = [...koodipropsii.koodipropsii];
  //propsii[0].unshift( {kooditunnityht: "testi" }  );
  /*let kooditunnit = koodipropsii.koodipropsii[0].kooditunnit.map(
    (x) => graphData[0].push
  );*/

  
  let htmltunnit=0, csstunnit=0, reacttunnit =0, jstunnit =0, gittunnit =0;
  let htmltehot=0, csstehot=0, reacttehot =0, jstehot =0, gittehot =0;
  let graphData = [];

  for (var i = 0; i <= propsii.length - 1; i++) {
    
      if (propsii[i].koodityyppi === "html") {
      htmltunnit += Number.parseInt(propsii[i].kooditunnit);
      htmltehot +=  Number.parseFloat(propsii[i].tehot);
      console.log("// html", htmltunnit,htmltehot);
    }

    if (propsii[i].koodityyppi === "css") {
      csstunnit += Number.parseInt(propsii[i].kooditunnit);
      csstehot +=  Number.parseFloat(propsii[i].tehot);
      console.log("// css", csstunnit,csstehot);
    }
    if (propsii[i].koodityyppi === "react") {
      reacttunnit += Number.parseInt(propsii[i].kooditunnit);
      reacttehot +=  Number.parseFloat(propsii[i].tehot);
      console.log("// html", reacttunnit,reacttehot);
    }
    if (propsii[i].koodityyppi === "js") {
      jstunnit += Number.parseInt(propsii[i].kooditunnit);
      jstehot +=  Number.parseFloat(propsii[i].tehot);
      console.log("// js", jstunnit,jstehot);
    }
    if (propsii[i].koodityyppi === "git") {
      gittunnit += Number.parseInt(propsii[i].kooditunnit);
      gittehot +=  Number.parseFloat(propsii[i].tehot);
      console.log("// git", gittunnit,gittehot);
    }
  }

  graphData.push( {koodiyht : "html", tunnityht : htmltunnit, tehotyht : htmltehot })
  graphData.push( {koodiyht : "css", tunnityht : csstunnit, tehotyht : csstehot })
  graphData.push( {koodiyht : "js", tunnityht : jstunnit, tehotyht : jstehot })
  graphData.push( {koodiyht : "react", tunnityht : reacttunnit, tehotyht : reacttehot })
  graphData.push( {koodiyht : "git", tunnityht : gittunnit, tehotyht : gittehot })

  
  /*propsii.push( {htmltunnityht : htmltunnit })
  propsii.push( {htmltunnityht : htmltunnit })
  propsii.push( {htmltunnityht : htmltunnit })
  propsii.push( {htmltunnityht : htmltunnit })*/
  console.log(propsii);
  

  /*
  Väsää toi
  best = [
  {koodityyppi: "html", kooditunnityht: 0, tehotavg: 0  }
  ]
  */
  return (

    <div className="baarit">
      <BarChart width={400} height={300} data={graphData}>
        <CartesianGrid strokeDasharray="8 8" />
        <XAxis dataKey="koodiyht" />
        <YAxis dataKey="tunnityht" />
        <Bar dataKey="tunnityht" stackId="a" fill="blue" />
        <Bar dataKey="tehotyht" stackId="b" fill="#8884d8" dataPointWidth="5" />
      </BarChart>
      
    </div>
  );
} //function Graafi end


export default Graafi;
