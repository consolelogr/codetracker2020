import React from "react";
import "./itemform.css";

/*
function ItemForm(itemformpropsii, itemformpropsii2) {
  console.log(
    "// func Itemform:",
    itemformpropsii.itemformpropsii,
    itemformpropsii2
  );
  return <h1>itemform</h1>;
}
*/

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        koodityyppi: "css",
        pvm: "2020 01 01",
        kooditunnit: 2,
        tehot: 0,
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(
      "// I.F. constructor propsii:",
      this.props.itemformpropsii[0].name,
      this.props.hfm
    );
  }

  handleInputChange(event) {
    // handle individual changes to state of ITEMFORMS.js
    console.log(
      "//Itemform - handleInputChange, event.target.value:",
      event.target.value,
      "event.target.name:",
      event.target.name
    );

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const name = event.target.name;
    this.setState({ data: { ...this.state.data, [name]: value } });
  }

  handleSubmit(event) {
    // Kun painaa lähetä nappia add.js :ssä tämä käynnistyy
    event.preventDefault();
    console.log(
      "itemform - handleSubmit, state:, event:",
      this.state.data,
      event,
      "// ItemForm:  propsit:",
      this.state
    );
    console.log(
      "// pvmdata:",
      this.state.data.pvm

      //                 READ REACT BOOK FIRST
      //
      //                        THEN CODE
      //
      //                    => GOOD RESULTS
      //
      //                      OK?
    );
    this.props.hfm(this.state.data);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="labelbox">
          <label name="koodityyppi">Koodityyppi</label>
        </div>
        <select
          name="koodityyppi"
          value={this.state.data.koodityyppi}
          onChange={this.handleInputChange}
        >
          <option value="html">html</option>
          <option value="css">css</option>
          <option value="js">js</option>
          <option value="react">react</option>
          <option value="php">php</option>
        </select>
        <br />
        <div className="labelbox">
          <label name="pvm">Päivämäärä</label>
        </div>
        <input
          type="date"
          name="pvm"
          value={this.state.data.pvm}
          onChange={this.handleInputChange}
        ></input>
        <br />
        <div className="labelbox">
          <label name="kooditunnit">Kooditunnit</label>
        </div>
        <select
          name="kooditunnit"
          value={this.state.data.kooditunnit}
          onChange={this.handleInputChange}
        >
          <option value="1">1h</option>
          <option value="2">2h</option>
          <option value="3">3h</option>
          <option value="4">4h</option>
          <option value="5">5h</option>
          <option value="6">6h</option>
          <option value="7">7h</option>
          <option value="8">8h</option>
        </select>
        <br />
        <div className="labelbox">
          <label name="tehot">tehot</label>
        </div>
        <select
          name="tehot"
          value={this.state.data.tehot}
          onChange={this.handleInputChange}
        >
          <option value="0">0%</option>
          <option value={0.1 * this.state.data.kooditunnit}>10%</option>
          <option value={0.2 * this.state.data.kooditunnit}>20%</option>
          <option value={0.3 * this.state.data.kooditunnit}>30%</option>
          <option value={0.4 * this.state.data.kooditunnit}>40%</option>
          <option value={0.5 * this.state.data.kooditunnit}>50%</option>
          <option value={0.6 * this.state.data.kooditunnit}>60%</option>
          <option value={0.7 * this.state.data.kooditunnit}>70%</option>
          <option value={0.8 * this.state.data.kooditunnit}>80%</option>
          <option value={0.9 * this.state.data.kooditunnit}>90%</option>
          <option value={1 * this.state.data.kooditunnit}>100%</option>
        </select>
        <br />
        <br />
        <button type="submit">Lisää</button>
        <button>Peruuta</button>
      </form>
    ); //return end
  }
}
export default ItemForm;
