/* eslint-disable prettier/prettier */

import { useTheme } from '../../hooks';
import {
    StyleSheet,
    Platform,
    View,
    Button,
    Text,
} from 'react-native';
import React from 'react';

export const CustomDrawerContent = props => {
    const { Images } = useTheme();

    return (
        <View
            style={[styles.DrawerContainer, { flex: 1, backgroundColor: "grey" }]}
        >
            {/* Profile Section */}
            <View style={styles.profileSection}>
                <Text style={styles.profileText}>Welcome, login !</Text>
            </View>

            {/* Button Section */}
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Home"
                    onPress={() => props.navigation.navigate('Login')} // Assuming 'Home' is a valid route
                    color="#4CAF50"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    profileSection: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    buttonContainer: {
        marginTop: 20,
        width: '80%',
        alignSelf: 'center',
    },
    DrawerContainer: {
        height: '100%',
        width: '70%',
        alignItems: 'center',
        alignContent: 'center',
        ...Platform.select({
            ios: {
                paddingVertical: 60,
            },
            android: {
                paddingVertical: 25,
            },
        }),
    },
});
