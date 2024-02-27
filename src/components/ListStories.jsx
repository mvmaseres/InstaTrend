import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Story from './Story';

export default function ListStories({ stories, onAddComment }) {
    return (
    <View>
        <Text style={styles.title}>Lasted stories</Text>
        {stories.map((story) => 
        <Story
        key={story.id}
        storyId={story.id}
        picture={story.picture}
        username={story.username}
        userImg={story.userImg}
        timestamp={story.timestamp}
        comments={story.comments}
        onAddComment={onAddComment}
        />)}
    </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#12372A',
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: 'white',
        padding: 10,
    },
  });
  