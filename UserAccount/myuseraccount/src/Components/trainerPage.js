//trainer page
//Module 2 by Lakshit and Srinidhi
//Show them the trainer profile
//add a form buttom for trainer to update his/her details
import React, {Component} from 'react';
import './hey.css';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

export class trainerPage extends Component{
    render(){
        return(
            <div class="container">
                <form action="action_page.html">
                    <h3>Trainers details</h3>

                    <div class="row">
                        <div class="col-25">
                            <label for="fname">Trainer's Name </label>
                        </div>
                        <div class="col-25">
                            <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="Ttype">Types of training</label>
                        </div>
                        <div class="col-25">
                            <select   id="language" name="language" >
                                <option value=""   disabled selected hidden >Choose the training platform...</option>
                                <option value="java">Java</option>
                                <option value="React">React JS</option>
                                <option value="Angular">Angular</option>
                                <option value="Python">Python</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="NoTraining">No . of trainings</label>
                        </div>
                        <div class="col-25">
                            <input type="text" id="NoTraining" name="NoTraining" placeholder="No. of trainings"></input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="subject">Workshops conducted</label>
                        </div>
                        <div class="col-25">
                            <textarea id="workshop" name="workshop" placeholder="workshops conducted" ></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="subject">Coll associate Milestone</label>
                        </div>
                        <div class="col-25">
                            <textarea id="associate" name="assciate" placeholder="associate" ></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="subject">Std training date</label>
                        </div>
                        <div class="col-25">
                            <textarea id="date" name="date" placeholder="date" ></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="subject">Coll workshop training</label>
                        </div>
                        <div class="col-25">
                            <textarea id="workshoptraining" name="workshoptaining" placeholder="workshop training" ></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="subject">Date of association</label>
                        </div>
                        <div class="col-25">
                            <input type="date" id="associatedate" name="associatedate"></input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-35">
                            <input type="submit" value="Submit"></input>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}