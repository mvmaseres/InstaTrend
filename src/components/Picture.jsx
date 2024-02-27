import { StyleSheet, View, Text, Image, Dimensions  } from 'react-native';

export default function Picture({picture, username, userImg, timestamp}) {
    
    //device width
    const windowWidth = Dimensions.get('window').width
    
    const photoTime = new Date(timestamp)
    const today = new Date()
    const diffTime = Math.abs(today - photoTime)
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    //if diff days is 0, then today. if is 1, then yesterday. But if it is other, diffDays days ago
    const time = diffDays === 0 ? "today" :  diffDays === 1 ? "yesterday" : diffDays + " days ago"

    return (
    <View>
        <View style={styles.divUserDatails}>
            <View style={styles.userDatails}>
                <Image source={{uri: userImg}} style={styles.userAvatar} />
                <Text style={styles.userWhoPost}>{username}</Text>
            </View>
            <View style={styles.posted}>
                <Text>Posted {time}</Text>
            </View>
        </View>
        <Image source={{uri: picture}} style={[{ width: windowWidth, height: windowWidth }]}/>
    </View>
    );
}

const styles = StyleSheet.create({
    divUserDatails: {
        flexDirection: 'row',
        backgroundColor: '#ADBC9F',
        justifyContent: 'space-between',
    },
    userDatails: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    userWhoPost: {
        color: '#12372A',
        fontWeight: 'bold',
        fontSize: 16,
    },
    userAvatar: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginRight: 10,
    },
    posted: {
        justifyContent: 'center',
        paddingRight: 12,
    },
  });
  