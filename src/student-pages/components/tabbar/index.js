import { Component, Fragment } from 'react';
import './style.css'
import HomeImg from '../../../imgs/selected/index.png'
import DiscoverImg from '../../../imgs/selected/discover.png'
import MsgImg from '../../../imgs/selected/msgs.png'
import PersonImg from '../../../imgs/selected/person.png'
class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = { userId: 0 }
  }
  componentDidMount() {

  }
  pathTo = (pathData, e) => {
    if (window.location.pathname === pathData) {
      console.log('阻止默认跳转')
      return
    }
    else {
      window.location.replace(pathData)
      return
    }
  }

  render() {

    return (
      <Fragment>
        <div className="tabs">
          <div className="tab" onClick={this.pathTo.bind(this, "/student/index")}><img src={HomeImg} alt="首页" />首页 </div>
          <div className="tab" onClick={this.pathTo.bind(this, "/student/discovery")}><img src={DiscoverImg} alt="发现" /> 发现</div>
          <div className="tab" onClick={this.pathTo.bind(this, "/student/msg")}><img src={MsgImg} alt="消息" /> 消息</div>
          <div className="tab" onClick={this.pathTo.bind(this, "/student/owner")}><img src={PersonImg} alt="我的" /> 我的</div>
        </div>
      </Fragment>
    );
  }
}

export default TabBar;