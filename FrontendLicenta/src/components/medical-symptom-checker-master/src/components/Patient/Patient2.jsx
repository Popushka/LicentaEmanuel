import React, { Component } from "react";
import "./Patient.css";
class Patient2 extends Component {
  state = {
    question_1: "",
    question_2: "",
    question_3: "",
    question_4: "",
    question_5: "",
    question_6: "",
    next_button_available: "",
    all_answer: [],
  };
  handleOnChange = (e) => {
    let state = this.state;
    let nextButton = () => {
      return state.question_1 !== "" &&
        state.question_2 !== "" &&
        state.question_2 !== "" &&
        state.question_3 !== "" &&
        state.question_4 !== "" &&
        state.question_5 !== "" &&
        state.question_6 !== ""
        ? "Disponibil"
        : "Nu e disponibil";
    };

    console.log(e);

    let setObject = () => {
      return [
        {
          question: "Pacientul este supraponderal sau obez",
          answer: this.state.question_1,
        },
        {
          question: "Pacientul fumează țigări",
          answer: this.state.question_2,
        },
        {
          question: "Pacientul a fost rănit recent",
          answer: this.state.question_3,
        },
        {
          question: "Pacientul are colesterolul ridicat",
          answer: this.state.question_4,
        },
        {
          question: "Pacientul are hipertensiune arterială",
          answer: this.state.question_5,
        },
        {
          question: "Pacientul are diabet",
          answer: this.state.question_6,
        },
      ];
    };
    // eslint-disable-next-line default-case
    // console.log(e.target.className);
    switch (e.target.className) {
      case "usa-radio__input I_am_overweight_or_obese":
        this.setState(
          {
            question_1: e.target.value,
          },
          () => {
            this.props.callback(setObject());
          }
        );
        return this.setState({
          all_answer: setObject(),
        });
      case "usa-radio__input I smoke cigarettes":
        this.setState(
          {
            question_2: e.target.value,
          },
          () => {
            this.props.callback(setObject(), nextButton());
          }
        );
        return this.setState({
          all_answer: setObject(),
        });
      case "usa-radio__input I have been recently injured":
        this.setState(
          {
            question_3: e.target.value,
          },
          () => {
            this.props.callback(setObject(), nextButton());
          }
        );
        return this.setState({
          all_answer: setObject(),
        });
      case "usa-radio__input I have high cholesterol":
        this.setState(
          {
            question_4: e.target.value,
          },
          () => {
            this.props.callback(setObject(), nextButton());
          }
        );
        return this.setState({
          all_answer: setObject(),
        });
      case "usa-radio__input I have hypertension":
        console.log(e.target.value);
        this.setState(
          {
            question_5: e.target.value,
          },
          () => {
            this.props.callback(setObject(), nextButton());
          }
        );
        return this.setState({
          all_answer: setObject(),
        });

      case "usa-radio__input I have diabetes":
        this.setState(
          {
            question_6: e.target.value,
          },
          () => {
            this.props.callback(setObject(), nextButton());
          }
        );
        return this.setState({
          all_answer: setObject(),
        });
    }
  };

