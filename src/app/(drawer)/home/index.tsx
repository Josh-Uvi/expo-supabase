import { router } from 'expo-router';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useNews } from '@/hooks/NewsProvider';
import { Article } from '@/lib/fetcher';

export default function HomePage() {
  const { articles, loading } = useNews();

  const handlePress = async (item: Article) => {
    router.push({
      pathname: `/home/${item.id}`,
    });
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  //   <FlatList
  //   data={articles}
  //   renderItem={({ item }) => (
  //     <TouchableOpacity onPress={() => handlePress(item)}>
  //       <View style={{ padding: 10 }}>
  //         <Text style={{ fontSize: 18 }}>{item.title}</Text>
  //       </View>
  //     </TouchableOpacity>
  //   )}
  //   keyExtractor={(item) => item.title}
  // />

  return (
    <SafeAreaView style={styles.container}>
      <Text>News Articles</Text>
      <ScrollView style={styles.scrollView}>
        {articles.map((item, index) => (
          <View key={index}>
            <TouchableOpacity onPress={() => handlePress(item)}>
              <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 18 }}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    // backgroundColor: 'grey',
    // marginHorizontal: 10,
  },
});
