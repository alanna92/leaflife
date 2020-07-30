import * as React from 'react';
import { Image, View, ScrollView, Text } from 'react-native';

import styles from './styles';

interface Post {
  id: number;
  name: string;
  profilePhoto?: string;
  postLocation: string;
  plantSpecies: string;
  comment: string;
  postImage?: string;
  likeCount: number;
  commentsCount: number;
  postTime: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = React.useState<Post[]>([]);

  React.useEffect(() => {
    setPosts([
      {
        id: 1,
        name: 'João da Silva',
        postLocation: 'Manaus, AM - Brazil',
        postTime: '2h',
        plantSpecies: 'Castanha-do-Pará',
        comment: 'Very happy to make this little action! *-*',
        likeCount: 20,
        commentsCount: 20,
      },
      {
        id: 2,
        name: 'João da Silva',
        postLocation: 'Manaus, AM - Brazil',
        postTime: '2h',
        plantSpecies: 'Castanha-do-Pará',
        comment: 'Very happy to make this little action! *-*',
        likeCount: 20,
        commentsCount: 20,
      },
    ]);
  }, []);

  return (
    <ScrollView>
      {posts.map(post => (
        <View key={post.id} style={styles.postContainer}>
          <View style={styles.row}>
            <Image source={require('../../assets/profile/profile1.png')} />
            <View style={styles.postHeaderText}>
              <Text style={styles.postHeaderTitle}>{post.name}</Text>
              <Text style={styles.postHeaderSubtitle}>
                Planted a {post.plantSpecies} at {post.postLocation} (
                {post.postTime})
              </Text>
            </View>
          </View>
          <Text style={styles.postComment}>{post.comment}</Text>
          <Image
            style={styles.postImage}
            source={require('../../assets/posts/post1.png')}
          />
          <View style={styles.row}>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/liked.png')}
            />
            <Text style={styles.iconCount}>{post.likeCount}</Text>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/comment.png')}
            />
            <Text style={styles.iconCount}>{post.commentsCount}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Home;
