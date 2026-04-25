import { Calendar, Tag } from "lucide-react";
import { Link } from "react-router-dom";

export function News() {
  const articles = [
    { title: "National Grid Expansion Adds 400MW of Solar Capacity in Johor", category: "Environmental", date: "Oct 15, 2025", excerpt: "The new solar farm is expected to offset approximately 350,000 tonnes of CO2 emissions annually, part of Malaysia's target for 31% renewable energy by 2025." },
    { title: "Bursa Malaysia to enhance sustainability reporting requirements", category: "Governance", date: "Oct 12, 2025", excerpt: "New guidelines will require more granular disclosures on climate risks starting Q3." },
    { title: "Licensed Platforms Adopt Unified Player Protection Standard", category: "Social", date: "Oct 10, 2025", excerpt: "Gaming and digital entertainment sector implements cross-platform responsible AI monitoring for better player well-being." },
    { title: "Palm Oil Sector Updates: Traceability hits 85% milestone", category: "Environmental", date: "Oct 08, 2025", excerpt: "Major plantations report significant improvements in supply chain transparency following blockchain integration." },
    { title: "Green Bonds Issuance Reaches Record RM 10 Billion in Q3", category: "Sustainable Finance", date: "Oct 05, 2025", excerpt: "Investor appetite for sustainable loans pushes domestic green bond market to unprecedented heights." },
    { title: "Platinum Casino Pledges Net Zero by 2028", category: "Gaming & Hospitality", date: "Oct 01, 2025", excerpt: "Major digital entertainment operator unveils aggressive carbon offset strategy and data center consolidations." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="mb-12 border-b border-earth/20 pb-12">
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-moss mb-6">Archive & <span className="text-sunrise">Briefings</span></h1>
        
        <div className="flex flex-wrap gap-3 mt-8">
          <span className="font-bold text-sm uppercase tracking-wide mr-2 text-moss/50 self-center">Filter:</span>
          {['All', 'Environmental', 'Social', 'Governance', 'Sustainable Finance', 'Gaming & Hospitality'].map(tag => (
            <button key={tag} className="px-4 py-2 bg-white border border-earth/20 rounded-full text-sm font-medium hover:bg-forest hover:text-white transition-colors">
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {articles.map((article, i) => (
          <article key={i} className="group relative">
            <div className="flex items-center gap-4 mb-3">
              <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                article.category === 'Environmental' ? 'bg-mint/20 text-forest' :
                article.category === 'Social' ? 'bg-sunrise/10 text-sunrise' :
                article.category === 'Governance' ? 'bg-earth/10 text-earth' :
                'bg-gray-100 text-gray-700'
              }`}>
                {article.category}
              </span>
              <span className="text-moss/50 text-xs font-metric flex items-center gap-1">
                <Calendar size={12} /> {article.date}
              </span>
            </div>
            <h2 className="text-2xl font-headline font-bold text-moss mb-3 group-hover:text-forest transition-colors">
              <Link to="#">
                <span className="absolute inset-0"></span>
                {article.title}
              </Link>
            </h2>
            <p className="text-moss/70 font-body line-clamp-3">
              {article.excerpt}
            </p>
            <div className="mt-4 pt-4 border-t border-earth/10 flex items-center gap-2 text-forest text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              Read Article &rarr;
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
