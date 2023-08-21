import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Checkuser} from '../api/hitapi';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Cookies from 'js-cookie';
import { TailSpin } from "react-loader-spinner"; // Import the loader component you want to use
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; // Update this import

const Index = () => {
    const navigate = useNavigate();
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(true); // State for the loader

    // State to control the popup visibility

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
                // console.log(Cookies.get("score"))\

                navigate("/home");
                setLoading(false);
              }
             
             
            }
            else{

              console.log("else")
              Cookies.set("score",response.data.sumScore);
              Cookies.set("point",response.data.Points.points);
              setLoading(false);
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
      {/* Conditionally render the loader based on the loading state */}
      {loading ? (
          <TailSpin

              type="TailSpin"
              color="#00BFFF"
              height={100}
              width={100}
          />
      ) : (
          <div>
            </div>
      )}
  </div>
);

}

export default Index;