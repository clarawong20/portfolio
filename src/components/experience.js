import McSCert from '../assets/img/mcscert.jpg';
import sickkids from '../assets/img/sickkids.webp';
import chem from '../assets/img/chemecar.jpg';
import gdsc from '../assets/img/gdsc.png';
import medt from '../assets/img/medt.png';
import linWave from '../assets/img/linWave.jpg';
import { Divider } from 'semantic-ui-react';
import {useState} from "react";
import React from 'react';
import { Link } from 'react-router-dom';

export const Experience=()=> {
    return (
        <section className='experience' id='experience'>
            <h1>My Experience</h1>
            <div class='container'>
                <div class='row'>
                <div class='col-12 col-md-6 col-lg-4 d-flex align-items-stretch'>
                        <div class='card mt-4'>
                            <img src={McSCert} alt='mcscert-img' class='card-img-top'></img>
                            <div class='card-body'>
                                <h3 class='card-title'>Software Research Assistant</h3>
                                <h5 class='card-text'>McMaster Centre for Software Certification (McSCert)</h5>
                                <p class='card-date'>May 2023-Present</p>
                            </div>
                            <div className='experience-item-cta'>
                                <div className='tag-program'>
                                    <h7><strong>C/C++</strong></h7>
                                </div>
                                <div className='tag-arduino'>
                                    <h7><strong>Embedded Software</strong></h7>
                                </div>
                                <div className='tag-program'>
                                    <h7><strong>Matlab</strong></h7>
                                </div>
                                <div className='tag-program'>
                                    <h7><strong>Simulink</strong></h7>
                                </div>
                            </div> 
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mcscert">More Info</button> 
                            </div>
                    </div>

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
                                    <h3 class='card-title'>Chem-E-Car Circuitry Team</h3>
                                    <h5 class='card-text'>McMaster University</h5>
                                    <p class='card-date'>September 2022-Present</p>
                                </div>
                                <div className='experience-item-cta'>
                                    <div className='tag-arduino'>
                                    <h7><strong>ARDUINO</strong></h7>
                                </div>
                                </div>
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#chem">More Info</button> 
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
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#medt">More Info</button> 
                        </div>
                    </div>
                </div>  
            </div>


            <div class="modal" id="mcscert" tabindex="-1" aria-labelledby="mcscertLabel" aria-hidden="true">
                <div class='modal-dialog modal-dialog-scrollable'>
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="mcscertLabel"><big><strong>Software Research Assistant</strong></big><br/><small>Co-op, Part-time (school year)</small><br/><small>McMaster Centre for Software Certification</small><br/><small>May 2022-August 2022</small></h5>
                        
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>This past summer, I had the pleasure of completing my second co-op at the McMaster Centre for Software Certification (McSCert). 
                        I worked under the supervision of Dr. Mark Lawford (department head of software and computing at McMaster University), Dr. Vera Pantelic (Senior Principal Research Engineer), and Dr. Victor Bandur (Principal Research Engineer).
                        <br/><br/>I had the opportunity to work on two projects this summer. The first project involved working on a domain gateway for centralized automotive architectures. 
                        A domain gateway is an electronic control unit (ECU). Decentralized architectures typically have more than 100 ECUs, which is an issue due to its increased software complexity. This leads to significant development and maintenance costs. Luckily, these limitations can be addressed by implementing centralized architectures/the domain gateway. 
                        More information about the background work of centralized automotive architectures can be found <a href="https://www.researchgate.net/publication/348825146_Making_the_Case_for_Centralized_Automotive_EE_Architectures">here</a>, in an article written by my aforementioned supervisors.
                        I worked on further development, testing, and debugging of the LIN task communication code in the domain gateway. It was programmed in C, and I had the opportunity to work with NXP microcontrollers (S32K344 boards), oscilloscopes, and Vector CANoe. 
                        Additionally, I worked on implementing a FreeRTOS scheduler in the overall domain gateway controller. This FreeRTOS scheduler would replace the state machine that was being used at the time. 
                        The scheduler would ensure that the other tasks in the domain gateway would run while there were breaks in the LIN task. 
                        <br/>
                        <img src={linWave} alt='linWave'></img>
                        <br/><br/>
                        <p><i>Figure 1: example LIN wave sent from the S32K344 microcontroller board, probed using the oscilloscope.</i></p>
                        <br/><br/>In the second half of the summer, I worked on configuring a 3-phase motor simulation in Simulink to network PWM and rotor information between a motor (which the simulation acts as) and microcontroller board. 
                        The goal was to send PWM duty cycles and periods to the board and then return the position, speed, and currents of the rotor. The goal of this project is to allow users to test motor functionality without the need for a physical motor. 
                        </p>
                    </div>
                    <div class="modal-footer">
                    <a href="https://www.mcscert.ca/mcscert-research-team/" target='_blank'>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="gdsc-website">Visit McSCert Website</button></a>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
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
                        <p>In the summer following first year, I worked a co-op position at The Hospital for Sick Children in Toronto. 
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



            <div class="modal" id="chem" tabindex="-1" aria-labelledby="chemLabel" aria-hidden="true">
                <div class='modal-dialog modal-dialog-scrollable'>
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="chemLabel"><big><strong>Chem-E-Car Circuitry Team</strong></big><br/><small>McMaster University</small><br/><small>September 2022-Present</small></h5>
                        
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Chem-E-Car is a technical team at McMaster University where students design a car to compete at the regional and annual National Chem-E-Car competition, coordinated by the American Institute of Chemical Engineering (AIChE). 
                        <br/><br/>As a member of the circuitry team, I work on facilitating the starting and stopping mechanisms/reactions of the car, designing a sensor system to assist with the stopping mechanism, and acquire data. 
                        </p>
                    </div>
                    <div class="modal-footer">
                    <a href="https://macchecar.wixsite.com/mcmasterchemecar" target='_blank'>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="gdsc-website">Visit Chem-E-Car Website</button></a>
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


            <div class="modal" id="medt" tabindex="-1" aria-labelledby="medtLabel" aria-hidden="true">
                <div class='modal-dialog modal-dialog-scrollable'>
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="medtLabel"><big><strong>MED-T Outreach Team Member</strong></big><br/><small>McMaster University</small><br/><small>Sept 2021-Present</small></h5>
                        
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>McMaster Medical Engineering Design Team (MED-T) is a technical team at McMaster University. MED-T’s goal is to create a multi-disciplinary student-lead community at McMaster that 
                            focuses on technical design project work, and education aimed at applications in medicine. Our hope is that students who engage in our community will gain useful hands-on experience 
                            in developing medical technology and will be motivated to continue learning about the field of biomedical engineering.
                        <br/><br/>As a member of the outreach team, I promote the field of biomedical engineering to the student body. Over the past two years, I have created infographics to educate the student body about
                        certain fields within biomedical engineering (eg. neural engineering) as well as hosted and mentored at a CAD workshop targeting beginner Autodesk Inventor users.
                        </p>
                    </div>
                    <div class="modal-footer">
                        <a href="https://www.facebook.com/MacMEDT/posts/1353604505102228" target='_blank' rel="noreferrer">
                        <button type="button" class="btn btn-primary">View Infographic</button></a>
                        <a href="https://www.facebook.com/MacMEDT/posts/pfbid0muX68GnyD5Bxys9hv9iCZoAQUTqcAxQMvNRzquky15641gqSCx6vVpi34hXNwgWGl" target='_blank' rel="noreferrer">
                        <button type="button" class="btn btn-primary">View CAD Workshop Details</button></a>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                    </div>
                </div>
            </div>  



        </section>
        
    )
}