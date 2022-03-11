import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator} from 'react-native';

import {Provider as PaperProvider} from 'react-native-paper';
import {suggestBookings} from './data/suggestBookings';
import SuggestBookingItem from './components/SuggestBookingItem';
import ScrollViewPage from './components/ScrollViewPage';
const App = () => {
  return (
    <PaperProvider>
      <FlatList
        data={suggestBookings}
        keyExtractor={suggestBooking => suggestBooking.id.toString()}
        renderItem={({item}) => <SuggestBookingItem item={item} />}
        numColumns={3}
        ListHeaderComponent={() => <ScrollViewPage />}
        ListFooterComponent={() => (
          <ActivityIndicator
            size="large"
            color="#899296"
            style={{
              borderTopWidth: 1,
              borderTopColor: '#E5EBED',
              marginTop: 8,
              padding: 8,
            }}
          />
        )}
      />
    </PaperProvider>
  );
};

export default App;
