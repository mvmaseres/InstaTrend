import { StyleSheet, View, Text, Image } from 'react-native';

export default function User({ name, avatar, isPremium }) {

  return (
    <View style={styles.user}>
        <Image source={{uri: avatar}} style={[styles.avatar, isPremium && styles.premium]} />
        <Text style={[styles.nameUser ,isPremium && styles.namePremium]}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
        backgroundColor: 'white'
    },
    user: {
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: 10,
        backgroundColor: 'white'
      },
    premium: {
        borderColor: '#436850',
        borderWidth: 5,
        overflow: 'hidden',
      },
    namePremium: {
        color: '#436850',
        fontWeight: '900',
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginRight: 10,
      },
    nameUser: {
        padding: 5,
    },
});