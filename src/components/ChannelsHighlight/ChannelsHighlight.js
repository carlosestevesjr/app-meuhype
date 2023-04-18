import React, { useEffect } from 'react';
import { FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Creators as ChannelsActions } from '../../store/reducers/channels';

import styles from './styles';
import { colors } from '../../styles';

//Config
import Config from './../../config/index'
import MyIcons from '../MyIcons';

const ChannelsHighlight = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => (state.channels))
  useEffect(() => {
    dispatch(ChannelsActions.channelsRequest({
      page: 1,
      quantity: 200
    }));
  }, [])


  const bColor = (item) => {

    if (item?.channel_type == "podcast") {
      return "#23B40B"
    } else if (item?.channel_type == "site") {
      return "#2B99A0"
    } else if (item?.channel_type == "youtube") {
      return "#FF0000"
    }else{
      return colors.gray
    }
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log('Channels')
        }}
      >
        <View style={[styles.contentChannelsHighlight, { borderColor: bColor(item) }]}>

          <Image
            style={styles.channelsHighlightLogo}
            resizeMode='contain'
            source={{
              uri: Config.LOCAL_HOST_NOCINEMA + item?.channel_logo,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={styles.containerChannelsHighlight}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.channels_id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/* <Text>{JSON.stringify(data, null, 2)}Tags Recents</Text> */}
    </>
  );
};

export default ChannelsHighlight;
