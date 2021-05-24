import React from "react";
import ReactDOM from "react-dom";

function Membership(){
    let content = <><h1>Join The Club!</h1><form id = "signupForm" method="post" action="./membershipSignup">
        <div id = "signupDiv">
        <div className="1"><label>Usename:</label></div>
        <div className="2"><input type = "username" id = "usernameSignup" name="username" maxlength="20" minlength="2" required /></div>
        <div className="3"><label>Email:</label></div>
        <div className="4"><input type = "email" id = "emailSignup" name="Email" maxlength="30" minlength="5" required /></div>
        <div className="5"><label>Password:</label></div>
        <div className="6"><input type = "password" name="password" maxlength="30"  minlength="8" required /></div>
        <div className="7"><label>Driving Experience:</label></div>
        <div className="8"><select name = "experienceYears" form = "signupForm" id = "experienceSignup">
                <option value = "0-1">0-1</option>
                <option value = "2-4">2-4</option>
                <option value = "4-8">4-8</option>
                <option value="8+">8+</option>
            </select></div>
        <div className="9"><label>How did you hear about us:</label></div>
        <div className="10"><select name = "foundThrough" form = "signupForm" id = "heardfromSignup">
                <option value = "friend">Friend</option>
                <option value = "family">Family</option>
                <option value = "socailMedia">Social Media</option>
                <option value = "podcast">Podcast</option>
                <option value = "Ads">Ads</option>
            </select></div>
        <div className="11"><label>Anything you may want us to know about you?</label></div>
        <div className="12"><textarea id = "addOns" name = "addOns"></textarea></div>
        <div className="13"><button type = "signUp" name="signUpButton" class = "signupBttn" id="signUpBtn"><strong>Sign Me Up!</strong></button></div>
        </div>
    </form></>;
    
    return(<section><center>{content}</center></section>);


}

export default Membership;