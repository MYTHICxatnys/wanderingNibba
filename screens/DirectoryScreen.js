//import { useState } from "react";
import { FlatList } from "react-native";
import { Avatar, ListItem, Tile } from "react-native-elements";
import { useSelector } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
//import { CAMPSITES } from '../shared/campsites'

const DirectoryScreen = ({ navigation }) => {
    //const [campsites, setCampsites] = useState(CAMPSITES);

    const campsites = useSelector((state) => state.campsites);


    const renderDirectoryItem = ({ item: campsite }) => {
        return (
            <Tile
                onPress={() => navigation.navigate('CampsiteInfo', { campsite })}
                title={campsite.description}
                featured
                imageSrc={{ uri: baseUrl + campsite.image }}

            />
        )
    }

    return (
        <FlatList
            data={campsites.campsitesArray}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

export default DirectoryScreen;