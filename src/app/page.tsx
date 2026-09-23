import React from 'react';
import type { Metadata } from 'next';
import PageSchema from '@/components/PageSchema';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Jujutsu Shenanigans Wiki — PvP Combo Builder, Codes & Tier List ',
  description: 'Comprehensive Jujutsu Shenanigans guide — Character PvP Tier List, Combo Builder, Awakening Guide, and Active Codes for Jujutsu Shenanigans.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <PageSchema
        title="Jujutsu Shenanigans Wiki — PvP Combo Builder, Codes & Tier List"
        description="Guides for Jujutsu Shenanigans: character tier list, combo builder, awakening guide and the one working code."
        path="/"
      />
      <HomeClient />
    </>
  );
}
