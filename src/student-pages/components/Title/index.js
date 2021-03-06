import React, { Component } from 'react';
import './style.css'
class Title extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' }
  }
  goLastPage = () => {

    //url跳转上一页
    const { url } = this.props
    if (url) {
      localStorage.removeItem('iden')
      window.location.href = url
      return
    }
    window.history.back(-1)
  }
  render() {
    const { title, isShowBack = false } = this.props
    return (
      <div className="header">
        {isShowBack && <div className="header-back" onClick={this.goLastPage}></div>}
        <div className="title">{title}</div>
      </div>
    );
  }
}

export default Title;
