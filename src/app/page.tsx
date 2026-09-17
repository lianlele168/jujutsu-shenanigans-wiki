import React from 'react';
import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Jujutsu Shenanigans Wiki — PvP Combo Builder, Codes & Tier List (September 2026)',
  description: 'Comprehensive Jujutsu Shenanigans guide — Character PvP Tier List, Combo Builder, Awakening Guide, and Active Codes for September 2026.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return <HomeClient />;
}
