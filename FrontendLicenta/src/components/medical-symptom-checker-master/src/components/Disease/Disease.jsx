import React, { Component } from "react";
import Patient2 from "../Patient/Patient2";
import "./Disease.css";
// import InfoIcon from "@material-ui/icons/Info";
class Disease extends Component {
  // State
  state = {
    patientInfo: this.props.patientInfo,
    disease_with_possibility: this.props.disease_with_possibility,
  };

  get_current_html = () => {
    const filtered_list = this.state.disease_with_possibility.filter((e) => {
      return e.possibility > 0;
    });
    filtered_list.sort(
      (a, b) =>
        -a.possibility.localeCompare(b.possibility, undefined, {
          numeric: true,
        }) || a.name.localeCompare(b.name)
    );
    return filtered_list.length !== 0 ? (
      <div className="grid-row width-full DiseaseComponent">
        <div className="col-12 tablet:grid-col-12 patientInfo">
          <h3>Sexul pacientului: {this.props.gender}</h3>
          <h3>Varsta pacientului: {this.props.age}</h3>
        </div>
        <div className="col-12 tablet:grid-col-12 patientQuestions">
          {this.state.patientInfo.map((key, id) => (
            <div className="singleQuestion" key={id}>
              <p>{key.question}</p>
              <p>{key.answer}</p>
            </div>
          ))}
        </div>
        <div className="col-12 tablet:grid-col-12 DiagnosisReport">
          <h2>Diagnoza</h2>
          {filtered_list.map((key, id) => (
            <div className="reportDiv" key={id}>
              <div className="display-flex flex-row flex-justify flex-wrap">
                <div className="display-flex flex-align-center titleReport">
                  <h4>{key.name}</h4>
                  <a
                    href={`https://en.wikipedia.org/wiki/${key.name}`}
                    title={"wikipedia"}
                    rel="noopener noreferrer"
                    target="blank"
                  >
                    i
                  </a>
                </div>
                <div className="display-flex flex-align-center Possibility">
                  <p>
                    Posibilitate <span>{key.possibility}%</span>
                  </p>
                  <div className="possibilityProgressBar">
                    <div style={{ width: `${key.possibility}%` }}></div>
                  </div>
                </div>
              </div>
              <div className="diseaseSymptoms">
                <h4>Simptomele afectiunii</h4>
                <ul>
                  {key.disease_symptom.sort().map((item, index) => {
                    return key.symptom_user_has.includes(item) ? (
                      <li key={index} className="active">
                        {item}
                      </li>
                    ) : (
                      <li key={index}>{item}</li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <React.Fragment>
        <div className="grid-row width-full DiseaseComponent">
          <div className="col-12 tablet:grid-col-12 patientInfo">
            <h3>Sexul pacientului: Male</h3>
            <h3>Varsta pacientului: 71</h3>
          </div>
          <p>
            {" "}
            Nu se pot determina posibile afectiuni din cauza lipsei de
            simptomuri. Va rugam sa reincercati analiza cu simptome corecte, sau
            sa sunati la spital daca este o urgenta!
          </p>
        </div>
      </React.Fragment>
    );
  };

  render() {
    return <React.Fragment>{this.get_current_html()}</React.Fragment>;
  }
}

export default Disease;
