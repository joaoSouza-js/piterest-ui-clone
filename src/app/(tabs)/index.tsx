import { Text } from "@/components/Text";
import { theme } from "@/theme";
import { Heading } from "@/components/Heading";
import { StyleSheet, View } from "react-native";
import { Filters } from "@/components/Filters";
import { useState } from "react";
import { FILTERS } from "@/utils/filters";
import { Posts } from "@/components/Posts";
import { POSTS } from "@/utils/posts";


  

export default function Home(){
    const [filterSelected, setFilterSelected] = useState<FILTER_PROP>(FILTERS[0])
    function postByColumn(columnSide = "right" || "left"){
        
        const evenPost : POST_PROPS[]  = []
        const oddPost : POST_PROPS[]  = []

        POSTS.filter((post, index) => {
            if(index % 2 === 0) evenPost.push(post) 
            else oddPost.push(post) 
        })
        if(columnSide == "right") return <Posts posts={evenPost}/>

        


    }
    postByColumn()
    return (
        <View style={styles.container}>
            <Filters
                filters={FILTERS}
                changeFilterSelected={setFilterSelected}
                filterSelected={filterSelected}
            />
            <Posts posts={POSTS}/>
            
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        backgroundColor: theme.colors.black
      
    },
  
})