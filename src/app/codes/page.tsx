import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jujutsu Shenanigans Codes — Free Cash & Emotes',
  description: 'Jujutsu Shenanigans redeem codes with the full expired archive. Redeem for free cash and exclusive emote cosmetics.',
  alternates: {
    canonical: '/codes',
  },
  keywords: ['jujutsu shenanigans codes', 'roblox jujutsu shenanigans free cash'],
};

const ACTIVE_CODES = [
  { code: 'A7D2L26RNEPG74A3Q', reward: 'Free Emote (unlocks the Nep achievement emote)' },
];

const EXPIRED_CODES = [
  { code: 'X6X31F47UN8JM1NEP', reward: 'Expired — reward not documented by the publisher' },
  { code: 'RIPBOWE', reward: 'Expired — reward not documented by the publisher' },
  { code: 'JJS1YEAR', reward: '50 Cash and an Emote (1st anniversary)' },
  { code: 'WHYEMOTEDISSAPEAR', reward: 'Expired — reward not documented by the publisher' },
  { code: 'SLATECONCRETE', reward: 'Expired — reward not documented by the publisher' },
  { code: '67', reward: 'Expired — reward not documented by the publisher' },
  { code: '370MVISITS', reward: 'Expired — reward not documented by the publisher' },
  { code: '120MVISITS', reward: 'Expired — reward not documented by the publisher' },
  { code: '20MVISITS', reward: '200 Cash (2024 milestone)' },
];

export default function CodesPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Jujutsu Shenanigans Codes</h1>
        <p className="text-slate-400 text-sm mt-1">This game only ever keeps one or two codes live at a time — the current Nep-series code below is the only one working right now. Older milestone and emote codes are archived for reference.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <div className="px-4 py-3 bg-slate-950 border-b border-slate-800">
          <h2 className="text-sm font-bold text-emerald-400 font-mono uppercase">Active Codes ({ACTIVE_CODES.length})</h2>
        </div>
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 font-semibold">
              <th className="p-4">Code</th>
              <th className="p-4">Reward</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {ACTIVE_CODES.map((item) => (
              <tr key={item.code} className="border-b border-slate-800 hover:bg-slate-900/50">
                <td className="p-4 font-mono font-bold text-cyan-400">{item.code}</td>
                <td className="p-4 text-slate-300">{item.reward}</td>
                <td className="p-4"><span className="text-xs text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-1 rounded-full font-semibold">Active</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden">
        <div className="px-4 py-3 bg-slate-950 border-b border-slate-800">
          <h2 className="text-sm font-bold text-slate-400 font-mono uppercase">Expired Codes ({EXPIRED_CODES.length})</h2>
        </div>
        <table className="w-full text-left border-collapse text-sm">
          <tbody>
            {EXPIRED_CODES.map((item) => (
              <tr key={item.code} className="border-b border-slate-800 hover:bg-slate-900/50">
                <td className="p-4 font-mono font-bold text-slate-500 line-through">{item.code}</td>
                <td className="p-4 text-slate-500">{item.reward}</td>
                <td className="p-4"><span className="text-xs text-slate-500 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-full font-semibold">Expired</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
