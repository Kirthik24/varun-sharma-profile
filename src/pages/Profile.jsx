import React from 'react'
import '../css/profile.scss'
import '../css/ulist.scss'
const Profile = () => {
  return (
    <div className="profile">
        <div className="profilecard">

            <div className="profileimg"></div>

            <div className="profileinfo">
                <p className="profilename">Varun Sharma</p>
                <p className="otherinfo">Assistant Professor <br />
                    Department of Mechanical and Industrial Engineering <br />
                    Indian Institute of Technology, Roorkee
                </p>
                <p className="otherinfo">212, West Bock <br />
                    MIED, IIT Roorkee <br />
                    Ph.: +91-99909-12264 <br />
                    E-mail: varun.sharma@me.iitr.ac.in
                </p>
            </div>
        </div>

        <div className="para">
            <div className="heading">
            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.322 27.2L34 40.8L68 20.4L34 0L0 20.4H34V27.2H11.322ZM0 27.2V54.4L6.8 46.852V31.28L0 27.2ZM34 68L17 57.8L10.2 53.72V33.32L34 47.6L57.8 33.32V53.72L34 68Z" fill="#2D5186"/> </svg>.
            <h2>Education</h2>
            </div>
            <div className="points profileul">
                <ul>
                    <li><span>
                        Ph.D. (2017) <br />
                        Indian Institute of Technology, Delhi <br />
                        Mechanical Engineering <br />
                    </span></li>
                    <li><span>
                        M.Tech. (2013) <br />
                        Guru Nanak Dev Engineering College, Ludhiana <br />
                        Production Engineering <br />
                    </span></li>
                    <li><span>
                        B.Tech. (2011) <br />
                        Guru Nanak Dev Engineering College PTU,Jalandhar <br />
                        Production Engineering<br />
                    </span></li>
                </ul>
            </div>
        </div>

        <div className="para">
            <div className="heading">
            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M54.0835 67.9773C42.6462 59.5737 23.6402 45.2483 0 42.1232L10.1051 32.2858C39.1109 43.435 54.0835 67.9773 54.0835 67.9773ZM1.20692 52.2382L9.09172 45.9567C32.1028 51.5893 51.6184 68 51.6184 68C43.4006 63.3817 20.0877 52.02 1.20692 52.2382ZM8.44556 29.4525L34.7757 6.13417L40.4459 9.401L27.6794 23.8283C41.4279 35.1135 56.6852 47.1183 55.3189 66.6882C41.7809 47.5972 25.8177 33.9433 8.44556 29.4525ZM30.9528 23.4147L51.1772 0C61.9683 8.78333 68 22.4202 68 29.7868C67.1204 39.1992 57.8722 61.9452 57.0182 64.4555C56.3777 58.769 61.1001 48.7022 30.9528 23.4147Z" fill="#2D5186"/>
</svg>

            <h2>Academic Experience</h2>
            </div>
            <div className="points profileul">
                <ul>
                    <li><span>
                    Assistant Professor <br />
                    Indian Institute of Technology Roorkee <br />
                    June, 2018 to till date <br />
                    </span></li>
                    <li><span>
                    Assistant Professor <br />
                    Birla Institute of Technology and Science, Pilani <br />
                    May, 2017 – June, 2018
                    </span></li>
                    <li><span>
                    Research Associate<br />
                    Indian Institute of Technology Delhi<br />
                    December, 2016 - March, 2017<br />
                    </span></li>

                    <li><span>
                    Research Associate<br />
                    Lovely Professional University<br />
                    August, 2013 – December, 2013<br />
                    </span></li>
                </ul>
            </div>
        </div>

        
        <div className="para">
            <div className="heading">
            <svg width="68" height="68" viewBox="0 0 68 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M61.2 96H6.8C4.99708 95.9982 3.26852 95.2752 1.99366 93.9896C0.718806 92.704 0.00180022 90.9609 0 89.1429V6.85714C0.00180022 5.03907 0.718806 3.29599 1.99366 2.01042C3.26852 0.724845 4.99708 0.00181535 6.8 0H61.2C63.0029 0.00181535 64.7315 0.724845 66.0063 2.01042C67.2812 3.29599 67.9982 5.03907 68 6.85714V63.8331L51 55.2617L34 63.8331V6.85714H6.8V89.1429H61.2V75.4286H68V89.1429C67.9973 90.9606 67.28 92.7032 66.0053 93.9886C64.7307 95.274 63.0026 95.9973 61.2 96ZM51 47.5954L61.2 52.7383V6.85714H40.8V52.7383L51 47.5954Z" fill="#2D5186"/>
</svg>

            <h2>Courses Taught</h2>
            </div>
            <div className="points profileul">
                <ul>
                    <li><span>MIN-101A - Introduction to Mechanical Engineering (B. Tech.)</span></li>
                    <li><span>MIN-102 - Basic Manufacturing Processes (B. Tech.) </span></li>
                    <li><span>MIN-104 - Manufacturing Technology - I (B. Tech.)</span></li>
                    <li><span>MIN-208 - Theory of Production Processes (B. Tech.)</span></li>
                    <li><span>MIN-309 - Theory of Production Processes - II (B. Tech.)</span></li>
                    <li><span>IDN-523 - Rapid Prototyping (M. Tech.)</span></li>
                    <li><span>MIN-571 - Quality Management (M. Tech.)</span></li>
                    <li><span>MIN-572 - Advanced Manufacturing Processes (M. Tech.)</span></li>
                    <li><span>MIN-601 - Additive Manufacturing (M. Tech.)</span></li>
                    <li><span>MIN-629 - Reverse Engineering and Rapid Tooling (M. Tech.)</span></li>
                </ul>
            </div>
        </div>

        
        <div className="para">
            <div className="heading">
            <svg width="68" height="68" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-4.79999 -4.80005H76.8V76.7999H-4.79999V-4.80005Z" fill="#2D5186"/>
</svg>


            <h2>Short Term Courses/Seminar Organized</h2>
            </div>
            <div className="points profileul">
                <ul>
                    <li><span>
                    Idea conceptualization through<br />
                    additive/subtractive manufacturing methods (July 08-12, 2019)<br />
                    Sponsor - AICTE<br />
                    Organizer - MIED, IIT
                    Roorkee
                    </span></li>
                    <li><span>
                    Additive and Subtractive manufacturing for advanced engineering applications:<br />
                    Challenges and Future Aspects (February 24-25, 2022)<br />
                    Sponsor - ARDB   DRDO<br />
                    Organizer - MIED, IIT Roorkee
                    </span></li>
                </ul>
            </div>
        </div>


        
        <div className="para">
            <div className="heading">
            <svg width="68" height="68" viewBox="0 0 68 85" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34 55.25C37.9667 55.25 41.5437 54.2753 44.7312 52.326C47.9187 50.3795 50.4333 47.8125 52.275 44.625C49.7958 42.5708 46.9979 40.9941 43.8812 39.8947C40.7646 38.7983 37.4708 38.25 34 38.25C30.5292 38.25 27.2354 38.7983 24.1188 39.8947C21.0021 40.9941 18.2042 42.5708 15.725 44.625C17.5667 47.8125 20.0813 50.3795 23.2688 52.326C26.4563 54.2753 30.0333 55.25 34 55.25ZM34 34C36.3375 34 38.3392 33.167 40.0052 31.501C41.6684 29.8378 42.5 27.8375 42.5 25.5C42.5 23.1625 41.6684 21.1622 40.0052 19.499C38.3392 17.833 36.3375 17 34 17C31.6625 17 29.6622 17.833 27.999 19.499C26.333 21.1622 25.5 23.1625 25.5 25.5C25.5 27.8375 26.333 29.8378 27.999 31.501C29.6622 33.167 31.6625 34 34 34ZM34 85C22.5958 75.2958 14.0788 66.2816 8.449 57.9572C2.81633 49.6357 0 41.9333 0 34.85C0 24.225 3.41842 15.7604 10.2553 9.45625C17.0893 3.15208 25.0042 0 34 0C42.9958 0 50.9107 3.15208 57.7448 9.45625C64.5816 15.7604 68 24.225 68 34.85C68 41.9333 65.1851 49.6357 59.5553 57.9572C53.9226 66.2816 45.4042 75.2958 34 85Z" fill="#2D5186"/>
</svg>

            <h2>Non-academic Responsibilities</h2>
            </div>
            <div className="points profileul">
                <ul>
                   <li><span>Member, Faculty Search Committee, 2018-2019</span></li>
                   <li><span>Member, Planning, Information, and Special Event Cell, 2018-till date</span></li>
                   <li><span>Professor-In-charge, Metrology Lab, Production and Industrial Engineering Laboratories, 2018-till date</span></li>
                   <li><span>Deputy Office-In-charge, Placement, 2019-2020</span></li>
                   <li><span>Co-ordinator, Modern Workshop, 2020-2021</span></li>
                   <li><span>Co-ordinator, Placement, 2020-2021</span></li>
                   <li><span>Member, Department Administrative Committee, 2021-till date</span></li>
                   <li><span>Member, Time Table Committee, 2021-till date</span></li>
                   <li><span>Warden, Radhakrishnan Bhawan, 2020-2021</span></li>
                   <li><span>Chief Warden, Radhakrishnan Bhawan, 2022-till date</span></li>
                   <li><span>Maintenance head in charge of MIED, West Block, 2022-till date</span></li>
                   <li><span>Joint Faculty in Department of Design: 2020- till date</span></li>
                </ul>
            </div>
        </div>

        <div className="para">
            <div className="heading">
            <svg width="68" height="68" viewBox="0 0 68 66" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M61.3659 49.5C63.1253 49.5 64.8128 48.8046 66.0569 47.5669C67.301 46.3292 68 44.6504 68 42.9V6.6C68 4.84957 67.301 3.17084 66.0569 1.93309C64.8128 0.695355 63.1253 0 61.3659 0H26.4039C27.5649 2.013 28.1951 4.29 28.1951 6.6H61.3659V42.9H31.5122V49.5M44.7805 16.5V23.1H24.878V66H18.2439V46.2H11.6098V66H4.97561V39.6H0V23.1C0 21.3496 0.698952 19.6708 1.9431 18.4331C3.18724 17.1954 4.87466 16.5 6.63415 16.5H44.7805ZM21.561 6.6C21.561 8.35043 20.862 10.0292 19.6179 11.2669C18.3737 12.5046 16.6863 13.2 14.9268 13.2C13.1673 13.2 11.4799 12.5046 10.2358 11.2669C8.99164 10.0292 8.29268 8.35043 8.29268 6.6C8.29268 4.84957 8.99164 3.17084 10.2358 1.93309C11.4799 0.695355 13.1673 0 14.9268 0C16.6863 0 18.3737 0.695355 19.6179 1.93309C20.862 3.17084 21.561 4.84957 21.561 6.6Z" fill="#2D5186"/>
</svg>

            <h2>Invited Lectures</h2>
            </div>
            <div className="points profileul">
                <ul>
                   <li><span>Pharmaceutical applications of 3D printing <br />
DDM College of Pharmacy, Una, Himachal
Pradesh</span></li>
                   <li><span>Design of experimentation using Minitab <br />
Guru Nanak Dev Engineering College,
Ludhiana, Punjab</span></li>
                   <li><span>3D printing: State of the art<br />
Chandigarh University, Mohali, Punjab</span></li>
                   <li><span>Introduction to 3D printing<br />
DIC, IIT Roorkee, Roorkee Uttarakhand</span></li>
                   <li><span>Sustainable manufacturing through ultrasonic
assisted turning process <br />
DIC, IIT Roorkee, Roorkee Uttarakhand</span></li>
                   <li><span>Additive manufacturing techniques for product
development<br />
Roorkee Institute of Technology, Roorkee,
Uttarakhand</span></li>
                   <li><span>Additive Manufacturing: Recent Trends and
Challenges<br />
Chandigarh University, Mohali, Punjab</span></li>
                   <li><span>Some insights into additive manufacturing for
product development<br />
DIC, IIT Roorkee, Roorkee Uttarakhand</span></li>
                   <li><span>Design considerations in additive
manufacturing<br />
Chandigarh University, Mohali, Punjab</span></li>
                   <li><span>Abrasive Flow Machining (AFM) of 3D
printed parts using a newly developed
hydrogel-based abrasive media<br />
Bundelkhand Institute of Engineering and
Technology, Jhansi, Uttar Pradesh</span></li>
                   <li><span>3D printing: biomedical applications<br />
IIT Jammu, Jammu and Kashmir</span></li>
                   <li><span>Quality award models<br />
AICTE Course, IIT Roorkee</span></li>
                   <li><span>Additive manufacturing: Biomedical
applications<br />  
Department of Mechanical Engineering, CEC,
Landran</span></li>
                   <li><span>Additive manufacturing: A paradigm shift <br />
8th International, 10th Conference on
Advancements and Futuristic Trends in <br />
Mechanical and Materials Engineering
(AFTMME 2020)
IIT Ropar</span></li>
                   <li><span>Modern Day Manufacturing through 3D
printing<br />
3rd International e-Conference on Frontiers in
Mechanical Engineering and nanoTechnology<br />
[ICFMET]
Yashwantrao Patil Science College, Solankur
and Sanjeevan Engineering & <br />Technology Institute, Panhala, Maharashtra</span></li>
                   <li><span>Session Chair<br />
2 nd International Conference on “Industrial and
Manufacturing Systems”(CIMS-2021)<br />
Department of Production and Industrial
Engineering, Punjab Engineering College, <br />Chandigarh, and Department of Industrial and
Production Engineering Dr. B R Ambedkar <br />National Institute of Technology (NIT),
Jalandhar</span></li>

<li><span>Additive Manufacturing Part I-Materials for
Additive Manufacturing<br />
Department of Mechanical Engineering, Indian
Institute of Technology (Banaras Hindu <br />
University) Varanasi</span></li>

<li><span>Additive manufacturing: Basics and Process
Principle<br />
Bharat Heavy Electricals Limited</span></li>
<li><span>Metal based additive manufacturing<br />
Bharat Heavy Electricals Limited</span></li>
                </ul>
            </div>
        </div>


    </div>
  )
}

export default Profile