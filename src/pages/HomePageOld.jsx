// src/App.jsx
import './HomePage.css';

function HomePageOld() {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat image"
    >
      <div className="min-h-screen bg-black/50 text-white">
        {/* Hero Section */}
        <header className="h-screen flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl sm:text-6xl font-bold uppercase">Sebastian Colina</h1>
          <p className="text-xl sm:text-2xl mt-4">Web Developer</p>
        </header>

        {/* About Section */}
        <section className="min-h-screen px-4 py-16 bg-black/60 text-white flex flex-col justify-center text-center">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="max-w-2xl mx-auto">I am a web developer who loves building interactive user experiences.</p>
        </section>

        {/* Projects Section */}
        <section className="min-h-screen px-4 py-16 bg-white/90 text-gray-900 flex flex-col justify-center text-center">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <p className="max-w-2xl mx-auto">Here are some of my featured works including websites and applications.</p>
        </section>

        {/* Contact Section */}
        <section className="min-h-screen px-4 py-16 text-white text-center" style={{ textShadow: '0 0 5px rgba(0,0,0,0.7)' }}>
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p>Email me at: sebacoli@gmail.com</p>
        </section>
      </div>
    </div>
  );
}

export default HomePageOld;
