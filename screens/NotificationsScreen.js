import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Circle,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const NotificationsScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [title, setTitle] = React.useState('');

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Surface'] },
        dimensions.width
      )}
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={false}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            height: 48,
            justifyContent: 'center',
            marginTop: 12,
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        {/* Back Click */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 48,
              justifyContent: 'center',
              left: 16,
              position: 'absolute',
              top: 0,
              width: 48,
            },
            dimensions.width
          )}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Circle bgColor={theme.colors['Custom Color_2']} size={48}>
              <Icon
                color={theme.colors['Custom Color']}
                name={'Ionicons/arrow-back-sharp'}
                size={24}
              />
            </Circle>
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color_2'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 18,
            },
            dimensions.width
          )}
        >
          {'Notifications'}
        </Text>
      </View>

      <View
        style={StyleSheet.applyWidth(
          { flex: 1, marginLeft: 20, marginRight: 20, marginTop: 30 },
          dimensions.width
        )}
      >
        <ScrollView bounces={true} showsVerticalScrollIndicator={true}>
          {/* Section header */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                fontFamily: 'Inter_500Medium',
                fontSize: 17,
                marginBottom: 20,
              },
              dimensions.width
            )}
          >
            {'Today'}
          </Text>

          <DraftbitExampleDataApi.FetchUsersGET limit={3}>
            {({ loading, error, data, refetchUsers }) => {
              const fetchData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <FlatList
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <View
                        style={StyleSheet.applyWidth(
                          { flexDirection: 'row', marginTop: 20 },
                          dimensions.width
                        )}
                      >
                        <Circle
                          bgColor={theme.colors['Custom Color_2']}
                          size={50}
                        >
                          {/* Notif Icon */}
                          <Image
                            style={StyleSheet.applyWidth(
                              { height: 24, width: 24 },
                              dimensions.width
                            )}
                            resizeMode={'center'}
                            source={Images.Calendar}
                          />
                        </Circle>

                        <View
                          style={StyleSheet.applyWidth(
                            { flex: 1, paddingTop: 4 },
                            dimensions.width
                          )}
                        >
                          {/* Title ~ */}
                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors['Custom Color_2'],
                                fontFamily: 'Inter_400Regular',
                                fontSize: 16,
                                lineHeight: 20,
                                marginBottom: 8,
                                marginLeft: 12,
                              },
                              dimensions.width
                            )}
                            numberOfLines={2}
                          >
                            {'Edward lecky successfully completed leg training'}
                          </Text>
                          {/* Time Elapase ~ */}
                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors['Custom Color_2'],
                                fontFamily: 'Inter_400Regular',
                                fontSize: 13,
                                marginLeft: 12,
                                opacity: 0.5,
                              },
                              dimensions.width
                            )}
                            numberOfLines={2}
                          >
                            {'2 hours Ago'}
                          </Text>
                        </View>
                      </View>
                    );
                  }}
                  data={fetchData}
                  listKey={'70yylzMi'}
                  keyExtractor={listData =>
                    listData?.id || listData?.uuid || JSON.stringify(listData)
                  }
                  numColumns={1}
                />
              );
            }}
          </DraftbitExampleDataApi.FetchUsersGET>
        </ScrollView>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(NotificationsScreen);
