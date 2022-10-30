import { StyleSheet, Text, View } from 'react-native';
import Input from './Input';

const ExpenseForm = () => {
  const amountChangedHandler = () => {};
  return (
    <View>
      <Input
        label='Amount'
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: amountChangedHandler,
        }}
      />
      <Input
        label='Date'
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label='Description'
        textInputConfig={{
          multiline: true,
          // autoCorrect: true // the default is true so we don't need to set it
          // autoCapitalize: 'sentences', // sentences is the default
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({});
