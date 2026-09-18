import React from 'react';
import type { Metadata } from 'next';
import CalculatorClient from './CalculatorClient';

export const metadata: Metadata = {
  title: 'Jujutsu Shenanigans PvP Combo Calculator & Awakening Multiplier ',
  description: 'Calculate combo string damage, dash cancel frame advantages, and domain awakening multipliers in Jujutsu Shenanigans.',
  alternates: {
    canonical: '/calculator',
  },
  keywords: ['jujutsu shenanigans combo calculator', 'jujutsu shenanigans pvp damage', 'jujutsu shenanigans awakening multiplier'],
};

export default function CalculatorPage() {
  return <CalculatorClient />;
}
