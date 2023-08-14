import React from 'react';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Circle,
  CircleImage,
  Divider,
  Icon,
  Link,
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const ProjectcostsScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors.financeLightBackground },
        dimensions.width
      )}
      hasTopSafeArea={false}
      scrollable={false}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            height: 360,
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 80,
            position: 'absolute',
            top: 0,
            width: '100%',
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row' },
            dimensions.width
          )}
        >
          <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.light,
                  fontFamily: 'Inter_400Regular',
                  fontSize: 14,
                },
                dimensions.width
              )}
            >
              {'Good afternoon,'}
            </Text>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 20,
                },
                dimensions.width
              )}
            >
              {'Shawn Larkin'}
            </Text>
          </View>
          <CircleImage
            size={48}
            source={{
              uri: 'https://global-uploads.webflow.com/5e740d74e6787687577e9b38/61eb11639c30f426c3ac9baa_SML.png',
            }}
          />
        </View>
        <Divider
          style={StyleSheet.applyWidth(
            { height: 2, marginBottom: 16, marginTop: 16 },
            dimensions.width
          )}
          color={theme.colors.divider}
        />
        <View
          style={StyleSheet.applyWidth(
            { justifyContent: 'space-between' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row' },
              dimensions.width
            )}
          >
            <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.financeGreen500,
                    fontFamily: 'Inter_600SemiBold',
                  },
                  dimensions.width
                )}
              >
                {'CHECKING ...1999'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_700Bold',
                    fontSize: 36,
                    marginTop: 6,
                  },
                  dimensions.width
                )}
              >
                {'$6,333.99'}
              </Text>
            </View>
          </View>
          <Spacer bottom={12} left={8} right={8} top={12} />
          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row' },
              dimensions.width
            )}
          >
            <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.financeGreen500,
                    fontFamily: 'Inter_600SemiBold',
                  },
                  dimensions.width
                )}
              >
                {'SAVINGS ...1776'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_700Bold',
                    fontSize: 36,
                    marginTop: 6,
                  },
                  dimensions.width
                )}
              >
                {'$11,234.56'}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingTop: 360 },
          dimensions.width
        )}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.surface,
              borderTopLeftRadius: 36,
              borderTopRightRadius: 36,
              flex: 1,
              paddingLeft: 24,
              paddingRight: 24,
              paddingTop: 24,
            },
            dimensions.width
          )}
        >
          <View>
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center' },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors.divider,
                    borderRadius: 64,
                    height: 6,
                    width: 80,
                  },
                  dimensions.width
                )}
              />
            </View>
            <Spacer bottom={12} top={12} />
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 18,
                  },
                  dimensions.width
                )}
              >
                {'Recent transactions'}
              </Text>
              <Link
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.financeGreen500,
                    fontFamily: 'Inter_500Medium',
                  },
                  dimensions.width
                )}
                title={'See all'}
              />
            </View>
            <Spacer bottom={12} top={12} />
            <DraftbitApi.FetchProductsGET limit={5}>
              {({ loading, error, data, refetchProducts }) => {
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
                        <>
                          <View
                            style={StyleSheet.applyWidth(
                              { alignItems: 'center', flexDirection: 'row' },
                              dimensions.width
                            )}
                          >
                            <Circle
                              bgColor={theme.colors.financeGreen500}
                              size={60}
                            >
                              <Circle bgColor={theme.colors.surface} size={56}>
                                <Icon
                                  style={StyleSheet.applyWidth(
                                    { marginLeft: 4 },
                                    dimensions.width
                                  )}
                                  color={theme.colors.financeGreen500}
                                  name={'Feather/tag'}
                                  size={24}
                                />
                              </Circle>
                            </Circle>
                            <Spacer left={6} right={6} />
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1 },
                                dimensions.width
                              )}
                            >
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.light,
                                    fontFamily: 'Inter_500Medium',
                                    fontSize: 12,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'Apple Store'}
                              </Text>

                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.medium,
                                    fontFamily: 'Inter_600SemiBold',
                                    fontSize: 16,
                                    marginTop: 4,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'iPhone 13 Pro'}
                              </Text>
                            </View>
                            <Spacer left={4} right={4} />
                            <View
                              style={StyleSheet.applyWidth(
                                { alignItems: 'flex-end' },
                                dimensions.width
                              )}
                            >
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.medium,
                                    fontFamily: 'Inter_700Bold',
                                  },
                                  dimensions.width
                                )}
                              >
                                {'- $1,227.72'}
                              </Text>

                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.light,
                                    fontFamily: 'Inter_400Regular',
                                    fontSize: 12,
                                    marginTop: 4,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'4/20/2022'}
                              </Text>
                            </View>
                          </View>
                          <Spacer bottom={8} top={8} />
                          <View
                            style={StyleSheet.applyWidth(
                              { alignItems: 'center', flexDirection: 'row' },
                              dimensions.width
                            )}
                          >
                            <Circle
                              bgColor={theme.colors.financeGreen500}
                              size={60}
                            >
                              <Circle bgColor={theme.colors.surface} size={56}>
                                <Icon
                                  style={StyleSheet.applyWidth(
                                    { marginLeft: 4 },
                                    dimensions.width
                                  )}
                                  color={theme.colors.financeGreen500}
                                  name={'Feather/shopping-bag'}
                                  size={24}
                                />
                              </Circle>
                            </Circle>
                            <Spacer left={6} right={6} />
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1 },
                                dimensions.width
                              )}
                            >
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.light,
                                    fontFamily: 'Inter_500Medium',
                                    fontSize: 12,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'Whole Foods'}
                              </Text>

                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.medium,
                                    fontFamily: 'Inter_600SemiBold',
                                    fontSize: 16,
                                    marginTop: 4,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'Groceries'}
                              </Text>
                            </View>
                            <Spacer left={4} right={4} />
                            <View
                              style={StyleSheet.applyWidth(
                                { alignItems: 'flex-end' },
                                dimensions.width
                              )}
                            >
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.medium,
                                    fontFamily: 'Inter_700Bold',
                                  },
                                  dimensions.width
                                )}
                              >
                                {'- $314.15'}
                              </Text>

                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.light,
                                    fontFamily: 'Inter_400Regular',
                                    fontSize: 12,
                                    marginTop: 4,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'3/30/2022'}
                              </Text>
                            </View>
                          </View>
                          <Spacer bottom={8} top={8} />
                          <View
                            style={StyleSheet.applyWidth(
                              { alignItems: 'center', flexDirection: 'row' },
                              dimensions.width
                            )}
                          >
                            <Circle
                              bgColor={theme.colors.financeGreen500}
                              size={60}
                            >
                              <Circle bgColor={theme.colors.surface} size={56}>
                                <Icon
                                  style={StyleSheet.applyWidth(
                                    { marginLeft: 4 },
                                    dimensions.width
                                  )}
                                  color={theme.colors.financeGreen500}
                                  name={'Feather/coffee'}
                                  size={24}
                                />
                              </Circle>
                            </Circle>
                            <Spacer left={6} right={6} />
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1 },
                                dimensions.width
                              )}
                            >
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.light,
                                    fontFamily: 'Inter_500Medium',
                                    fontSize: 12,
                                  },
                                  dimensions.width
                                )}
                              >
                                {"Torchy's Tacos"}
                              </Text>

                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.medium,
                                    fontFamily: 'Inter_600SemiBold',
                                    fontSize: 16,
                                    marginTop: 4,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'Damn Good Tacos'}
                              </Text>
                            </View>
                            <Spacer left={4} right={4} />
                            <View
                              style={StyleSheet.applyWidth(
                                { alignItems: 'flex-end' },
                                dimensions.width
                              )}
                            >
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.medium,
                                    fontFamily: 'Inter_700Bold',
                                  },
                                  dimensions.width
                                )}
                              >
                                {'- $12.98'}
                              </Text>

                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.light,
                                    fontFamily: 'Inter_400Regular',
                                    fontSize: 12,
                                    marginTop: 4,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'3/30/2022'}
                              </Text>
                            </View>
                          </View>
                          <Spacer bottom={8} top={8} />
                        </>
                      );
                    }}
                    data={fetchData}
                    listKey={'AKRt593G'}
                    keyExtractor={listData =>
                      listData?.id || listData?.uuid || JSON.stringify(listData)
                    }
                    contentContainerStyle={StyleSheet.applyWidth(
                      { flex: 1 },
                      dimensions.width
                    )}
                    numColumns={1}
                  />
                );
              }}
            </DraftbitApi.FetchProductsGET>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(ProjectcostsScreen);
