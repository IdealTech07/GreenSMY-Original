import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const dataCarbon = [
  { year: "2020", gaming: 120, plantation: 400, energy: 800 },
  { year: "2021", gaming: 110, plantation: 380, energy: 780 },
  { year: "2022", gaming: 95, plantation: 350, energy: 700 },
  { year: "2023", gaming: 80, plantation: 330, energy: 650 },
  { year: "2024", gaming: 65, plantation: 300, energy: 600 },
];

const dataBoard = [
  { sector: "Banking", male: 60, female: 40 },
  { sector: "Gaming", male: 70, female: 30 },
  { sector: "Energy", male: 75, female: 25 },
  { sector: "Tech", male: 65, female: 35 },
];

export function DataDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-moss mb-6">Sector <span className="text-earth">Data Dashboard</span></h1>
        <p className="text-xl text-moss/70 font-quote max-w-3xl">
          Visualizing ESG metrics across Malaysian corporate sectors. (Mock Data)
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        
        {/* Carbon Intensity Chart */}
        <div className="bg-white p-8 rounded-3xl border border-earth/20 shadow-sm">
          <div className="mb-6">
            <h3 className="font-headline font-bold text-xl text-moss">Carbon Intensity Trends</h3>
            <p className="text-xs text-earth uppercase">MtCO2e per RM1M Revenue</p>
          </div>
          <div className="h-80 w-full font-metric text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dataCarbon} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorGaming" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#75C9A4" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#75C9A4" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#E87A3E" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#E87A3E" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" stroke="#8B6B4A" />
                <YAxis stroke="#8B6B4A" />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E4E3E0" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1A5D3A', color: '#fff', borderRadius: '12px', border: 'none' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="gaming" name="Gaming & Hospitality" stroke="#75C9A4" fillOpacity={1} fill="url(#colorGaming)" />
                <Area type="monotone" dataKey="energy" name="Energy" stroke="#E87A3E" fillOpacity={1} fill="url(#colorEnergy)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Board Diversity Chart */}
        <div className="bg-white p-8 rounded-3xl border border-earth/20 shadow-sm">
          <div className="mb-6">
            <h3 className="font-headline font-bold text-xl text-moss">Board Diversity</h3>
            <p className="text-xs text-earth uppercase">Percentage of representation</p>
          </div>
          <div className="h-80 w-full font-metric text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dataBoard} layout="vertical" margin={{ top: 10, right: 30, left: 20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E4E3E0" />
                <XAxis type="number" stroke="#8B6B4A" />
                <YAxis dataKey="sector" type="category" stroke="#1A5D3A" width={80} fontWeight="bold" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1A5D3A', color: '#fff', borderRadius: '12px', border: 'none' }}
                />
                <Bar dataKey="female" name="Female %" stackId="a" fill="#1A5D3A" radius={[0, 0, 0, 0]} />
                <Bar dataKey="male" name="Male %" stackId="a" fill="#E87A3E" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Heatmap Table Mock */}
      <div className="bg-moss p-8 rounded-3xl text-cream overflow-hidden relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FDF8F0 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10">
          <h3 className="font-headline font-bold text-2xl mb-2">Sector ESG Heatmap</h3>
          <p className="text-sm text-mint mb-8">Aggregated scores across environmental, social, and governance.</p>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20 text-xs uppercase tracking-widest text-cream/60">
                  <th className="pb-4">Sector</th>
                  <th className="pb-4 text-center">Disclosure Quality</th>
                  <th className="pb-4 text-center">GHG Reduction</th>
                  <th className="pb-4 text-center">Labor Practices</th>
                  <th className="pb-4 text-center">Anti-Corruption</th>
                </tr>
              </thead>
              <tbody className="font-metric text-sm">
                <tr className="border-b border-white/10">
                  <td className="py-4 font-bold font-body">Banking</td>
                  <td className="py-4"><div className="mx-auto w-12 h-8 rounded bg-mint border border-white/20"></div></td>
                  <td className="py-4"><div className="mx-auto w-12 h-8 rounded bg-earth border border-white/20"></div></td>
                  <td className="py-4"><div className="mx-auto w-12 h-8 rounded bg-mint border border-white/20"></div></td>
                  <td className="py-4"><div className="mx-auto w-12 h-8 rounded bg-mint border border-white/20"></div></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 font-bold font-body">Gaming & Hospitality</td>
                  <td className="py-4"><div className="mx-auto w-12 h-8 rounded bg-mint border border-white/20"></div></td>
                  <td className="py-4"><div className="mx-auto w-12 h-8 rounded bg-sunrise border border-white/20"></div></td>
                  <td className="py-4"><div className="mx-auto w-12 h-8 rounded bg-mint border border-white/20"></div></td>
                  <td className="py-4"><div className="mx-auto w-12 h-8 rounded bg-mint border border-white/20"></div></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 font-bold font-body">Plantation</td>
                  <td className="py-4"><div className="mx-auto w-12 h-8 rounded bg-earth border border-white/20"></div></td>
                  <td className="py-4"><div className="mx-auto w-12 h-8 rounded bg-sunrise border border-white/20"></div></td>
                  <td className="py-4"><div className="mx-auto w-12 h-8 rounded bg-earth border border-white/20"></div></td>
                  <td className="py-4"><div className="mx-auto w-12 h-8 rounded bg-earth border border-white/20"></div></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex gap-4 mt-6 text-xs justify-end">
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-mint rounded-sm"></div> Strong</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-earth rounded-sm"></div> Average</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-sunrise rounded-sm"></div> Laggard</div>
          </div>
        </div>
      </div>
    </div>
  );
}
