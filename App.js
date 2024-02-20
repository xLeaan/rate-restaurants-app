import { NativeRouter } from 'react-router-native';
import React from 'react';
import { View } from 'react-native';
import Main from './src/components/Main';

export default function App() {
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
     
  );
}


