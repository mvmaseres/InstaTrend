import React, { useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import AppBar from './src/components/AppBar';
import SuggestedFollows from './src/components/SuggestedFollows';
import ListStories from './src/components/ListStories';
import Login from './src/components/Login';
import { data } from './src/components/data/data';

export default function App() {

  const [suggestedFollows, setSuggestedFollows] = useState([])
  const [stories, setStories] = useState([])
  const [userLoggedIn, setUserLoggedIn] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)
  const [imgGuestLogin, setImgGuestLogin] = useState('')
  const [showLogin, setShowLogin] = useState(true)

  //Load data
  useEffect(() => {
    const fetchData = async () => {
      setSuggestedFollows(data.suggestedFollows)
      setStories(data.stories)
      setUserLoggedIn(data.userLoggedIn)
      setImgGuestLogin(data.userImg)
    }

    fetchData()
  }, [])


  const dismissKeyboard = () => {
    Keyboard.dismiss()
  }

  //Add Comment
  const addComment = (storyId, comment) => {

    const newComment = {
      id: `${userLoggedIn}${new Date().toISOString()}`,
      username: userLoggedIn,
      userImg: selectedImage.localUri || selectedImage,
      comment: comment,
      timestamp: new Date().toISOString()
    }

    const updatedStories = stories.map((story) => 
      story.id !== storyId ? story : {...story, comments: [...story.comments, newComment]}
      )

      setStories(updatedStories)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
       <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <ScrollView>
          <View style={styles.container}>
            <AppBar />
            {showLogin ? (
              <Login
                onUserLoggedIn={setUserLoggedIn}
                selectedImage={selectedImage}
                onSelectedImage={setSelectedImage}
                onShowLogin={setShowLogin}
                imgGuestLogin={imgGuestLogin}
              />
            ) : (
              <>
                <SuggestedFollows users={suggestedFollows} style={styles.cont} />
                <ListStories stories={stories} onAddComment={addComment} style={styles.cont} />
              </>
            )}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },
  cont: {
    flex: 1,
  },
});
