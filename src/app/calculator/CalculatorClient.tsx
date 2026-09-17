"use client";
import React, { useState } from "react";
import Image from "next/image";
import AuthorCard from "@/components/AuthorCard";
import { CHARACTERS_DATA, COMBOS_DATA } from "@/data/wikiData";
import { Calculator, Sparkles, Swords, Zap, ShieldAlert } from "lucide-react";

export default function CalculatorClient() {
  const [selectedCharIdx, setSelectedCharIdx] = useState(0);
  const [awakened, setAwakened] = useState(false);

  const char = CHARACTERS_DATA[selectedCharIdx] || CHARACTERS_DATA[0];
  const charCombos = COMBOS_DATA.filter((c) => c.character.includes(char.name.split(" ")[0]));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the highest damage combo in Jujutsu Shenanigans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sukuna's Malevolent Guillotine combo sequence (Cleave -> Wall Splat -> Malevolent Shrine) guarantees a 100% one-shot elimination within the domain radius.",
        },
      },
      {
        "@type": "Question",
        name: "How does Awakening affect combo damage in Jujutsu Shenanigans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Awakening boosts base attack scaling by 30% to 50% and replaces base cooldowns with enhanced ultimate techniques.",
        },
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Jujutsu Shenanigans PvP Combo Damage Calculator",
    applicationCategory: "GameApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-8 px-4 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

      <div className="border-b border-purple-900/60 pb-5 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-700/50 text-purple-300 text-xs font-semibold mb-3">
          <Calculator className="w-3.5 h-3.5" /> Interactive Combo Lab
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          PvP Combo & Burst Damage Calculator
        </h1>
        <p className="text-slate-300 text-sm mt-2 max-w-2xl">
          Simulate true combo strings, down slam extensions, and awakening multipliers to calculate exact health bar depletion percentages.
        </p>
      </div>

      <AuthorCard />

      <div className="grid md:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-5">
          <div className="bg-slate-900/90 border border-purple-900/60 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Swords className="w-4 h-4 text-purple-400" /> 1. Select Sorcerer
            </h2>
            <select
              value={selectedCharIdx}
              onChange={(e) => setSelectedCharIdx(Number(e.target.value))}
              className="w-full bg-slate-950 border border-purple-800/60 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500"
            >
              {CHARACTERS_DATA.map((c, idx) => (
                <option key={c.id} value={idx}>
                  {c.name} ({c.alias} - Tier {c.tier})
                </option>
              ))}
            </select>
            <div className="text-xs text-slate-400 flex justify-between">
              <span>Awakening: <strong className="text-purple-300">{char.awakeningName}</strong></span>
              <span>Difficulty: <strong className="text-amber-300">{char.difficulty}</strong></span>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-purple-900/60 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" /> 2. Cursed Energy Mode
            </h2>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setAwakened(!awakened)}
                className={`w-full py-3 px-4 rounded-xl border text-xs font-bold transition ${
                  awakened
                    ? "bg-purple-900/80 border-purple-400 text-purple-200 shadow-lg shadow-purple-500/25"
                    : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                }`}
              >
                {awakened ? "⚡ Awakened Form Active (+30% Damage)" : "Base State"}
              </button>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-purple-900/60 rounded-2xl p-6 space-y-3">
            <h2 className="text-base font-bold text-white">3. Character Combos in Meta</h2>
            <div className="space-y-2">
              {charCombos.map((combo) => {
                const totalDmg = Math.round(combo.damagePercent * (awakened ? 1.3 : 1.0));
                return (
                  <div key={combo.id} className="p-3 bg-slate-950 rounded-xl border border-purple-950/60 text-xs space-y-1">
                    <div className="flex justify-between font-bold">
                      <span className="text-purple-300">{combo.name}</span>
                      <span className="text-emerald-400 font-mono">{totalDmg}% HP</span>
                    </div>
                    <p className="text-slate-400 font-mono text-[11px]">{combo.sequence}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results & Visuals */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-950/80 to-slate-950 border border-purple-500/40 rounded-2xl p-6 space-y-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-purple-400">
              Selected Sorcerer Profile
            </h2>
            <div className="text-2xl sm:text-3xl font-black text-white">
              {char.name}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {char.description}
            </p>
            <div className="pt-3 border-t border-purple-900/60 space-y-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Awakening Domain:</span>
                <span className="font-bold text-purple-300">{char.awakeningName}</span>
              </div>
              <div className="flex justify-between">
                <span>Competitive Tier:</span>
                <span className="font-bold text-amber-300">{char.tier} Tier</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-purple-900/60 bg-purple-950/30 p-2">
              <Image
                src="/images/shenanigans-header.webp"
                alt="Jujutsu Shenanigans Official Game Icon"
                width={512}
                height={512}
                className="rounded-lg object-cover w-full h-36"
              />
              <p className="text-[11px] text-purple-300 text-center mt-1.5 font-medium">Official Game Icon</p>
            </div>
            <div className="rounded-xl overflow-hidden border border-purple-900/60 bg-purple-950/30 p-2">
              <Image
                src="/images/shenanigans-gameplay.webp"
                alt="Jujutsu Shenanigans Combat Arena"
                width={768}
                height={432}
                className="rounded-lg object-cover w-full h-36"
              />
              <p className="text-[11px] text-purple-300 text-center mt-1.5 font-medium">Destruction Arena</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
