import React,{useState,useEffect} from "react";


const Right=(props)=>{
    
    return(
        <div className="content-login">
            <div class="block">
            <img class="root rounded-circle" src="root.jpg" alt="Adhigam"/>
            <form>
            <h3 class="title">Welcome To Adhigam</h3>
            
            <div class="input-div pass">
                <div class="i">
                        <i class="fas fa-user"></i>
                </div>
                <div style={{marginTop:20, marginBottom:50}}>Please Enter Your Username to login/Register</div>
            </div>
            
            <input className="username"placeholder="Username"></input>
            
            <input className="password"placeholder="Password"></input>
            {/* <a href="otp.html">
                <button>Forgot Password?</button>
            </a> */}
            <button className="login" type="submit">login</button>
            <button className="signin" type="submit">Sign In</button>
            </form>
        </div>
        </div>
    );
};





const Left = () => {
    const [image, setImage] = useState('1.jpeg');
    const images = ['1.jpeg', '2.jpeg', '3.jpg'];
    const [x, setX] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setX((prevX) => {
                const newX = (prevX + 1) % 3;
                setImage(images[newX]);
                return newX;
            });
        }, 2000);
        return () => clearInterval(interval); // This is important to clear the interval when the component unmounts
    }, []);

    return (
        <div className="image" style={{marginLeft:180}}>
            <img src={image} id="slider" alt="Error 404" />
        </div>
    );
};


const Login=()=>{
    return(
        <div className="container" style={{backgroundImage:"url(background2.jpeg)",backgroundSize:"cover"}}>
            <Left></Left>
            <Right></Right>
        {/* <div class="block">
            <img class="root rounded-circle" src="root.jpg" alt="Adhigam"/>
            <form>
            <h3 class="title">Welcome To</h3>
            <h2 class="title">ADHIGAM</h2>
            <div class="input-div pass">
                <div class="i">
                        <i class="fas fa-user"></i>
                </div>
                <div class="div">
                    <h4>Enter username:</h4>
                    <input type="text" class="input"/>
                </div>
            </div>
            <div class="input-div pass">
                <div class="i"> 
                     <i class="fas fa-lock"></i>
                </div>
                <div class="div">
                     <h5>Enter your Password:</h5>
                     <input type="password" class="input"/>
                </div>
            </div>
            <a href="otp.html">
                <button>Forgot Password?</button>
            </a>
            	<input type="submit" class="btn" value="Login"/>
            </form>
        </div>
        <div class="block image">
            <img id="tt" width="1000px" src="tt.jpg" alt="Error 404"/>
        </div> */}
    </div>
    );
}

export default Login;