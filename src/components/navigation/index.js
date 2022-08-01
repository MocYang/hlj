import React from 'react';
import './index.scss'
import icon from '../../images/navigation/icon_shouqi.png'
import expand from '../../images/navigation/icon_展开.png'
function Navigation () {
    // this.state={isLoggedIn:false};
    // handleLogoutClick(){
    //     this.setState({isLoggedIn:true});
    // }
    // handleLogoutClick(){
    //     this.setState({isLoggedIn:false});
    // }
    return (
        <div className="navigation">
            <div className="fenceng">
                <p className="text">分层</p>
                <div className="icon_shouqi">
                    <img className="shouqi" src={icon} alt='' />
                    <img className="expand" src={expand} alt='' />
                </div>
            </div>
            <div className="f1">
                <p className="text-f1">F1</p>
            </div>
            <div className="f2">
                <p className="text-f2">F2</p>
            </div>
            <div className="f3">
                <p className="text-f3">F3</p>
            </div>
            <div className="f4">
                <p className="text-f4">F4</p>
            </div>
        </div>
    )
}


export default Navigation;