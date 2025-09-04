import code from '../assets/img/code.jpg';
import ostomy from '../assets/img/ostomy.png';
import hip from '../assets/img/hip implant.png';
import cpr from '../assets/img/cpr.png';
import lift from '../assets/img/lift.png';
import winter from '../assets/img/winter.jpg';
import winterCode from '../assets/img/winterportrait.pde';
import ostomyPic from '../assets/img/OstomyPic.png';
import posterboard from '../assets/img/posterboard.png';
import implant from '../assets/img/implants.png';
import cprCode from '../assets/img/cprCode.jpg';
import engDraw from '../assets/img/engDraw.png';
import liftCad from '../assets/img/liftCad.png';
import lift2 from '../assets/img/lift2.png';
import pillDrop from '../assets/img/pillDrop.jpg';

export const Projects=()=> {
    return (
        <section className='projects' id='projects'>
            <h1>Projects</h1>
            <div class='container'>
                <div class='row'>

                    <div className='col-12 col-md-6 col-lg-4 d-flex align-items-stretch'>
                        <div class='card mt-4'>
                            <img src={pillDrop} alt='website-img' class='card-img-top'></img>
                            <div class='card-body'>
                                <h3 class='card-title'>Pill Drop</h3>
                                <h5 class='card-text'>Hackathon Project</h5>
                                <p class='card-date'>January 2023</p>
                            </div>  
                                <div className='project-item-cta'>
                                    <div className='tag-arduino'>
                                        <h7><strong>ARDUINO</strong></h7>
                                    </div>
                                    <div className='tag-arduino'>
                                        <h7><strong>RASPBERRY PI</strong></h7>
                                    </div>
                                    <div className='tag-program'>
                                        <h7><strong>PYTHON</strong></h7>
                                    </div> 
                            </div>
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#pillDrop">More Info</button> 
                            </div>
                    </div>

                    <div className='col-12 col-md-6 col-lg-4 d-flex align-items-stretch'>
                        <div class='card mt-4 w-100'>
                            <img src={code} alt='website-img' class='card-img-top'></img>
                            <div class='card-body'>
                                <h3 class='card-title'>Personal Portfolio</h3>
                                <h5 class='card-text'>Personal Project</h5>
                                <p class='card-date'>December 2022-Ongoing</p>
                            </div>
                            <div className='project-item-cta'>
                                <div className='tag-program'>
                                    <h7><strong>REACT</strong></h7>
                                </div>
                                <div className='tag-program'>
                                    <h7><strong>HTML & CSS</strong></h7>
                                </div>
                                <div className='tag-program'>
                                    <h7><strong>JAVASCRIPT</strong></h7>
                                </div>
                                <div className='tag-plan'>
                                    <h7><strong>DESIGN</strong></h7>
                                </div>
                            </div>  
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#website">More Info</button> 
                            </div>
                    </div>

                    <div className='col-12 col-md-6 col-lg-4 d-flex align-items-stretch'>
                        <div class='card mt-4'>
                                <img src={ostomy} alt='ostomy-img' class='card-img-top'></img>
                                <div class='card-body'>
                                    <h3 class='card-title'>IRIS-X: An Ostomy Appliance</h3>
                                    <h5 class='card-text'>McMaster University</h5>
                                    <p class='card-date'>September 2021-October 2021</p>
                                </div>
                                <div className='project-item-cta'>
                                    <div className='tag-cad'>
                                        <h7><strong>CAD</strong></h7>
                                    </div>
                                    <div className='tag-plan'>
                                        <h7><strong>DESIGN</strong></h7>
                                    </div>
                                </div>
                                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ostomy">More Info</button> 
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 d-flex align-items-stretch'>
                        <div class='card mt-4 w-100'>
                            <img src={hip} alt='hip-img' class='card-img-top'></img>
                            <div class='card-body'>
                                <h3 class='card-title'>Revive Hip Implant</h3>
                                <h5 class='card-text'>McMaster University</h5>
                                <p class='card-date'>October 2021-December 2021</p>
                            </div>
                            <div className='project-item-cta'> 
                                <div className='tag-cad'>
                                    <h7><strong>CAD</strong></h7>
                                </div>
                                <div className='tag-plan'>
                                    <h7><strong>DESIGN</strong></h7>
                                </div>
                            </div>
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#hip">More Info</button> 
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 d-flex align-items-stretch'>
                        <div class='card mt-4'>
                            <img src={cpr} alt='medt-img' class='card-img-top'></img>
                            <div class='card-body'>
                                <h3 class='card-title'>Helping Hands CPR Device</h3>
                                <h5 class='card-text'>McMaster University</h5>
                                <p class='card-date'>January 2022-March 2022</p>
                            </div>
                            <div className='project-item-cta'>
                                <div className='tag-pi'>
                                    <h7><strong>RASPBERRY PI</strong></h7>
                                </div>
                                <div className='tag-program'>
                                    <h7><strong>PYTHON</strong></h7>
                                </div>
                                <div className='tag-develop'>
                                    <h7><strong>PRODUCT DEVELOPMENT</strong></h7>
                                </div>
                            </div>
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cpr">More Info</button> 
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 d-flex align-items-stretch'>
                        <div class='card mt-4 w-100'>
                            <img src={lift} alt='medt-img' class='card-img-top'></img>
                            <div class='card-body'>
                                <h3 class='card-title'>L.I.F.T</h3>
                                <h5 class='card-text'>McMaster University</h5>
                                <p class='card-date'>March 2022-April 2022</p>
                            </div>
                            <div className='project-item-cta'>
                                <div className='tag-cad'>
                                    <h7><strong>CAD</strong></h7>
                                </div>
                                <div className='tag-develop'>
                                    <h7><strong>PRODUCT DEVELOPMENT</strong></h7>
                                </div>
                            </div>
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#lift">More Info</button> 
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 d-flex align-items-stretch'>
                        <div class='card mt-4 w-100'>
                            <img src={winter} alt='winter-img' class='card-img-top'></img>
                            <div class='card-body'>
                                <h3 class='card-title'>Winter Portrait</h3>
                                <h5 class='card-text'>John Fraser Secondary School</h5>
                                <p class='card-date'>May 2019-June 2019</p>
                            </div>
                            <div className='project-item-cta'>
                                <div className='tag-program'>
                                    <h7><strong>PROCESSING</strong></h7>
                                </div>
                            </div>
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#winter">More Info</button> 
                        </div>
                    </div>
                </div>  
            </div>


            <div class="modal" id="pillDrop" tabindex="-1" aria-labelledby="pillDropLabel" aria-hidden="true">
                <div class='modal-dialog modal-dialog-scrollable'>
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="pillDropLabel"><big>Pill Drop</big><br/><small>Hackathon Project</small><br/><small>January 2023</small></h5>
                        
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>This project was completed at DeltaHacks 9 in January 2023. It was a 24 hour hackathon and I worked in a group of 4 (shoutout to my teammates Leanne Chen, Zara Khan, and Dhanya Koshti!)
                            In the end, we were awarded first place in the Med X Insight category, which focused on the best health hack. Currently, we are working with Med X Insight to create a high-level prototype and a UI so users can adjust 
                            their medication schedule. 
                        <br/><br/>
                            According to the United State's Department of Health and Human Services, 55% of the elderly are non-compliant with their prescription drug orders, 
                            meaning they don't take their medication according to the doctor's instructions, where 30% are hospital readmissions. 
                            Although there are many reasons why seniors don't take their medications as prescribed, memory loss is one of the most common causes. 
                            Elders with Alzheimer's or other related forms of dementia are prone to medication management problems. 
                            They may simply forget to take their medications, causing them to skip doses. Or, they may forget that they have already taken their medication 
                            and end up taking multiple doses, risking an overdose. Therefore, we decided to solve this issue with Pill Drop, which helps people remember to take their medication.
                        <br/><br/>
                        The Pill Drop dispenses pills at scheduled times throughout the day. It helps people, primarily seniors, take their medication on time. It also saves users the trouble of 
                        remembering which pills to take, by automatically dispensing the appropriate medication. It tracks whether a user has taken said dispensed pills by starting an internal timer. 
                        If the patient takes the pills and presses a button before the time limit, Pill Drop will record this instance as "Pill Taken".
                        </p>
                    </div>
                    <div class="modal-footer"> 
                        <a href="https://devpost.com/software/pill-drop-mrvltj" target='_blank' rel="noreferrer">
                        <button type="button" class="btn btn-primary">DevPost</button></a>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal" id="website" tabindex="-1" aria-labelledby="websiteLabel" aria-hidden="true">
                <div class='modal-dialog modal-dialog-scrollable'>
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="websiteLabel"><big>Personal Portfolio</big><br/><small>Personal Project</small><br/><small>Dec 2022-Ongoing</small></h5>
                        
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Using React.js, I created a personal portfolio (what you're looking at right now!) to showcase some of my knowledge in HTML, CSS, and Javascript. I used tools such as Bootstrap to help make components of my portfolio.
                        <br/><br/>This project was a great experience: I went into it with little knowledge of HTML and CSS, and came out with a great level of knowledge of HTML, CSS, and Javascript.
                        </p>
                    </div>
                    <div class="modal-footer"> 
                        <a href="https://github.com/clarawong20/personal-portfolio" target='_blank' rel="noreferrer">
                        <button type="button" class="btn btn-primary">Github</button></a>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal" id="ostomy" tabindex="-1" aria-labelledby="ostomyLabel" aria-hidden="true">
                <div class='modal-dialog modal-dialog-scrollable'>
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="ostomyLabel"><big>IRIS-X: An Ostomy Appliance</big><br/><small>McMaster University</small><br/><small>Sept 2021-Oct 2021</small></h5>
                        
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img src={ostomyPic} alt='ostomyPic'></img>
                        <p>In teams of four, we were presented with a challenge: to create an ostomy bag for a 67-year-old patient that can easily be changed. It must accommodate for arthritis in his hands, which makes changing his ostomy bag before his next bowel movement a struggle. 
                        Additionally, he has sensitive skin and his stoma constantly fluctuates in size and shape. The main issue with commercial ostomy bags is it requires patients to measure and cut open their own wafer opening by hand every time they want to change their ostomy bag. 
                        These fine hand movements are difficult for anyone with arthritis. To aid this patient, we developed a new flexible, easy-to-use wafer opening. With this new design, the patient will be able to change their ostomy bag efficiently. The final product was showcased in a 3-minute thesis (3MT) presentation.
                        <br/><br/><strong>For further details into this project, please refer to the Notion page linked below.</strong>
                        <br/><br/><i>Developed as a project for the IBEHS 1P10 class at McMaster University</i>
                        </p>
                    </div>
                    <div class="modal-footer"> 
                        <a href="https://www.notion.so/clarawong/Design-Project-1-Developing-Ostomy-Appliances-IRIS-X-0a9afcb9ab9f45be94ee9d12843337f6" target='_blank' rel="noreferrer">
                        <button type="button" class="btn btn-primary">Notion</button></a>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                    </div>
                </div>
            </div> 


            <div class="modal" id="hip" tabindex="-1" aria-labelledby="hipLabel" aria-hidden="true">
                <div class='modal-dialog modal-dialog-scrollable'>
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="hipLabel"><big>Revive Hip Implant</big><br/><small>McMaster University</small><br/><small>Oct 2021-Dec 2021</small></h5>
                        
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img src={implant} alt='implantPic'></img>
                        <br/><br/>
                        <p><i>Figure 1: final printed hip implant</i></p>
                        <p>Using <strong>Autodesk Inventor</strong>, I designed and modelled a hip implant for this patient and <strong>3D printed</strong>(using Prusa printers) the model with a partner. 
                            At the end, we presented our implant and findings in a poster presentation. 
                            Overall, our goal was to create a hip implant that was strong and wear-resistant so that the implant will last for decades to come and so that our patient can continue to be physically active. 
                            <br/><br/>
                            <br/><br/>
                        <img src={posterboard} alt='posterboard'></img>
                        <br/><br/>
                        <p><i>Figure 2: posterboard for the faculty presentation</i></p>
                        <br/><br/><strong>For further details into this project, please refer to the Notion page linked below.</strong>
                        <br/><br/><i>Developed as a project for the IBEHS 1P10 class at McMaster University</i>
                        </p>
                    </div>
                    <div class="modal-footer"> 
                        <a href="https://www.notion.so/clarawong/Design-Project-2-Revive-Hip-Implant-c9053d56a6db42b587fafdf27215bc02" target='_blank' rel="noreferrer">
                        <button type="button" class="btn btn-primary">Notion</button></a>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                    </div>
                </div>
            </div> 


            <div class="modal" id="cpr" tabindex="-1" aria-labelledby="cprLabel" aria-hidden="true">
                <div class='modal-dialog modal-dialog-scrollable'>
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="cprLabel"><big>Helping Hands CPR Device</big><br/><small>McMaster University</small><br/><small>Jan 2022-Mar 2022</small></h5>
                        
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img src={cprCode} alt='cprCode'></img>
                        <br/><br/>
                        <p><i>Figure 1: sample code for the CPR device</i></p>
                        <p>In teams of four, we were tasked with making a prototype for a device that addressed a need related to home healthcare and independent living. 
                            My group and I decided to make a CPR device that aims to a) measure the amount of force applied during compressions, and 
                            b) help the person administering CPR count the number of compressions and breaths completed. With a partner, we wired <strong>force sensors and output devices</strong> 
                            (eg. LEDs, buzzer, and vibrator) onto a circuit board. Then, with the use of a <strong>Raspberry Pi and Python</strong>, we coded the force sensors so that they measure 
                            the applied compression force and output signals to provide the user with feedback on their performance. This device can be used by medical professionals 
                            to help ensure they perform CPR properly, added to first aid kits, or used as an instructional tool in first aid classes. 
                            <br/><br/>
                            <br/><br/>
                        <img src={cpr} alt='cpr'></img>
                        <br/><br/>
                        <p><i>Figure 2: final product</i></p>
                        <br/><br/><strong>For further details into this project, please refer to the Notion page linked below.</strong>
                        <br/><br/><i>Developed as a project for the IBEHS 1P10 class at McMaster University</i>
                        </p>
                    </div>
                    <div class="modal-footer"> 
                        <a href="https://www.notion.so/clarawong/Design-Project-3-Helping-Hands-4cf9bbaf889b4a189051d20aebc727d1" target='_blank' rel="noreferrer">
                        <button type="button" class="btn btn-primary">Notion</button></a>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                    </div>
                </div>
            </div> 


            <div class="modal" id="lift" tabindex="-1" aria-labelledby="liftLabel" aria-hidden="true">
                <div class='modal-dialog modal-dialog-scrollable'>
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="liftLabel"><big>L.I.F.T</big><br/><small>McMaster University</small><br/><small>Mar 2022-Apr 2022</small></h5>
                        
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img src={lift} alt='lift'></img>
                        <br/>
                        <p><i>Figure 1: Final product</i></p>
                        <br/>
                        <img src={lift2} alt='lift2'></img>
                        <br/>
                        <p><i>Figure 2: side view of final product</i></p>
                        <br/><br/>
                        <p>In teams of four, we had the opportunity to work with a client, Nadina Gregory. Nadina has Multiple Sclerosis (MS) and as a result, 
                            experiences symptoms such as fatigue, pain, and mobility challenges. These symptoms often impede Nadina’s ability to perform daily tasks or enjoy her hobbies. 
                            Before her diagnosis, Nadina was a combat fighter and lived an active lifestyle. Unfortunately, combat fighting is no longer a possibility, as she gets fatigued 
                            easily and experiences deteriorating strength and control over her grip. Because of her love for physical activity, we wanted to help Nadina exercise more comfortably 
                            and with greater ease. In her exercise program at PACE at McMaster, she often lifts weights. Going off of this, we created Lifting Independently for Fitness Training (L.I.F.T.). 
                            It is a glove that Nadina wears, which allows her to put on and take off weights at her discretion with ease while supporting her wrist. 
                            Additionally, Nadina’s grip naturally wants to be in a closed position, making it difficult to let go of her weights when she is fatigued. 
                            But with L.I.F.T., Nadina can let go of the weights, even if her grip is closed since the device slides out easily once she undoes the locking mechanism that keeps the glove in place. 
                            As a whole, L.I.F.T. allows Nadina to exercise in comfort by reducing the mental strain required to control her grip. 
                            <br/><br/>
                            <br/><br/>
                        <img src={liftCad} alt='liftCad'></img>
                        <br/>
                        <p><i>Figure 3: The CAD Assembly for the exoskeleton of our device</i></p>
                        <br/><br/>
                        <img src={engDraw} alt='engDraw'></img>
                        <br/>
                        <p><i>Figure 4: the engineering drawing for one of the exoskeleton CAD pieces</i></p>
                        <br/><br/><strong>For further details into this project, please refer to the Notion page linked below.</strong>
                        <br/><br/><i>Developed as a project for the IBEHS 1P10 class at McMaster University</i>
                        </p>
                    </div>
                    <div class="modal-footer"> 
                        <a href="https://www.notion.so/clarawong/Design-Project-4-L-I-F-T-8c53fed8676c44f6bbc20b9cb606d786" target='_blank' rel="noreferrer">
                        <button type="button" class="btn btn-primary">Notion</button></a>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                    </div>
                </div>
            </div> 
             
             
            
            
            
            <div class="modal" id="winter" tabindex="-1" aria-labelledby="winterLabel" aria-hidden="true">
                <div class='modal-dialog modal-dialog-scrollable'>
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="winterLabel"><big>Winter Portrait</big><br/><small>John Fraser Secondary School</small><br/><small>May 2019-June 2019</small></h5>
                        
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Inspired by a winter portrait I found on Pinterest, I recreated it using <strong>Processing</strong>. The recreated portrait features animations such as falling snow, flashing lights, and a movable bird. Users can also interact with the lights using a computer mouse. 
                        <br/><br/><i>Developed as a final project for my ICS2D class (grade 10 computer science)</i>
                        </p>
                    </div>
                    <div class="modal-footer"> 
                        <a href="https://github.com/clarawong20/ProcessingProject/blob/master/winter" target='_blank' rel="noreferrer">
                        <button type="button" class="btn btn-primary">Github</button></a>
                        <a href={winterCode} download>
                        <button type="button" class="btn btn-primary">Processing File</button></a>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                    </div>
                </div>
            </div>    
 


        </section>
    )
}