import Image from 'next/image';
import Link from 'next/link';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Automations',
      description: 'Optimaliseer je bedrijfsprocessen met op maat gemaakte automatiseringsoplossingen die tijd en resources besparen.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      image: '/images/service-web.svg',
    },
    {
      id: 2,
      title: 'AI Agents',
      description: 'Intelligente AI-agents die je bedrijfsprocessen automatiseren en optimaliseren met geavanceerde machine learning technologieën.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      image: '/images/service-app.svg',
    },
    {
      id: 3,
      title: 'AI integratie',
      description: 'Naadloze integratie van AI-oplossingen in je bestaande systemen en workflows voor verbeterde efficiëntie.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      image: '/images/service-design.svg',
    },
    {
      id: 4,
      title: 'AI training',
      description: 'Specialistische training en begeleiding om je team vertrouwd te maken met AI-technologieën en -toepassingen.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      image: '/images/service-consultancy.svg',
    },
    {
      id: 5,
      title: 'AI consultancy',
      description: 'Strategisch advies en begeleiding bij het implementeren van AI-oplossingen die aansluiten bij jouw bedrijfsdoelen.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      image: '/images/service-ecommerce.svg',
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Onze <span className="text-primary">Diensten</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Van automatisering tot AI-integratie, wij bieden complete oplossingen om je bedrijf te digitaliseren. Met onze expertise in AI, training en consultancy helpen we je bedrijf vooruit in het digitale tijdperk.
          </p>
        </div>
        
        {/* Bovenste rij met 3 services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.slice(0, 3).map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold ml-4">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Onderste rij met 2 services, gecentreerd */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          {services.slice(3).map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold ml-4">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="#contact" className="btn btn-primary">
            Vraag een vrijblijvend gesprek aan
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 