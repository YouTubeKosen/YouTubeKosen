import React, { Component } from "react";

interface State {
  initialized: boolean;
}

export default class YouTubeSubscribe extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      initialized: false
    };
  }

  initialized() {
    this.setState({
      initialized: true
    });
  }

  componentDidMount() {
    if (this.state.initialized) {
      return;
    }

    const youtubescript = document.createElement("script");
    youtubescript.src = "https://apis.google.com/js/platform.js";
    document.body.appendChild(youtubescript);
    this.initialized();
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