  render() {
    return (
      <div id="Patient2" className="tablet:grid-col padding-x-2">
        <div className="width-full flex-column flex-align-center">
          <h2 style={{ marginBottom: "15px" }}>
            {" "}
            Vă rugăm să verificați toate declarațiile de mai jos care vi se
            aplică
          </h2>
          <p> Selectați câte un răspuns pe fiecare rând </p>
        </div>
        <div className="radioButtonDiv ">
          <h3>Sunt supraponderal</h3>
          <form className="usa-form FormElement">
            <div className="usa-radio margin-x-1">
              <input
                className="usa-radio__input I_am_overweight_or_obese"
                onChange={this.handleOnChange}
                id="overweight_Yes"
                type="radio"
                checked={this.state.question_1 === "Da"}
                value={"Da"}
                name="overweight"
              />
              <label className="usa-radio__label" for="overweight_Yes">
                Da
              </label>
            </div>
            <div className="usa-radio margin-x-1">
              <input
                className="usa-radio__input I_am_overweight_or_obese"
                onChange={this.handleOnChange}
                id="overweight_No"
                type="radio"
                checked={this.state.question_1 === "Nu"}
                value={"Nu"}
                name="overweight"
              />
              <label className="usa-radio__label" for="overweight_No">
                Nu
              </label>
            </div>
            <div className="usa-radio margin-x-1">
              <input
                className="usa-radio__input I_am_overweight_or_obese"
                onChange={this.handleOnChange}
                id="overweight_doesno"
                type="radio"
                checked={this.state.question_1 === "Pacientul nu știe"}
                value={"Pacientul nu știe"}
                name="overweight"
              />
              <label className="usa-radio__label" for="overweight_doesno">
                Nu stiu
              </label>
            </div>
          </form>
        </div>
        <div className="radioButtonDiv">
          <h3>Fumez</h3>
          <form className="usa-form FormElement">
            <div className="usa-radio margin-x-1">
              <input
                className="usa-radio__input I smoke cigarettes"
                onChange={this.handleOnChange}
                id="cigarettes_yes"
                type="radio"
                checked={this.state.question_2 === "Da"}
                value={"Da"}
                name="cigarettes"
              />
              <label className="usa-radio__label" for="cigarettes_yes">
                Da
              </label>
            </div>
            <div className="usa-radio margin-x-1">
              <input
                className="usa-radio__input I smoke cigarettes"
                onChange={this.handleOnChange}
                id="cigarettes_no"
                type="radio"
                checked={this.state.question_2 === "Nu"}
                value={"Nu"}
                name="cigarettes"
              />
              <label className="usa-radio__label" for="cigarettes_no">
                Nu
              </label>
            </div>
            <div className="usa-radio margin-x-1">
              <input
                className="usa-radio__input I smoke cigarettes"
                onChange={this.handleOnChange}
                id="cigarettes_doesno"
                type="radio"
                checked={this.state.question_2 === "Pacientul nu știe"}
                value={"Pacientul nu știe"}
                name="cigarettes"
              />
              <label className="usa-radio__label" for="cigarettes_doesno">
                Nu stiu
              </label>
            </div>
          </form>
        </div>
        <div className="radioButtonDiv">
          <h3>Am fost rănit recent</h3>
          <form className="usa-form FormElement">
            <div className="usa-radio margin-x-1">
              <input
                className="usa-radio__input I have been recently injured"
                onChange={this.handleOnChange}
                id="injured_yes"
                type="radio"
                checked={this.state.question_3 === "Da"}
                value={"Da"}
                name="injured"
              />
              <label className="usa-radio__label" for="injured_yes">
                Da
              </label>
            </div>
            <div className="usa-radio margin-x-1">
              <input
                className="usa-radio__input I have been recently injured"
                onChange={this.handleOnChange}
                id="injured_no"
                type="radio"
                checked={this.state.question_3 === "Nu"}
                value={"Nu"}
                name="injured"
              />
              <label className="usa-radio__label" for="injured_no">
                Nu
              </label>
            </div>
            <div className="usa-radio margin-x-1">
              <input
                className="usa-radio__input I have been recently injured"
                onChange={this.handleOnChange}
                id="injured_doesno"
                type="radio"
                checked={this.state.question_3 === "Pacientul nu știe"}
                value={"Pacientul nu știe"}
                name="injured"
              />
              <label className="usa-radio__label" for="injured_doesno">
                Nu stiu
              </label>
            </div>
          </form>
        </div>
        <div className="radioButtonDiv">
          <h3>Am colesterolul mare</h3>
          <form className="usa-form FormElement">
            <div className="usa-radio margin-x-1">
              <input
                className="usa-radio__input I have high cholesterol"
                onChange={this.handleOnChange}
                id="cholesterol_yes"
                type="radio"
                checked={this.state.question_4 === "Da"}
                value={"Da"}
                name="cholesterol"
              />
              <label className="usa-radio__label" for="cholesterol_yes">
                Da
              </label>
            </div>
            <div className="usa-radio margin-x-1">
              <input
                className="usa-radio__input I have high cholesterol"
                onChange={this.handleOnChange}
                id="cholesterol_no"
                type="radio"
                checked={this.state.question_4 === "Nu"}
                value={"Nu"}
                name="cholesterol"
              />
              <label className="usa-radio__label" for="cholesterol_no">
                Nu
              </label>
            </div>
            <div className="usa-radio margin-x-1">
              <input
                className="usa-radio__input I have high cholesterol"
                onChange={this.handleOnChange}
                id="cholesterol_doesno"
                type="radio"
                checked={this.state.question_4 === "Pacientul nu știe"}
                value={"Pacientul nu știe"}
                name="cholesterol"
              />
              <label className="usa-radio__label" for="cholesterol_doesno">
                Nu stiu
              </label>
            </div>
          </form>
        </div>
        <div className="radioButtonDiv">
          <h3>Am hipertensiune arteriala</h3>
          <form className="usa-form FormElement">
            <div className="usa-radio margin-x-1">
              <input
                className="usa-radio__input I have hypertension"
                onChange={this.handleOnChange}
                id="hypertension_yes"
                type="radio"
                checked={this.state.question_5 === "Da"}
                value={"Da"}
                name="hypertensionl"
              />
              <label className="usa-radio__label" for="hypertension_yes">
                Da
              </label>
            </div>
            <div className="usa-radio margin-x-1">
              <input
                className="usa-radio__input I have hypertension"
                onChange={this.handleOnChange}
                id="hypertension_no"
                type="radio"
                checked={this.state.question_5 === "Nu"}
                value={"Nu"}
                name="hypertensionl"
              />
              <label className="usa-radio__label" for="hypertension_no">
                Nu
              </label>
            </div>
            <div className="usa-radio margin-x-1">
              <input
                className="usa-radio__input I have hypertension"
                onChange={this.handleOnChange}
                id="hypertension_doesno"
                type="radio"
                checked={this.state.question_5 === "Pacientul nu știe"}
                value={"Pacientul nu știe"}
                name="hypertensionl"
              />
              <label className="usa-radio__label" for="hypertension_doesno">
                Nu stiu
              </label>
            </div>
          </form>
        </div>
        <div className="radioButtonDiv">
          <h3>Am diabet</h3>
          <form className="usa-form FormElement">
            <div className="usa-radio margin-x-1">
              <input
                className="usa-radio__input I have diabetes"
                onChange={this.handleOnChange}
                id="diabetes_yes"
                type="radio"
                checked={this.state.question_6 === "Da"}
                value={"Da"}
                name="diabetes"
              />
              <label className="usa-radio__label" for="diabetes_yes">
                Da
              </label>
            </div>
            <div className="usa-radio margin-x-1">
              <input
                className="usa-radio__input I have diabetes"
                onChange={this.handleOnChange}
                id="diabetes_no"
                type="radio"
                checked={this.state.question_6 === "Nu"}
                value={"Nu"}
                name="diabetes"
              />
              <label className="usa-radio__label" for="diabetes_no">
                Nu
              </label>
            </div>
            <div className="usa-radio margin-x-1">
              <input
                className="usa-radio__input I have diabetes"
                onChange={this.handleOnChange}
                id="diabetes_doesno"
                type="radio"
                checked={this.state.question_6 === "Pacientul nu știe"}
                value={"Pacientul nu știe"}
                name="diabetes"
              />
              <label className="usa-radio__label" for="diabetes_doesno">
                Nu stiu
              </label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Patient2;
