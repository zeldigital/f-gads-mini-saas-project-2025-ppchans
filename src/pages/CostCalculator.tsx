import { Calculator, ArrowRight, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';
import { navigate } from '../router/navigate';

const bookingUrl = 'https://tidycal.com/hanslacida/10-private-meeting-only-with-hans';

function CostCalculatorPage() {
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
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Google Ads Cost & Forecasting</h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">US-market benchmarks to frame budget and outcomes if you’re investing $5K–$50K+/mo. Data over guesses. Strategy over shortcuts.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[{
            title: 'Lead Gen (US Services)',
            points: ['CPC: $3–$25+ depending on vertical', 'SQL target CPL: $80–$350', 'Ramp: 4–8 weeks of testing']
          }, {
            title: 'eCommerce (DTC)',
            points: ['CPC: $0.80–$3.50+', 'Target ROAS: 3–6x (mature accounts)', 'Ramp: 6–12 weeks to stabilize']
          }, {
            title: 'B2B SaaS',
            points: ['CPC: $4–$20+', 'Opportunity CPL: $150–$600', 'Ramp: 6–12 weeks w/ attribution']
          }].map((card, i) => (
            <div key={i} className="p-6 rounded-xl border border-slate-200 bg-slate-50">
              <div className="flex items-center gap-2 mb-2"><Calculator className="w-5 h-5 text-blue-600" /><h3 className="text-lg font-semibold text-slate-900">{card.title}</h3></div>
              <ul className="list-disc list-inside text-slate-700 space-y-1">
                {card.points.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-slate-500 text-sm mt-6 text-center">Benchmarks vary by region, competition, conversion rate, and offer strength. We tailor to your data.</p>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">What You Get</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {["Budget framework tied to goals (not vanity metrics)","Scenario planning for scale and efficiency","Attribution-aware forecasting (GA4 + platform)","Actionable testing roadmap for the first 90 days"].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-200"><CheckCircle className="w-5 h-5 text-green-500 mt-1" /><span className="text-slate-700">{item}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center bg-slate-50 p-10 rounded-xl border border-slate-200">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Want a tailored budget and forecast?</h2>
          <p className="text-slate-700 mb-6">Best for US brands spending $5K+/mo. No time tracking—performance only.</p>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold">Book a Private Strategy Call <ArrowRight className="w-5 h-5" /></a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default CostCalculatorPage;


