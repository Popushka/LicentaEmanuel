import React, { Component } from "react";
import "./Home.css";

const Home = (props) => {
  //   console.log("is checked", props, props.isChecked, props.checked);
  return (
    <React.Fragment>
      <div id="Home" className="tablet:grid-col padding-x-2">
        <p>
          Înainte de a utiliza acest verificator de simptome, vă rugăm să citiți
          cu atenție și să acceptați Termenii și serviciile noastre:
        </p>
        <ul>
          <li>Acest control nu este un diagnostic.</li>
          <li>
            Acest control are scop informativ și nu este o opinie medicală
            calificată.
          </li>
          <li>
            Informațiile pe care le furnizați sunt anonime și nu sunt partajate
            cu nimeni. De asemenea, nu stocăm nicio informație pe serverul
            nostru.
          </li>
        </ul>
        <form class="usa-form TermsCheckbox">
          <div class="usa-checkbox">
            <input
              checked={props.isChecked}
              onChange={props.checked}
              class="usa-checkbox__input"
              id="truth"
              type="checkbox"
              name="historical-figures-1"
              value="truth"
            />
            <label class="usa-checkbox__label" for="truth">
              Sunt de acord cu condițiile
            </label>
          </div>
        </form>
      </div>

      <div className="tablet:grid-col">
        {/* <img src="/images/TOS.png" /> */}
      </div>
    </React.Fragment>
  );
};

export default Home;
