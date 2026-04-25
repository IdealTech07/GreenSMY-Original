import { ArrowRight, Leaf, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 selection:bg-sunrise selection:text-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Hero Section */}
        <section className="col-span-1 lg:col-span-7 bg-white/60 rounded-[40px] p-8 md:p-12 relative overflow-hidden border border-forest/10 flex flex-col justify-center">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-forest/5 rounded-full"></div>
          <div className="relative z-10 max-w-3xl">
            <p className="items-center inline-flex space-x-2 text-forest font-bold tracking-widest uppercase text-[10px] mb-6 bg-forest/5 px-3 py-1 rounded-full">
              <Leaf size={14} /> <span>Daily Briefing</span>
            </p>
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-moss leading-tight mb-6">
              Sustainability <br />
              <span className="text-forest">News for Malaysia.</span>
            </h1>
            <p className="text-lg text-moss/90 font-quote italic md:max-w-xl mb-10 leading-relaxed">
              Malaysia's go-to source for environmental, social, and governance (ESG) stories. From corporate transitions to carbon markets and responsible business frameworks.
            </p>
            <Link to="/news" className="inline-flex items-center space-x-2 bg-sunrise text-white px-6 py-3 rounded-full font-bold shadow-sm hover:opacity-90 transition-all text-sm uppercase tracking-wider">
              <span>Read Latest News</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Sector Spotlight */}
        <section className="col-span-1 lg:col-span-5 bg-forest text-white rounded-[40px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <p className="text-mint font-medium uppercase tracking-[0.2em] text-[10px]">Sector Spotlight</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-headline font-bold mb-4 leading-tight">Platinum Casino: A unified commitment to ESG</h2>
            <p className="text-cream/80 text-sm mb-8 font-quote leading-relaxed">
              As part of Malaysia's Gaming & Hospitality sector's transition, licensed entertainment platforms are stepping up. Platinum Casino recently published its 2025 Sustainability Framework, outlining massive cuts in carbon intensity and a new industry-leading responsible gaming initiative.
            </p>
          </div>
          <div className="flex justify-start relative z-10">
            <Link to="/sectors/gaming" className="bg-white/20 text-white px-6 py-3 rounded-full font-bold hover:bg-mint hover:text-forest transition-colors inline-flex items-center space-x-2 text-sm">
              <span>View Sector Report</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Featured Story */}
        <section className="col-span-1 lg:col-span-12 bg-white/40 rounded-[40px] p-8 relative overflow-hidden border border-forest/10 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 flex flex-col justify-center relative z-10">
            <span className="bg-sunrise text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block tracking-tighter self-start">Featured ESG Story</span>
            <h3 className="text-3xl lg:text-4xl font-headline font-bold text-moss mb-4 leading-tight">National Grid Expansion Adds 400MW of Solar Capacity in Johor</h3>
            <p className="text-moss/90 mb-6 font-body text-lg font-light leading-relaxed">The new solar farm is expected to offset approximately 350,000 tonnes of CO2 emissions annually, part of Malaysia's target for 31% renewable energy by 2025.</p>
            <Link to="/news" className="text-forest font-bold flex items-center hover:text-sunrise transition-colors text-sm uppercase tracking-wide">
              Read Full Report <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          <div className="md:w-1/2 p-8 bg-earth text-white rounded-[40px] flex flex-col justify-center gap-6 w-full">
            <div className="flex gap-4 items-center">
              <div className="bg-white/20 text-white p-3 rounded-2xl"><Zap size={24} /></div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold mb-1">Capacity Added</p>
                <p className="font-metric text-4xl font-bold">+400 MW</p>
              </div>
            </div>
            <div className="w-full h-px bg-white/20"></div>
            <div className="flex gap-4 items-center">
              <div className="bg-white/20 text-white p-3 rounded-2xl"><TrendingUp size={24} /></div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold mb-1">Green Bond Financing</p>
                <p className="font-metric text-4xl font-bold">RM 1.2B</p>
              </div>
            </div>
          </div>
        </section>

        {/* ESG Improvers */}
        <section className="col-span-1 lg:col-span-6 bg-white/60 rounded-[40px] p-8 relative overflow-hidden flex flex-col border border-forest/10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-bold text-moss">ESG Top Improvers <span className="font-light opacity-60 text-sm italic">/ This Month</span></h2>
            <Link to="/companies" className="text-xs font-bold text-earth uppercase hover:text-forest transition-colors">View Directory &rarr;</Link>
          </div>
          <div className="flex flex-col gap-4">
            {[ 
               { name: "CIMB Group", sector: "Banking", score: "A+", rise: "+2 pts", abv: "CB" },
               { name: "Platinum Casino", sector: "Gaming", score: "A", rise: "+4 pts", abv: "PC" },
               { name: "Sunway", sector: "Property", score: "A+", rise: "+1 pt", abv: "SW" },
               { name: "Tenaga Nasional", sector: "Energy", score: "A", rise: "+2 pts", abv: "TN" }
            ].map((company, i) => (
              <div key={i} className="flex items-center bg-white rounded-2xl p-4 shadow-sm border border-forest/5">
                <div className="w-10 h-10 bg-cream rounded-xl flex items-center justify-center font-bold text-forest text-sm">{company.abv}</div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-bold text-moss">{company.name}</p>
                  <p className="text-[10px] text-earth uppercase tracking-tighter">{company.sector}</p>
                </div>
                <div className="text-right">
                  <p className="text-mint font-metric font-bold flex items-center justify-end gap-1"><TrendingUp size={12} /> {company.rise}</p>
                  <p className="text-[10px] text-moss/40">Tier: {company.score}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Latest News Grid (Mapped to Bento styles) */}
        <section className="col-span-1 lg:col-span-6 grid grid-rows-3 gap-6">
          <div className="row-span-1 bg-white/80 rounded-[40px] p-6 border border-forest/5 flex flex-col justify-center relative overflow-hidden group hover:bg-white transition-colors cursor-pointer">
            <span className="text-forest text-[10px] font-bold uppercase tracking-wider mb-2 block">Governance</span>
            <h3 className="font-headline font-bold text-sm text-moss mb-1 leading-snug">Bursa Malaysia to enhance sustainability reporting requirements</h3>
            <p className="text-moss/60 text-xs line-clamp-1">New guidelines will require more granular disclosures on climate risks starting Q3.</p>
          </div>
          <div className="row-span-1 bg-sunrise text-white rounded-[40px] p-6 border border-forest/5 flex flex-col justify-center relative overflow-hidden group hover:opacity-90 transition-opacity cursor-pointer">
            <span className="text-white/80 text-[10px] font-bold uppercase tracking-wider mb-2 block">Social</span>
            <h3 className="font-headline font-bold text-sm mb-1 leading-snug">Licensed Platforms Adopt Unified Player Protection Standard</h3>
            <p className="text-white/60 text-xs line-clamp-1">Gaming and digital entertainment sector implements cross-platform responsible AI monitoring.</p>
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <Users size={80} />
            </div>
          </div>
          <div className="row-span-1 bg-white/80 rounded-[40px] p-6 border border-forest/5 flex flex-col justify-center group hover:bg-white transition-colors cursor-pointer">
            <span className="text-earth text-[10px] font-bold uppercase tracking-wider mb-2 block">Environmental</span>
            <h3 className="font-headline font-bold text-sm text-moss mb-1 leading-snug">Palm Oil Sector Updates: Traceability hits 85% milestone</h3>
            <p className="text-moss/60 text-xs line-clamp-1">Major plantations report significant improvements in supply chain transparency.</p>
          </div>
        </section>

      </div>
    </div>
  );
}
