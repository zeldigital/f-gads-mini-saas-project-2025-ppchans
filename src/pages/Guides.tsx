import { FileText, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import { navigate } from '../router/navigate';

const bookingUrl = 'https://tidycal.com/hanslacida/10-private-meeting-only-with-hans';

function GuidesPage() {
  const topics = [
    'US Geo and Market Segmentation for Google Ads',
    'Structuring Search Campaigns for Qualified Demand (Not Clicks)',
    'Attribution-Safe Optimization in GA4 + Google Ads',
    'Scaling from $5K → $50K+/mo Without Wasting Spend',
    'Policy-Safe Ads in Sensitive US Verticals (Legal, Medical, Financial)'
  ];

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
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">PPC Guides</h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">Actionable, no-fluff education for US-based brands led by an operator—not an agency. Built for ROI-focused marketing leaders.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {topics.map((t, i) => (
            <div key={i} className="p-8 rounded-xl border border-slate-200 bg-slate-50">
              <div className="flex items-center gap-3 mb-2"><FileText className="w-5 h-5 text-blue-600" /><h3 className="text-xl font-semibold text-slate-900">{t}</h3></div>
              <p className="text-slate-700">Deep dives coming soon. Request the full playbook during a private strategy call.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center bg-white p-10 rounded-xl shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Want specific guidance for your account?</h2>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold">Book a Private Strategy Call <ArrowRight className="w-5 h-5" /></a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default GuidesPage;


