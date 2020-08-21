import React from "react";
import "./itemform.css";

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        koodityyppi: "css",
        pvm: "2020 01 01",
        kooditunnit: "2h",
        tehot: "0%",
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
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
      "itemform - handleSubmit, state:",
      this.state.data,
      "props:",
      this.props
    );
    console.log("// pvmdata:", this.state.data.pvm);
    this.handleFormSubmit(this.state.data);
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
          <option value="1h">1h</option>
          <option value="2h">2h</option>
          <option value="3h">3h</option>
          <option value="4h">4h</option>
          <option value="5h">5h</option>
          <option value="6h">6h</option>
          <option value="7h">7h</option>
          <option value="8h">8h</option>
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
          <option value="0%">0%</option>
          <option value="10%">10%</option>
          <option value="20%">20%</option>
          <option value="30%">30%</option>
          <option value="40%">40%</option>
          <option value="50%">50%</option>
          <option value="60%">60%</option>
          <option value="70%">70%</option>
          <option value="80%">80%</option>
          <option value="90%">90%</option>
          <option value="100%">100%</option>
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
