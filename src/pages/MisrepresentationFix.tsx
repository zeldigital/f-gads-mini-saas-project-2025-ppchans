import { Shield, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import { navigate } from '../router/navigate';

const bookingUrl = 'https://tidycal.com/hanslacida/10-private-meeting-only-with-hans';

function MisrepresentationFixPage() {
  const steps = [
    { title: 'Diagnosis', desc: 'Review disapproval reasons, site trust signals, and policy conflicts.' },
    { title: 'Remediation Plan', desc: 'Adjust content, disclaimers, billing, and verification to align with US policy standards.' },
    { title: 'Implementation', desc: 'Coordinate changes with your dev/ops team to resolve flags quickly.' },
    { title: 'Re-Submission & Monitoring', desc: 'File appeals with the right evidence and monitor reinstatement.' }
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
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Google Ads Misrepresentation Fix</h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">Tailored for US businesses facing Misrepresentation or Unacceptable Business Practices policies. Fast, evidence-based remediation to get you reinstated.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl border border-slate-200 bg-slate-50">
            <div className="flex items-center gap-3 mb-3"><AlertTriangle className="w-5 h-5 text-amber-500" /><h3 className="text-xl font-semibold text-slate-900">Common Causes</h3></div>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Missing or inconsistent policies (refunds, terms, contact)</li>
              <li>Mismatched claims vs. landing page or inconsistent pricing</li>
              <li>Verification gaps: domain ownership, business legitimacy</li>
              <li>Industry-sensitive categories (health, finance, legal)</li>
            </ul>
          </div>
          <div className="p-8 rounded-xl border border-slate-200 bg-slate-50">
            <div className="flex items-center gap-3 mb-3"><Shield className="w-5 h-5 text-blue-600" /><h3 className="text-xl font-semibold text-slate-900">What I Do</h3></div>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Policy-first audit of your website, ads, and account</li>
              <li>Clear remediation checklist for US policy alignment</li>
              <li>Appeal packet with evidence and supporting documentation</li>
              <li>Monitoring and guidance until resolution</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">How We Work</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {steps.map((s, i) => (
              <li key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-200"><CheckCircle className="w-5 h-5 text-green-500 mt-1" /><div><p className="font-semibold text-slate-900">{s.title}</p><p className="text-slate-700">{s.desc}</p></div></li>
            ))}
          </ul>
          <p className="text-slate-600 text-center mt-6">Minimum $5K/month ad budget. No time tracking—results over screenshots.</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center bg-slate-50 p-10 rounded-xl border border-slate-200">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Need your account reinstated?</h2>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold">Book a Private Strategy Call <ArrowRight className="w-5 h-5" /></a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MisrepresentationFixPage;


