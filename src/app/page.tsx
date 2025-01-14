
export default async function About() {

  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="home">
            <div className="intro">
              <img
                src="/imgs/me2.jpg"
                alt="Dima Profile"
                className="shadow-dark"
              />
              <h1>Daniil Yavtushenko</h1>
              <p>React | React Native | Angular | Vue | Node.js</p>
              <div className="social-links">
                {/* <a href="https://github.com/dmytrosemonkin1111" target="_blank">
                  <i className="fa fa-github" />
                </a> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Daniil a <span>Senior Full-stack Engineer</span>
                  </h2>
                  <p>
                  As a senior-level React / React Native / Angular / Vue engineer, I provide an end-to-end service, turning your concepts into captivating, high-performance digital solutions. My full skill set spans from web application development, to Mobile App development, to database architecture, to server-side coding, among many other things. Allow me to make your life easier by obsessing over solving your company's most complicated problems and finding an elegant solution. Don't waste time hiring freelancer after freelancer, playing a guessing game to see if you're a good fit. With me, you know you have hired a great asset for your team that will follow your team's best practices and will write clean, maintainable code. I have been part of emerging startups, individual clients with an idea, or large corporations, and have stepped up to the plate in each scenario. I can learn new technologies as needed. When conflicts arise, I de-escalate, break down the problem into smaller pieces, and take a positive approach to the situation I am a goal, solution oriented person. My goals are always to give my best and a little bit more, because just outside my limitations a as an engineer is where I have found the most growth. If you believe this description aligns with your project needs, let's talk!
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    {/* <div className="info-item padd-15">
                      <p>
                        Website : <span>www.urfolio.vercel.app</span>
                      </p>
                    </div> */}
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>daniilyavtushenko912@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>MSC</span>
                      </p>
                    </div>
                    {/* <div className="info-item padd-15">
                      <p>
                        Phone : <span>+99 ********</span>
                      </p>
                    </div> */}
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Kharkiv, Ukraine</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      {/* <a
                        href="/assets/docs/resume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="#contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a> */}
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>React</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>React Native</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>JavaScript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "95%" }} />
                        <div className="skill-percent">95%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>TypeScript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "95%" }} />
                        <div className="skill-percent">95%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Angular</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Vue</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Node.js</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "85%" }} />
                        <div className="skill-percent">85%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">

                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2018 to 2020
                          </h6>
                          <h4 className="timeline-title">
                            V.N. Karazin Kharkiv National University
                          </h4>
                          <p className="timeline-text">
                            From 2018 I started my journey to be a Full-stack
                            Engineer on V.N. Karazin Kharkiv National University and in 2020 I had a Bachelor&apos;s degree in Computer Science.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> September 2022 to June 2024
                          </h6>
                          <h4 className="timeline-title">Senior React Fullstack Developer | FutureRemote</h4>
                          <p className="timeline-text">
                            - Developed a progressive web app (PWA) using React and service workers, enabling offline access and native-like functionality on supported devices, while also building a companion mobile app with Flutter for a seamless cross- platform experience.
                          </p>
                          <p className="timeline-text">
                            - Implemented RESTful APIs and WebSocket communication for real-time data exchange between the web and mobile components, ensuring synchronized and up-to-date information for users.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> February 2020 to July 2022
                          </h6>
                          <h4 className="timeline-title">React Native Mobile Developer | Rendmate LLC</h4>
                          <p className="timeline-text">
                            - Built feature-rich mobile applications using React Native and Flutter, delivering solutions that aligned with their specific business objectives and target audience.
                          </p>
                          <p className="timeline-text">
                            - Integrated third-party SDKs and APIs, such as Firebase, Google Maps, and social media authentication, to expand the functionality and reach of the mobile apps, providing users with seamless and engaging experiences.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> April 2017 to November 2019
                          </h6>
                          <h4 className="timeline-title">React Frontend Developer | UppLabs LLC</h4>
                          <p className="timeline-text">
                            - Developed and maintained user-facing features using React and Next.js for a high-traffic e-commerce platform, resulting in a 20% improvement in pages load times and a 15% increase in conversion rates
                          </p>
                          <p className="timeline-text">
                            - Collaborated with the design and product teams to implement responsive and pixel-perfect UI components, ensuring a seamless user experience across desktop and mobile devices.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
