import React from 'react'
import{View, Text, FlatList} from 'react-native'

const ImageList = ({photos}) => {

    const renderItem = (({item}) => <Text>{item.photographer}</Text>)


    return (
        <View>
            <FlatList
            data={photos}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            />

           
        </View>
    )
}

export default ImageList