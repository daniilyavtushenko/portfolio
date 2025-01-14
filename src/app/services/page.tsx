import type { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <>
        <section className="service section" id="services">
  <div className="container">
    <div className="row">
      <div className="section-title padd-15">
        <h2>Our Services</h2>
      </div>
    </div>
    <div className="row">
      {/* Service Item 4: Web Development */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-code" /></div>
          <h4>Javascript</h4>
          <p>React.js, Next.js, Gatsby.js, Redux, React Router, Hooks, Context API, Vue.js, Angular.js, Node.js, VanillaJS</p>
        </div>
      </div>
      {/* Service Item 4 End */}
      {/* Service Item 1: Logo Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-paint-brush" /></div>
          <h4>User interface</h4>
          <p>TailwindCSS, Material UI (MUI), Chakra UI, ShadcnUI, Bootstrap, Vuetify, UIkit, Figma, Adobe XD, Sketch</p>
        </div>
      </div>
      {/* Service Item 1 End */}
      {/* Service Item 2: Web Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-mobile" /></div>
          <h4>Mobile</h4>
          <p>React Native, Flutter, Swift, Kotlin</p>
        </div>
      </div>
      {/* Service Item 2 End */}
      {/* Service Item 3: WordPress */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-database" /></div>
          <h4>Database & API development, integration</h4>
          <p>MongoDB, PostgreSQL, CosmosDB, MySQL, Firebase, RESTful, GraphQL, Axios, Fetch, Apollo Client, Apollo Server</p>
        </div>
      </div>
      {/* Service Item 3 End */}
      {/* Service Item 5: Video Editing */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-mixcloud" /></div>
          <h4>Cloud & Deployment, Hosting</h4>
          <p>Azure, Digital Ocean, Heroku, Netlify, AWS, Google Cloud Platform, Docker, Kubernetes, Vercel</p>
        </div>
      </div>
      {/* Service Item 5 End */}
      {/* Service Item 6: SEO Optimization */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-rocket" /></div>
          <h4>Version control & Task management</h4>
          <p>Git, GitHub, GitLab, Bitbucket, Jira, Slack, Trello, Asana, Oneclick, Clickup, Monday.com
          </p>
        </div>
      </div>
      {/* Service Item 6 End */}
    </div>
  </div>
</section>


    </>
  );
};

export default Service;
