import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  // the !! turns editedExpenseId into a boolean so if we do have
  // the editedExpenseId this value will be true else it will be false

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>ManageExpenses</Text>
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({});
