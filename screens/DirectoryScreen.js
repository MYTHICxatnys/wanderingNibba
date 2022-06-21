//import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Avatar, ListItem, Tile } from "react-native-elements";
import { useSelector } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "../components/LoadingComponent";
//import { CAMPSITES } from '../shared/campsites'

const DirectoryScreen = ({ navigation }) => {
    //const [campsites, setCampsites] = useState(CAMPSITES);

    const campsites = useSelector((state) => state.campsites);

    if (campsites.isLoading) {
        return <Loading />
    }

    if (campsites.errMess) {
        return (
            <View>
                <Text>{campsites.errMess}</Text>
            </View>
        );
    }

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