import './style.css';
import { TfiEmail } from "react-icons/tfi";
import { FaCertificate } from "react-icons/fa6";
import { TiSocialFacebook,TiSocialTwitter,TiSocialGooglePlus,TiSocialLinkedin,TiSocialInstagram,TiSocialYoutube} from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import { FaStar,FaPlay,FaQuoteRight,FaUniversity } from "react-icons/fa";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import logo from './image/creative-logo-blue.svg';
import logo1 from './image/creative-logo-white.svg';


function App(){
  return(
    <div>
      <div className="cdmi">
          <div className="info">
                <div className='email'>
                  <p><TfiEmail></TfiEmail></p>
                  <p className='icon'>info@cdmi.in</p>
                </div>
                <div className='email'>
                  <p><FaCertificate></FaCertificate></p>
                  <p className='icon'>info@cdmi.in</p>
                </div>
                <div>
                  <p className='mob'>HAVE ANY QUESTION ? +91 90333 16003</p>
                </div>
                <div className='social'>
                  <p><TiSocialFacebook></TiSocialFacebook></p> 
                    <p><TiSocialTwitter ></TiSocialTwitter></p>
                    <p><TiSocialGooglePlus ></TiSocialGooglePlus></p>
                    <p><TiSocialLinkedin ></TiSocialLinkedin ></p>
                    <p><TiSocialInstagram ></TiSocialInstagram></p>
                    <p><TiSocialYoutube ></TiSocialYoutube></p>
                    <p><FaWhatsapp></FaWhatsapp></p>
                </div>
                
          </div>
          <div className="logo">
              <div className='logo_img'>
                  <img src={logo}></img>
              </div>
              <div className='main_menu'>
                <ul style={{marginLeft:"200px",color:"#ffbc06"}}>HOME</ul>
                <ul>COURSE</ul>
                <ul>ACTIVITIES</ul>
                <ul>BLOG</ul>
                <ul>KNOW US</ul>
                <ul>GET IN TOUCH</ul>
                <ul>STUDENT ZONE</ul>
              </div>
          </div>
          <div className='main_img'>
              <img src={require(`./image/main.jpg`)}></img>
          </div>
                <div className='course_n'>
                    <p>CREATIVE COURSE</p>
                    <h1 className='course_big'>OFFERED COURSES</h1>
                </div>
                <div className='first'>
                    <div className='one'>
                      <div className='img'>
                          <img src={require(`./image/1.jpg`)}></img>
                      </div>
                      <p className='course_name'>Devlopment Course</p>
                      <p className='br_line'></p>
                      <div className='main_star'>
                          <p className='star'>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                          </p>
                          <p>
                            <button className='more'>Know More..!</button>
                          </p>
                      </div>
                    </div>
                    <div className='one'>
                      <div className='img'>
                          <img src={require(`./image/2.jpg`)}></img>
                      </div>
                      <p className='course_name'>Design Courses</p>
                      <p className='br_line'></p>
                      <div className='main_star'>
                          <p className='star'>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                          </p>
                          <p>
                            <button className='more'>Know More..!</button>
                          </p>
                      </div>
                    </div>
                     <div className='one'>
                      <div className='img'>
                          <img src={require(`./image/3.jpg`)}></img>
                      </div>
                      <p className='course_name'>Programing IT</p>
                      <p className='br_line'></p>
                      <div className='main_star'>
                          <p className='star'>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                          </p>
                          <p>
                            <button className='more'>Know More..!</button>
                          </p>
                      </div>
                    </div>
                  </div>
                  <div className='first'>
                    <div className='one'>
                      <div className='img'>
                          <img src={require(`./image/4.jpg`)}></img>
                      </div>
                      <p className='course_name'>Treandy Course </p>
                      <p className='br_line'></p>
                      <div className='main_star'>
                          <p className='star'>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                          </p>
                          <p>
                            <button className='more'>Know More..!</button>
                          </p>
                      </div>
                    </div>
                    <div className='one'>
                      <div className='img'>
                          <img src={require(`./image/5.jpg`)}></img>
                      </div>
                      <p className='course_name'>Civil-Mech.Engineering</p>
                      <p className='br_line'></p>
                      <div className='main_star'>
                          <p className='star'>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                          </p>
                          <p>
                            <button className='more'>Know More..!</button>
                          </p>
                      </div>
                    </div>
                     <div className='one'>
                      <div className='img'>
                          <img src={require(`./image/6.jpg`)}></img>
                      </div>
                      <p className='course_name'>Business Devlopment</p>
                      <p className='br_line'></p>
                      <div className='main_star'>
                          <p className='star'>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                          </p>
                          <p>
                            <button className='more'>Know More..!</button>
                          </p>
                      </div>
                    </div>
                  </div>
                  <div>
                      <button  className='btn'>View All Courses ---</button>
                  </div>  
                  <div className='main_about'>
                    <div className='left_about'>
                        <p className='about_name'>----ABOUT US</p>
                        <h3 className='about_sub'>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h3>
                        <p className='about_t'>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Gujarat for Data Science, Machine Learning, Blockchain Development, AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App Development, Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>
                        <button className='enroll'>Enroll Now..!</button>
                    </div>
                    <div className='right_about'>
                        <div className='about_img'>
                            <img src={require(`./image/about-us.webp`)}></img>
                        </div>
                        <div className='layer'></div>
                        <div className='round'>
                        <p className='play'><FaPlay ></FaPlay ></p>
                        </div>
                    </div>
                  </div> 
                  <div className='counter'>
                    <div className='counter_img'>
                        <img src={require(`./image/counter.jpg`)}></img>
                        <div className='blue'></div>
                    </div>
                  </div> 
                  <div className='student'>
                        <div className='student_detail'>
                            <h5>----HAPPY STUDENTS</h5>
                            <h1>ALUMNI SPEAK</h1>
                            <p className='quote'><FaQuoteRight ></FaQuoteRight ></p>
                            <p className='student_p'>I visited this coaching center and they treated me with good care and I am loving time here everyone is highly friendly and the learning atmosphere is great.</p>
                            <div className='course'>
                              <div className='photo'>
                                  <img src={require(`./image/photo.jpg`)}></img>
                              </div>
                                <h6 className='name'>Ishita Chopada</h6>
                                <p className='dev'>Flutter Devlpoer</p>
                                <p className='aet'>@ samp Technology</p>
                            </div>
                        </div>
                        <div className='testimonial'>
                            <img src={require(`./image/testimonial.png`)}></img>
                        </div>                            
                  </div>
                  <div className='gray'>
                      <h6>---READ OUR DIFFERENCE</h6>
                      <h1>WHY CHOOSE CREATIVE</h1>
                      <div className='creative'>
                          <div className='creative_first'>
                              <div className='creative_menu'>
                                  <div className='creative_img'>
                                        <img src={require(`./image/logo1.PNG`)}></img>
                                  </div>
                                  <h3>Industry Experts As Trainers</h3>
                                  <p className='creative_t'>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                              </div>
                              <div className='creative_menu'>
                                  <div className='creative_img1'>
                                        <img src={require(`./image/2.PNG`)}></img>
                                  </div>
                                  <h3>Latest Curriculum</h3>
                                  <p className='creative_t'>We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.</p>
                              </div>
                              <div className='creative_menu'>
                                  <div className='creative_img2'>
                                        <img src={require(`./image/3.PNG`)}></img>
                                  </div>
                                  <h3>Latest Technology</h3>
                                  <p className='creative_t'>We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</p>
                              </div>
                          </div>
                          <div className='creative_second'>
                              <div className='creative_menu'>
                                  <div className='creative_img3'>
                                        <img src={require(`./image/4.PNG`)}></img>
                                  </div>
                                  <h3>Interview Assistance</h3>
                                  <p className='creative_t'>At the end of each training,our training instructor will go through the possible technical questions you may be asked.</p>
                              </div>
                              <div className='creative_menu'>
                                  <div className='creative_img4'>
                                        <img src={require(`./image/5.PNG`)}></img>
                                  </div>
                                  <h3>Free Upgradation</h3>
                                  <p className='creative_t'>We will be provided free upgradation for any newer version of the course you have.</p>
                              </div>
                              <div className='creative_menu'>
                                  <div className='creative_img5'>
                                        <img src={require(`./image/6.PNG`)}></img>
                                  </div>
                                  <h3>Lifetime Support</h3>
                                  <p className='creative_t'>We will provide you lifetime support on all the courses you learned from us.</p>
                              </div>
                          </div>
                     </div>
                  </div>
                  <div className='placement'>
                    <h6>----STUDENT PLACEMENT</h6>
                    <h2>OUR RECRUITMENT PARTNERS</h2>
                    <div className='multi_logo'>
                        <div className='w'>
                          <img src={require(`./image/w1.png`)}></img>
                        </div>
                        <div className='w'>
                          <img src={require(`./image/w2.png`)}></img>
                        </div>
                        <div className='w'>
                          <img src={require(`./image/w3.png`)}></img>
                        </div>
                        <div className='w'>
                          <img src={require(`./image/w4.jpg`)}></img>
                        </div>
                        <div className='w'>
                          <img src={require(`./image/w5.png`)}></img>
                        </div>
                        <div className='w'>
                          <img src={require(`./image/w6.png`)}></img>
                        </div>
                    </div>
                  </div> 
                  <h4 className='demande'>Our Demanded Course -</h4> 
                  <div className='demande_t'>
                    <button className='demande_btn'>Latest Technology Course Training Institute In Katargam</button>
                    <button className='demande_btn' > Solidworks Training Institute In Mota Varachha</button>
                    <button className='demande_btn'> Lumion Training Institute In Katargam</button>
                    <button className='demande_btn'> Spoken English Class In Surat</button>
                  </div>        
                  <div className='demande_t'>
                    <button className='demande_btn'>Game Design Training Institute In Varachha</button>
                    <button className='demande_btn' > CCC Certificate Center In Surat</button>
                    <button className='demande_btn'> Laravel Company In Surat</button>
                    <button className='demande_btn'>Best Video Editing Training Institute</button>

                  </div>        
                  <div className='demande_t'>
                    <button className='demande_btn'>3ds Max Training Institute In Surat</button>
                    <button className='demande_btn' > Best Animation Training Institute </button>
                    <button className='demande_btn'>  Best Web Design Training Institute</button>
                    <button className='demande_btn'>  React Js Training Institute In Surat</button>
                    <button className='demande_btn'>  Python Training Course</button>
                  </div>
                  <div className='footer'>
                    <div className='footer_first'>
                        <div className='logo_img'>
                            <img src={logo1}></img>
                        </div>
                        <p className='footer_t'>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
                        <h5 className='fllow'>FOLLOW US ON</h5>
                        <div className='footer_icon'>
                          <button className='icon'><TiSocialFacebook></TiSocialFacebook></button>
                          <button className='icon'><TiSocialTwitter ></TiSocialTwitter></button>
                          <button className='icon'><TiSocialGooglePlus ></TiSocialGooglePlus></button>
                          <button className='icon'><TiSocialLinkedin ></TiSocialLinkedin ></button>
                          <button className='icon'><TiSocialInstagram ></TiSocialInstagram></button>
                          <button className='icon'><TiSocialYoutube ></TiSocialYoutube></button>
                          <button className='icon'><FaWhatsapp></FaWhatsapp></button>
                        </div>
                    </div>
                    <div className='footer_sed'>
                      <h2 className='footer_f'>FEATURE LINKS</h2>
                      <p><TbArrowBigRightLinesFilled></TbArrowBigRightLinesFilled> About Us</p>
                      <p><TbArrowBigRightLinesFilled></TbArrowBigRightLinesFilled> Blogs</p>
                      <p><TbArrowBigRightLinesFilled></TbArrowBigRightLinesFilled> Join Us</p>
                      <p><TbArrowBigRightLinesFilled></TbArrowBigRightLinesFilled> Company Login</p>
                      <p><TbArrowBigRightLinesFilled></TbArrowBigRightLinesFilled>  Certificate Verfication</p>
                    </div>
                    <div className='footer_third'>
                      <h2 className='contact'>CONTACT US</h2>
                      <h6 className='ofc'>HEAD OFFICE - YOGICHOWK</h6>
                      <p className='add'>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
                      <h6 className='ofc'>OUR BRANCHES</h6>
                      <p><FaUniversity ></FaUniversity  > Katargam</p>
                      <p><FaUniversity ></FaUniversity  > Mota Varachha</p>
                      <p><FaUniversity ></FaUniversity  > Adajan</p>
                      <p><FaUniversity ></FaUniversity  > Navsari</p>
                    </div>  
                  </div>       
                  <div className='copy'>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</div>
        </div>
    </div>
  )
}
export default App