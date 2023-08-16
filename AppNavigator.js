import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import AddEvidenciasScreen from './screens/AddEvidenciasScreen';
import AddNewCardScreen from './screens/AddNewCardScreen';
import BlankScreen from './screens/BlankScreen';
import CheckQuoteScreen from './screens/CheckQuoteScreen';
import Contact2Screen from './screens/Contact2Screen';
import DashboardScreen from './screens/DashboardScreen';
import HomepageCopyScreen from './screens/HomepageCopyScreen';
import HomepageScreen from './screens/HomepageScreen';
import LoginScreen from './screens/LoginScreen';
import NewcontactScreen from './screens/NewcontactScreen';
import NewprojecScreen from './screens/NewprojecScreen';
import Newquotes2Screen from './screens/Newquotes2Screen';
import NotificationSettingsScreen from './screens/NotificationSettingsScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';
import Project2Screen from './screens/Project2Screen';
import ProjectDetailScreen from './screens/ProjectDetailScreen';
import ProjectInfo3Screen from './screens/ProjectInfo3Screen';
import ProjectTimeControlScreen from './screens/ProjectTimeControlScreen';
import ProjectcostsScreen from './screens/ProjectcostsScreen';
import Quote2Screen from './screens/Quote2Screen';
import RegisterScreen from './screens/RegisterScreen';
import SelectPaymentMethodScreen from './screens/SelectPaymentMethodScreen';
import SetupCoreScreen from './screens/SetupCoreScreen';
import TenantsetupScreen from './screens/TenantsetupScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screen
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        This screen is not in a navigator.
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Go to Navigation mode, and click the + (plus) icon in the Navigator tab
        on the left side to add this screen to a Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        If the screen is in a Tab Navigator, make sure the screen is assigned to
        a tab in the Config panel on the right.
      </Text>
    </View>
  );
}
export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'Login',
          }}
        />
        <Stack.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{
            title: 'Dashboard',
          }}
        />
        <Stack.Screen
          name="TenantsetupScreen"
          component={TenantsetupScreen}
          options={{
            title: 'tenant_setup',
          }}
        />
        <Stack.Screen
          name="ProjectcostsScreen"
          component={ProjectcostsScreen}
          options={{
            title: 'project_costs',
          }}
        />
        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
          options={{
            title: 'Notifications',
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: 'Register',
          }}
        />
        <Stack.Screen
          name="ProjectInfo3Screen"
          component={ProjectInfo3Screen}
          options={{
            title: 'Project Info3',
          }}
        />
        <Stack.Screen
          name="AddEvidenciasScreen"
          component={AddEvidenciasScreen}
          options={{
            title: 'addEvidencias',
          }}
        />
        <Stack.Screen
          name="SetupCoreScreen"
          component={SetupCoreScreen}
          options={{
            title: 'SetupCore',
          }}
        />
        <Stack.Screen
          name="ProjectTimeControlScreen"
          component={ProjectTimeControlScreen}
          options={{
            title: 'Project_TimeControl',
          }}
        />
        <Stack.Screen
          name="HomepageScreen"
          component={HomepageScreen}
          options={{
            headerTitleStyle: theme.typography.custom23,
            title: 'Homepage',
          }}
        />
        <Stack.Screen
          name="NewprojecScreen"
          component={NewprojecScreen}
          options={{
            title: 'new_projec',
          }}
        />
        <Stack.Screen
          name="NewcontactScreen"
          component={NewcontactScreen}
          options={{
            title: 'new_contact',
          }}
        />
        <Stack.Screen
          name="NotificationSettingsScreen"
          component={NotificationSettingsScreen}
          options={{
            title: 'Notification Settings',
          }}
        />
        <Stack.Screen
          name="Project2Screen"
          component={Project2Screen}
          options={{
            title: 'project2',
          }}
        />
        <Stack.Screen
          name="AddNewCardScreen"
          component={AddNewCardScreen}
          options={{
            title: 'Add New Card',
          }}
        />
        <Stack.Screen
          name="SelectPaymentMethodScreen"
          component={SelectPaymentMethodScreen}
          options={{
            title: 'Select Payment Method',
          }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            title: 'Profile',
          }}
        />
        <Stack.Screen
          name="BlankScreen"
          component={BlankScreen}
          options={{
            title: 'Blank',
          }}
        />
        <Stack.Screen
          name="ProjectDetailScreen"
          component={ProjectDetailScreen}
          options={{
            title: 'Project Detail',
          }}
        />
        <Stack.Screen
          name="Quote2Screen"
          component={Quote2Screen}
          options={{
            title: 'quote2',
          }}
        />
        <Stack.Screen
          name="Newquotes2Screen"
          component={Newquotes2Screen}
          options={{
            title: 'new quotes2',
          }}
        />
        <Stack.Screen
          name="Contact2Screen"
          component={Contact2Screen}
          options={{
            title: 'contact2',
          }}
        />
        <Stack.Screen
          name="CheckQuoteScreen"
          component={CheckQuoteScreen}
          options={{
            title: 'CheckQuote',
          }}
        />
        <Stack.Screen
          name="HomepageCopyScreen"
          component={HomepageCopyScreen}
          options={{
            title: 'Homepage Copy',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
