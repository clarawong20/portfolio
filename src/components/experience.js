import sickkids from '../assets/img/sickkids.webp';
import chem from '../assets/img/chemecar.jpg';
import gdsc from '../assets/img/gdsc.png';
import medt from '../assets/img/medt.png';
import { Divider } from 'semantic-ui-react';
import {useState} from "react";
import React from 'react';

export const Experience=()=> {
    return (
        <section className='experience' id='experience'>
            <h1>My Experience</h1>
            <div class='container'>
                <div class='row'>
                    <div class='col-12 col-md-6 col-lg-4 d-flex align-items-stretch'>
                        <div class='card mt-4'>
                            <img src={sickkids} alt='sickkids-img' class='card-img-top'></img>
                            <div class='card-body'>
                                <h3 class='card-title'>Research Student</h3>
                                <h5 class='card-text'>SickKids Hospital</h5>
                                <p class='card-date'>May 2022-August 2022</p>
                            </div>
                            <div className='experience-item-cta'>
                                <div className='tag-3D'>
                                    <h7><strong>3D PRINTING</strong></h7>
                                </div>
                                <div className='tag-cad'>
                                    <h7><strong>CAD</strong></h7>
                                </div>
                                <div className='tag-develop'>
                                    <h7><strong>PRODUCT DEVELOPMENT</strong></h7>
                                </div>
                            </div> 
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#sickkids">More Info</button> 
                            </div>
                    </div>
                    <div class='col-12 col-md-6 col-lg-4 d-flex align-items-stretch'>
                        <div class='card mt-4'>
                                <img src={chem} alt='chem-img' class='card-img-top'></img>
                                <div class='card-body'>
                                    <h3 class='card-title'>Chem-E-Car</h3>
                                    <h5 class='card-text'>McMaster University</h5>
                                    <p class='card-date'>September 2022-Present</p>
                                </div>
                                <div className='experience-item-cta'>
                                    <div className='tag-arduino'>
                                    <h7><strong>ARDUINO</strong></h7>
                                </div>
                                </div>
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#chem">More Info Coming Soon!</button> 
                            </div>
                    </div>
                    <div class='col-12 col-md-6 col-lg-4 d-flex align-items-stretch'>
                        <div class='card mt-4'>
                            <img src={gdsc} alt='gdsc-img' class='card-img-top'></img>
                            <div class='card-body'>
                                <h3 class='card-title'>Community & Code GDSC Team Member</h3>
                                <h5 class='card-text'>McMaster University</h5>
                                <p class='card-date'>September 2021-Present</p>
                            </div>
                            <div className='experience-item-cta'> 
                                <div className='tag-plan'>
                                    <h7><strong>EVENT PLANNING</strong></h7>
                                </div>
                            </div>
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#gdsc">More Info</button> 
                        </div>
                    </div>
                    <div class='col-12 col-md-6 col-lg-4 d-flex align-items-stretch'>
                        <div class='card mt-4'>
                            <img src={medt} alt='medt-img' class='card-img-top'></img>
                            <div class='card-body'>
                                <h3 class='card-title'>MED-T Outreach Team Member</h3>
                                <h5 class='card-text'>McMaster University</h5>
                                <p class='card-date'>September 2021-Present</p>
                            </div>
                            <div className='experience-item-cta'>
                                <div className='tag-plan'>
                                    <h7><strong>EVENT PLANNING</strong></h7>
                                </div>
                                <div className='tag-cad'>
                                        <h7><strong>CAD</strong></h7>
                                    </div>
                            </div>
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#medt">More Info Coming Soon!</button> 
                        </div>
                    </div>
                </div>  
            </div>


            <div class="modal" id="sickkids" tabindex="-1" aria-labelledby="sickkidsLabel" aria-hidden="true">
                <div class='modal-dialog modal-dialog-scrollable'>
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="sickkidsLabel"><big><strong>Research Student</strong></big><br/><small>Co-op</small><br/><small>Sickkids Hospital</small><br/><small>May 2022-August 2022</small></h5>
                        
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>This past summer, I worked a co-op position at The Hospital for Sick Children in Toronto. 
                        I worked under the supervision of Dr. Dale Podolsky, a plastic surgeon in the department of reconstructive surgery at SickKids hospital.
                        <br/><br/>My work consisted of building metopic craniosynostosis surgery simulation models and simulation tools. The simulation models act as a learning tool for new surgeons as well as a way for surgeons to practice craniosynostosis surgeries. The models and tools were designed using <strong>Autodesk Inventor</strong> and the surgical models were designed using <strong>Magics and Blender</strong>. Everything was 3D printed using an <strong>Ultimaker Cura</strong> printer, then assembled.
                        Throughout my work term, I was efficient and detail-oriented. The models had to be precise and correct in order to accurately simulate a craniosynostosis surgery. I was given a deadline and completed my work <strong>2 weeks in advance</strong>.
                        <br/><br/>The models were taken to a craniosynostosis surgery fellows conference in Phoenix, Arizona where they were tested. A research paper was published based on the effectiveness of the models. The effectiveness was determined based on change in knowledge and confidence levels in participants before and after the conference.
                        <br/><br/><strong>Research paper coming soon.</strong>
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                    </div>
                </div>
            </div>  




            <div class="modal" id="gdsc" tabindex="-1" aria-labelledby="gdscLabel" aria-hidden="true">
                <div class='modal-dialog modal-dialog-scrollable'>
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="gdscLabel"><big><strong>Community & Code GDSC Team Member</strong></big><br/><small>McMaster University</small><br/><small>September 2021-Present</small></h5>
                        
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>GDSC (Google Developer Software Club) is McMaster University's chapter of the Google Developer Student Clubs, supported by Google and Google Developers. 
                        The purpose of GDSC is to inspire and empower students through understanding technology and reflecting on it's impact. GDSC hosts numerous workshops, information sessions, and student-community collaborative projects for all undergraduate and graduate students.
                        <br/><br/> I was driven to join GDSC because I want to encourage everyone, including people in non-STEM programs, to get involved and learn more the technology industry. In my first year, I joined the Outreach Team. As a member of the Outreach Team, I acted as a mentor for MacHacks, which is McMaster's first AI-focused hackathon. I also helped in the planning of guest speakers.
                        <br/><br/>This year, I am a member of the Community & Code team. The Community & Code Team organizes and runs social events, hack nights, and game nights within the club as well as coding events for the student body. Currently, we are organizing an 8 week start-up incubator program, which will launch in January 2023.
                        </p>
                    </div>
                    <div class="modal-footer">
                    <a href="https://gdscmcmasteru.ca/" target='_blank'>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="gdsc-website">Visit GDSC Website</button></a>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                    </div>
                </div>
            </div>  



        </section>
        
    )
}