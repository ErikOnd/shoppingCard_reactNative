import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useState} from 'react';

interface AddItemProp {
  addItem: (id: string) => void;
}

const AddItem = ({addItem}: AddItemProp) => {
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="Add Item..."
        onChangeText={name => setText(name)}
        defaultValue={text}
      />

      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.btnText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'gray',
    width: '100%',
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    backgroundColor: '#bbb1d1',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: '#423576',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default AddItem;
