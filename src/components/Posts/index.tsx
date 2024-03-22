import React from 'react';
import { ScrollView, View } from 'react-native';

import { styles } from './styles';
import { Post } from '@/components/Post';

type PostsProps = {
  posts: POST_PROPS[]
}

export function Posts({ posts }: PostsProps) {

  function postByColumn(columnSide: "right" | "left") {

    const evenPosts: POST_PROPS[] = []
    const oddPosts: POST_PROPS[] = []

    for (const [index, post] of posts.entries()) {  
      if (index % 2 === 0) {
        evenPosts.push(post)
      } else {
        oddPosts.push(post)
      }
    }

    if(columnSide === "right"){
      return evenPosts.map(post => (
        <Post key={post.id} post={post} />
      ))

    }

    if(columnSide === "left"){
      return oddPosts.map(post => (
        <Post key={post.id} post={post} />
      ))
    }
    


  }

  return (
    <ScrollView contentContainerStyle={{
      paddingTop: 16,

    }}>
      <View style={styles.container}>
        <View style={styles.column}>
          {
            postByColumn("right")
          }

        </View>

        <View style={styles.column}>
          {
            postByColumn("left")
          }

        </View>
      </View>

    </ScrollView>
  );
}

