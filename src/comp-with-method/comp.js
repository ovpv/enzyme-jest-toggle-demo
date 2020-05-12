import React, { Component } from 'react';

export default class MyComp extends Component {
  constructor() {
    super();
  }
  saveLayout(e) {
    this._onClickSaveLayout(e.target.value);
  }

  handleName(name) {
    console.log(name);
  }

  _onClickSaveLayout(name) {
    name = name.replace(/\s{2,}/g, ' ').trim();
    let nameExists = name.length;
    if (nameExists) {
      //compute this block if nameexists
      this.handleName(name);
      return true;
    } else {
      //compute this block if not nameexists
      return false;
    }
  }
  render() {
    return (
      <div>
        <input type="text" />
        <button onClick={(e) => this.saveLayout(e)}>Save</button>
      </div>
    );
  }
}
