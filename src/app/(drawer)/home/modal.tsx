import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import WebView from 'react-native-webview';

import { useNews } from '@/hooks/NewsProvider';

const Modal = () => {
  const { articles } = useNews();
  const params = useLocalSearchParams();
  const { id } = params;

  // @ts-ignore
  const newsItem = articles[id];

  return (
    <WebView
      style={{ flex: 1 }}
      source={{ uri: newsItem.url }}
      startInLoadingState
      scalesPageToFit
    />
  );
};

export default Modal;
