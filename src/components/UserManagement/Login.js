import React from 'react';

import { connect } from "react-redux";


class Login extends React.Component{

    

    render(){
        return(
            <div>
            <form id="contact-form" method="post" className="reservations-box" name="contactform" >     
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="form-box">
                           <input type="text" name="username"  placeholder="Login" required="required" data-error="Firstname is required." 
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="form-box">
                            <input type="password" name="password"  placeholder="Password" required="required" data-error="Time is required." 
                            />
                        </div>
                    </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="reserve-book-btn text-center">
                            <button className="hvr-underline-from-center" type="submit" value="SEND" id="submit">LOGIN </button>
                        </div>
                    </div>
             </form>
</div>
        )
    }
}



export default Login;
  