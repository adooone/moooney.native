import React from 'react';
import OptionsList from '~/components/organisms/OptionsList';
import { SCaption, SSettingsView } from './styled';

const SettingsScreen: React.FC = () => {
  return (
    <SSettingsView>
      <SCaption>Settings</SCaption>
      <OptionsList />
    </SSettingsView>
  );
};

export default SettingsScreen;
