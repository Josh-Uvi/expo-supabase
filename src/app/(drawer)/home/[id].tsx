import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

import { useNews } from '@/hooks/NewsProvider';

const NewsDetailScreen = () => {
  const { articles } = useNews();
  const params = useLocalSearchParams();
  const { id } = params;

  // @ts-ignore
  const newsItem = articles[id];

  return (
    <View>
      <Text>News Detail Screen</Text>
      {params && (
        <View>
          <Text>Id: {id}</Text>
          <Text>Title: {newsItem.title}</Text>
          {newsItem.description && <Text>Description: </Text>}
          <Text>URL: {newsItem.url}</Text>
        </View>
      )}
    </View>
  );
};

export default NewsDetailScreen;
