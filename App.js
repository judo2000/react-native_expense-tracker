import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';

export default function App() {
  const Stack = createNativeStackNavigator();
  const BottomTabs = createBottomTabNavigator();

  const ExpensesOverView = () => {
    return (
      <BottomTabs.Navigator>
        <BottomTabs.Screen name='RecentExpenses' component={RecentExpenses} />
        <BottomTabs.Screen name='AllExpenses' component={AllExpenses} />
      </BottomTabs.Navigator>
    );
  };
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='ExpensesOverview' component={ExpensesOverView} />
          <Stack.Screen name='ManageExpense' component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
