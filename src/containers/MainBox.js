import React from "react";
import MenuBar from "../components/MenuBar.js";
import { Profile, Photos, Cocktails, Pokemon } from "../components/Pages.js";

class MainBox extends React.Component {
  constructor() {
    super();
    this.state = {
      display: ""
    };
  }

  changeDisplay = clicked => {
    this.setState({ display: clicked });
  };

  render() {
    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay =
      this.state.display === "profile" ? (
        <Profile />
      ) : this.state.display === "photo" ? (
        <Photos />
      ) : this.state.display === "cocktail" ? (
        <Cocktails />
      ) : this.state.display === "pokemon" ? (
        <Pokemon />
      ) : null;

    return (
      <div>
        <MenuBar
          display={this.state.display}
          changeDisplay={this.changeDisplay}
        />
        {detailsToDisplay}
      </div>
    );
  }
}

export default MainBox;
