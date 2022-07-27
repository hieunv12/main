import React, {memo, useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {Flash3DIcon, DownIcon3D} from '@assets';
import {Box, Text, useTheme} from '@theme';
import {AppButton} from '@components';

const Home = memo(() => {
  const {updateTheme} = useTheme();
  const [isDark, setDark] = useState(true);
  return (
    <SafeAreaView>
      {/* <SettingsIcon strokeColor={themeColor.icon} />
      <SearchIcon strokeColor={themeColor.icon} /> */}
      <AppButton label="OKOK" isWrap />
    </SafeAreaView>
  );
});

export {Home};
