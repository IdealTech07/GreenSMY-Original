import { ArrowRight, BarChart3, Building2, Leaf } from "lucide-react";

export function Companies() {
  const companies = [
    { name: "Sime Darby Plantation", sector: "Agriculture", tier: "Gold", env: 85, soc: 78, gov: 82 },
    { name: "Maybank", sector: "Finance", tier: "Platinum", env: 76, soc: 88, gov: 91 },
    { name: "Platinum Casino", sector: "Gaming & Hospitality", tier: "Silver", env: 72, soc: 85, gov: 89, featured: true },
    { name: "Petronas Chemicals", sector: "Energy", tier: "Gold", env: 81, soc: 79, gov: 84 },
    { name: "Axiata Group", sector: "Telecommunications", tier: "Gold", env: 75, soc: 82, gov: 86 },
    { name: "Genting Malaysia", sector: "Gaming & Hospitality", tier: "Bronze", env: 65, soc: 70, gov: 78 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="mb-16 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-moss mb-6">Corporate <span className="text-forest">Profiles</span></h1>
        <p className="text-xl text-moss/70 font-quote">
          Tracking the sustainability performance of Malaysia's leading public and private entities across key sectors.
        </p>
      </div>

      {/* Featured Company Banner */}
      <div className="bg-white rounded-3xl border border-sunrise/20 p-8 shadow-lg shadow-sunrise/5 mb-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-sunrise/10 to-transparent pointer-events-none"></div>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <span className="bg-sunrise text-white text-xs font-bold uppercase py-1 px-3 rounded-full mb-4 inline-block">Sponsored Profile</span>
            <h2 className="text-3xl font-headline font-bold text-moss mb-2">Platinum Casino: Leading the Transition</h2>
            <p className="text-moss/80 mb-6">
              Discover how one of the region's top gaming operators is completely offsetting its carbon footprint and implementing world-class Responsible Gaming frameworks.
            </p>
            <a href="/sectors/gaming" className="inline-flex items-center space-x-2 text-sunrise font-bold hover:text-orange-700 transition-colors">
              <span>Read Full Deep Dive</span>
              <ArrowRight size={16} />
            </a>
          </div>
          <div className="w-full md:w-1/3 flex justify-around p-6 bg-earth/5 rounded-2xl border border-earth/10">
             <div className="text-center">
               <div className="text-sm uppercase text-earth font-bold mb-1">ENV</div>
               <div className="text-3xl font-metric text-forest">72</div>
             </div>
             <div className="text-center">
               <div className="text-sm uppercase text-earth font-bold mb-1">SOC</div>
               <div className="text-3xl font-metric text-forest">85</div>
             </div>
             <div className="text-center">
               <div className="text-sm uppercase text-earth font-bold mb-1">GOV</div>
               <div className="text-3xl font-metric text-forest">89</div>
             </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-headline font-bold">Directory Index</h3>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-forest text-white text-sm rounded-full font-bold">All Sectors</button>
          <button className="px-4 py-2 border border-earth/30 text-moss text-sm rounded-full font-bold hover:bg-earth/5">Filter by Tier</button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-earth/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-earth/5 border-b border-earth/10 text-sm uppercase tracking-wider text-moss/70 font-bold">
                <th className="p-4 pl-6">Company</th>
                <th className="p-4">Sector</th>
                <th className="p-4">Bursa Tier</th>
                <th className="p-4 text-center">E Score</th>
                <th className="p-4 text-center">S Score</th>
                <th className="p-4 text-center">G Score</th>
                <th className="p-4 pr-6"></th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, i) => (
                <tr key={i} className={`border-b border-earth/5 hover:bg-earth/5 transition-colors ${company.featured ? 'bg-mint/5' : ''}`}>
                  <td className="p-4 pl-6 font-bold text-moss">
                    <div className="flex items-center gap-2">
                      <Building2 size={16} className="text-earth/50" />
                      {company.name}
                      {company.featured && <span className="w-2 h-2 rounded-full bg-sunrise ml-2"></span>}
                    </div>
                  </td>
                  <td className="p-4 text-sm text-moss/80">{company.sector}</td>
                  <td className="p-4">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${
                      company.tier === 'Platinum' ? 'bg-slate-200 text-slate-800' :
                      company.tier === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                      company.tier === 'Silver' ? 'bg-gray-100 text-gray-600' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {company.tier}
                    </span>
                  </td>
                  <td className="p-4 text-center font-metric font-medium">{company.env}</td>
                  <td className="p-4 text-center font-metric font-medium">{company.soc}</td>
                  <td className="p-4 text-center font-metric font-medium">{company.gov}</td>
                  <td className="p-4 pr-6 text-right">
                   <button className="text-forest hover:text-sunrise">
                     <BarChart3 size={20} />
                   </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
