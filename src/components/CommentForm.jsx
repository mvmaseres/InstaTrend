import { View, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from "react-native";
import { useState } from "react";
import Plane from '../assets/plane.png'

const windowWidth = Dimensions.get('window').width

export default function CommentForm ({ storyId, onAddComment }) {

    const [text, setText] = useState('')

    const onSubmit = () => {
        if (text.trim() !== '') {
            onAddComment(storyId, text)
            setText('')
          }
    }

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="Comment the post"
                value={text}
                onChangeText={(newText) => setText(newText)}
                style={styles.text}
            />
            <TouchableOpacity style={styles.btn} onPress={onSubmit}>
             <Image style={styles.plane} source={Plane}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        borderWidth: 2,
        borderColor: '#12372A',
        borderRadius: 10,
        margin: 5,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 0,
        padding: 8,
        width: windowWidth-100,
    },
    btn: {
        borderWidth: 2,
        borderColor: '#12372A',
        backgroundColor: '#ADBC9F',
        borderRadius: 10,
        alignItems: 'center',
        width: 70,
        marginTop: 20,
        margin: 5,
        padding: 4
    },
    plane: {
        height: 25,
        width: 25,
    },
})