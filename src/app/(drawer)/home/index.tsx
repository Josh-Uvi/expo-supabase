import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { router } from 'expo-router';
import { ActivityIndicator, FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

import { useNews } from '@/hooks/NewsProvider';
import { Article } from '@/lib/fetcher';

export default function HomePage() {
  dayjs.extend(relativeTime);
  const { articles, loading } = useNews();

  const handlePress = async (item: Article) => {
    router.push({
      pathname: `/home/modal`,
      params: { id: item.id },
    });
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem pad={10} containerStyle={styles.scrollView}>
            <ListItem.Content>
              <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{dayjs(item.publishedAt).fromNow()}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron onPress={() => handlePress(item)} />
          </ListItem>
        )}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    // backgroundColor: 'grey',
    marginHorizontal: 10,
    marginTop: 10,
  },
  title: {
    marginBottom: 10,
  },
});
