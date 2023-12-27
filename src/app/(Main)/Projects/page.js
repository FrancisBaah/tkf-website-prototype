"use client";
import React, { useState } from "react";

const page = () => {
  const initialProjects = [
    {
      title: "Al Furjan Villa",
      description:
        "A stunning luxury residence that combines modern design with timeless elegance. This project showcases our commitment to craftsmanship and attention to detail.",
      imageUrl: "/jabel-front.jpeg",
    },
    {
      title: "Commercial Complex",
      description:
        "Our expertise in commercial construction is evident in this state-of-the-art complex. From office spaces to retail areas, we create environments that foster success.",
      imageUrl: "/jabel-side.jpeg",
    },
    {
      title: "Urban Redevelopment",
      description:
        "Revitalizing urban spaces is a passion for us. This redevelopment project demonstrates our dedication to enhancing communities and creating sustainable environments.",
      imageUrl: "/urban.jpg",
    },
  ];

  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const filteredProjects = initialProjects.filter((project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProjects(filteredProjects);
  };
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="mb-6 flex items-center justify-center">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md mr-2"
            placeholder="Search by title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="px-4 py-1 bg-[#090866] text-white rounded-md"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:mx-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-md overflow-hidden shadow-md"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="title">{project.title}</h3>
                <p className="detail">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
