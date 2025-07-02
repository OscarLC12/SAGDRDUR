import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

function PricesPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Botón volver */}
      <div className="text-left px-6 pt-6">
        <Link to="/" className="bg-[#9A1739] text-white px-4 py-2 rounded hover:bg-[#7b122d] transition">
          ← Volver al Inicio
        </Link>
      </div>

      {/* Frijol Nacional */}
      <section className="py-10 px-4 md:px-20" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-center text-[#9A1739] mb-6">
          Precios de Frijol Nacional (17 Junio 2025)
        </h2>
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
              <tr>
                <td className="p-3">Negro</td>
                <td className="p-3">$39.50</td>
                <td className="p-3">$54.50</td>
              </tr>
              <tr>
                <td className="p-3">Pinto</td>
                <td className="p-3">$34.00</td>
                <td className="p-3">$46.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Inventario */}
      <section className="bg-white py-10 px-4 md:px-20" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-center text-[#9A1739] mb-6">
          Inventario en Bodegas
        </h2>
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

      {/* Importación */}
      <section className="bg-[#F4F4F4] py-10 px-4 md:px-20" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-center text-[#9A1739] mb-6">
          Precios de Frijol de Importación (EE.UU.)
        </h2>
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
              <tr>
                <td className="p-3">Negro Michigan</td>
                <td className="p-3">$15.26</td>
                <td className="p-3">$16.10</td>
                <td className="p-3">$20.30</td>
              </tr>
              <tr>
                <td className="p-3">Pinto Americano</td>
                <td className="p-3">$14.42</td>
                <td className="p-3">$16.94</td>
                <td className="p-3">$19.46</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-center text-gray-600 mt-2">
            Precios incluyen broker, maniobras y flete.
          </p>
        </div>
      </section>
    </div>
  )
}

export default PricesPage
