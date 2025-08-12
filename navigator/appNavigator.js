import { StyleSheet, Text, ScrollView, Image, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Batman from '../screens/Batman';
import Superman from '../screens/Superman';

const Tab = createBottomTabNavigator();

export default function AppNavigator () {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Batman" component={Batman}/>
                <Tab.Screen name="Superman" component={Superman}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
