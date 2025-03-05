import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo en info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/images/logo-white.svg" 
                alt="TM Solutions Logo" 
                width={150} 
                height={40} 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-4">
            Wij helpen bedrijven met het realiseren van hun digitale ambities door middel van op maat gemaakte AI-oplossingen en automations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Snelle links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Snelle Links</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">Over ons</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">Diensten</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Diensten */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Onze Diensten</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">Automations</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">AI Agents</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">AI integratie</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">AI training</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">AI consultancy</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">info@tmsolutions.nl</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} TM Solutions. Alle rechten voorbehouden.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Algemene Voorwaarden</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 