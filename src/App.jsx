import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div className="bg-white text-gray-800 font-sans">

     {/* HERO PRINCIPAL */}
<section
  className="relative h-[400px] md:h-[550px] bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/Background.jpg')" }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 flex flex-col justify-center items-center text-center px-4">
    <h2
      className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg"
      data-aos="fade-up"
    >
      Impulsando el Campo Duranguense
    </h2>
    <p
      className="text-lg md:text-2xl text-white mb-6"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Programas, apoyos y servicios para nuestros productores
    </p>
  </div>
</section>

{/* LOGOS + TÍTULO */}
<header
  className="bg-[#9A1739] text-white px-6 py-8 text-center relative z-10"
  data-aos="fade-down"
>
  <div className="flex justify-center items-center gap-6 flex-wrap mb-6">
    <img
      src="/logo_agricultura.jpeg"
      alt="Logo Agricultura"
      className="h-20 md:h-24 rounded shadow-md"
    />
    <img
      src="/logo_sagdr.jpeg"
      alt="Logo SAGDR"
      className="h-20 md:h-24 rounded shadow-md"
    />
  </div>
  <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide drop-shadow-md">
    Secretaría de Agricultura y Desarrollo Rural
  </h1>
  <h2 className="text-lg md:text-xl font-medium mt-2">Gobierno del Estado de Durango</h2>
  <div className="mt-6 border-t-2 border-white w-24 mx-auto opacity-50"></div>
</header>

      {/* SERVICIOS */}
      <section className="py-10 px-4 md:px-20 bg-white" data-aos="fade-right">
        <h2 className="text-xl font-semibold text-[#9A1739] text-center mb-6">Servicios que ofrece</h2>
        <ul className="list-disc list-inside max-w-2xl mx-auto text-lg space-y-2">
          <li>Asesoría Técnica</li>
          <li>Estrategia Cosechando Soberanía</li>
          <li>Programa de Fomento Ganadero</li>
          <li>Programa de Fomento Agrícola</li>
          <li>Apoyo a la Comercialización</li>
          <li>Programa PEUA</li>
          <li>Programa de Fertilizantes para el Bienestar</li>
          <li>Programa de Producción para el Bienestar</li>
        </ul>
      </section>

      {/* INFORMACIÓN INSTITUCIONAL */}
      <section className="bg-[#F4F4F4] py-10 px-6 md:px-20" data-aos="fade-left">
        <h2 className="text-2xl font-semibold text-center text-[#9A1739] mb-6">Generalidad de la empresa</h2>
        <p className="text-justify leading-relaxed">
          La Secretaría de Agricultura es una dependencia del poder ejecutivo federal, que tiene entre sus objetivos practicar el ejercicio de una política de apoyo que permita producir mejor, aprovechar mejor las ventajas comparativas del sector agropecuario, integrar las actividades del medio rural a las cadenas productivas del resto de la economía y estimular la colaboración de las organizaciones de productores con programas y proyectos, así como las metas y objetivos propuestos para el sector agropecuario en el Plan Nacional del Desarrollo.
        </p>
        <p className="mt-4"><strong>EMPRESA:</strong> Secretaría de Agricultura Ganadería y Desarrollo Rural Federal del Estado de Durango.</p>
        <p><strong>DIRECCIÓN:</strong> Blvd. Francisco Villa No. 5025, Colonia Cd. Industrial, CP 34229, Durango, Dgo.</p>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="bg-white py-10 px-6 md:px-20" data-aos="fade-right">
        <h2 className="text-2xl font-semibold text-center text-[#9A1739] mb-6">MISIÓN Y VISIÓN</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Misión</h3>
            <p className="text-justify">
              Promover el desarrollo productivo, incluyente y sustentable del sector agropecuario, agrícola y pesquero, que contribuya a la autosuficiencia alimentaria nacional y el bienestar de la población de los territorios rurales y costeros.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Visión</h3>
            <p className="text-justify">
              Un sector agroalimentario que garantice la autosuficiencia alimentaria a través del aprovechamiento sustentable, inclusión de las mujeres y hombres del campo y equidad entre regiones.
            </p>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
<section className="py-10 px-6 md:px-20 bg-white" data-aos="fade-up">
  <h2 className="text-2xl font-semibold text-center text-[#9A1739] mb-6">Galería</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {['foto1.jpg', 'foto2.jpg', 'foto3.png'].map((foto, i) => (
      <img
        key={i}
        src={`/${foto}`}
        alt={`Foto ${i + 1}`}
        className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 object-cover w-full h-60"
      />
    ))}
  </div>
</section>

{/* PRECIOS FRÍJOL NACIONAL */}
<section className="bg-[#F4F4F4] py-10 px-4 md:px-20" data-aos="fade-up">
  <h2 className="text-2xl font-semibold text-center text-[#9A1739] mb-6">Precios de Frijol Nacional (17 Junio 2025)</h2>
  <div className="overflow-auto shadow rounded-lg bg-white">
    <table className="min-w-full text-left border-collapse">
      <thead className="bg-[#9A1739] text-white">
        <tr>
          <th className="p-3">Variedad</th>
          <th className="p-3">Precio Mínimo $/Kg</th>
          <th className="p-3">Máximo $/Kg</th>
        </tr>
      </thead>
      <tbody className="text-gray-800">
        <tr><td className="p-3">Negro</td><td className="p-3">$39.50</td><td className="p-3">$54.50</td></tr>
        <tr><td className="p-3">Pinto</td><td className="p-3">$34.00</td><td className="p-3">$46.00</td></tr>
      </tbody>
    </table>
  </div>
