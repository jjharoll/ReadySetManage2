import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Circle,
  DatePicker,
  Icon,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const ProjectTimeControlScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={true}
    >
      {/* fechas */}
      <View
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['fechas'],
          dimensions.width
        )}
      >
        {/* Start Date */}
        <View
          style={StyleSheet.applyWidth(
            { paddingRight: 10, width: '50%' },
            dimensions.width
          )}
        >
          <DatePicker
            label={'From Date'}
            format={'dd-mm-yyyy'}
            leftIconMode={'inset'}
            mode={'date'}
            rightIconName={'AntDesign/calendar'}
            type={'solid'}
          />
        </View>
        {/* End Date */}
        <View
          style={StyleSheet.applyWidth(
            { paddingLeft: 10, width: '50%' },
            dimensions.width
          )}
        >
          <DatePicker
            label={'To Date'}
            format={'dd-mm-yyyy'}
            leftIconMode={'inset'}
            mode={'date'}
            rightIconName={'AntDesign/calendar'}
            type={'solid'}
          />
        </View>
      </View>
      <Button
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
            backgroundColor: theme.colors['#ffd20d'],
            bottom: -5,
            color: theme.colors['Strong'],
            right: -150,
            width: 100,
          }),
          dimensions.width
        )}
        title={'Clock-in'}
      />
      <Button
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
            backgroundColor: theme.colors['#ffd20d'],
            bottom: -10,
            color: theme.colors['Strong'],
            fontSize: 14,
            right: -150,
            width: 100,
          }),
          dimensions.width
        )}
        title={'Clock-out'}
      />
      <DraftbitApi.FetchReviewsGET limit={10}>
        {({ loading, error, data, refetchReviews }) => {
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
                  <View>
                    <View
                      style={StyleSheet.applyWidth(
                        { flexDirection: 'row' },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { alignItems: 'center', flex: 1 },
                          dimensions.width
                        )}
                      >
                        <Circle
                          style={StyleSheet.applyWidth(
                            { backgroundColor: theme.colors['#ffd20d'] },
                            dimensions.width
                          )}
                          bgColor={theme.colors.primary}
                          size={48}
                        >
                          <Icon
                            color={theme.colors.surface}
                            name={'Ionicons/construct-outline'}
                            size={24}
                          />
                        </Circle>
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor: theme.colors.divider,
                              flex: 1,
                              width: 4,
                            },
                            dimensions.width
                          )}
                        />
                      </View>

                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 5 },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { flexDirection: 'row' },
                            dimensions.width
                          )}
                        >
                          <Icon
                            style={StyleSheet.applyWidth(
                              { marginRight: -10, marginTop: 12 },
                              dimensions.width
                            )}
                            color={theme.colors['Strong']}
                            name={'AntDesign/caretleft'}
                            size={24}
                          />
                          <View
                            style={StyleSheet.applyWidth(
                              { flex: 1 },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['#ffd20d'],
                                  borderTopLeftRadius: 4,
                                  borderTopRightRadius: 4,
                                  flex: 1,
                                  justifyContent: 'center',
                                  paddingBottom: 16,
                                  paddingLeft: 16,
                                  paddingRight: 16,
                                  paddingTop: 16,
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors['Strong'],
                                    fontFamily: 'System',
                                    fontSize: 16,
                                    fontWeight: '600',
                                    lineHeight: 16,
                                  },
                                  dimensions.width
                                )}
                                ellipsizeMode={'tail'}
                                numberOfLines={2}
                              >
                                {listData?.title}
                              </Text>
                            </View>

                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors.surface,
                                  borderBottomLeftRadius: 8,
                                  borderBottomRightRadius: 8,
                                  borderBottomWidth: 1,
                                  borderColor: theme.colors.divider,
                                  borderLeftWidth: 1,
                                  borderRightWidth: 1,
                                  borderTopWidth: 1,
                                  paddingBottom: 16,
                                  paddingLeft: 16,
                                  paddingRight: 16,
                                  paddingTop: 16,
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.medium,
                                    fontFamily: 'System',
                                    fontWeight: '400',
                                    textAlign: 'justify',
                                  },
                                  dimensions.width
                                )}
                              >
                                {listData?.full_review}
                              </Text>

                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.light,
                                    fontFamily: 'System',
                                    fontSize: 12,
                                    fontWeight: '400',
                                    marginTop: 12,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'Reviewed on '}
                                {listData?.date}
                              </Text>
                            </View>
                          </View>
                        </View>
                        <Spacer bottom={16} left={8} right={8} top={16} />
                      </View>
                    </View>
                  </View>
                );
              }}
              data={fetchData}
              listKey={'cvbxbZbJ'}
              keyExtractor={listData =>
                listData?.id || listData?.uuid || JSON.stringify(listData)
              }
              contentContainerStyle={StyleSheet.applyWidth(
                {
                  flex: 1,
                  paddingBottom: 24,
                  paddingLeft: 24,
                  paddingRight: 24,
                  paddingTop: 24,
                },
                dimensions.width
              )}
              numColumns={1}
            />
          );
        }}
      </DraftbitApi.FetchReviewsGET>
    </ScreenContainer>
  );
};

export default withTheme(ProjectTimeControlScreen);
