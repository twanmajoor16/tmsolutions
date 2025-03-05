import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Achtergrond met gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 z-0"></div>
      
      {/* Decoratieve elementen */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Implementeer <span className="text-primary">AI</span> in je bedrijf
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Wij helpen bedrijven met het realiseren van hun digitale ambities door middel van op maat gemaakte AI-oplossingen en automations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn btn-primary">
                Neem contact met ons op
              </Link>
              <Link href="#services" className="btn btn-outline">
                Onze diensten
              </Link>
            </div>
            
            {/* Statistieken */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-primary mb-1">24/7</p>
                <p className="text-gray-600 text-sm">AI-automatisering</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-primary mb-1">90%</p>
                <p className="text-gray-600 text-sm">Efficiëntieverbetering</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-primary mb-1">100%</p>
                <p className="text-gray-600 text-sm">Maatwerk oplossingen</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Hoofdafbeelding */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl max-w-[500px]">
                <Image 
                  src="/images/ai-team-meeting.png" 
                  alt="AI Team Meeting" 
                  width={500} 
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Decoratieve elementen */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-lg -z-10 opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary rounded-lg -z-10 opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 