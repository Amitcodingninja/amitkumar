// Changes Made:
// Replaced flex with a grid layout and set grid-cols-3 to create a 3-column grid that will automatically create a new row for the additional cards.
// Added a gap-5 between the cards to maintain consistent spacing.

/*
Here's a more concise explanation of the changes made:

1. **`grid`**: Converts the container to a grid layout.
2. **`grid-cols-3`**: Creates 3 columns for the cards, ensuring 3 cards per row.
3. **`gap-5`**: Adds uniform spacing between all cards (both horizontally and vertically).
4. **Removed `space-x-5`**: No longer needed because `gap-5` handles spacing in the grid.

This setup ensures the cards remain the same size and evenly spaced across multiple rows.

*/

const Services = () => {
  return (
    <>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              veniam eius optio? Eveniet facilis dolorum quis exercitationem,
              repudiandae sed dolores.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              veniam eius optio? Eveniet facilis dolorum quis exercitationem,
              repudiandae sed dolores.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              veniam eius optio? Eveniet facilis dolorum quis exercitationem,
              repudiandae sed dolores.
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
              Manage databases efficiently with tools like MySQL, MongoDB, and more.
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
              Deploy applications on cloud platforms like AWS, Azure, and GCP.
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
              Secure applications and infrastructure against vulnerabilities and threats.
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
              Secure applications and infrastructure against vulnerabilities and threats.
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
              Secure applications and infrastructure against vulnerabilities and threats.
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
              Secure applications and infrastructure against vulnerabilities and threats.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
