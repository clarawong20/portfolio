import code from '../assets/img/code.jpg';
import ostomy from '../assets/img/ostomy.png';
import hip from '../assets/img/hip implant.png';
import cpr from '../assets/img/cpr.png';
import lift from '../assets/img/lift.png';
import stats from '../assets/img/stats.jpg';
import winter from '../assets/img/winter.jpg';

export const Projects=()=> {
    return (
        <section className='projects' id='projects'>
            <h1>Projects</h1>
            <div class='container'>
                <div class='row'>
                    <div class='col-12 col-md-6 col-lg-4 d-flex align-items-stretch'>
                        <div class='card mt-4'>
                            <img src={code} alt='website-img' class='card-img-top'></img>
                            <div class='card-body'>
                                <h3 class='card-title'>Personal Portfolio</h3>
                                <h5 class='card-text'>Personal Project</h5>
                                <p class='card-date'>December 2022-Ongoing</p>
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
                            </div>
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#website">More Info</button> 
                            </div>
                    </div>
                    <div class='col-12 col-md-6 col-lg-4 d-flex align-items-stretch'>
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
                        </div>
                    </div>
                    <div class='col-12 col-md-6 col-lg-4 d-flex align-items-stretch'>
                        <div class='card mt-4'>
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
                        </div>
                    </div>
                    <div class='col-12 col-md-6 col-lg-4 d-flex align-items-stretch'>
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
                        </div>
                    </div>
                    <div class='col-12 col-md-6 col-lg-4 y-flex align-items-stretch'>
                        <div class='card mt-4'>
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
                        </div>
                    </div>
                    <div class='col-12 col-md-6 col-lg-4 d-flex align-items-stretch'>
                        <div class='card mt-4'>
                            <img src={stats} alt='stats-img' class='card-img-top'></img>
                            <div class='card-body'>
                                <h3 class='card-title'>Toronto Maple Leafs Stats Searcher</h3>
                                <h5 class='card-text'>John Fraser Secondary School</h5>
                                <p class='card-date'>December 2019-March 2020</p>
                            </div>
                            <div className='project-item-cta'>
                                <div className='tag-program'>
                                    <h7><strong>PYTHON</strong></h7>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='col-12 col-md-6 col-lg-4 d-flex align-items-stretch'>
                        <div class='card mt-4'>
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
                        <p>Using React.js, I created a personal portfolio to showcase some of my knowledge in HTML, CSS, and Javascript. I used tools such as Bootstrap to help make components of my portfolio.
                        <br/><br/>This project was a great experience: I went into it with little knowledge of HTML and CSS, and came out with a great level of knowledge of HTML, CSS, and Javascriipt.
                        </p>
                    </div>
                    <div class="modal-footer"> 
                        <a href="https://github.com/clarawong20/personal-portfolio" target='_blank'>
                        <button type="button" class="btn btn-primary">Github</button></a>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                    </div>
                </div>
            </div>  
 


        </section>
    )
}