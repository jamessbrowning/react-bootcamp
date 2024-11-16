import React, { Component } from "react";

const Joke = ({ joke }) => {
  const { setup, punchline } = joke;
  return (
    <p>
      {setup} <em>{punchline}</em>
    </p>
  );
};

class Jokes extends Component {
  state = { joke: {}, jokes: [] };

  componentDidMount() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((json) => this.setState({ joke: json }));
  }

  fetchJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then((res) => res.json())
      .then((json) => this.setState({ jokes: json }));
  };

  render() {
    console.log(this.state.joke);
    const { setup, punchline } = this.state.joke;
    return (
      <div>
        <h2>Highlighted joke</h2>
        <Joke joke={this.state.joke} />
        <hr />
        <h3>Want ten more jokes?</h3>
        <button onClick={this.fetchJokes}>Click me!</button>
        {this.state.jokes.map(joke => (<Joke key={joke.id} joke={joke} />))}
      </div>
    );
  }
}

export default Jokes;
