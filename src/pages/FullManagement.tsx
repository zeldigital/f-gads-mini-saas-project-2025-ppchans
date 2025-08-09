import { Settings, CheckCircle, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import { navigate } from '../router/navigate';

const bookingUrl = 'https://tidycal.com/hanslacida/10-private-meeting-only-with-hans';

function FullManagementPage() {
  // Scope examples covered below

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
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Full Google Ads Management</h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">Performance-first management by a specialist—not an agency layer. Minimum $5K/month ad budget. Results over screenshots.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl border border-slate-200 bg-slate-50">
            <div className="flex items-center gap-3 mb-3"><Settings className="w-5 h-5 text-blue-600" /><h3 className="text-xl font-semibold text-slate-900">What I Manage</h3></div>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Campaign buildout and ongoing optimization</li>
              <li>Conversion tracking, GA4 hygiene, GTM events</li>
              <li>Shopping feeds, product segmentation, and PMax gating</li>
              <li>Structured testing cadence across ads, bids, and audiences</li>
            </ul>
          </div>
          <div className="p-8 rounded-xl border border-slate-200 bg-slate-50">
            <div className="flex items-center gap-3 mb-3"><CheckCircle className="w-5 h-5 text-green-600" /><h3 className="text-xl font-semibold text-slate-900">Best Fit Clients</h3></div>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>US-based eCommerce, Services, or B2B</li>
              <li>Marketing leaders who want revenue metrics, not vanity metrics</li>
              <li>Teams ready to scale responsibly with attribution in mind</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center bg-white p-10 rounded-xl border border-slate-200">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Need hands-on, performance-first management?</h2>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold">Book a Private Strategy Call <ArrowRight className="w-5 h-5" /></a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default FullManagementPage;


