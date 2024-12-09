import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../../hooks';
import {
    StyleSheet,
    View,
    Platform,
    Text,

} from 'react-native';
import HomeSvg from '../../../assets/svgs/BottomNavigationsSvgs/HomeSvg';
import Home from '../../../screens/Home/Home';
import Profile from '../../../screens/Profile/Profile';

const Tab = createBottomTabNavigator();
export function BottomNavigator({ navigation }) {


    return (
        <>
            <Tab.Navigator
                // lazy={false}
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarStyle: [
                    ],
                    tabBarLabelStyle: {
                        display: 'none',
                    },
                    tabBarButton: [
                        'ProfileNavigation',

                    ].includes(route.name)
                        ? () => {
                            return null;
                        }
                        : undefined,

                })}

            >
                <Tab.Screen
                    options={{
                        headerShown: false,
                        lazy: false,
                        // tabBarLabel: 'Home',
                        tabBarIcon: ({ focused, color }) => {
                            return (
                                <View style={[styles.tabImgContainer, { left: 10 }]}>
                                    <HomeSvg isFocused={focused} width={20} height={20} />
                                    {/* {
                                        focused &&
                                        <Text style={{ fontSize: 5, fontFamily: "Clash Display Semibold" }}>Home</Text>
                                    } */}
                                </View>
                            );
                        },
                    }}
                    name="Home"
                    component={Home}
                />
                <Tab.Screen
                    options={{
                        headerShown: false,
                        lazy: false,
                        // tabBarLabel: 'Home',
                        tabBarIcon: ({ focused, color }) => {
                            return (
                                <View style={[styles.tabImgContainer, { left: 10 }]}>
                                    <HomeSvg isFocused={focused} width={20} height={20} />
                                    {/* {
                                        focused &&
                                        <Text style={{ fontSize: 5, fontFamily: "Clash Display Semibold" }}>Home</Text>
                                    } */}
                                </View>
                            );
                        },
                    }}
                    name="Profile"
                    component={Profile}
                />
            </Tab.Navigator>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        width: '100%',
    },
    headerImg: {
        height: '100%',
        width: '100%',
        objectFit: 'contain',
    },
    tabImgContainer: {
        ...Platform.select({
            ios: {
                marginTop: 35,
            },
        }),
        height: 30,
        width: 30,

        alignItems: 'center',
    },
    body: {
        flex: 3,
        width: '100%',
    },
    tabBarStyle: {
        position: 'absolute',
        right: 0,
        height: 55,
        marginBottom: 15,
        borderRadius: 200,
        width: '95%', // Decreased from 50% to 40%
        marginLeft: '3%',
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        }),
    },
});