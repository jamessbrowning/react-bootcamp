import React, { Component } from "react";

const TITLES = ["dad", "software engineer", "guitar player", "naval officer"];

class Title extends Component {
  state = { titleIndex: 0, fadeIn: true };

  componentDidMount() {
    this.timeout = setTimeout(() => this.setState({fadeIn: false}), 2000);
    console.log("Title component mounted");

    this.animateTitles();
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

      this.setState({ titleIndex, fadeIn: true});
      this.timeout = setTimeout(() => this.setState({fadeIn: false}), 2000);
    }, 4000);
  };

  componentWillUnmount() {
    clearInterval(this.titleInterval);
    clearTimeout(this.timeout);
  }

  render() {
    const { fadeIn, titleIndex } = this.state;
    const title = TITLES[this.state.titleIndex];
    return (
      <p className={fadeIn ? "title-fade-in" : "title-fade-out"}>
        I am a {title}
      </p>
    );
  }
}

export default Title;
