import React from "react";
import { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import Title from "./Title";
import Jokes from "./Jokes";
import profile from "../assets/profile.png";

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    const bio = this.state.displayBio ? (
      <div>
        <p>Kotlin is my favorite language for function programming.</p>
        <p>I also like to play guitar.</p>
        <button onClick={this.toggleDisplayBio}>Show less</button>
      </div>
    ) : (
      <div>
        <button onClick={this.toggleDisplayBio}>Read more</button>
      </div>
    );

    return (
      <div>
        <img src={profile} alt="profile" className="profile" />
        <h1>Hello!</h1>
        <p>My name is James.</p>
        <Title />
        <p>I'm always looking for fun work.</p>
        {bio}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
        <hr />
        <Jokes />
      </div>
    );
  }
}

export default App;
