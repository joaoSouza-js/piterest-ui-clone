import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { Text } from '@/components/Text';
import { theme } from '@/theme';
import { ScrollView } from 'react-native';

interface postProps {
    post: POST_PROPS
}

export function Post({ post }: postProps) {
    const [aspectRadio, setAspectRadio] = useState(1)
    function imageSize(){
        if(!post.image)return
        Image.getSize(post.image, (width, height) => {
           
            setAspectRadio(width / height)
        })
    }
    useEffect(() => {
        imageSize()
    }, [])
    return (

        <View style={styles.container}>
            <Image
                source={{
                    uri: post.image
                }}
                style={[styles.image, {aspectRatio: aspectRadio}]}

            />
            <View style={styles.footer}>
                <Text  style={styles.title} fontSize='sm' fontFamily='bold'>{post.title}</Text>
                <Feather name='more-horizontal' size={16} color={theme.colors.white} />
            </View>
        </View>


    );
}