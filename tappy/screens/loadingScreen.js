import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    Modal,
    ImageBackground,
    Image,
    Text
} from 'react-native';

const loadingScreen = () => {
    return (
        <>
            <View>
                <Text>
                    This is loading Screen
                </Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({

});

export default loadingScreen;