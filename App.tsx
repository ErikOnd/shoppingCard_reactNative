import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import AddItem from './components/AddItem';
import uuid from 'react-native-uuid';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid.v4(), text: 'Milk'},
    {id: uuid.v4(), text: 'Eggs'},
    {id: uuid.v4(), text: 'Bread'},
    {id: uuid.v4(), text: 'Butter'},
  ]);

  const deleteItems = (id: string) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItems = (name: string) => {
    if (!name) {
      Alert.alert('Error', 'An item can not be empty');
    } else {
      setItems([{id: uuid.v4(), text: name}, ...items]);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItems} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem
            item={{id: item.id.toString(), text: item.text}}
            deleteItem={deleteItems}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
