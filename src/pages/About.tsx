import { Leaf } from "lucide-react";

export function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-16">
        <div className="w-20 h-20 bg-forest text-cream rounded-full mx-auto flex items-center justify-center mb-6">
          <Leaf size={40} />
        </div>
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-moss mb-6">About <br /><span className="text-forest">Green Scene MY</span></h1>
        <p className="text-xl text-moss/70 font-quote italic">
          "Tracking the transition to a sustainable economy."
        </p>
      </div>

      <div className="bg-white rounded-3xl p-10 md:p-16 border border-earth/20 shadow-sm mb-12">
        <div className="prose prose-lg font-body text-moss/80 max-w-none">
          <h2 className="text-2xl font-headline font-bold text-moss mb-4">Our Mission</h2>
          <p className="mb-8">
            Green Scene is Malaysia's premier independent news outlet dedicated exclusively to Environmental, Social, and Governance (ESG) developments. We bridge the gap between corporate disclosures and public understanding, providing clear, data-informed insights into how local industries are adapting to the climate crisis and social shifts.
          </p>

          <h2 className="text-2xl font-headline font-bold text-moss mb-4">Methodology & Data Sources</h2>
          <p className="mb-4">
            Our data dashboard and sector heatmaps are compiled using publicly available sustainability disclosures from Bursa Malaysia, independent ESG rating agencies, and direct corporate submissions. 
          </p>
          <ul className="list-disc pl-5 mb-8 space-y-2">
            <li><strong>Environmental Data:</strong> Sourced from corporate GHG Protocol disclosures (Scope 1, 2, and 3 where available).</li>
            <li><strong>Social Data:</strong> Derived from employee welfare reports, board diversity figures, and integrated community impact assessments.</li>
            <li><strong>Governance:</strong> Evaluated through transparency reports, anti-corruption frameworks, and external audit verifications.</li>
          </ul>

          <h2 className="text-2xl font-headline font-bold text-moss mb-4">Partner with Us</h2>
          <p>
            We work with leading corporations to feature their sustainability journeys. Sponsored profiles, such as our recent collaborations in the <strong>Gaming & Hospitality sector</strong> with operators like Platinum Casino, provide deep dives into specific transitional strategies. All sponsored content is clearly marked and maintains strict editorial independence regarding data accuracy.
          </p>
        </div>
      </div>
      
      <div className="text-center pb-20">
        <a href="mailto:contact@greenscenemy.com" className="inline-block bg-earth text-white font-bold py-4 px-10 rounded-full hover:bg-forest transition-colors">
          Contact Editorial Team
        </a>
      </div>
    </div>
  );
}
