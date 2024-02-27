import { StyleSheet, View, Text, Image  } from 'react-native';
 
export default function Comment({author, authorImg, text}) {
    return(
        <View>
            <View style={styles.userDatails}>
                <Image source={{uri: authorImg}} style={styles.userAvatar} />
                <Text style={styles.userWhoPost}>{author}</Text>
            </View>
            <Text style={styles.comment}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    userDatails: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    userWhoPost: {
        color: '#12372A',
        fontWeight: 'bold',
        fontSize: 12,
        padding: 2,
    },
    userAvatar: {
        width: 30,
        height: 30,
        borderRadius: 25,
        marginRight: 5,
    },
    comment: {
        marginLeft: 20,
    },
  });
  