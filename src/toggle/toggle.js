import React, { Component, Fragment, createRef } from 'react';

// intentional usage of class component over functional for usecase
export default class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
    this.headingRef = createRef();
  }
  onToggle() {
    const { toggle } = this.state;
    this.setState({ toggle: !toggle });
    this.handleAfterToggle();
  }
  handleAfterToggle() {
    const { toggle } = this.state;
    if (toggle) {
      this.headingRef.current.innerHTML = 'Hiding private content';
    } else {
      this.headingRef.current.innerHTML = 'Showing private content';
    }
    return toggle;
  }
  render() {
    const { toggle } = this.state;
    return (
      <Fragment>
        <div className="button-container">
          <button className="toggle-button" onClick={() => this.onToggle()}>
            {!toggle ? 'Show' : 'Hide'}
          </button>
        </div>
        <div className="toggle-effect-area">
          <h2 id="heading" ref={this.headingRef}>
            Show Hidden Content
          </h2>
        </div>
      </Fragment>
    );
  }
}
