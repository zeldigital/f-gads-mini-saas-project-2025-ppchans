import React from 'react';
import { ArrowRight, Brain, Target as TargetIcon, Calculator as CalculatorIcon, Rocket as RocketIcon, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';
import { navigate } from '../router/navigate';

const bookingUrl = 'https://tidycal.com/hanslacida/10-private-meeting-only-with-hans';

function FrameworkPage() {
  const pillars = [
    { letter: 'H', title: 'High-Impact Strategy Design', desc: 'US-market focused account architecture tailored to competitive regions and buyer intent.', Icon: Brain },
    { letter: 'A', title: 'Audience-Driven Optimization', desc: 'Layered intent, geo, and device mix tuned for US-based demand patterns.', Icon: TargetIcon },
    { letter: 'N', title: 'Numbers-Led Decisions', desc: 'Attribution-aware bidding and testing—decisions grounded in data, not opinions.', Icon: CalculatorIcon },
    { letter: 'S', title: 'Scalable Optimization', desc: 'Process-driven scaling to expand spend from $5K → $50K+ while protecting efficiency.', Icon: RocketIcon }
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
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">The H.A.N.S Framework</h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">Built for US brands spending $5K+/mo on Google Ads who want clarity, control, and compounding growth—not agency fluff.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {pillars.map(({ letter, title, desc, Icon }, idx) => (
            <div key={idx} className="p-8 rounded-xl border border-slate-200 bg-slate-50">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl text-white flex items-center justify-center text-2xl font-bold">{letter}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-700">{desc}</p>
                </div>
                <Icon className="w-8 h-8 text-slate-400" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">Who This Is For</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {["US-based brands spending $5K+/mo in one account","Marketing leaders who value data over opinions","Teams seeking a dedicated specialist—not an agency","Companies ready for structured testing and iteration"].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-200"><CheckCircle className="w-5 h-5 text-green-500 mt-1" /><span className="text-slate-700">{item}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center bg-slate-50 p-10 rounded-xl border border-slate-200">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Ready to implement H.A.N.S for your brand?</h2>
          <p className="text-slate-700 mb-6">I’m a Google Ads expert—not an agency. Minimum $5K/month ad budget. No time tracking. Results over screenshots.</p>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold">
            Book a Private Strategy Call
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default FrameworkPage;


