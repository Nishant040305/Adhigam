import axios from "axios";
import React,{useState,useEffect} from "react";
import {useNavigate,Link,Navigate } from "react-router-dom";
//start type of login / sign up / forget password
const Right=(props)=>{
    const navigate = useNavigate();
    const[mess,setMess] = useState();
    const [ user, setUser] = useState({
                Username: "",
                email:"",
               password:"",

         })
    // const history=useHistory();
    const handleChange = e => {
                const { name, value } = e.target
                setUser({
                    ...user,
                    [name]: value
                })
            }
            const submit_up = async (event) => {
                try {
                  event.preventDefault();
                  const response = await fetch('http://localhost:5000/signup/', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'Accept':"*/*",
                    },
                    body: JSON.stringify(user)
                  }).then(response => response.json()).then(data=>{
                    if(data.error){
                        throw new Error(data.error);
                    }
                    else{
                        let id = data.data.user.id;
                        navigate(`/homepage/${id}`);
                    }
                  }).catch (error=>{
                        setMess(error.message)
                      
                  }) 
                  
              }
              catch(err){
                console.log("Some error occured");
              }
            };
              
    const submit = async (event) => {
        event.preventDefault();
    
        fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({Username:user.Username,password:user.password})
        })
        .then(res=>res.json()).then(data=>{
            if(data.error){
                throw new Error(data.error);
            }
            else{
                let id = data.data.user.id;
                navigate(`/homepage/${id}`);
            }
          })
        .catch(err=>{
            console.log(err);
        })
        // if (response.ok) {
        //     alert("ol");
        //   const data = await response.json();
        //   console.log(data.message);
        // } else {
        //     console.log(response)
        //     alert("oooh");
        //   console.error('Failed to login');
        // }
        
      };
      
    async function signup(e){
        navigate("/signup");
    }
    if(props.start==="login"){
    return(
        <div className="content-login">
            <div className="block" style={{borderTopRightRadius:20, borderEndEndRadius:20}}>
                <div className="login-universal">
                <img className="root rounded-circle" src="logo.jpg" alt="Adhigam"/>
                <h3 className="title">Welcome To Adhigam</h3>
            
                <div className="input-div pass">
                    <div className="i">
                        <i className="fas fa-user"></i>
                    </div>
                    <div style={{marginTop:20, marginBottom:50}}>Please Enter Your Username to login/Register</div>
                </div>
                <input className="Username" style={{textAlign:"center"}} name="Username" value={user.Username} onChange={handleChange}   placeholder="Username"></input>
            
                <input  type="password" className="password" style={{textAlign:"center"}} name="password" onChange={handleChange} value={user.password} placeholder="Password"></input>

                <button className="login" type="submit" onClick={(e)=>{submit(e)}}>login</button>
                <button className="signin" type="button" onClick={(e)=>{signup(e)}}>Sign Up</button>
                <a style={{color:"blue", marginLeft:20,cursor:"pointer"}}>forget Password ?</a>
            </div>
            
            </div>
        </div>
    );}
    if(props.start==="signup"){


        return(
            <div className="content-login">
                <div className="block" style={{borderTopRightRadius:20, borderEndEndRadius:20}}>
                    <div className="login-universal">
                    <img className="root rounded-circle" src="logo.jpg" alt="Adhigam"/>
                    <h3 className="title">Welcome To Adhigam</h3>
                    <form onSubmit={submit_up}>
                    <div className="input-div pass">
                        <div className="i">
                            <i className="fas fa-user"></i>
                        </div>
                        <div style={{marginTop:20, marginBottom:50}}>Please Enter Your Username to login/Register</div>
                    </div>
                    <input className="Username" style={{textAlign:"center"}} name="Username" value = {user.Username}onChange={handleChange}placeholder="Your Username"></input>

                    <input className="password" style={{textAlign:"center"}} name="email"value={user.email} onChange={handleChange} placeholder="Email ID"></input>
                
                    <input  type="password"className="password" style={{textAlign:"center"}} name="password" onChange={handleChange}placeholder=" Enter a Password"></input>
                    <div style={{color:"red"}}>{mess}</div>
                        <button className="signin" type="submit"  style={{marginLeft:270, width:120 }} >Sign Up</button>
                    </form>
                </div>
                </div>
            </div>
        );
    }
    if(props.start==="forget"){
        return(
            <div className="content-login">
                <div className="block" style={{borderTopRightRadius:20, borderEndEndRadius:20}}>
                    <div className="login-universal">
                    <img className="root rounded-circle" src="logo.jpg" alt="Adhigam"/>
                    <form>
                    <h3 className="title">Welcome To Adhigam</h3>
                
                    <div className="input-div pass">
                        <div className="i">
                            <i className="fas fa-user"></i>
                        </div>
                        <div style={{marginTop:20, marginBottom:50}}>Please Enter Your Email ID for verification</div>
                    </div>

                    <input className="password" style={{textAlign:"center", marginTop:0,height:70, width:400}} placeholder="Email ID"></input>
                
                        <button className="signin" type="submit" style={{marginLeft:70, width:280,height:60,fontSize:"larger",fontWeight:500}} >Enter</button>
                    </form>
                </div>
                </div>
            </div>
        );
    }
    if(props.start==="OTP"){
        return(
            <div className="content-login">
                <div className="block" style={{borderTopRightRadius:20, borderEndEndRadius:20}}>
                    <div className="login-universal">
                    <img className="root rounded-circle" src="logo.jpg" alt="Adhigam"/>
                    <form>
                    <h3 className="title">Welcome To Adhigam</h3>
                
                    <div className="input-div pass">
                        <div className="i">
                            <i className="fas fa-user"></i>
                        </div>
                        <div style={{marginTop:20, marginBottom:50}}>Please Enter Your OTP for verification</div>
                    </div>

                    <input className="password" style={{textAlign:"center", marginTop:0,height:70, width:400}} placeholder="Enter OTP"></input>
                
                        <button className="signin" type="submit" style={{marginLeft:70, width:280,height:60,fontSize:"larger",fontWeight:500}} >Enter</button>
                    </form>
                </div>
                </div>
            </div>
        );
    }
    if(props.start==="passwd"){
        return(
        <div className="content-login">
        <div className="block" style={{borderTopRightRadius:20, borderEndEndRadius:20}}>
            <div className="login-universal">
            <img className="root rounded-circle" src="logo.jpg" alt="Adhigam"/>
            <form>
            <h3 className="title">Welcome To Adhigam</h3>
        
            <div className="input-div pass">
                <div className="i">
                    <i className="fas fa-user"></i>
                </div>
                <div style={{marginTop:20, marginBottom:50}}>Please Enter Your Username to login/Register</div>
            </div>
            <input  type="password" className="Username" style={{textAlign:"center"}} placeholder="New Password"></input>
        
            <input  type="password"className="password" style={{textAlign:"center"}} placeholder="Confirm Password"></input>

            <button className="login" type="submit">Confirm</button>
            </form>
        </div>
        </div>
    </div>
        );
    }

};





const Left = () => {
    const [image, setImage] = useState('1.jpeg');
    const images = ['1.jpeg', '2.jpeg', '3.jpeg'];
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
        <div className="image" style={{marginLeft:40}}>
            <img src={image} id="slider" alt="Error 404" />
        </div>
    );
};


const Login=(props)=>{
    return(
        <div className="container-login-complete-page" >
            <div className="container-login-c" style={{paddingTop:40, paddingBottom:16}}>
            <Left></Left>
            <Right start={props.start}></Right>

            </div>
        
    </div>
    );
}
// style={{backgroundImage:"url(login-back.jpg)",backgroundSize:"cover"}
export default Login;