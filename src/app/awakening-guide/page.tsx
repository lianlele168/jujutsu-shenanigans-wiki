export default function AwakeningGuidePage() {
  const awakenings = [
    {
      char: "Gojo (Honored One)",
      awakening: "Unlimited Void",
      how: "Fill CE bar to 100% then press T. Works best when opponent is mid-combo.",
      effects: ["All opponent inputs disabled for 3 seconds", "Infinite Void aura deals continuous AoE damage", "+40% movement speed", "All cooldowns reset on activation"],
      tips: "Save Unlimited Void for when your opponent is recovering from a knockdown — they can't escape.",
      color: "text-blue-400 border-blue-800/50"
    },
    {
      char: "Sukuna (King of Curses)",
      awakening: "Malevolent Shrine",
      how: "Press T after reaching 4-finger form via Cleave + Dismantle combo.",
      effects: ["Cleave radius triples", "Dismantle tracks opponents automatically", "+60% damage on all slashing moves", "Domain barrier appears around arena"],
      tips: "Use after a wall-splat combo — opponents can't dodge out of the arena during Malevolent Shrine.",
      color: "text-red-400 border-red-800/50"
    },
    {
      char: "Hakari (Jackpot Mode)",
      awakening: "Idle Death Gamble",
      how: "Land 3 consecutive Shutter Door hits to trigger the Jackpot lottery activation.",
      effects: ["Random damage multiplier (1x - 5x) on each hit", "Infinite cursed energy regeneration for 8s", "Reversal Red auto-fires every 2 seconds"],
      tips: "Jackpot Mode is RNG-based — stack as many hits as possible during the 8-second window.",
      color: "text-amber-400 border-amber-800/50"
    },
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Jujutsu Shenanigans Awakening Guide</h1>
        <p className="text-slate-400 text-sm mt-1">How to unlock and maximize every character awakening — effects, activation conditions, and pro tips.</p>
      </div>

      <div className="space-y-6">
        {awakenings.map((a, i) => (
          <div key={i} className={`bg-slate-900 border rounded-2xl p-6 space-y-5 ${a.color}`}>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">{a.char}</div>
              <h2 className="text-xl font-bold text-white mt-1">⚡ {a.awakening}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">How to Activate</div>
                <p className="text-sm text-slate-300 bg-slate-950/60 border border-slate-800 rounded-lg p-3 leading-relaxed">{a.how}</p>
              </div>
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Awakening Effects</div>
                <ul className="space-y-1">
                  {a.effects.map((e, j) => (
                    <li key={j} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">▸</span> {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-purple-950/30 border border-purple-800/40 rounded-lg p-3 text-xs text-purple-200">
              💡 <strong>Pro Tip:</strong> {a.tips}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
