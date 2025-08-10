import { useMemo, useState } from 'react';
import { ArrowRight, Calculator as CalculatorIcon, Percent, DollarSign, MousePointerClick, TrendingUp, RefreshCcw } from 'lucide-react';
import Footer from '../components/Footer';
import { navigate } from '../router/navigate';

type Period = 'Daily' | 'Weekly' | 'Monthly';
type TrafficModel = 'CPC' | 'CPM';
type Industry = 'Ecommerce (ROAS)' | 'Lead Gen (CPL/CAC)' | 'B2B SaaS (CAC)';

type Preset = {
  cpc: number; // USD per click
  cpm: number; // USD per 1000 impressions
  ctrPct: number; // %
  convRatePct: number; // %
  aov?: number; // USD per order (ecom)
  closeRatePct?: number; // % leads -> customers (lead gen/saas)
};

const PRESETS: Record<Industry, Preset> = {
  'Ecommerce (ROAS)': {
    cpc: 1.5,
    cpm: 12,
    ctrPct: 2.0,
    convRatePct: 2.5,
    aov: 75
  },
  'Lead Gen (CPL/CAC)': {
    cpc: 6,
    cpm: 20,
    ctrPct: 3.0,
    convRatePct: 8.0,
    closeRatePct: 25
  },
  'B2B SaaS (CAC)': {
    cpc: 8,
    cpm: 30,
    ctrPct: 1.5,
    convRatePct: 3.0,
    closeRatePct: 15
  }
};

function toFixedSafe(value: number, digits: number = 2): string {
  if (!Number.isFinite(value)) return '-';
  return value.toFixed(digits);
}