</section>

{/* INVENTARIO */}
<section className="bg-white py-10 px-4 md:px-20" data-aos="fade-up">
  <h2 className="text-2xl font-semibold text-center text-[#9A1739] mb-6">Inventario en Bodegas</h2>
  <div className="overflow-auto shadow rounded-lg bg-[#F4F4F4]">
    <table className="min-w-full text-left">
      <thead className="bg-[#9A1739] text-white">
        <tr>
          <th className="p-3">Variedad</th>
          <th className="p-3">Volumen (Ton)</th>
        </tr>
      </thead>
      <tbody className="text-gray-800">
        <tr><td className="p-3">Frijol Negro San Luis</td><td className="p-3">11,444.62</td></tr>
        <tr><td className="p-3">Frijol Negro San Luis Cribado</td><td className="p-3">9.21</td></tr>
        <tr><td className="p-3">Frijol Pinto Saltillo</td><td className="p-3">11,261.57</td></tr>
        <tr><td className="p-3">Frijol Pinto Saltillo Cribado</td><td className="p-3">69.57</td></tr>
        <tr className="font-semibold"><td className="p-3">Total</td><td className="p-3">22,784.97</td></tr>
      </tbody>
    </table>
  </div>
</section>

{/* IMPORTACIÓN */}
<section className="bg-[#F4F4F4] py-10 px-4 md:px-20" data-aos="fade-up">
  <h2 className="text-2xl font-semibold text-center text-[#9A1739] mb-6">Precios de Frijol de Importación (EE.UU.)</h2>
  <div className="overflow-auto shadow rounded-lg bg-white">
    <table className="min-w-full text-left">
      <thead className="bg-[#9A1739] text-white">
        <tr>
          <th className="p-3">Variedad</th>
          <th className="p-3">Precio Mínimo</th>
          <th className="p-3">Máximo</th>
          <th className="p-3">Promedio Año Anterior</th>
        </tr>
      </thead>
      <tbody className="text-gray-800">
        <tr><td className="p-3">Negro Michigan</td><td className="p-3">$15.26</td><td className="p-3">$16.10</td><td className="p-3">$20.30</td></tr>
        <tr><td className="p-3">Pinto Americano</td><td className="p-3">$14.42</td><td className="p-3">$16.94</td><td className="p-3">$19.46</td></tr>
      </tbody>
    </table>
    <p className="text-xs text-center text-gray-600 mt-2">Precios incluyen broker, maniobras y flete.</p>
  </div>
</section>


      {/* DATOS DE CONTACTO */}
      <section className="bg-white py-6 px-4" data-aos="fade-up">
        <h2 className="text-xl font-semibold text-center mb-4">Información de Contacto</h2>
        <div className="text-center space-y-2">
          <p><strong>Dirección:</strong> Blvd. Francisco Villa No. 5025, Col. Cd. Industrial, CP. 34229, Durango, Dgo.</p>
          <p><strong>Teléfono:</strong> 618 829 1800</p>
          <p><strong>Correo:</strong> representacion.dgo@agricultura.gob.mx</p>
        </div>
      </section>

      {/* FORMULARIO DE CONTACTO */}
      <section className="py-10 px-6 md:px-20 bg-white" data-aos="zoom-in">
        <h2 className="text-2xl font-semibold text-center text-[#9A1739] mb-6">Contáctanos</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Nombre" className="w-full p-3 border rounded" />
          <input type="email" placeholder="Correo electrónico" className="w-full p-3 border rounded" />
          <textarea rows="4" placeholder="Mensaje" className="w-full p-3 border rounded"></textarea>
          <button type="submit" className="bg-[#9A1739] text-white py-2 px-6 rounded hover:bg-[#7c122f] transition">Enviar</button>
        </form>
      </section>

      {/* PIE DE PÁGINA */}
      <footer className="bg-[#9A1739] text-white p-4 text-center">
        <p>© 2025 SAGDR Durango</p>
      </footer>

      {/* BOTÓN WHATSAPP */}
      <a
        href="https://wa.me/5216181234567"
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.001 3C9.373 3 4 8.373 4 15.001a11.95 11.95 0 001.606 6.002L4 29l8.215-1.732A11.946 11.946 0 0016 27c6.627 0 12-5.373 12-11.999C28 8.373 22.627 3 16.001 3zM21.823 17.392c-.319-.159-1.894-.933-2.188-1.038-.293-.106-.508-.159-.723.159-.214.319-.832 1.037-1.021 1.25-.188.213-.375.239-.694.08-.32-.159-1.351-.497-2.574-1.588-.951-.849-1.593-1.897-1.779-2.216-.186-.319-.02-.49.14-.648.143-.142.319-.374.479-.561.159-.187.213-.319.32-.532.106-.213.053-.4-.026-.56-.08-.159-.723-1.742-.991-2.389-.26-.624-.523-.538-.723-.547l-.617-.013c-.213 0-.56.08-.854.4-.293.319-1.12 1.093-1.12 2.665 0 1.572 1.145 3.093 1.303 3.305.159.213 2.25 3.444 5.453 4.828.763.33 1.358.527 1.82.674.764.244 1.46.21 2.009.127.613-.09 1.894-.774 2.162-1.52.267-.745.267-1.384.187-1.52-.079-.133-.292-.213-.61-.372z" />
        </svg>
      </a>
    </div>
  )
}

export default App

