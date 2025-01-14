import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="home">
            <div className="intro">
              <img
                src="/imgs/me1.png"
                alt="Dima Profile"
                className="shadow-dark"
              />
              <h1>Dmytro Semonkin</h1>
              <p>C# | .NET | ASP.NET | Azure | Blazor | WPF</p>
              <div className="social-links">
                <a href="https://github.com/dmytrosemonkin1111" target="_blank">
                  <i className="fa fa-github" />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Dima a <span>Full-stack Engineer</span>
                  </h2>
                  <p>
                  As a highly skilled and experienced PRO EXPERT FULL-STACK Engineer with 5 years of commercial experience in C#, .NET, MVC, .NET Core, ASP.NET, Azure, Blazor, I offer a wide range of technical expertise in web and desktop application development. I have a proven track record of delivering top-quality software solutions that meet the needs of my clients(you). My technical skill set includes proficiency in several databases, including SQL Server, MySQL, PostgreSQL and MongoDB. I am also proficient in popular front-end frameworks such as React, jQuery, Angular and Vue, which allows me to develop responsive and dynamic user interfaces. In addition, I have experience using DevOps tools such as Visual Studio, Azure DevOps, and GitHub, which enables me to automate workflows and streamline development processes. Whether you&apos;re looking to build a scalable desktop/web application from scratch or improve an existing application, I am committed to providing exceptional service and delivering projects on time and within budget. Let&apos;s work together to create the next great software solution!
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
                        Email : <span>dmytrosemonkin@gmail.com</span>
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
                        City : <span>Odesa, Ukraine</span>
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
                      <h5>C#</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>ASP.NET</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>MS SQL</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Azure</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "85%" }} />
                        <div className="skill-percent">85%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Blazor</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>WPF</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
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
                            <i className="fa fa-calendar" /> 2018 to 2021
                          </h6>
                          <h4 className="timeline-title">
                            Vinnytsia National Technical
                          </h4>
                          <p className="timeline-text">
                            From 2018 I started my journey to be a Full-stack
                            Engineer on Vinnytsia National Technical and in 2021 I had a Master&apos;s degree in Computer Science.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2013 to 2018
                          </h6>
                          <h4 className="timeline-title">
                            Secondary School Certificate
                          </h4>
                          <p className="timeline-text">
                            In 2019 I passed SSC Exam from Science Group with
                            GPA- 4.56. My school name was Lutsk Gymnasium 21. High School.
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
                            <i className="fa fa-calendar" /> September 2021 to October 2023
                          </h6>
                          <h4 className="timeline-title">Full-Stack Engineer: C# (ASP.NET) + React</h4>
                          <p className="timeline-text">
                            - Developed and maintained web applications using ASP.NET, C# and Azure, ensuring high performance and user-friendly interfaces.
                          </p>
                          <p className="timeline-text">
                            - Collaborated with UI/UX designers to create visually appealing and intuitive user interfaces.
                          </p>
                          <p className="timeline-text">
                            - Implemented security measures, such as authentication and authorization, to protect sensitive data and experienced cloud services such as AWS, GCP and Azure.
                          </p>
                          <p className="timeline-text">
                            - Optimized application code, improving response times and overall system efficiency.
                          </p>
                          <p className="timeline-text">
                            - Integrated and configured various third-party tools and frameworks, such as Entity Framework and jQuery.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> July 2019 to August 2021
                          </h6>
                          <h4 className="timeline-title">Back-End C# / .NET Developer</h4>
                          <p className="timeline-text">
                            - Developed and maintained robust and scalable C# applications for clients, adhering to coding standards and best practices..
                          </p>
                          <p className="timeline-text">
                            - Integrated third-party APIs and libraries to enhance application functionality and performance.
                          </p>
                          <p className="timeline-text">
                            - Implemented efficient database design and optimized SQL queries for improved data retrieval and manipulation.
                          </p>
                          <p className="timeline-text">
                            - Utilized agile methodologies, such as Scrum, to manage project timelines and deliverables effectively.
                          </p>
                          <p className="timeline-text">
                            - Collaborated with cross-functional teams to gather requirements, design solutions, and implement new features.
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
};

export default About;
