export default function BeginnerGuidePage() {
  const controls = [
    { key: "M1 (Click)", action: "Basic punch / melee attack" },
    { key: "Q", action: "Dash / dodge — essential for avoiding combos" },
    { key: "F", action: "Block — reduces incoming damage by 70%" },
    { key: "E", action: "Skill 1 — your first cursed technique" },
    { key: "R", action: "Skill 2 — follow-up or ranged attack" },
    { key: "T", action: "Awakening activation (requires Cursed Energy bar full)" },
    { key: "G", action: "Domain Expansion — ultimate move, massive AoE" },
    { key: "Z", action: "Air dash — extend combos midair" },
  ];

  const tips = [
    { title: "Learn to Dash Cancel", desc: "Dash immediately after every M1 hit to avoid being counter-comboed. This is the core of competitive play.", icon: "⚡" },
    { title: "Fill Your CE Bar First", desc: "Cursed Energy fills by landing hits and blocking. Awaken (T) only when your CE bar is full for maximum stats.", icon: "🔋" },
    { title: "Save Domain for 1v1", desc: "Domain Expansion (G) is your strongest move but has a long cooldown. Use it to close out a 1v1, not in group fights.", icon: "🌀" },
    { title: "Counter-Block High Damage Moves", desc: "Blocking at the exact moment of a heavy attack triggers a parry — press immediately after to punish with a full combo.", icon: "🛡️" },
  ];

  return (
    <div className="space-y-10">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Jujutsu Shenanigans Beginner Guide</h1>
        <p className="text-slate-400 text-sm mt-1">Controls, mechanics, and core PvP tips to get you started in Jujutsu Shenanigans.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-purple-400">🎮 Controls Reference</h2>
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          {controls.map((c, i) => (
            <div key={i} className={`flex items-center gap-4 px-5 py-3 ${i % 2 === 0 ? 'bg-slate-950/50' : ''}`}>
              <span className="font-mono text-xs bg-slate-800 border border-slate-700 text-purple-300 px-2.5 py-1 rounded-lg font-bold w-24 text-center flex-shrink-0">{c.key}</span>
              <span className="text-sm text-slate-300">{c.action}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">⚡ Core PvP Tips</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {tips.map((t, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 hover:border-purple-700/50 rounded-xl p-5 space-y-2 transition">
              <div className="text-2xl">{t.icon}</div>
              <div className="font-bold text-white">{t.title}</div>
              <p className="text-xs text-slate-400 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
