import 'react-native-gesture-handler';
import React from 'react';
import Login from './Screens/Logins';
import Register from './Screens/Register';
import HomeScreen from './Screens/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';


// import Screen1 from './Screens/Screen1';
// import Screen2 from './Screens/Screen2';




// const Drawer = createDrawerNavigator();
// function DrawerRoutes() {
//     return (
//       <Drawer.Navigator initialRouteName="HomeScreen">
//         <Drawer.Screen name="HomeScreen "  component={HomeScreen} />
//         <Drawer.Screen name="Screen1" component={Screen1} />
//         <Drawer.Screen name="Screen2" component={Screen2} />
//       </Drawer.Navigator>
//     );
//   }


  
  const Stack = createStackNavigator();
function App () {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  // options={{ title: 'Welcome' }}
                  options={{ headerShown: true }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;