function CalculatorPage() {
  const [industry, setIndustry] = useState<Industry>('Ecommerce (ROAS)');
  const [trafficModel, setTrafficModel] = useState<TrafficModel>('CPC');
  const [period, setPeriod] = useState<Period>('Monthly');
  const [budget, setBudget] = useState<number>(10000);
  const [cpc, setCpc] = useState<number>(PRESETS[industry].cpc);
  const [cpm, setCpm] = useState<number>(PRESETS[industry].cpm);
  const [ctrPct, setCtrPct] = useState<number>(PRESETS[industry].ctrPct);
  const [convRatePct, setConvRatePct] = useState<number>(PRESETS[industry].convRatePct);
  const [aov, setAov] = useState<number>(PRESETS[industry].aov ?? 75);
  const [closeRatePct, setCloseRatePct] = useState<number>(PRESETS[industry].closeRatePct ?? 20);
  const [revenuePerCustomer, setRevenuePerCustomer] = useState<number>(300);

  const bookingUrl = 'https://tidycal.com/hanslacida/10-private-meeting-only-with-hans';

  const applyPreset = (ind: Industry) => {
    const p = PRESETS[ind];
    setCpc(p.cpc);
    setCpm(p.cpm);
    setCtrPct(p.ctrPct);
    setConvRatePct(p.convRatePct);
    if (typeof p.aov === 'number') setAov(p.aov);
    if (typeof p.closeRatePct === 'number') setCloseRatePct(p.closeRatePct);
  };

  // Normalize budget to daily for consistent computation
  const dailyBudget = useMemo(() => {
    if (period === 'Daily') return budget;
    if (period === 'Weekly') return budget / 7;
    return budget / 30; // Monthly
  }, [budget, period]);

  const computeDaily = useMemo(() => {
    const ctr = ctrPct / 100;
    const convRate = convRatePct / 100;
    const closeRate = closeRatePct / 100;

    let impressions = 0;
    let clicks = 0;

    if (trafficModel === 'CPC') {
      clicks = cpc > 0 ? dailyBudget / cpc : 0;
    } else {
      impressions = cpm > 0 ? (dailyBudget / cpm) * 1000 : 0;
      clicks = impressions * ctr;
    }

    const leadsOrOrders = clicks * convRate; // leads for lead gen/saas; orders for ecom
    const customers = (industry === 'Ecommerce (ROAS)') ? leadsOrOrders : leadsOrOrders * closeRate;
    const revenue = (industry === 'Ecommerce (ROAS)')
      ? leadsOrOrders * aov
      : customers * (revenuePerCustomer || 0);

    const spend = dailyBudget;
    const roas = spend > 0 ? revenue / spend : 0;
    const cpl = leadsOrOrders > 0 ? spend / leadsOrOrders : 0;
    const cac = customers > 0 ? spend / customers : 0;

    return {
      impressions,
      clicks,
      leadsOrOrders,
      customers,
      revenue,
      spend,
      roas,
      cpl,
      cac
    };
  }, [dailyBudget, trafficModel, cpc, cpm, ctrPct, convRatePct, aov, closeRatePct, revenuePerCustomer, industry]);

  const toWeekly = (n: number) => n * 7;
  const toMonthly = (n: number) => n * 30;

  const ResultRow = ({ label, daily, formatter = (v: number) => toFixedSafe(v) }: { label: string; daily: number; formatter?: (v: number) => string }) => (
    <tr>
      <td className="py-2 pr-4 text-slate-600">{label}</td>
      <td className="py-2 font-medium">{formatter(daily)}</td>
      <td className="py-2 font-medium">{formatter(toWeekly(daily))}</td>
      <td className="py-2 font-medium">{formatter(toMonthly(daily))}</td>
    </tr>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="text-slate-700 hover:text-slate-900 font-medium">← Back to Home</a>
          <div className="flex items-center gap-3">
            <a href="/cost-calculator" onClick={(e) => { e.preventDefault(); navigate('/cost-calculator'); }} className="text-slate-700 hover:text-slate-900 font-medium">Benchmarks</a>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold">Book a Strategy Call <ArrowRight className="w-4 h-4" /></a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">Google Ads Calculator</h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">Real-time forecasts for US brands. Toggle industry, model with CPC or CPM, set budget cadence, and see ROAS, CPL, and CAC instantly.</p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
            <div className="flex items-center gap-2 mb-4"><CalculatorIcon className="w-5 h-5 text-blue-600" /><h2 className="text-xl font-semibold text-slate-900">Inputs</h2></div>

            {/* Industry & Model */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="industry" className="block text-sm text-slate-600 mb-1">Industry</label>
                <select
                  id="industry"
                  className="w-full rounded-md border-slate-300 focus:ring-blue-500 focus:border-blue-500"
                  value={industry}
                  onChange={(e) => { const ind = e.target.value as Industry; setIndustry(ind); applyPreset(ind); }}
                  title="Select your industry preset"
                >
                  {Object.keys(PRESETS).map((key) => (
                    <option key={key} value={key}>{key}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="trafficModel" className="block text-sm text-slate-600 mb-1">Traffic Model</label>
                <select
                  id="trafficModel"
                  className="w-full rounded-md border-slate-300 focus:ring-blue-500 focus:border-blue-500"
                  value={trafficModel}
                  onChange={(e) => setTrafficModel(e.target.value as TrafficModel)}
                  title="Choose CPC or CPM modeling"
                >
                  <option value="CPC">CPC (Search/Shopping)</option>
                  <option value="CPM">CPM (Display/Video)</option>
                </select>
              </div>
            </div>

            {/* Budget & Period */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="budget" className="block text-sm text-slate-600 mb-1">Ad Budget</label>
                <div className="flex items-center rounded-md border border-slate-300 overflow-hidden">
                  <span className="px-2 text-slate-500"><DollarSign className="w-4 h-4" /></span>
                  <input id="budget" type="number" min={0} className="w-full px-3 py-2 outline-none" value={budget} onChange={(e) => setBudget(Number(e.target.value))} placeholder="e.g. 10000" title="Enter your ad budget" />
                </div>
              </div>
              <div>
                <label htmlFor="period" className="block text-sm text-slate-600 mb-1">Period</label>
                <select id="period" className="w-full rounded-md border-slate-300 focus:ring-blue-500 focus:border-blue-500" value={period} onChange={(e) => setPeriod(e.target.value as Period)} title="Choose budget cadence">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
            </div>

            {/* CPC or CPM Inputs */}
            {trafficModel === 'CPC' ? (
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="avgCpc" className="block text-sm text-slate-600 mb-1">Avg CPC (USD)</label>
                  <input id="avgCpc" type="number" min={0} step="0.01" className="w-full rounded-md border-slate-300 px-3 py-2" value={cpc} onChange={(e) => setCpc(Number(e.target.value))} placeholder="e.g. 1.50" title="Average cost per click" />
                </div>
                <div>
                  <label htmlFor="convRatePct" className="block text-sm text-slate-600 mb-1">Conversion Rate (%)</label>
                  <div className="flex items-center rounded-md border border-slate-300 overflow-hidden">
                    <span className="px-2 text-slate-500"><Percent className="w-4 h-4" /></span>
                    <input id="convRatePct" type="number" min={0} step="0.1" className="w-full px-3 py-2 outline-none" value={convRatePct} onChange={(e) => setConvRatePct(Number(e.target.value))} placeholder="e.g. 2.5" title="Website conversion rate" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label htmlFor="cpm" className="block text-sm text-slate-600 mb-1">CPM (USD)</label>
                  <input id="cpm" type="number" min={0} step="0.01" className="w-full rounded-md border-slate-300 px-3 py-2" value={cpm} onChange={(e) => setCpm(Number(e.target.value))} placeholder="e.g. 12" title="Cost per 1000 impressions" />
                </div>
                <div>
                  <label htmlFor="ctrPct" className="block text-sm text-slate-600 mb-1">CTR (%)</label>
                  <div className="flex items-center rounded-md border border-slate-300 overflow-hidden">
                    <span className="px-2 text-slate-500"><MousePointerClick className="w-4 h-4" /></span>
                    <input id="ctrPct" type="number" min={0} step="0.1" className="w-full px-3 py-2 outline-none" value={ctrPct} onChange={(e) => setCtrPct(Number(e.target.value))} placeholder="e.g. 2.0" title="Click-through rate" />
                  </div>
                </div>
                <div>
                  <label htmlFor="convRatePct2" className="block text-sm text-slate-600 mb-1">Conversion Rate (%)</label>
                  <div className="flex items-center rounded-md border border-slate-300 overflow-hidden">
                    <span className="px-2 text-slate-500"><Percent className="w-4 h-4" /></span>
                    <input id="convRatePct2" type="number" min={0} step="0.1" className="w-full px-3 py-2 outline-none" value={convRatePct} onChange={(e) => setConvRatePct(Number(e.target.value))} placeholder="e.g. 2.5" title="Website conversion rate" />
                  </div>
                </div>
              </div>
            )}

            {/* Industry-specific */}
            {industry === 'Ecommerce (ROAS)' ? (
              <div className="grid md:grid-cols-2 gap-4 mb-2">
                <div>
                  <label htmlFor="aov" className="block text-sm text-slate-600 mb-1">Average Order Value (USD)</label>
                  <input id="aov" type="number" min={0} step="1" className="w-full rounded-md border-slate-300 px-3 py-2" value={aov} onChange={(e) => setAov(Number(e.target.value))} placeholder="e.g. 75" title="Average order value" />
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-4 mb-2">
                <div>
                  <label htmlFor="closeRatePct" className="block text-sm text-slate-600 mb-1">Sales Close Rate (%)</label>
                  <input id="closeRatePct" type="number" min={0} step="0.1" className="w-full rounded-md border-slate-300 px-3 py-2" value={closeRatePct} onChange={(e) => setCloseRatePct(Number(e.target.value))} placeholder="e.g. 25" title="Lead-to-customer close rate" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="revenuePerCustomer" className="block text-sm text-slate-600 mb-1">Revenue per Customer (optional)</label>
                  <input id="revenuePerCustomer" type="number" min={0} step="1" className="w-full rounded-md border-slate-300 px-3 py-2" value={revenuePerCustomer} onChange={(e) => setRevenuePerCustomer(Number(e.target.value))} placeholder="e.g. 300" title="Post-close revenue per customer" />
                </div>
              </div>
            )}

            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={() => applyPreset(industry)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-300 hover:bg-white bg-slate-100 text-slate-800"
              >
                <RefreshCcw className="w-4 h-4" /> Apply {industry} Preset
              </button>
            </div>
          </div>

          {/* Outputs */}
          <div className="p-6 rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center gap-2 mb-4"><TrendingUp className="w-5 h-5 text-green-600" /><h2 className="text-xl font-semibold text-slate-900">Forecast</h2></div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-slate-500 text-sm">
                    <th className="py-2 pr-4">Metric</th>
                    <th className="py-2">Daily</th>
                    <th className="py-2">Weekly</th>
                    <th className="py-2">Monthly</th>
                  </tr>
                </thead>
                <tbody>
                  {trafficModel === 'CPM' && (
                    <ResultRow label="Impressions" daily={computeDaily.impressions} formatter={(v) => toFixedSafe(v, 0)} />
                  )}
                  <ResultRow label="Clicks" daily={computeDaily.clicks} formatter={(v) => toFixedSafe(v, 0)} />
                  <ResultRow label={industry === 'Ecommerce (ROAS)' ? 'Orders' : 'Leads'} daily={computeDaily.leadsOrOrders} formatter={(v) => toFixedSafe(v, 0)} />
                  {industry !== 'Ecommerce (ROAS)' && (
                    <ResultRow label="Customers" daily={computeDaily.customers} formatter={(v) => toFixedSafe(v, 0)} />
                  )}
                  {industry === 'Ecommerce (ROAS)' || revenuePerCustomer > 0 ? (
                    <ResultRow label="Revenue ($)" daily={computeDaily.revenue} formatter={(v) => `$${toFixedSafe(v)}`} />
                  ) : null}
                  <ResultRow label="Ad Spend ($)" daily={computeDaily.spend} formatter={(v) => `$${toFixedSafe(v)}`} />
                  {industry === 'Ecommerce (ROAS)' || revenuePerCustomer > 0 ? (
                    <ResultRow label="ROAS (x)" daily={computeDaily.roas} />
                  ) : null}
                  {industry !== 'Ecommerce (ROAS)' && (
                    <ResultRow label="CPL ($)" daily={computeDaily.cpl} formatter={(v) => `$${toFixedSafe(v)}`} />
                  )}
                  {industry !== 'Ecommerce (ROAS)' && (
                    <ResultRow label="CAC ($)" daily={computeDaily.cac} formatter={(v) => `$${toFixedSafe(v)}`} />
                  )}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-sm mt-4">Estimates only. Actual results depend on offer strength, creative, competition, and tracking quality.</p>

            <div className="mt-6 text-center">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-semibold"
              >
                Review My Numbers with a Specialist
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default CalculatorPage;


