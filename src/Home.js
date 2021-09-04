import React from "react";
import "./Home.css";

const Home = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  
    return (
        <>
            <div className="bg_outer">
        
                <div style={{ position: "relative" }} id="loginWrapper" className="">
                    <div className="outer">
                        <p className="heading">Learn to code by <span>watching others </span></p>
                        <p>See how experienced developers solve problems in real-time.</p>
                        <p> Watching scripted tutorials is great but understanding how</p>
                        <p> developers think is invaluable </p>
                    </div>
                    <div>
                        <div className="form_heading">
                            <button className="btn mt-4 btn-custom btn-block text-uppercase rounded-pill btn-lg"> TRY IT FREE FOR 7 DAYS then $20/mon. thereafter</button>
                        </div>
                        <div className="inner" >
                            <form role="form" method="POST">
                                <div className="form-group">
                                    <div className="input-group-alternative"/>
                                    <input type="text" placeholder="First Name"/>
                                </div>
                                <div className="form-group">
                                    <div className="input-group-alternative"/>                                    
                                    <input type="text" placeholder="Last Name"/>
                                </div>
                                <div className="form-group">
                                    <div className="input-group-alternative"/>                                 
                                    <input type="email" placeholder="Email Address"/>
                                </div>
                                <div className="form-group">
                                    <div className="input-group-alternative"/>                                    
                                    <input type="password" placeholder="Password"/>                                    
                                </div>
                                <button type="submit" className="btn mt-4 btn-custom btn-block text-uppercase rounded-pill btn-lg">CLAIM YOUR FREE TRIAL</button>
                            </form>
                            <small className="t_c">By clicking the buttom you are agreeing the <span style={{color:"red"}}>Terms And Conditions</span></small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home