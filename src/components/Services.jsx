const Services = () => {
  return (
    <section id="services">
      <div className="main-container py-14">
        <h1 className="text-5xl font-bold text-center underline">
          My Services
        </h1>
        <div className="services-container grid grid-cols-3 gap-5 px-10 mt-12">
          {/* Service Card 1 */}
          <div className="cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-4">
            <i className="fab fa-java text-4xl"></i>
            <h1 className="text-4xl">Java Full Stack Developer</h1>
            <p>
              Expertise in both frontend and backend Java technologies, building
              scalable web applications with Java, Spring Boot, HTML, CSS, and
              JavaScript to create dynamic, user-friendly websites and
              applications.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>

          {/* Service Card 2 */}
          <div className="cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-3">
            <i className="fab fa-react text-4xl"></i>
            <h1 className="text-4xl">React Frontend Developer</h1>
            <p>
              Skilled in developing responsive, interactive user interfaces with
              React.js, utilizing modern front-end technologies and tools to
              create dynamic, high-performance web applications tailored to
              users needs.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>

          {/* Service Card 3 */}
          <div className="cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-3">
            <i className="fas fa-leaf text-4xl"></i>
            <h1 className="text-4xl">Spring Boot Backend Development</h1>
            <p>
              Proficient in building efficient backend systems using Spring
              Boot, ensuring secure, scalable, and maintainable APIs, optimized
              for high-performance and rapid deployment of enterprise-level
              applications.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>

          {/* Service Card 4 */}
          <div className="cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-3">
            <i className="fas fa-database text-4xl"></i>
            <h1 className="text-4xl">Database Management</h1>
            <p>
              Expertise in designing, managing, and optimizing databases such as
              MySQL, PostgreSQL, and MongoDB, ensuring high availability,
              reliability, and security for web applications with seamless data
              retrieval and storage.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>

          {/* Service Card 5 */}
          <div className="cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-3">
            <i className="fab fa-github text-4xl"></i>
            <h1 className="text-4xl">Github</h1>
            <p>
              Proficient in version control with Git and GitHub, managing code
              repositories, collaborating with teams, tracking changes, and
              ensuring smooth workflow integration and code deployment in a
              software development environment.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>

          {/* Service Card 6 */}
          <div className="cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-3">
            <i className="fas fa-cogs text-4xl"></i>
            <h1 className="text-4xl">CI-CD</h1>
            <p>
              Experienced in Continuous Integration and Continuous Deployment
              (CI/CD), automating the process of code integration, testing, and
              deployment, ensuring faster delivery and high-quality, bug-free
              software development lifecycle.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          {/* Service Card 7 */}
          <div className="cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-3">
            <i className="fas fa-server text-4xl"></i>
            <h1 className="text-4xl">Microservices</h1>
            <p>
              Expertise in designing and developing microservices-based
              architectures for scalable, distributed applications. Focus on
              decoupling services to enable flexible, independent deployment and
              improve application scalability and maintainability.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          {/* Service Card 8 */}
          <div className="cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-3">
            <i className="fas fa-plug text-4xl"></i>
            <h1 className="text-4xl">API</h1>
            <p>
              Proficient in designing and implementing RESTful APIs, ensuring
              secure, scalable, and efficient communication between systems,
              enabling integration across web applications and third-party
              services with seamless data exchange.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          {/* Service Card 9 */}
          <div className="cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-3">
            <i className="fas fa-code text-4xl"></i>
            <h1 className="text-4xl">Java Script</h1>
            <p>
              Strong in JavaScript development, creating interactive web
              applications, manipulating the DOM, and integrating frontend
              technologies with backend systems. Experienced with ES6+,
              libraries, and frameworks to build robust applications.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
