import React from "react";
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
const RoomPage=()=>{
    const {roomID} = useParams("");
    const myMeeting= async (element) =>{
        const appID = 1652893785;
        const ServerSecreat = "d49dc460545c758d4989a6f855a0dbd2";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            ServerSecreat,
            roomID,Date.now().toString(),
            "Nishant");
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
           container: element,
           scenario:{
            mode: ZegoUIKitPrebuilt.VideoConference,
           }

            
    })

    }
    return(
        <div className="room-page">
            <div ref={myMeeting}/>
        </div>
    );
};

export default RoomPage;