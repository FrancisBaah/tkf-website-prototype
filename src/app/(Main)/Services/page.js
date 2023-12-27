import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <section className="bg-gray-200 py-12">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:mx-8">
        {/* Service Card 1 */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <Image src={"/jabel-front.jpeg"} width={500} height={500} alt='front' className="w-full h-48 object-cover"/>
          <h3 className="title my-2">Construction and Development</h3>
          <p className="detail">
            From concept to completion, we offer comprehensive construction and development services. Our team ensures quality craftsmanship and timely delivery for every project.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <Image src={"/reno.jpg"} width={500} height={500} alt='front' className="w-full h-48 object-cover"/>
          <h3 className="title my-2">Renovation and Remodeling</h3>
          <p className="detail">
            Transform your space with our renovation and remodeling expertise. We bring innovative ideas and attention to detail to breathe new life into existing structures.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <Image src={"/project.png"} width={500} height={500} alt='front' className="w-full h-48 object-cover"/>
          <h3 className="title my-2">Project Management</h3>
          <p className="detail">
            Entrust us with your project management needs. Our experienced team ensures seamless coordination, budget adherence, and successful project delivery from start to finish.
          </p>
        </div>
        {/* Add more service cards as needed */}
      </div>
    </div>
  </section>
  )
}

export default page