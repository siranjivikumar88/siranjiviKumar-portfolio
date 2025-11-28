import React from "react";

const Resume = () => {
  // --- Detect Dark Mode (same logic as StartBackground.jsx) ---
  const [isDarkMode, setIsDarkMode] = React.useState(
    document.documentElement.classList.contains("dark")
  );

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="
        min-h-screen w-full flex justify-center px-4 py-10
        bg-background text-foreground transition-colors duration-300
      "
    >
      <div
        className="
          w-full max-w-4xl bg-card border border-border
          text-foreground shadow-xl rounded-2xl p-10
          transition-colors duration-300 animate-fade-in
        "
      >
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-1">
          SIRANJIVIKUMAR
        </h1>

        <p className="text-lg text-center opacity-70 mb-6">
          React Developer
        </p>

        <hr className="border-border mb-8" />

        {/* Profile Section */}
        <h2 className="text-2xl font-semibold text-primary mb-3">
          Profile
        </h2>

        <p
          className={`
            leading-relaxed mb-6 px-3 py-2 rounded-md transition-all duration-300
            ${isDarkMode
              ? "bg-gray-800 text-gray-200 border border-gray-700"
              : "bg-gray-100 text-gray-700 shadow-sm border border-gray-300"
            }
          `}
        >
          To leverage my expertise in React.js, JavaScript, and front-end
          frameworks to build scalable and user-friendly applications.
        </p>

        {/* Skills */}
        <h2 className="text-2xl font-semibold text-primary mb-3">Skills</h2>

        <ul
          className="
            grid grid-cols-2 gap-2 mb-6 list-none 
            text-foreground opacity-90
          "
        >
          <li>React.js</li>
          <li>Redux Toolkit</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5 / CSS3</li>
          <li>Tailwind CSS</li>
          <li>API Integration (Axios / Fetch)</li>
          <li>Bootstrap</li>
          <li>Responsive Design</li>
        </ul>

        {/* Experience */}
        <h2 className="text-2xl font-semibold text-primary mb-3">
          Work Experience
        </h2>

        {/* GM Financial */}
        <div className="mb-6">
          <h3 className="text-xl font-bold">
            GM Financial (Aug 2024 – Present)
          </h3>

          <p className="opacity-80 mb-1">
            Financial Services | React Developer
          </p>

          <ul className="list-none ml-5 mt-2 opacity-80 leading-relaxed">
            <li>Developed and enhanced loan processing UI using React.</li>
            <li>Implemented Redux workflows to reduce re-renders.</li>
            <li>Built reusable UI components.</li>
            <li>Integrated REST APIs using Axios / Fetch.</li>
          </ul>
        </div>

        {/* Cox Communications */}
        <div className="mb-6">
          <h3 className="text-xl font-bold">
            Cox Communications (Sept 2023 – July 2024)
          </h3>

          <p className="opacity-80 mb-1">
            Telecommunications | React Developer
          </p>

          <ul className="list-none ml-5 mt-2 opacity-80 leading-relaxed">
            <li>Built customer-facing UI for account management.</li>
            <li>Implemented secure workflows and optimized UI.</li>
            <li>Integrated APIs for billing and payment services.</li>
          </ul>
        </div>

        {/* Qualification */}
        <h2 className="text-2xl font-semibold text-primary mb-3">
          Qualification
        </h2>

        <p className="opacity-90 mb-6 leading-relaxed">
          BE - Computer Science Engineering (2022 - Present)  
          <br /> Sree Sowdambika College Of Engineering
        </p>

        {/* Contact */}
        <h2 className="text-2xl font-semibold text-primary mb-3">
          Contact
        </h2>

        <p className="opacity-90 leading-relaxed">
          📞 7904321487  
          <br />
          📧 siranjivikumar88@gmail.com  
          <br />
          📍 Thoothukudi, Tamil Nadu
        </p>
      </div>
    </div>
  );
};

export default Resume;
