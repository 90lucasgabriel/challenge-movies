import React from 'react';
import {FlatList, Image, Text, View, ScrollView} from 'react-native';
import styles from './styles';

export default class UserProfileComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageProfile}
          resizeMode="cover"
          source={{
            uri: `https://picsum.photos/${Math.floor(Math.random() * 350) +
              250}/${Math.floor(Math.random() * 500) + 400}`,
          }}
        />
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.content}>
            <FlatList
              data={[
                {key: 'Olá, usuário. :)'},
                {key: 'Meus favoritos'},
                {key: 'Meus dados'},
                {key: 'Configurações'},
                {key: 'Lista de desejo'},
                {key: 'Recomendações'},
                {key: 'Histórico'},
                {key: 'Mais assistidos'},
                {key: 'Entrar com outra conta'},
                {key: 'Sair'},
              ]}
              renderItem={({item}) => (
                <Text style={styles.item}>{item.key}</Text>
              )}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
