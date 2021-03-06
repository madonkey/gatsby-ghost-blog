import Helmet from 'react-helmet';
import React from 'react';

import '../../styles/app.scss';

const CVRaw = () => (
    <>
        <Helmet>
            <meta name="robots" content="noindex" />
            <link
                href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;700&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;700&display=swap"
                rel="stylesheet"
            />
            <title>Dermot Hughes CV</title>
        </Helmet>

        <div id="cv-body">
            <div id="cv">
                <div className="mainDetails">
                    <div id="name">
                        <h1>Dermot Hughes</h1>
                        <h2>Front End Developer</h2>
                    </div>
                    <div id="contactDetails">
                        <ul>
                            <li>
                                <img
                                    src="/images/icons/email.svg"
                                    alt="email icon"
                                />
                                <a
                                    href="mailto:contact@dermothughes.com"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    contact@dermothughes.com
                                </a>
                            </li>
                            <li>
                                <img
                                    src="/images/icons/web.svg"
                                    alt="website icon"
                                />
                                <a href="http://www.dermothughes.com">
                                    www.dermothughes.com
                                </a>
                            </li>
                            <li>
                                <img
                                    src="/images/icons/phone.svg"
                                    alt="phone icon"
                                />
                                (+44) 7818893798
                            </li>
                        </ul>
                    </div>
                    <div className="clear" />
                </div>
                <div id="mainArea">
                    <section>
                        <article>
                            <div className="sectionTitle">
                                <h1>Personal Profile</h1>
                            </div>
                            <div className="coverLetter sectionContent">
                                <p>
                                    I&apos;m a Front End Developer and UX
                                    Designer based in Belfast, Northern Ireland.
                                    I love to solve problems and create
                                    solutions.
                                </p>
                                <p>
                                    I&apos;m very passionate about well designed
                                    and accessible UX and front end web
                                    technologies. I love bringing designs to
                                    life.
                                    <span className="print-only">
                                        In fact, this CV is actually written in
                                        HTML and CSS. You can view the web
                                        version at www.dermothughes.com/cv
                                    </span>
                                </p>
                            </div>
                        </article>
                        <div className="clear" />
                    </section>
                    <section>
                        <div className="sectionTitle">
                            <h1>Work Experience</h1>
                        </div>
                        <div className="sectionContent">
                            <article>
                                <h2>UX Engineer</h2>
                                <h3>Bazaarvoice</h3>
                                <p className="subDetails">
                                    Feburary 2021 - Present
                                </p>
                                <p>
                                    Front End Developer using React. Focusing on
                                    developing and managing an internal design
                                    system.
                                </p>
                            </article>
                            <article>
                                <h2>UX Developer</h2>
                                <h3>Atto Partners</h3>
                                <p className="subDetails">
                                    September 2020 - December 2020
                                </p>
                                <p>
                                    Front End Development with a particular
                                    focus on UI and UX. Worked on a series of
                                    projects both greenfield and legacy, with a
                                    variety of stacks including Vue and Ruby on
                                    Rails.
                                </p>
                            </article>
                            <article>
                                <h2>Front End Engineer</h2>
                                <h3>Micro Focus</h3>
                                <p className="subDetails">
                                    October 2019 - September 2020
                                </p>
                                <p>
                                    Front End Development using the Angular
                                    framework. Developing and maintaining an
                                    open and closed source design system and UI
                                    Angular component library,
                                    <a href="https://uxaspects.github.io/UXAspects/#/landing">
                                        {' '}
                                        UX Aspects
                                    </a>
                                    . Application development for UI of
                                    <a href="https://www.microfocus.com/en-us/products/digital-safe-cloud-archiving/overview">
                                        {' '}
                                        Digital Safe
                                    </a>
                                    .
                                </p>
                                <ul className="jobSkills">
                                    <li>Angular</li>
                                    <li>Front End Development</li>
                                    <li>HTML</li>
                                    <li>SCSS</li>
                                    <li>Javascript</li>
                                    <li>UI Design</li>
                                    <li>Component Library Development</li>
                                </ul>
                            </article>

                            <article className="second-job">
                                <h2>Front End Engineer</h2>
                                <h3>Reward</h3>
                                <p className="subDetails">
                                    April 2018 - October 2019
                                </p>
                                <p>
                                    Front End Development incorporating HTML5,
                                    CSS3, and JavaScript ES6+/TypeScript using
                                    the Angular framework. UX and UI Design for
                                    Web applications. Wireframing, rapid
                                    prototyping, mockups, user research, and
                                    analytics. Public facing sites and
                                    internal/client facing interfaces, including
                                    front-end development and UX design. Email
                                    design and development for award winning
                                    bank loyalty programmes.
                                </p>
                                <ul className="jobSkills">
                                    <li>Angular</li>
                                    <li>Front End Development</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>UI Design</li>
                                    <li>UX Research and Design</li>
                                    <li>Email Development</li>
                                </ul>
                            </article>
                            <article>
                                <h2>Email Development Lead</h2>
                                <h3>Chain Reaction Cycles</h3>
                                <p className="subDetails">
                                    October 2016 - April 2018
                                </p>
                                <p>
                                    Lead Developer and Line Manager for the
                                    Email Marketing team for Chain Reaction
                                    Cycles - The World&apos;s Largest Online
                                    Bike Store. Responsible for the creation and
                                    delivery of responsive mobile-first
                                    commercial and CRM emails worldwide. Working
                                    to extreme deadlines and turnarounds as
                                    short as hours.
                                </p>
                                <ul className="jobSkills">
                                    <li>HTML and CSS Development</li>
                                    <li>
                                        Robust and Modular Templating
                                        Development
                                    </li>
                                    <li>Responsive Email Development</li>
                                    <li>Personalisation</li>
                                    <li>Complex Automation campaigns</li>
                                    <li>Landing pages</li>
                                    <li>Release Management</li>
                                    <li>
                                        Database Management and Segmentation
                                    </li>
                                    <li>Workflow review and improvement</li>
                                    <li>A/B Split Testing</li>
                                    <li>Line Manager</li>
                                </ul>
                            </article>
                            <article>
                                <h2>Technical Support Engineer</h2>
                                <h3>Engage</h3>
                                <p className="subDetails">
                                    April 2016 - October 2016
                                </p>
                            </article>
                            <article>
                                <h2>Desktop Support Engineer</h2>
                                <h3>Egton Health (EMIS)</h3>
                                <p className="subDetails">
                                    June 2014 - March 2016
                                </p>
                            </article>
                        </div>
                        <div className="clear" />
                    </section>

                    <section className="key-skills-section">
                        <div className="sectionTitle">
                            <h1>Key Skills</h1>
                        </div>
                        <div className="sectionContent">
                            <ul className="keySkills">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>Angular</li>
                                <li>Responsive Design</li>
                                <li>Responsive Email Development</li>
                                <li>UX/UI Design</li>
                                <li>Adobe Creative Suite</li>
                                <li>Sketch</li>
                                <li>Video Production</li>
                                <li>Audio Engineering</li>
                                <li>Git</li>
                            </ul>
                        </div>
                        <div className="clear" />
                    </section>
                    <section id="education">
                        <div className="sectionTitle">
                            <h1>Education</h1>
                        </div>
                        <div className="sectionContent">
                            <article>
                                <h2>BSc (Hons) Creative Technologies</h2>
                                <h3>University of Ulster, Magee</h3>
                                <p className="subDetails">
                                    First Class Honours
                                </p>
                                <br />
                            </article>
                            <article>
                                <h2>BTEC National Diploma in Multimedia</h2>
                                <h3>Southern Regional College, Newry</h3>
                                <p className="subDetails">MMM</p>
                                <br />
                            </article>
                            <article>
                                <h2>GCSE/A Level</h2>
                                <h3>Abbey Grammar School, Newry</h3>
                                <p className="subDetails">
                                    A-C including English, Maths, and ICT
                                </p>
                                <br />
                            </article>
                        </div>
                        <div className="clear" />
                    </section>
                    <section>
                        <div className="sectionTitle">
                            <h1>Interests</h1>
                        </div>
                        <div className="sectionContent">
                            <article>
                                <p>
                                    In my free time I enjoy being creative if I
                                    can. I like photography and video
                                    production, recording music, mountain
                                    biking, playing bass guitar, listening to
                                    new music, watching ice hockey, cooking, and
                                    occasionally I’ve taken part as an extra in
                                    TV and Film productions such as Game of
                                    Thrones and The Fall.
                                </p>
                                <p className="ref">
                                    A list of references is available on
                                    request.
                                </p>
                            </article>
                        </div>
                        <div className="clear" />
                    </section>
                </div>
            </div>
        </div>
    </>
);

export default CVRaw;
