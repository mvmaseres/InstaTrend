import { useState } from "react"
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from "react-native"
import * as ImagePicker from 'expo-image-picker'

export default function Login({ onUserLoggedIn, selectedImage, onSelectedImage, onShowLogin, imgGuestLogin }) {

    const guessAccountImg = 'https://uxwing.com/wp-content/themes/uxwing/download/video-photography-multimedia/upload-image-icon.png'
    const [text, setText] = useState('')

    const onSubmit = () => {
        onShowLogin(false)
    }


    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

        if (permissionResult.granted === false) {
            alert('Permission to accees camara is requiered')
            return
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync()

        if (pickerResult.canceled === true) return
        
        onSelectedImage({localUri: pickerResult.assets[0].uri})
    }

    return(
        <TouchableWithoutFeedback>
            <View style={styles.container} >
                <View style={styles.guestAccount} >
                    <Text style={styles.guestAccountText} >Continue with a guest account</Text>
                    <TouchableOpacity 
                        onPress={() => {
                            onSubmit()
                            onSelectedImage(imgGuestLogin)
                        }} 
                        style={styles.LoginBtn}>
                        <Text style={styles.LoginBtnText}>Log in</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.loginAccount} >
                    <Text style={styles.loginAccountText} >Log in with your account</Text>
                    <Text style={styles.loginAccountTextData}>Username</Text>
                    <TextInput 
                    placeholder="Enter your username"
                    placeholderTextColor="#12372A"
                    textAlign="center"
                    value={text}
                    onChangeText={(newText) => setText(newText)}
                    style={styles.usernameInput}
                    />
                    <Text style={styles.loginAccountTextData}>Profile picture</Text>
                    <TouchableOpacity onPress={openImagePickerAsync} style={styles.uploadImgContainer} >
                        <Image source={{
                            uri: 
                            selectedImage !== null ? 
                            selectedImage.localUri : guessAccountImg }} style={styles.userAvatar} 
                        />
                        <Text>Click to choose a picture</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  
                    onPress={() => {
                        if (text.trim() !== '') {
                        onSubmit()
                        onUserLoggedIn(text)
                        }
                    }}                     
                    style={[styles.LoginBtn, {backgroundColor: '#ADBC9F'}]} >
                        <Text style={[styles.LoginBtnText, {color: '#12372A'}]}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ADBC9F',
    },
    guestAccount: {
        backgroundColor: '#FBFADA',
        height: 150,
        justifyContent: 'center',
    },
    guestAccountText: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#436850'
    },
    LoginBtn: {
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#436850',
        width: 70,
        height: 30,
        margin: 10,
    },
    LoginBtnText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FBFADA',
    },
    loginAccount: {
        justifyContent: 'center',
        backgroundColor: '#436850',
        height: 630,
    },
    loginAccountText: {
        alignSelf: 'center',
        margin: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FBFADA'
    },
    loginAccountTextData: {
        alignSelf: 'center',
        margin: 20,
        marginBottom: 7,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FBFADA'
    },
    usernameInput: {
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#12372A',
        width: 200,
        height: 30,
        padding: 3,
    },
    uploadImgContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    userAvatar: {
        width: 60,
        height: 60,
        marginBottom: 5,
    },
})