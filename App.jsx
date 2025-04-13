export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm w-full text-center">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">Aditya Singhal</h1>
        <p className="text-gray-600 mb-4 text-sm">
          Versatile and detail-oriented Full Stack Developer with experience in building scalable web applications using Spring Boot for backend development and seamless frontend-backend-ML model integration. Proficient in Java, JavaScript, HTML, CSS, and modern frameworks, ensuring responsive and efficient user experiences. Passionate about creating innovative designs that blend vintage aesthetics with modern functionality. Currently refining skills through a CodSoft internship, showcasing expertise in real-time applications. Strong problem-solving abilities, with a focus on performance optimization and security.
        </p>
        <h2 className="text-lg font-semibold mb-2">Hobbies</h2>
        <ul className="list-disc list-inside text-left text-gray-700">
          <li>Reading</li>
          <li>Coding</li>
          <li>Traveling</li>
        </ul>
      </div>
    </div>
  );
}
