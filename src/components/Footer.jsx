import { Link } from "react-router-dom";

export default function Footer() {
  return (
    // <footer className="bg-[#0a0e27] border-t border-[#00d9ff]/20 py-12">
    <footer className=" border-t border-[#00d9ff]/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-bold glow-text mb-4"
              style={{ color: "#00d9ff" }}
            >
              TechEra
            </h3>
            <p className="text-gray-400">Connect | Innovate | Build</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-[#00d9ff] mb-4">Quick Links</h4>
            <ul className="space-y-2">

              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-[#00d9ff] transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/events"
                  className="text-gray-400 hover:text-[#00d9ff] transition-colors"
                >
                  Events
                </Link>
              </li>

              <li>
                <Link
                  to="/collaborations"
                  className="text-gray-400 hover:text-[#00d9ff] transition-colors"
                >
                  Collaborations
                </Link>
              </li>

              <li>
                <Link
                  to="/team"
                  className="text-gray-400 hover:text-[#00d9ff] transition-colors"
                >
                  Team
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-[#00d9ff] transition-colors"
                >
                  Contact Us
                </Link>
              </li>

            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-lg font-bold text-[#00d9ff] mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-[#00d9ff] mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: techeraa151@gmail.com</li>
              <li className="text-gray-400">Phone: +91 9310526618</li>
              <li className="text-gray-400">Location: TechEra, New Delhi</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#00d9ff]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            <p className="text-gray-400 text-sm">
              &copy; 2025 TechEra Community. All rights reserved.
            </p>

            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors text-sm">
                Cookie Policy
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
