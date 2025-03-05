import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      id: 1,
      title: 'Intake',
      description: 'We gaan met je in gesprek om te kijken welke processen we kunnen automatiseren of waar we AI-oplossingen kunnen inzetten. Samen analyseren we de mogelijkheden en bepalen we de beste aanpak.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Ontwikkeling',
      description: 'Met de inzichten uit de intake gaan we aan de slag met het ontwikkelen van de oplossing. We bouwen op maat gemaakte automatiseringen of AI-oplossingen die perfect aansluiten bij jouw behoeften.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Evaluatie',
      description: 'Samen met jou evalueren we de ontwikkelde oplossing. We zorgen ervoor dat alles naar wens werkt en dat je volledig tevreden bent met het opgeleverde resultaat.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Ondersteuning',
      description: 'We bieden je graag ondersteuning om ervoor te zorgen dat alle oplossingen goed worden begrepen en blijven werken. Ons team staat klaar om je te helpen bij vragen of aanpassingen.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Onze <span className="text-primary">Werkwijze</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We werken volgens een gestructureerd proces om jouw project tot een succes te maken. Van intake tot ondersteuning, we staan je bij elke stap bij.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative">
              {/* Verbindingslijn tussen stappen */}
              {step.id < steps.length && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/20 transform -translate-y-1/2"></div>
              )}
              
              <div className="bg-white rounded-lg shadow-md p-6 relative z-10 h-full flex flex-col">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary mx-auto">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center flex-grow">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 