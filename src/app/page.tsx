'use client';
import { useState } from 'react';

export default function HomePage() {
  const [copied, setCopied] = useState('');

  const copy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-indigo-950 to-slate-950 border border-purple-800/30 rounded-3xl p-10 text-center space-y-5">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-96 h-48 bg-purple-600/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-64 h-32 bg-indigo-500/10 blur-[80px] rounded-full" />
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950 border border-purple-700/50 text-purple-300 text-xs font-semibold">
          ⚡ Cursed Energy Awaits
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
          Jujutsu Shenanigans <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Wiki</span>
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Master every cursed technique — Character PvP Tier List, Combo Builder, Awakening Unlocks & Active Codes.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <a href="/codes" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold px-7 py-3 rounded-xl transition shadow-lg shadow-purple-600/25">
            🎁 Active Codes
          </a>
          <a href="/tier-list" className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-7 py-3 rounded-xl transition border border-slate-700">
            🏆 Character Tier List
          </a>
          <a href="/combo-calculator" className="bg-purple-950/70 hover:bg-purple-900/70 text-purple-300 font-bold px-7 py-3 rounded-xl transition border border-purple-800/50">
            ⚡ PvP Combo Builder
          </a>
        </div>
      </section>

      {/* Tool Nav Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <a href="/codes" className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-purple-700/50 rounded-2xl p-6 space-y-3 transition-all duration-200 hover:-translate-y-1">
          <div className="text-3xl">🎁</div>
          <h2 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">Redeem Codes</h2>
          <p className="text-xs text-slate-400 leading-relaxed">All working codes for free Cash and Spin tickets. Verified and updated with every patch.</p>
          <span className="text-xs text-purple-400 font-semibold">View codes →</span>
        </a>

        <a href="/tier-list" className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-indigo-700/50 rounded-2xl p-6 space-y-3 transition-all duration-200 hover:-translate-y-1">
          <div className="text-3xl">🏆</div>
          <h2 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">PvP Tier List</h2>
          <p className="text-xs text-slate-400 leading-relaxed">Gojo, Sukuna, Hakari and more — ranked by Domain power, combo potential, and 1v1 viability.</p>
          <span className="text-xs text-indigo-400 font-semibold">View tier list →</span>
        </a>

        <a href="/combo-calculator" className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-violet-700/50 rounded-2xl p-6 space-y-3 transition-all duration-200 hover:-translate-y-1">
          <div className="text-3xl">⚡</div>
          <h2 className="text-lg font-bold text-white group-hover:text-violet-400 transition-colors">PvP Combo Builder</h2>
          <p className="text-xs text-slate-400 leading-relaxed">Optimized combo strings and damage outputs for every character. Master your moveset and dominate 1v1s.</p>
          <span className="text-xs text-violet-400 font-semibold">Build combos →</span>
        </a>
      </section>

      {/* Latest Code Preview */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">🔥 Latest Active Code</h2>
          <a href="/codes" className="text-xs text-purple-400 hover:underline">See all codes →</a>
        </div>
        <div className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl px-5 py-4">
          <div>
            <span className="font-mono text-white text-base font-bold">A7D2L26RNEPG74A3Q</span>
            <span className="ml-3 text-xs text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded">✓ Active</span>
          </div>
          <button
            onClick={() => copy('A7D2L26RNEPG74A3Q')}
            className="text-xs bg-purple-600 hover:bg-purple-500 text-white font-bold px-4 py-2 rounded-lg transition"
          >
            {copied === 'A7D2L26RNEPG74A3Q' ? '✓ Copied!' : 'Copy'}
          </button>
        </div>
        <p className="text-xs text-slate-500">Rewards: Free Cash & Spin Tickets</p>
      </section>
    </div>
  );
}
