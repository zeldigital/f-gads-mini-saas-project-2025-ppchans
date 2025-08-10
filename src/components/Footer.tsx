import { Mail, Linkedin, Globe } from 'lucide-react';
import { navigate } from '../router/navigate';

const bookingUrl = 'https://tidycal.com/hanslacida/10-private-meeting-only-with-hans';

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 – About */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">About</h3>
          <p className="mb-3">PPChans is a no-fluff Google Ads authority hub built by Hanzel Lacida.</p>
          <p className="italic text-slate-400 mb-4">“$50M+ in client revenue generated using the H.A.N.S Google Ads Framework.”</p>
          <a
            href="https://www.hanslacida.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 font-medium"
          >
            About Me
          </a>
        </div>

        {/* Column 2 – Expertise Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Expertise</h3>
          <ul className="space-y-3">
            <li><a href="/framework" onClick={(e) => { e.preventDefault(); navigate('/framework'); }} className="hover:text-white">H.A.N.S Framework</a></li>
            <li><a href="/case-studies" onClick={(e) => { e.preventDefault(); navigate('/case-studies'); }} className="hover:text-white">Case Studies</a></li>
            <li><a href="/misrepresentation-fix" onClick={(e) => { e.preventDefault(); navigate('/misrepresentation-fix'); }} className="hover:text-white">Google Ads Misrepresentation Fix</a></li>
            <li><a href="/cost-calculator" onClick={(e) => { e.preventDefault(); navigate('/cost-calculator'); }} className="hover:text-white">Google Ads Cost Calculator</a></li>
            <li><a href="/calculator" onClick={(e) => { e.preventDefault(); navigate('/calculator'); }} className="hover:text-white">Interactive Calculator</a></li>
            <li><a href="/guides" onClick={(e) => { e.preventDefault(); navigate('/guides'); }} className="hover:text-white">PPC Guides</a></li>
            <li>
              <a
                href="https://www.reddit.com/r/ppchans"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Community on Reddit
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 – Work With Me */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Work With Me</h3>
          <ul className="space-y-3">
            <li><a href="/fractional-ppc-director" onClick={(e) => { e.preventDefault(); navigate('/fractional-ppc-director'); }} className="hover:text-white">Fractional PPC Director</a></li>
            <li><a href="/google-ads-management" onClick={(e) => { e.preventDefault(); navigate('/google-ads-management'); }} className="hover:text-white">Full Google Ads Management</a></li>
            <li>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Book a Strategy Call
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 – Contact & Social */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contact & Social</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-slate-400" />
              <a href="mailto:hanzel@hanslacida.com" className="hover:text-white">hanzel@hanslacida.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-slate-400" />
              <a
                href="https://linkedin.com/in/hanslacida"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                linkedin.com/in/hanslacida
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-slate-400" />
              <a
                href="https://www.zel.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                www.zel.digital
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-slate-400 text-center">
          © 2025 PPChans. All Rights Reserved. Powered by Hanzel Lacida, ZELDIGITAL, and KaizenStrategy Solutions Company.
        </div>
      </div>
    </footer>
  );
}

export default Footer;


