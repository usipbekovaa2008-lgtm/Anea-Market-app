import React, { useState } from 'react';
import { NumberScreen } from './NumberScreen';
import { VerificationScreen } from './VerificationScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Number');

  return currentScreen === 'Number' ? (
    <NumberScreen
      onNext={() => setCurrentScreen('Verification')}
    />
  ) : (
    <VerificationScreen
      onBack={() => setCurrentScreen('Number')}
    />
  );
}
