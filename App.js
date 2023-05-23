
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const url = "https://jsonplaceholder.typicode.com/posts"

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [])

  return (
    <View style={styles.container}>
      {
        loading ? <Text>loading .......</Text> : (
          data.map((post) => (
            <view style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>{post.title}</Text>
              <Text style={{ fontSize: 15, fontWeight: "blue" }}>{post.body}</Text>
            </view>
          ))
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
