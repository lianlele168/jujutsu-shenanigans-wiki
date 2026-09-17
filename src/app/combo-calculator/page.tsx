import React from 'react';
import type { Metadata } from 'next';
import ComboCalculatorClient from './ComboCalculatorClient';

export const metadata: Metadata = {
  title: 'Jujutsu Shenanigans Combo Builder (September 2026)',
  description: 'Master character combo strings and burst damage outputs in Jujutsu Shenanigans.',
  alternates: {
    canonical: '/calculator',
  },
};

export default function ComboCalculatorPage() {
  return <ComboCalculatorClient />;
}
