import {React,useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = ()=>{
    const [roomCode,setRoomcode] = useState('');
    const navigate = useNavigate();
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        navigate(`room/${roomCode}`)
    }
    return (
        <div className = "home-page">
            <form onSubmit={handleFormSubmit} className='form'>
                <div>
                    <label >Enter Room</label>
                    <input 
                    value={roomCode} 
                    onChange={(e)=> setRoomcode(e.target.value)}
                    type="text" 
                    required 
                    placeholder="Enter Room Code"/>
                </div>
                <button type= "submit">Enter room</button>
            </form>

        </div>
    );
};

export default Homepage;