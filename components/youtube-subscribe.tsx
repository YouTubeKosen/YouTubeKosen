import React, { Component } from "react";

interface State {
  isLoaded: boolean;
}

export default class YouTubeSubscribe extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  isLoaded() {
    this.setState({
      isLoaded: true
    });
  }

  componentDidMount() {
    if (this.state.isLoaded) {
      return;
    }

    const youtubescript = document.createElement("script");
    youtubescript.src = "https://apis.google.com/js/platform.js";
    document.body.appendChild(youtubescript);
    this.isLoaded();
  }

  render() {
    return (
      <div
      className="g-ytsubscribe" 
      data-channelid="UCLuGKTyYGenU8SloMZ8KErQ" 
      data-layout="full" 
      data-count="default">
      </div>
    );
  }
}
