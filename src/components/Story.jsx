import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import separationSymbol from '../assets/separationSymbol.png';
import Picture from './Picture';
import Comment from './Comment';
import CommentForm from './CommentForm';

export default function Story({storyId, picture, username, userImg, timestamp, comments, onAddComment}) {
    
    const [showAllComments, setShowAllComments] = useState(false)

    const toggleShowAllComments = () => {
        setShowAllComments(!showAllComments)
    }

    return (
        <View style={styles.container}>
            <Picture
                picture={picture}
                username={username}
                userImg={userImg}
                timestamp={timestamp}
            />
            {comments.length > 0 && (
                <View>
                    {showAllComments ? (
                        comments.map((comment) => (
                            <Comment
                                key={comment.id}
                                author={comment.username}
                                authorImg={comment.userImg}
                                text={comment.comment}
                            />
                        ))
                    ) : (
                        <Comment
                            author={comments[0].username}
                            authorImg={comments[0].userImg}
                            text={comments[0].comment}
                        />
                    )}
                    {comments.length > 1 && (
                        <TouchableOpacity onPress={toggleShowAllComments} style={styles.toggleShowComments} >
                            <Text style={styles.textShowComments} >{showAllComments ? 'Show less comments' : `Show all ${comments.length} comments`}</Text>
                        </TouchableOpacity>
                    )}
                </View>
            )}
            <CommentForm storyId={storyId} onAddComment={onAddComment} />
            <View style={styles.separationContent}>
                <Image source={separationSymbol} style={styles.separation} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    separationContent: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FBFADA',
        marginBottom: 20,
        marginTop: 20,
    },
    toggleShowComments: {
        paddingLeft: 10,
        marginTop: 16,
    },
    textShowComments: {
        color: '#436850',
        fontWeight: '700'
    },
    separation: {
        height: 30,
        width: 50,
    },
  });
  