import type { Metadata } from 'next';
import PageSchema from '@/components/PageSchema';
import { CHARACTERS_DATA } from '@/data/wikiData';

export const metadata: Metadata = {
  title: 'Jujutsu Shenanigans Character Tier List',
  description:
    'The Jujutsu Shenanigans roster grouped by community meta tier — every playable character with its awakening, difficulty and playstyle.',
  alternates: {
    canonical: '/tier-list',
  },
  keywords: ['jujutsu shenanigans tier list', 'jujutsu shenanigans best characters', 'jujutsu shenanigans roster'],
};

const TIER_META: Record<string, { label: string; blurb: string; color: string }> = {
  S: {
    label: 'S Tier — Meta-defining',
    blurb: 'The characters most of the player base agrees you cannot go wrong with.',
    color: 'bg-red-500/20 text-red-400 border-red-500/40',
  },
  A: {
    label: 'A Tier — Strong picks',
    blurb: 'Powerful in the right hands, held back only by harder execution or weaker neutral.',
    color: 'bg-amber-500/20 text-amber-400 border-amber-500/40',
  },
  B: {
    label: 'B Tier — Situational',
    blurb: 'Fun and viable, but they need more work for the same results.',
    color: 'bg-slate-500/20 text-slate-300 border-slate-500/40',
  },
};

const DIFFICULTY_COLOR: Record<string, string> = {
  Easy: 'text-emerald-400',
  Medium: 'text-yellow-400',
  Hard: 'text-rose-400',
};

export default function TierListPage() {
  const tiers = ['S', 'A', 'B'] as const;

  return (
    <div className="space-y-6">
      <PageSchema
        title="Jujutsu Shenanigans Character Tier List"
        description="The Jujutsu Shenanigans roster grouped by community meta tier — every playable character with its awakening, difficulty and playstyle."
        path="/tier-list"
      />

      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Jujutsu Shenanigans Meta Tier List</h1>
        <p className="text-slate-400 text-sm mt-1">
          Every playable character in Jujutsu Shenanigans, grouped by how the community rates them in PvP.
          Exact combat numbers are not officially documented, so placement follows consensus strength — not invented damage tables.
        </p>
      </div>

      {tiers.map((tier) => {
        const chars = CHARACTERS_DATA.filter((c) => c.tier === tier);
        if (chars.length === 0) return null;
        const meta = TIER_META[tier];
        return (
          <section className="space-y-3" key={tier}>
            <div className="flex items-center gap-3">
              <span className={`text-lg font-black px-3 py-1 rounded-lg border ${meta.color}`}>{meta.label}</span>
              <p className="text-slate-400 text-xs">{meta.blurb}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {chars.map((c) => (
                <div key={c.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h2 className="text-lg font-bold text-white">{c.name}</h2>
                      <p className="text-slate-500 text-xs">{c.alias}</p>
                    </div>
                    <span className={`text-xs font-bold ${DIFFICULTY_COLOR[c.difficulty]} shrink-0`}>{c.difficulty}</span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{c.description}</p>
                  <p className="text-xs text-cyan-300 font-semibold">Awakening: {c.awakeningName}</p>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      <p className="text-slate-500 text-xs border-t border-slate-800 pt-4">
        Tier placement reflects community consensus and shifts with balance updates. See the{' '}
        <a href="/awakening-guide" className="text-cyan-300 underline">awakening guide</a> for what each character&apos;s awakening does,
        or the <a href="/codes" className="text-cyan-300 underline">codes page</a> for the one working code.
      </p>
    </div>
  );
}
