//landing page
//Module 2 Lakshith and Shrinidhi
import React, {Component} from "react";
import ReactDOM  from "react-dom";
import studenticon from "./student icon.jpg";
import collage from "./collage.jpg";
import EXTERNAL from "./EXTERNAL.jpg";
import trainer from "./trainer.jpg";
import training1 from "./training1.jpg";
import img1 from "./img1.jpg";
export class landingPage extends Component{
    render(){
        return(
            
               <div>
                   <header>
                   <h1>Milestone</h1>
              <h6>first step to a job</h6>
                   </header>
                   <img src={img1} className="img1"/>
                   
               <button>
<img src={trainer} height="175" width="175"class="imagesleft"></img><button class="button button1">Trainer</button> <img src={EXTERNAL} height="175" width="175" class="imagesleft"></img> <button class="button button4">External</button><br/>
<img src={studenticon} height="175" width="175"class="imagesleft"></img><button class="button button2">Student</button> <img src={training1} height="175" width="175"class="imagesleft"></img> <button class="button button5">Trainings</button><br/>
<img src={collage} height="175" width="175"class="imagesleft"></img> <button class="button button3">Collage</button>
               
               </button>
            </div>
            
           
        )
    }
        

    }


