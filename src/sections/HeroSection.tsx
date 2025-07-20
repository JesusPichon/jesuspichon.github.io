import profileImage from '../assets/profile.jpeg';
import Label from '../components/Label';

function Hero() {
  return (
    <div className="bg-gradient-to-r from-[#051D35] to-[#050E17] py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="md:w-1/2">
          <div className='w-40 mb-2'><Label>Jesus Pichón</Label></div>
          <p className="text-[#128DF7] text-5xl mb-4">I'm a software developer</p>
          <p className="text-white text-base mb-6">
            Mi enfoque se centra en crear soluciones eficientes y escalables, aplicando metodologías de diseño
            centradas en el usuario (UX/UI) y heurísticas de prueba. Me apasiona trabajar en proyectos con
            arquitecturas MVC y gestionar bases de datos SQL, además de integrar tecnologías de análisis y
            gestión de datos como Zoho CRM y Google Sheets.
          </p>

          <input
            className="bg-blue-600 text-white px-6 py-2 rounded-full transition transform hover:bg-blue-700 hover:scale-105 duration-200 cursor-pointer mb-6"
            type="button"
            value="Get Resume"
          />

          <ul className="flex gap-6 text-blue-400 font-medium">
            <li><a href="">LinkedIn</a></li>
            <li><a href="">GitHub</a></li>
            <li><a href="">Get in touch</a></li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            className="rounded-full w-72 shadow-lg hover:opacity-90 transition-opacity duration-300"
            src={profileImage}
            alt="profile image"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
