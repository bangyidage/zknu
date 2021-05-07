import React, { Component } from 'react';
import TabBar from '../../components/tabbar';
import './home.css'
import { checklogin } from '../../net/api'

//兼职任务搜索列表
const lists_jobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1, 1]
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      userId: 0
    }

  }
  componentDidMount() {
    checklogin()
  }

  nameChange = () => {

  }

  render() {

    console.log(this.props)
    return (
      <div className="home">
        <div className="home-header">
          <div className="header-title">首页</div>
          <div className="header-select"></div>
        </div>
        <div className="home-main">
          {lists_jobs.map((item, index) => {
            return (
              <div className="lists" key={index}>
                <div className="item-left"></div>
                <div className="item-right-box"><div className="item-job">图书管理员</div>
                  <div className="item-right">
                    <div className="item-name">王老师</div>
                    <div className="item-nums">招募人数2人</div>
                  </div>
                </div>
              </div>
            )

          })}
          <div className="s">s</div>
        </div>
        <TabBar />
      </div>

    );
  }
}
export default Home