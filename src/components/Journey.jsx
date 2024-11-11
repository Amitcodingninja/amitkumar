const Journey = () => {
  return (
    <>
      <h1 className="text-center pb-16 text-5xl underline font-bold">
        My Journey
      </h1>

      {/* 10th Card  */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Class 10th Education Card */}
        <div className="mx-16">
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Class 10th Education
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <strong>School Name:</strong> P.L.Shiksha Niketan (Khagaria , Bihar)
              <br />
              <strong>Year of Completion:</strong> 2017
              <br />
              <strong>Board:</strong> CBSE
              <br />
              <strong>Percentage:</strong> 95%
            </p>
          </a>
        </div>

        {/* Class 12th Education Card */}
        <div className="mx-16">
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Class 12th Education
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <strong>School Name:</strong> Patliputra Central School (Khagaria,Bihar)
              <br />
              <strong>Year of Completion:</strong> 2020
              <br />
              <strong>Board:</strong> CBSE
              <br />
              <strong>Percentage:</strong> 72%
            </p>
          </a>
        </div>

        {/* Btech Education Card */}
        <div className="mx-16">
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Graduation Btech CSE
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <strong>University Name:</strong> Lovely Professional University, (Phagwara,Punjab)
              <br />
              <strong>Year of Completion:</strong> (2020-24)

              <br />
              <strong>Percentage:</strong> 7.2 CGPA
              <br />
              <br />
            </p>
          </a>
        </div>

        {/* Internship Education Card */}
        <div className="mx-16">
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Internship
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <strong>Organisation Name:</strong> Opentext, Bengaluru
              <br />
              <strong>Year of Completion:</strong> 2024(April -Oct)
              <br />
              <br />
              <br />
              <br />

            </p>
          </a>
        </div>

        {/*Training Card */}
        <div className="mx-16">
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Training In Java Full Stack
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <strong>Academy Name:</strong> Pankaj Sir Academy (Banglore)
              <br />
              <strong>Year of Completion:</strong> 2024(Oct)-25(March)
              <br />
              <br />
              <br />

            </p>
          </a>
        </div>

        {/* Class 10th Education Card */}
        <div className="mx-16">
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Next Job Coming soon ...
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
<br />
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Journey;
