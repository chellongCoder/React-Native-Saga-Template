import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';
import { useLoadingGlobal } from '../../hooks';
import { AccountAPI } from '../../services';
import HeaderAccount from '../../util/HeaderAccount';
import styles from './rules.styles';
const Rules = (props: any) => {
  const hookLoadingGlobal = useLoadingGlobal();
  let { type, title } = props.route.params;
  const [policyContent, setContenPolicyt] = useState('');
  useEffect(() => {
    getDataRules();
  }, [getDataRules]);

  const getDataRules = useCallback(async () => {
    hookLoadingGlobal.onShow();
    const response = await AccountAPI.getDataPolicy({ type });
    console.log('🚀 ~ file: index.tsx ~ line 19 ~ getDataRules ~ response', response);
    if (response.status === 200) {
      const { content } = response.policy;
      setContenPolicyt(content);
    }
    hookLoadingGlobal.onHide();
  }, [hookLoadingGlobal, type]);

  return (
    <View style={styles.contain}>
      <HeaderAccount title={title} />
      <View style={styles.styWrapContent}>
        <WebView source={{ html: policyContent }} style={styles.styWebView} s />
      </View>
    </View>
  );
};

export default Rules;
