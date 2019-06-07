import React from "react";
import { connect } from "react-redux";
import "../css/testpage.css";


class TestPagePageComponent extends React.Component{

    render(){
        return(
            <React.Fragment>
                    <h1 className="TestPageh1">Hii {this.props.username}</h1>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        username:state.userName,
    } 
}

export default connect(mapStateToProps)(TestPagePageComponent);