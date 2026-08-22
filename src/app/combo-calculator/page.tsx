'use client';
import { useState } from 'react';

const CHARACTERS = [
  {
    name: "Gojo (Honored One)",
    combos: [
      { name: "Bread & Butter BNB", string: "3x M1 -> Lapse Blue -> Dash -> 2x M1 -> Reversal Red", damage: 48 },
      { name: "Infinite Burst Combo", string: "Lapse Blue -> Down Slam -> Teleport M1 -> Infinite Void Awakening", damage: 85 }
    ]
  },
  {
    name: "Sukuna (King of Curses)",
    combos: [
      { name: "Dismantle Extend", string: "4x M1 -> Cleave -> Dash Cancel -> Dismantle -> Fire Arrow Finish", damage: 62 },
      { name: "Domain One-Shot", string: "Cleave -> Wall Splat -> Malevolent Shrine", damage: 100 }
    ]
  },
  {
    name: "Hakari (Restless Gambler)",
    combos: [
      { name: "Jackpot Rush", string: "Shutter Door -> 3x M1 -> Reserve Ball -> Idle Death Gamble", damage: 55 }
    ]
  }
];

export default function ComboCalculatorPage() {
  const [selectedChar, setSelectedChar] = useState(0);

  const char = CHARACTERS[selectedChar];

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Jujutsu Shenanigans PvP Combo Builder</h1>
        <p className="text-slate-400 text-sm mt-1">Master character combo strings, frame advantages, and burst damage outputs.</p>
      </div>

      <div className="flex space-x-3">
        {CHARACTERS.map((c, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedChar(idx)}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition border ${
              selectedChar === idx ? "bg-purple-600 text-white border-purple-400" : "bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">{char.name} Optimized Combos</h2>
        <div className="grid gap-4">
          {char.combos.map((combo, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-purple-400">{combo.name}</h3>
                <span className="text-xs bg-purple-950 text-purple-300 border border-purple-800 px-3 py-1 rounded-full font-mono font-bold">
                  {combo.damage}% Damage
                </span>
              </div>
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-sm text-cyan-300">
                {combo.string}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
