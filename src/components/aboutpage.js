import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";



class AboutUsPageComponent extends React.Component {

   
   render() {
        return (
            
            <React.Fragment>
                

                <Navbar color="light" light expand="md">
                    <NavbarBrand href="#">About Us</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/" onClick={this.props.onLogOut}>LogOut</NavLink>
                        </NavItem>
                        {/* <NavItem>
                            |
                        </NavItem>
                        <NavItem>
                            <NavLink to="/TestPage/">TestPage</NavLink>
                        </NavItem> */}
                    </Nav>
                </Navbar>
                
                <div>
                    <h1>Welcome {this.props.username}</h1>
                </div>
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        username: state.userName,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogOut: () => dispatch({ type: "ON_LOG_OUT" }),
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(AboutUsPageComponent);