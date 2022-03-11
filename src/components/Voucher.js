import React from 'react';
import {StyleSheet, View} from 'react-native';
import HeaderTitle from './HeaderTitle';
import VoucherList from './VoucherList';
import WatchMore from './WatchMore';
const Voucher = () => {
  return (
    <View style={styles.container}>
      <HeaderTitle text="Ưu đãi cấp thành viên" />
      <View
        style={{
          backgroundColor: '#ff900d33',
          width: '100%',
          height: 80,
          marginBottom: 16,
        }}></View>
      <VoucherList />
      <WatchMore text="Ưu đãi cho thành viên KOC" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    borderTopWidth: 1,
    borderTopColor: '#E5EBED',
    borderBottomWidth: 1,
    borderBottomColor: '#E5EBED',
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
});

export default Voucher;
