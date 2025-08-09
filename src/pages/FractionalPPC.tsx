import { Target, CheckCircle, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import { navigate } from '../router/navigate';

const bookingUrl = 'https://tidycal.com/hanslacida/10-private-meeting-only-with-hans';

function FractionalPPCPage() {
  // Highlights displayed inline in sections below

  return (
    <div className="min-h-screen bg-white">
      <header className="w-full border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="text-slate-700 hover:text-slate-900 font-medium">← Back to Home</a>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold">Book a Strategy Call <ArrowRight className="w-4 h-4" /></a>
        </div>
      </header>

      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Fractional PPC Director</h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">Not an agency—your dedicated growth partner. Minimum $5K/month ad budget. No time tracking. Results over screenshots.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl border border-slate-200 bg-slate-50">
            <div className="flex items-center gap-3 mb-3"><Target className="w-5 h-5 text-blue-600" /><h3 className="text-xl font-semibold text-slate-900">What You Get</h3></div>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Account architecture and testing roadmap</li>
              <li>Bid, budget, and audience strategy tuned to US markets</li>
              <li>Clear reporting focused on revenue, ROAS/CPA—not vanity metrics</li>
              <li>Weekly priorities and iteration, monthly strategy sessions</li>
            </ul>
          </div>
          <div className="p-8 rounded-xl border border-slate-200 bg-slate-50">
            <div className="flex items-center gap-3 mb-3"><CheckCircle className="w-5 h-5 text-green-600" /><h3 className="text-xl font-semibold text-slate-900">Best Fit Clients</h3></div>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>US brands with $5K+/mo in a single account</li>
              <li>ROI-focused leaders who trust data and process</li>
              <li>Teams seeking long-term growth, not hacks</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center bg-white p-10 rounded-xl border border-slate-200">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Looking for a long-term PPC partner?</h2>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold">Book a Private Strategy Call <ArrowRight className="w-5 h-5" /></a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default FractionalPPCPage;


