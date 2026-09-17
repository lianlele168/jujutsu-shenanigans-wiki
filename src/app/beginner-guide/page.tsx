import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
  alternates: {
    canonical: '/beginner-guide',
  },
  title: "Jujutsu Shenanigans Beginner Guide & PvP Combat Mechanics",
  description: "Master the controls, dash cancels, down slam extensions, parry timings, and domain awakenings in Roblox Jujutsu Shenanigans.",
};

export default function BeginnerGuidePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a dash cancel and why is it essential in Jujutsu Shenanigans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A dash cancel is executing a Q dash immediately following an M1 hit or specific special skill. It cancels end-lag animation frames, allowing you to reset combo strings before the opponent recovers from hitstun.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you trigger an Awakening and Domain Expansion in Jujutsu Shenanigans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fill your Cursed Energy (CE) gauge to 100% by landing successful hits and blocking enemy attacks, then press G to activate your character Awakening. Inside awakening, pressing G again expands your Domain.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which character is best for beginners in Jujutsu Shenanigans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gojo (The Honored One) is the recommended starter sorcerer due to forgiving hitboxes on Lapse Blue, reliable ranged poke with Reversal Red, and an invincible teleport counter.',
        },
      },
    ],
  };

  const controls = [
    { key: "M1 (Click)", action: "Basic 4-hit melee combo string" },
    { key: "Q", action: "Dash / evasion — breaks hitstun when timed during openings" },
    { key: "F", action: "Guard / Block — deflects 70% of standard physical attacks" },
    { key: "1, 2, 3, 4", action: "Class Cursed Techniques and Special Skills" },
    { key: "R", action: "Character Special / Counter Ability" },
    { key: "G", action: "Awakening & Domain Expansion activation (100% CE required)" },
    { key: "W + W", action: "Sprint dash (automatically vault over destructible terrain)" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          JUJUTSU SHENANIGANS <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400">BEGINNER GUIDE</span>
        </h1>
        <p className="text-sm text-purple-300 max-w-2xl mx-auto">
          Complete combat mastery manual: Learn frame traps, down slam extensions, parry fundamentals, and lethal domain expansions in Tze's hit battleground.
        </p>
      </div>

      <AuthorCard />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="rounded-2xl overflow-hidden border border-purple-900/60 bg-purple-950/40 p-4">
          <Image
            src="/images/shenanigans-header.webp"
            alt="Jujutsu Shenanigans Official Game Icon"
            width={512}
            height={512}
            className="rounded-xl object-cover w-full h-48 border border-purple-800/40"
            priority
          />
          <p className="text-xs text-purple-300 mt-2 text-center font-medium">
            Figure 1: Official Jujutsu Shenanigans Game Icon by Tze.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-purple-900/60 bg-purple-950/40 p-4">
          <Image
            src="/images/shenanigans-gameplay.webp"
            alt="Jujutsu Shenanigans Combat Destruction Arena"
            width={768}
            height={432}
            className="rounded-xl object-cover w-full h-48 border border-purple-800/40"
          />
          <p className="text-xs text-purple-300 mt-2 text-center font-medium">
            Figure 2: Real-time environmental destruction and PvP arena battlegrounds.
          </p>
        </div>
      </div>

      {/* Controls Overview */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-purple-400">🎮 Fundamental Keybinds & Movement Controls</h2>
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          {controls.map((c, i) => (
            <div key={i} className={`flex items-center gap-4 px-5 py-3 ${i % 2 === 0 ? 'bg-slate-950/50' : ''}`}>
              <span className="font-mono text-xs bg-slate-800 border border-slate-700 text-purple-300 px-2.5 py-1 rounded-lg font-bold w-28 text-center flex-shrink-0">{c.key}</span>
              <span className="text-sm text-slate-300">{c.action}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Guide Deep Dive Sections */}
      <div className="space-y-6 text-sm text-slate-200 leading-relaxed">
        <section className="bg-slate-900/70 p-6 rounded-2xl border border-purple-900/50 space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs">1</span>
            The 4-Hit M1 String and Down Slam Fundamentals
          </h2>
          <p>
            In Jujutsu Shenanigans, basic melee strikes form the cornerstone of every character's damage output. Landing four consecutive M1 hits triggers a natural knockback that flings opponents away. However, advanced players intentionally stop at the third M1 hit to link into special techniques.
          </p>
          <p>
            Jumping during the final hit allows you to execute a Down Slam. Down slams force the enemy's character model flat onto the concrete pavement, extending hitstun by approximately 1.2 seconds and opening up unblockable skill follow-ups like Gojo's Lapse Blue or Sukuna's Cleave.
          </p>
        </section>

        <section className="bg-slate-900/70 p-6 rounded-2xl border border-purple-900/50 space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs">2</span>
            Dash Canceling and Hitbox Recovery Manipulation
          </h2>
          <p>
            Every attack in the game carries recovery frames where your character is locked in place. Pressing the Q dash button during the active hit frame cancels this animation lock. By mastering forward dash cancels, you can chase down rolling opponents before their defensive block activates.
          </p>
          <p>
            Conversely, backward dash canceling allows you to bait out aggressive opponent counters and immediately punish their whiffed cooldown with a full combo chain.
          </p>
        </section>

        <section className="bg-slate-900/70 p-6 rounded-2xl border border-purple-900/50 space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs">3</span>
            Awakening Priority and Domain Clashes
          </h2>
          <p>
            Your Cursed Energy gauge fills as you deal and receive damage. Activating your Awakening with the G key heals a portion of your missing health pool, resets your skill cooldown timers, and unlocks catastrophic finishing techniques. 
          </p>
          <p>
            When two players activate their Domain Expansions simultaneously (such as Gojo's Infinite Void against Sukuna's Malevolent Shrine), a Domain Clash triggers where the player with superior timing and higher remaining Cursed Energy overwhelms the opponent's barrier.
          </p>
        </section>
      </div>
    </div>
  );
}
