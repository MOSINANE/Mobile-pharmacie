import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const PharmacieList = ({ navigation }) => {
  const [pharmacies, setPharmacies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPharmacies();
  }, []);

  const fetchPharmacies = async () => {
    try {
      const response = await axios.get('http://localhost:9071/pharmacies/all');
      setPharmacies(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching pharmacies:', error);
    }
  };

  const renderPharmacieItem = ({ item }) => (
      <View style={styles.pharmacieItem}>
        <Text style={styles.pharmacieName}>{item.nom}</Text>
        <Text>{item.adresse}</Text>
        <Text>{item.telephone}</Text>
      </View>
  );

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Pharmacies</Text>
        {loading ? (
            <ActivityIndicator />
        ) : (
            <FlatList
                data={pharmacies}
                renderItem={renderPharmacieItem}
                keyExtractor={(item) => item.id.toString()}
            />
        )}
        <Text style={styles.mapLink} onPress={() => navigation.navigate('Map')}>
          Go to Map
        </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  pharmacieItem: {
    marginBottom: 8,
  },
  pharmacieName: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  mapLink: {
    color: 'blue',
    marginTop: 16,
    textAlign: 'center',
  },
});

export default PharmacieList;
