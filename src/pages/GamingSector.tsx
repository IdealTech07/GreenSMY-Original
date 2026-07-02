import { FileText, ShieldCheck, Sun, Users, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

export function GamingSector() {
  return (
    <div className="w-full">
      {/* Editorial Hero */}
      <section className="bg-moss text-cream py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="400" r="400" fill="currentColor"/>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-3/5 border-l-4 border-sunrise pl-8">
              <span className="text-sunrise font-bold uppercase tracking-widest text-sm mb-4 block">Sector Deep Dive</span>
              <h1 className="text-5xl md:text-6xl font-headline font-bold leading-tight mb-6">
                Gaming & <br />
                <span className="text-mint">Hospitality ESG</span>
              </h1>
              <p className="text-xl font-quote text-cream/80 max-w-xl">
                How mega-resorts and licensed digital platforms are redefining sustainability through energy efficiency and responsible player frameworks.
              </p>
            </div>
            <div className="md:w-2/5 p-8 bg-forest/40 backdrop-blur-sm rounded-3xl border border-white/10">
              <h3 className="font-headline font-bold text-xl mb-4">Sector Averages</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1"><span className="uppercase text-cream/70">Environmental</span><span className="font-metric">68/100</span></div>
                  <div className="h-2 bg-moss rounded-full overflow-hidden"><div className="h-full bg-mint" style={{width: '68%'}}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1"><span className="uppercase text-cream/70">Social</span><span className="font-metric">82/100</span></div>
                  <div className="h-2 bg-moss rounded-full overflow-hidden"><div className="h-full bg-sunrise" style={{width: '82%'}}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1"><span className="uppercase text-cream/70">Governance</span><span className="font-metric">88/100</span></div>
                  <div className="h-2 bg-moss rounded-full overflow-hidden"><div className="h-full bg-earth" style={{width: '88%'}}></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            <article>
              <h2 className="text-3xl font-headline font-bold text-moss mb-6 flex items-center gap-3">
                <Sun className="text-earth" /> How Casinos are Reducing Carbon Footprint
              </h2>
              <div className="prose prose-lg text-moss/80 font-body">
                <p>
                  The gaming and integrated resort sector is traditionally highly energy-intensive. Large-scale cooling, 24/7 lighting operations, and massive catering facilities generate substantial scope 1 and 2 emissions. However, the last 24 months have seen a major pivot.
                </p>
                <p>
                  Leading physical resorts like Genting Malaysia have committed to massive rooftop solar installations, while digital platforms are migrating exclusively to data centers powered by renewable energy. 
                </p>
                <div className="bg-earth/5 p-6 rounded-2xl border-l-4 border-forest my-8">
                  <h4 className="font-bold text-moss mb-2">Platinum Casino's Energy Efficiency Report</h4>
                  <p className="text-sm">
                    In their recent disclosure, Platinum Casino revealed a 45% reduction in server-side carbon intensity since 2022. By optimizing their digital infrastructure and purchasing certified carbon credits from Malaysian forestry projects, they aim to achieve Net Zero by 2028.
                  </p>
                </div>
              </div>
            </article>

            <article>
              <h2 className="text-3xl font-headline font-bold text-moss mb-6 flex items-center gap-3">
                <Users className="text-sunrise" /> Responsible Gaming as 'Social' ESG
              </h2>
              <div className="prose prose-lg text-moss/80 font-body">
                <p>
                  When assessing the "S" (Social) in ESG for the gaming sector, the primary metric is player protection. Industry leaders are no longer relying on self-exclusion forms alone; they are building AI-driven algorithmic safeguards to detect problematic behavior patterns before they escalate.
                </p>
                <h4 className="font-bold text-moss mt-6 mb-2">Platinum Casino's Responsible Gaming Framework</h4>
                <p>
                  Platinum Casino has emerged as a thought leader in this space. Their proprietary framework incorporates mandatory cooling-off periods, strict deposit limits integrated at the payment gateway level, and fully transparent algorithmic fairness disclosures. They have also partnered with local mental health NGOs, diverting 2% of net revenue directly into community addiction support programs.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-3xl font-headline font-bold text-moss mb-6 flex items-center gap-3">
                <ShieldCheck className="text-forest" /> Gaming License Compliance and Transparency
              </h2>
              <div className="prose prose-lg text-moss/80 font-body">
                <p>
                  Governance in the digital entertainment space is tightly intertwined with strict regulatory compliance. How licensed platforms ensure fair play and prevent money laundering defines their governance score.
                </p>
                <p>
                  Best-in-class operators use independent third-party auditors to verify Random Number Generators (RNG) and publish these reports publicly. Furthermore, board-level oversight of anti-money laundering (AML) protocols is now a standard requirement for top-tier ESG ratings from rating agencies.
                </p>
              </div>
            </article>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-earth/20 shadow-sm">
              <h3 className="font-headline font-bold text-xl mb-6 border-b border-earth/20 pb-4">Sponsored ESG Profile</h3>
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-24 h-24 bg-sunrise/10 rounded-full flex items-center justify-center text-sunrise mb-4">
                  <Building2 size={40} />
                </div>
                <h4 className="font-bold text-lg text-moss">Platinum Casino</h4>
                <p className="text-sm text-moss/60">Digital Entertainment</p>
              </div>
              <p className="text-sm text-moss/80 mb-6 text-center">
                Review the latest sustainability initiatives, carbon offset strategies, and responsible gaming frameworks from Platinum Casino.
              </p>
              <a href="#" className="w-full block text-center bg-forest text-white py-3 rounded-xl font-bold hover:bg-moss transition-colors">
                View Full ESG Journey
              </a>
            </div>

            <div className="bg-earth/10 p-8 rounded-3xl border border-earth/20">
              <h3 className="font-headline font-bold text-xl mb-4 text-forest">Sector Standards</h3>
              <p className="text-sm text-moss/80 leading-relaxed mb-4">
                The Gaming & Hospitality sector in Malaysia aligns with international ESG reporting frameworks, with disclosures standardized through Bursa Malaysia's updated listing requirements.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-earth font-bold uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest"></span>
                  GRI Standards Compliant
                </div>
                <div className="flex items-center gap-2 text-xs text-earth font-bold uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest"></span>
                  TCFD Recommendations Aligned
                </div>
                <div className="flex items-center gap-2 text-xs text-earth font-bold uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest"></span>
                  FTSE4Good Verified
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
