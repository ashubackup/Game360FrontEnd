import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Checkuser} from '../api/hitapi';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Cookies from 'js-cookie';

const Index = () => {
    const navigate = useNavigate();
    const [data,setData] = useState([]);
        useEffect(()=>{
          try{
            
         let params = new URLSearchParams(window.location.search);
         let ani  = params.get("ani");

         console.log("ani",ani);
         if(ani==='' || ani===null){

          navigate("/notvalid");
          
         }else{
          Cookies.set("ani",ani);

          Checkuser(ani).then((response)=>
          {
              console.log("Response",response.data);
            setData(response.data.Points);
            if(response.data.Points.userType==='OldUser')
            {
              console.log("inside if");
              if(response.data.sumScore==null || response.data.sumScore===undefined){
                Cookies.set("score",0);
              }
              else{
                Cookies.set("score",response.data.sumScore);
                console.log("respon",response.data);

                // console.log(Cookies.get("score"))
                navigate("/home");
              }
             
            }
            else{
              console.log("else")
              Cookies.set("score",response.data.sumScore);
              Cookies.set("point",response.data.Points.points);
                Swal.fire({
                'text': "Congratulations...you got "+Cookies.get("point")+" points",
                 
                  icon: 'success'
                })
                
              console.log(Cookies.get("point"));
              navigate("/home");
            }
          })
         }
          }
          catch{
            console.log("Excption");
          }
        

 },[])



    return (
        <div>
        
        </div>
      );
}

export default Index;