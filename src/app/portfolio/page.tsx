import type { NextPage } from "next";

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-filter padd-15">
              {/* <button type="button" className="active" data-filter="all">
                All
              </button>
              <button type="button" data-filter="graphics-design">
                Graphics Design
              </button>
              <button type="button" data-filter="web-design">
                Web Design
              </button>
              <button type="button" data-filter="wordpress">
                Wordpress
              </button> */}
            </div>
          </div>
          <div className="row">
            {/* Portfolio Item */}
            <div
              className="portfolio-item padd-15" data-category="azure">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/4.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Social Media Application Backend - Node.js</h4>
                  <div>
                    <br/>
                    API Infrastructure for Mike for backend of a react native mobile app I architected and implemented a highly scalable and robust AWS cloud infrastructure to ensure their API remains fast and reliable, even under extreme load. Utilizing AWS&apos;s powerful suite of services, I containerized their Python application with Docker and orchestrated it using AWS Fargate within ECS (Elastic Container Service) clusters. This allows for effortless scaling and management. The application traffic is managed by Network Load Balancers, ensuring smooth distribution across instances in different availability zones. The infrastructure is fortified with Route 53 for DNS management and resilient application deployment through AWS CodePipeline and CodeBuild, with secure storage of Docker images in Amazon ECR (Elastic Container Registry). The system&apos;s backend is supported by ddb (presumably DocumentDB), providing a fast and flexible NoSQL database service. This careful integration of AWS services guarantees zero downtime and a seamless experience for all users. You can also feel this experience go and download OTSY app from app store
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="asp.net">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/3.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Gym portal - React / Node.js</h4>
                  <div>
                    <br/>
                    Take care of your body by booking a gym.
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="react">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/1.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Clinic Management System - React / React Native</h4>
                  {/* <div className="icon">
                    <i className="fa fa-search" />
                  </div> */}
                  <div>
                    <br/>
                    In this system we are handling patients, patients’ appointments, patients’ treatment as per the appointment, appointment charges, appointments lagers, Sale Reports, Expense report, Role base, User management, Access privilege.
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="angular">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/2.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>OPXA Website App - Angular</h4>
                  <div>
                    <br/>
                    The Online Property Exchange Application is a versatile and user-friendly platform that revolutionises the way people buy, sell, trade, and invest in real estate properties. This application seamlessly integrates both a mobile app and a website to provide a comprehensive property trading experience. It empowers users with a range of features and functionalities, making property transactions efficient, secure, and transparent. Key Features: Property Trading: Users can list, buy, and sell properties of various types, including residential, commercial, and industrial, through a user-friendly interface. File Exchange: The application allows users to exchange important documents and files related to property transactions securely. This feature streamlines the paperwork process, reducing delays and errors. Limit Orders: Similar to stock trading, users can set limit buy and sell orders for properties, enabling them to execute transactions automatically when specified price conditions are met. Stop Orders: Users can implement stop orders, such as sell-kill and buy-kill orders, to limit potential losses or secure desired gains in property investments.
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="entity">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/6.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Product Order Management System - Vue</h4>
                  <div>
                    <br/>
                    Manage your orders, announcements and products.
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="blazor">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/5.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>SmartStore Plugin Development - VanillaJS</h4>
                  <div>
                    <br/>
                    SmartStore.Permission (Access Control List) Plugin Manage all pages and individual attributes of products,inventory and other pages.
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="blazor">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/7.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Canteen Management Application - Node.js</h4>
                  <div>
                    <br/>
                    Online Ordering Multiple Shop Branch Multiple Location Delivery System
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
