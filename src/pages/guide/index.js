import React, { Component } from 'react'
import './style.css'
//引导页//选择用户身份存储在本地



class Guide extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        //身份
        this.loadIden()
    }
    loadIden = () => {
        let iden = localStorage.getItem('iden')
        let token = localStorage.getItem('token')

        if (!iden) {
            localStorage.removeItem('token')
            return
        }

        if (token && iden) {
            if (!(window.location.pathname === `/${iden}/index`)) {
                window.location.replace(`/${iden}/index`)
                return
            }
        }
    }
    ChangeData = (value) => {
        localStorage.setItem('iden', value)
        if (value) {
            window.location.href = "http://localhost:3000/login"
        }
    }
    render() {
        return (
            <div className="guide-page">
                <div className="iden">请选择您的身份</div>
                <div className="main">
                    <div className="img-box" onClick={this.ChangeData.bind(this, 'teacher')}>
                        <div className="imgs teacher"></div>
                        <div>教师</div>
                    </div>
                    <div className="img-box" onClick={this.ChangeData.bind(this, 'student')}>
                        <div className="imgs student"></div>
                        <div>学生</div>
                    </div>
                    <div className="img-box" onClick={this.ChangeData.bind(this, 'admin')}>
                        <div className="imgs admin"></div>
                        <div>管理员</div>
                    </div>
                </div>
                <div className="bottom-hint">知行合一，且行且珍惜...</div>
            </div>
        );
    }
}

export default Guide;