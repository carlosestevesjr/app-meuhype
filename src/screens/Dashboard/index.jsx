import React, { useState, useContext, useEffect } from 'react';
import { Image, Dimensions, View, Text, TouchableOpacity, RefreshControl } from 'react-native';
import LottieView from 'lottie-react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as FeedActions } from '../../store/reducers/feed';

import { formataDataBr } from './../../utils/index'

import styles from './styles';
import { colors } from '../../styles';

//Config
import Config from './../../config/index'

import Layout from '../../components/Layout';

import { GlobalContext } from "../../contexts/GlobalContext";
import { FlatList } from 'react-native-gesture-handler';
import { useCallback } from 'react';
import MyIcons from '../../components/MyIcons';
import { FeedContext } from '../../contexts/FeedContext';
import MountAnimationLottie from '../../components/MountAnimationLottie/MountAnimationLottie';

const Dashboard = ({ navigation }) => {

  const dispatch = useDispatch();
  const [refreshing] = useState(false);

  const { data, loading } = useSelector((state) => (state.feed))

  const {
    appContext,
  } = useContext(GlobalContext)

  const {
    feedContext,
    updatefeedController
  } = useContext(FeedContext)

  useEffect(() => {
    const payload = {
      quantity: 20,
      page: 1,
      data: []
    }
    const request = dispatch(FeedActions.feedRequest(payload));
    if (request) {
      updatefeedController(payload)
    }
  }, [])

  const typeImage = (image, channel_type) => {
    return Config.LOCAL_HOST_NOCINEMA + image
  }

  const moreFeed = () => {
    const page = feedContext.feedController.page + 1
    const payload = {
      quantity: feedContext.feedController.quantity,
      page: page,
      data: data
    }

    const request = dispatch(FeedActions.feedRequest(payload));
    if (request) {
      updatefeedController(payload)
    }
  }

  const keyExtractor = useCallback((item) => item.new.news_id.toString(), [])

  const renderItem = useCallback(
    ({ item, index }) =>
      <View key={index} style={styles.containerNews}>
        <View style={styles.topNews}>
          <View style={styles.contentNewsChannelLogo}>
            <View style={styles.contentNewsBgChannelLogo}>
              <Image
                style={styles.newsChannelLogo}
                resizeMode={'contain'}
                source={{
                  uri: Config.LOCAL_HOST_NOCINEMA + item.new.channel_logo,
                }}
              />
            </View>
            <View>
              <Text style={styles.newsChannelName}>
                {item.new.channel}
                - {item.new.news_id}
              </Text>
              <Text style={styles.newsDate} >
                {formataDataBr(item.new.news_data)}
              </Text>
            </View>
          </View>
          <View >
            <View>
              {
                item.new.channel_type == "podcast" &&
                <View >
                  <MyIcons
                    iconName={'podcast'}
                    iconColor={colors.black}
                    widthIcon={30}
                    heightIcon={30}
                  />
                </View>
              }
              {
                item.new.channel_type == "site" &&
                <View >
                  <MyIcons
                    iconName={'site'}
                    iconColor={colors.black}
                    widthIcon={30}
                    heightIcon={30}
                  />
                </View>
              }
              {
                item.new.channel_type == "youtube" &&
                <View >
                  <MyIcons
                    iconName={'youtube'}
                    iconColor={colors.black}
                    widthIcon={30}
                    heightIcon={30}
                  />
                </View>
              }
            </View>
          </View>
        </View>
        <View style={styles.contentNews}>
          <View style={styles.newsContentImage}>
            <Image
              style={styles.newsImage}
              resizeMode={'contain'}
              source={{
                uri: typeImage(item.new.news_image, item.new.channel_type),
              }}
            />
          </View>
          <Text style={styles.newsTitle}>
            {item.new.news_title}
          </Text>
        </View>
        <View style={styles.bottomNews}>
          <View style={styles.newsContentTags}>
            {
              item.tags && item.tags.map(function (tag, i) {
                return <TouchableOpacity
                  key={i}
                  style={styles.newsTag}
                  onPress={''}
                >
                  <Text style={styles.newsTagName}>
                    #{tag.tag_name}
                  </Text>
                </TouchableOpacity>
              })
            }

          </View>
          <View>
            <TouchableOpacity
              onPress={''}
            >
              <MyIcons
                iconName={'arrow_circle_right'}
                iconColor={colors.black}
                widthIcon={26}
                heightIcon={26}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
  )

  const HeaderList = ({ }) => (
    <>
      {/* <Text>Teste</Text> */}
    </>
  )

  const refreshingAll = () => {
    const payload = {
      quantity: 20,
      page: 1,
      data: []
    }

    const request = dispatch(FeedActions.feedRequest(payload));
    if (request) {
      updatefeedController(payload)
    }
  }

  const RenderLoader = () => {
    if (!loading) {
      return null;
    } else {
      return (
        <View style={{ width: 440, alignSelf: 'center', position: 'absolute', zIndex: 999, top: '50%', backgroundColor: colors.primary400, padding: 16 }}>
          <MountAnimationLottie nameLottie={require("../../assets/lottie/camera-cinema.json")} />
        </View>
      );
    }
  };

  return (
    <>

      <Layout>
        <View style={styles.container}>
          <FlatList
            // ListHeaderComponent={HeaderList}
            // ListFooterComponent={renderLoader}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={refreshingAll} />
            }
            initialNumToRender={20}
            scrollEnabled={true}
            maxToRenderPerBatch={20}
            // horizontal={true}
            windowSize={Dimensions.get('window').height}
            // inverted={true}	
            // maxHeight={'100%'}
            // refreshing={true}
            removeClippedSubviews={true}
            // windowSize={21}
            // getItemLayout={getItemLayout}
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            onEndReachedThreshold={0.5}
            onEndReached={({ distanceFromEnd }) => {
              if (distanceFromEnd >= 0) {
                console.log('finish')
                moreFeed()
              }
            }}
          />
        </View>
        {RenderLoader()}
        {/* <Text>{JSON.stringify(data, null, 2)}</Text> */}

      </Layout>
    </>
  );
};

export default Dashboard;
