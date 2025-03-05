'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const portfolioItems = [
    // Automations projecten
    {
      id: 1,
      title: 'Proces Automatisering Financiële Sector',
      category: 'automations',
      image: '/images/portfolio-1.svg',
      description: 'Automatisering van financiële processen met slimme workflows en integraties voor verhoogde efficiëntie.',
    },
    {
      id: 2,
      title: 'Logistieke Workflow Automatisering',
      category: 'automations',
      image: '/images/portfolio-2.svg',
      description: 'Geautomatiseerde logistieke processen met real-time tracking en optimalisatie van routes.',
    },
    {
      id: 3,
      title: 'HR Proces Automatisering',
      category: 'automations',
      image: '/images/portfolio-3.svg',
      description: 'Automatisering van HR-processen waaronder recruitment, onboarding en verlofaanvragen.',
    },
    // AI Agents projecten
    {
      id: 4,
      title: 'Klantenservice AI Assistant',
      category: 'ai-agents',
      image: '/images/portfolio-4.svg',
      description: 'AI-gedreven klantenservice assistent met natuurlijke taalverwerking en 24/7 beschikbaarheid.',
    },
    {
      id: 5,
      title: 'Sales Intelligence Agent',
      category: 'ai-agents',
      image: '/images/portfolio-5.svg',
      description: 'AI agent voor sales optimalisatie en lead scoring met voorspellende analyses.',
    },
    {
      id: 6,
      title: 'Data Analysis Agent',
      category: 'ai-agents',
      image: '/images/portfolio-6.svg',
      description: 'Intelligente AI agent voor automatische data-analyse en rapportage generatie.',
    },
    // AI Consultancy projecten
    {
      id: 7,
      title: 'AI Transformatie Strategie',
      category: 'ai-consultancy',
      image: '/images/portfolio-1.svg',
      description: 'Strategisch adviestraject voor complete AI-transformatie van bedrijfsprocessen.',
    },
    {
      id: 8,
      title: 'AI Implementatie Manufacturing',
      category: 'ai-consultancy',
      image: '/images/portfolio-2.svg',
      description: 'Begeleiding bij de implementatie van AI-oplossingen in productieprocessen.',
    },
    {
      id: 9,
      title: 'AI Roadmap Development',
      category: 'ai-consultancy',
      image: '/images/portfolio-3.svg',
      description: 'Ontwikkeling van een strategische AI-roadmap voor digitale transformatie.',
    }
  ];
  
  const filters = [
    { id: 'all', name: 'Alle Projecten' },
    { id: 'automations', name: 'Automations' },
    { id: 'ai-agents', name: 'AI Agents' },
    { id: 'ai-consultancy', name: 'AI Consultancy' }
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? [
        portfolioItems.find(item => item.category === 'automations'), // 1 automation project
        portfolioItems.find(item => item.category === 'ai-agents'),   // 1 AI agents project
        portfolioItems.find(item => item.category === 'ai-consultancy') // 1 AI consultancy project
      ]
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ons <span className="text-primary">Portfolio</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Bekijk een selectie van onze recente projecten. Wij zijn trots op het werk dat we hebben geleverd voor onze klanten.
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`filter-button ${
                activeFilter === filter.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredItems.map((item) => (
            <div key={item.id} className="group bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  width={500}
                  height={350}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center p-6">
                    <p className="mb-4">{item.description}</p>
                    <Link 
                      href="#" 
                      className="inline-block px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary transition-colors"
                    >
                      Bekijk Project
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 capitalize">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="#contact" className="btn btn-outline">
            Laat ons je project bespreken
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection; 