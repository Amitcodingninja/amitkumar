const Footer = () => {
  return (
    <section id="footer">
      {" "}
      {/* Added id="footer" to enable scrolling to footer */}
      <div className="py-10 border-t bg-gray-800 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-lg">
            &copy; 2024 Amit Thakur{" "}
            <span className="italic">All Rights Reserved</span>
          </p>
          <div className="flex justify-center space-x-6">
            <a href="/about" className="hover:underline text-xl">
              About
            </a>
            <a href="/privacy-policy" className="hover:underline text-xl">
              Privacy Policy
            </a>
            <a href="/licensing" className="hover:underline text-xl">
              Licensing
            </a>
            {/* Changed "Contact" link to mailto */}
            <a
              href="mailto:amit.kumar0010110@gmail.com"
              className="hover:underline text-xl"
            >
              Contact
            </a>{" "}
            {/* Changed to mailto */}
          </div>
          <p className="mt-4 text-sm text-gray-400">
            This website is a personal portfolio showcasing various technologies
            and services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
