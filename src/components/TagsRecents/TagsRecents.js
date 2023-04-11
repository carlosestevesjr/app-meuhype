import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Creators as TagsActions } from '../../store/reducers/tags';

import styles from './styles';
import { BTNSample } from '../Buttons';
import { colors } from '../../styles';

const TagsRecents = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => (state.tags))
  useEffect(() => {
    dispatch(TagsActions.tagsRecentsRequest({
      page: 1,
      quantity: 200
    }));
  }, [])

  const renderItem = ({ item }) => {
    return (
      <View style={styles.contentTag}>
        <BTNSample
          title={`#${item.tag_name}`}
          bgColor={colors.primary500}
          iconColor={colors.light}
          fontColor={colors.light}
          loading={false}
          iconLeft={false}
          iconRight={false}
          fontSize={'small'}
          alignGeral={'center'}
          btnSizeType={'small'}
          onPress={() => (
            console.log('log')
          )}
        />
      </View>
    );
  };

  return (
    <>
      <View style={styles.containerTagsRecents}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/* <Text>{JSON.stringify(data, null, 2)}Tags Recents</Text> */}
    </>
  );
};

export default TagsRecents;
