import React, { useState } from 'react';
import { 
  Target, 
  TrendingUp, 
  Clock, 
  Users, 
  BarChart3, 
  Settings, 
  Monitor, 
  FileText,
  Star,
  Mail,
  Linkedin,
  Globe,
  CheckCircle,
  ArrowRight,
  Shield,
  Award,
  DollarSign,
  Zap,
  Brain,
  Calculator,
  Rocket
} from 'lucide-react';
import TypewriterText from './components/TypewriterText';

function App() {
  const [selectedEngagement, setSelectedEngagement] = useState('fractional');

  const subheadlineVariants = [
    "Turn Clicks Into Clients with a Proven 4-Pillar PPC System",
    "Not Just Ads—A Full System for Predictable Growth",
    "Your Competitive Edge in the Google Ads Battlefield",
    "Built for Founders Who Hate Wasting Money on Ads",
    "PPC Leadership Without the Overhead",
    "Your Ads. Smarter. Faster. More Profitable.",
    "Where Strategy Meets Execution — And Ads Start Performing",
    "The Google Ads System Trusted by $10M+ in Ad Spend"
  ];

  const frameworkSteps = [
    {
      letter: 'H',
      title: 'High-Impact Strategy Design',
      description: 'Custom campaign architecture built for your specific business goals and market position',
      icon: Brain,
      color: 'bg-blue-500'
    },
    {
      letter: 'A',
      title: 'Audience-Driven Optimization',
      description: 'Precision targeting based on customer behavior, intent signals, and conversion patterns',
      icon: Target,
      color: 'bg-green-500'
    },
    {
      letter: 'N',
      title: 'Numbers-Led Decisions',
      description: 'Data-driven optimization using advanced analytics, attribution modeling, and performance metrics',
      icon: Calculator,
      color: 'bg-purple-500'
    },
    {
      letter: 'S',
      title: 'Scalable Optimization',
      description: 'Systematic growth processes that maintain efficiency while expanding reach and revenue',
      icon: Rocket,
      color: 'bg-orange-500'
    }
  ];

  const engagementOptions = [
    {
      id: 'fractional',
      title: 'Fractional PPC Director',
      subtitle: 'Advisory + Oversight',
      description: 'Strategic leadership and guidance for your existing team or agency',
      icon: Target,
      features: [
        'Strategic planning & oversight',
        'Monthly strategy sessions',
        'Performance audits',
        'Team training & guidance'
      ]
    },
    {
      id: 'management',
      title: 'Full Google Ads Management',
      subtitle: 'Done-for-You',
      description: 'Complete hands-on management of your Google Ads campaigns',
      icon: Settings,
      features: [
        'Campaign setup & optimization',
        'Daily monitoring & adjustments',
        'Ad copy & creative development',
        'Complete account management'
      ]
    }
  ];

  const services = [
    { icon: Target, title: 'Campaign Strategy', description: 'Data-driven campaign planning and optimization' },
    { icon: BarChart3, title: 'Tracking Setup', description: 'GA4, GTM, and conversion tracking implementation' },
    { icon: TrendingUp, title: 'Daily Optimization', description: 'Continuous performance monitoring and improvements' },
    { icon: DollarSign, title: 'Budget Scaling', description: 'Strategic budget allocation and scaling decisions' },
    { icon: Monitor, title: 'Looker Dashboard', description: 'Custom reporting dashboards for clear insights' },
    { icon: FileText, title: 'Weekly Reporting', description: 'Comprehensive performance reports and insights' }
  ];

  const credentials = [
    { icon: Award, title: '10+ Years Experience', description: 'Decade of Google Ads expertise' },
    { icon: DollarSign, title: '$10M+ Managed Ad Spend', description: 'Proven track record at scale' },
    { icon: TrendingUp, title: 'Proven Results', description: '20x ROAS, -50% CPA improvements' },
    { icon: Shield, title: 'US-Based & Transparent', description: 'Clear communication, data-driven approach' }
  ];

  const whoThisIsFor = [
    'Busy founders who don\'t have time to manage ads personally',
    'Business owners seeking fast, measurable results',
    'Companies wanting part-time expert guidance without full-time costs',
    'Businesses ready to scale their Google Ads performance'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              <span className="text-blue-600">H.A.N.S</span> Google Ads Framework
            </h1>
            
            {/* Animated Typewriter Subheadline */}
            <div className="h-16 md:h-20 flex items-center justify-center mb-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-700 font-semibold max-w-4xl mx-auto leading-relaxed">
                <TypewriterText 
                  texts={subheadlineVariants}
                  typingSpeed={60}
                  deletingSpeed={40}
                  pauseDuration={3000}
                />
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              A battle-tested methodology that's generated over $50M in client revenue. 
              This isn't just campaign management—it's a complete strategic framework that turns Google Ads 
              into your most predictable growth engine.
            </p>
          </div>
          
          <a
            href="https://tidycal.com/hanslacida/10-private-meeting-only-with-hans"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Book a Strategy Call
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* H.A.N.S Framework Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              The H.A.N.S Framework Methodology
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Four pillars of Google Ads excellence that consistently deliver exceptional results for ambitious businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {frameworkSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-slate-100">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <span className="text-2xl font-bold text-white">{step.letter}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  <div className="mt-6 ml-22">
                    <Icon className="w-8 h-8 text-slate-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Who This Is For
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whoThisIsFor.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-slate-700 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Offer */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What I Offer
            </h2>
            <p className="text-xl text-slate-600">
              Fractional Google Ads Leadership + Hands-On Execution
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-slate-50 p-8 rounded-lg hover:shadow-md transition-shadow duration-200 border border-slate-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Options */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Engagement Options
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {engagementOptions.map((option) => {
              const Icon = option.icon;
              const isSelected = selectedEngagement === option.id;
              
              return (
                <div
                  key={option.id}
                  className={`p-8 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    isSelected 
                      ? 'border-blue-500 bg-blue-50 shadow-lg' 
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                  }`}
                  onClick={() => setSelectedEngagement(option.id)}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-blue-600' : 'bg-slate-100'
                    }`}>
                      <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-slate-600'}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{option.title}</h3>
                      <p className="text-blue-600 font-medium">{option.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-6">{option.description}</p>
                  
                  <ul className="space-y-3">
                    {option.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">
            Why Work With Me
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((credential, index) => {
              const Icon = credential.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{credential.title}</h3>
                  <p className="text-slate-600">{credential.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Placeholder */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-12 rounded-lg shadow-sm">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl text-slate-700 italic mb-6">
              "Hans transformed our Google Ads performance in just 3 months. Our ROAS increased by 300% while cutting our cost per acquisition in half. His strategic approach and hands-on optimization made all the difference."
            </blockquote>
            <cite className="text-slate-600 font-medium">— Adam, Founder/CEO</cite>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Ready to Scale Your Google Ads?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:hanzel@hanslacida.com"
              className="flex items-center justify-center gap-3 p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
            >
              <Mail className="w-6 h-6" />
              <span>hanzel@hanslacida.com</span>
            </a>
            
            <a
              href="https://linkedin.com/in/hanslacida"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
            >
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn Profile</span>
            </a>
            
            <a
              href="https://www.hanslacida.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
            >
              <Globe className="w-6 h-6" />
              <span>Visit Website</span>
            </a>
          </div>
          
          <a
            href="https://tidycal.com/hanslacida/10-private-meeting-only-with-hans"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Book a Strategy Call
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;