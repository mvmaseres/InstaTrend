import { StyleSheet, View, Text, ScrollView } from 'react-native';
import User from './User';

export default function SuggestedFollows({users}) {

  return (
    <View>
        <Text style={styles.title}>Who to follow</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {users.map((user) => (
            <User 
            key={user.username} 
            name={user.username} 
            avatar={user.avatar} 
            isPremium={user.premium}/>
        ))}
      </ScrollView>
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