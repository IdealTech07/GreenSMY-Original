import { useState, useMemo } from "react";
import { Calendar, Search, X, Leaf, BookOpen, ChevronRight } from "lucide-react";
import { articles, Article } from "../data/articles";

export function News() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const categories = ["All", "Environmental", "Social", "Governance"];

  // Filter & Search logic
  const filteredArticles = useMemo(() => {
    return articles.filter((art) => {
      const matchesCategory = selectedCategory === "All" || art.category === selectedCategory;
      const matchesSearch =
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.content.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Helper to dynamically replace words "winbox" and "winbox666" with secure backlinks
  const renderParsedContent = (text: string) => {
    const regex = /(winbox666|winbox)/gi;
    const parts = text.split(regex);
    return parts.map((part, index) => {
      const lower = part.toLowerCase();
      if (lower === "winbox666") {
        return (
          <a
            key={index}
            href="https://winbox666.online"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sunrise hover:underline font-bold"
            onClick={(e) => e.stopPropagation()}
          >
            {part}
          </a>
        );
      } else if (lower === "winbox") {
        return (
          <a
            key={index}
            href="https://winbox666.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest hover:underline font-bold"
            onClick={(e) => e.stopPropagation()}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 selection:bg-sunrise selection:text-white">
      {/* Editorial Header */}
      <div className="mb-12 border-b border-forest/10 pb-10">
        <span className="items-center inline-flex space-x-2 text-forest font-bold tracking-widest uppercase text-[10px] mb-4 bg-forest/5 px-3 py-1 rounded-full">
          <BookOpen size={12} /> <span>Press & Archive</span>
        </span>
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-moss mb-4">
          Latest <span className="text-forest">Briefings</span>
        </h1>
        <p className="text-lg text-moss/70 font-quote max-w-2xl">
          A comprehensive archive of daily briefings covering corporate compliance, carbon transition milestones, and social safety standards.
        </p>

        {/* Search & Filtering Bar */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-forest text-white shadow-sm"
                    : "bg-white border border-forest/10 text-moss/70 hover:bg-forest/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-moss/40" size={16} />
            <input
              type="text"
              placeholder="Search briefings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-forest/10 focus:outline-none focus:ring-2 focus:ring-forest bg-white/60 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Articles Grid (Bento Style layout card matching the requested theme) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((art) => (
          <div
            key={art.id}
            onClick={() => setActiveArticle(art)}
            className="bg-white/70 hover:bg-white rounded-[32px] p-6 border border-forest/5 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer flex flex-col h-full group"
          >
            <div className="flex items-center justify-between mb-4">
              <span
                className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                  art.category === "Environmental"
                    ? "bg-mint/20 text-forest"
                    : art.category === "Social"
                    ? "bg-sunrise/10 text-sunrise"
                    : "bg-earth/10 text-earth"
                }`}
              >
                {art.category}
              </span>
              <span className="text-[10px] text-moss/40 font-metric flex items-center gap-1">
                <Calendar size={11} /> {art.date}
              </span>
            </div>
            
            <h3 className="font-headline font-bold text-lg text-moss mb-3 group-hover:text-forest transition-colors leading-snug flex-grow">
              {art.title}
            </h3>
            
            <p className="text-xs text-moss/70 mb-5 line-clamp-3 leading-relaxed">
              {art.excerpt}
            </p>

            <div className="pt-4 border-t border-forest/5 flex items-center justify-between text-[11px] font-bold text-forest uppercase tracking-wider">
              <span>Read Full Briefing</span>
              <ChevronRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}

        {filteredArticles.length === 0 && (
          <div className="col-span-full py-16 text-center text-moss/50 font-quote">
            No briefings match your search or selected filter.
          </div>
        )}
      </div>

      {/* Article Full Detail Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-moss/60 backdrop-blur-sm">
          <div className="bg-cream max-w-2xl w-full rounded-[40px] border border-forest/15 overflow-hidden shadow-2xl relative flex flex-col max-h-[85vh]">
            
            {/* Header decor */}
            <div className="h-2 bg-gradient-to-r from-forest via-mint to-sunrise"></div>

            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 bg-white/80 p-2 rounded-full border border-forest/10 hover:bg-white transition-colors z-10"
            >
              <X size={18} className="text-moss" />
            </button>

            <div className="p-8 md:p-10 overflow-y-auto">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-forest/5 text-forest text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {activeArticle.category}
                </span>
                <span className="text-xs font-metric text-moss/50 flex items-center gap-1">
                  <Calendar size={13} /> {activeArticle.date}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-headline font-bold text-moss mb-6 leading-tight">
                {activeArticle.title}
              </h2>

              {/* Simulated illustration layout / Placeholder */}
              <div className="mb-6 rounded-2xl bg-forest/5 border border-forest/10 p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-forest text-cream rounded-xl flex items-center justify-center font-metric font-bold text-lg">
                  {activeArticle.iconText}
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-earth">Briefing Spotlight</h4>
                  <p className="text-xs text-moss/70">Verified sustainability report for June 2026.</p>
                </div>
              </div>

              <div className="prose prose-sm max-w-none text-moss/80 leading-relaxed space-y-4 font-body text-sm md:text-base">
                {renderParsedContent(activeArticle.content)}
              </div>
            </div>

            <div className="p-6 bg-white border-t border-forest/10 flex justify-end gap-3 rounded-b-[40px]">
              <button
                onClick={() => setActiveArticle(null)}
                className="bg-forest text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Close Briefing
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
