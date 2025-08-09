import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';
import { navigate } from '../router/navigate';

function CaseStudiesPage() {
  const teaserItems = [
    {
      title: 'E-commerce Brand',
      result: 'Increased ROAS from 0.17x to 20x in 12 months.'
    },
    {
      title: 'Local Service Business',
      result: 'Cut cost per lead by 50% while doubling call volume.'
    },
    {
      title: 'B2B/B2C Growth Brands',
      result: 'Scaled ad spend from $15K to $50K/month profitably.'
    }
  ];

  const bookingUrl = 'https://tidycal.com/hanslacida/10-private-meeting-only-with-hans';

  return (
    <div className="min-h-screen bg-white">
      {/* Top utility nav */}
      <header className="w-full border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="text-slate-700 hover:text-slate-900 font-medium">← Back to Home</a>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition-all"
          >
            Book a Strategy Call
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            Proven Results. Private Access.
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Over $50M in revenue generated for clients using the H.A.N.S Google Ads Framework — available only through a private consultation.
          </p>
        </div>
      </section>

      {/* Teaser Summaries */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">Selected Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {teaserItems.map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-slate-200 bg-slate-50">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                </div>
                <p className="text-slate-700">{item.result}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-6 text-center">
            No client names. No screenshots. High-level outcomes only.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center bg-white p-10 rounded-xl shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Want to See the Full Story?</h2>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Book a Private Strategy Call
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-slate-600 mt-6 max-w-xl mx-auto">
            Case studies are shared in full detail during a one-on-one meeting to protect client privacy and campaign integrity.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default CaseStudiesPage;


