import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Divider,
  Icon,
  ScreenContainer,
  Switch,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, Text, View, useWindowDimensions } from 'react-native';

const NotificationSettingsScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      hasSafeArea={true}
      hasTopSafeArea={false}
      scrollable={false}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            height: 48,
            marginTop: 12,
            paddingLeft: 10,
            paddingRight: 10,
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
            <Icon
              color={theme.colors['Custom Color_2']}
              name={'Ionicons/arrow-back-sharp'}
              size={24}
            />
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Strong'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 20,
              marginLeft: 16,
            },
            dimensions.width
          )}
        >
          {'Notifications'}
        </Text>
      </View>

      <ScrollView bounces={true} showsVerticalScrollIndicator={true}>
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 10, paddingLeft: 24, paddingRight: 24 },
            dimensions.width
          )}
        >
          {/* Enable Smart Notification */}
          <Touchable
            style={StyleSheet.applyWidth(
              { marginBottom: 10 },
              dimensions.width
            )}
          >
            {/* Item */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 48,
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              {/* Name */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 17,
                  },
                  dimensions.width
                )}
              >
                {'Enable Smart Notification'}
              </Text>
              <Switch defaultValue={true} />
            </View>
          </Touchable>
          <Divider
            style={StyleSheet.applyWidth(
              {
                height: 1,
                marginBottom: 20,
                marginTop: 10,
                opacity: 0.25,
                width: '100%',
              },
              dimensions.width
            )}
            color={theme.colors['Custom #acacac']}
          />
          {/* Events */}
          <Touchable
            style={StyleSheet.applyWidth(
              { marginBottom: 10 },
              dimensions.width
            )}
          >
            {/* Item */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 48,
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              {/* Name */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 17,
                  },
                  dimensions.width
                )}
              >
                {'Events'}
              </Text>
              <Switch />
            </View>
          </Touchable>
          {/* Payments */}
          <Touchable
            style={StyleSheet.applyWidth(
              { marginBottom: 10 },
              dimensions.width
            )}
          >
            {/* Item */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 48,
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              {/* Name */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 17,
                  },
                  dimensions.width
                )}
              >
                {'Payments'}
              </Text>
              <Switch />
            </View>
          </Touchable>
          {/* Subscriptions */}
          <Touchable
            style={StyleSheet.applyWidth(
              { marginBottom: 10 },
              dimensions.width
            )}
          >
            {/* Item */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 48,
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              {/* Name */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 17,
                  },
                  dimensions.width
                )}
              >
                {'Subscriptions'}
              </Text>
              <Switch />
            </View>
          </Touchable>
          {/* App Updates */}
          <Touchable
            style={StyleSheet.applyWidth(
              { marginBottom: 10 },
              dimensions.width
            )}
          >
            {/* Item */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 48,
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              {/* Name */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 17,
                  },
                  dimensions.width
                )}
              >
                {'App Updates'}
              </Text>
              <Switch />
            </View>
          </Touchable>
          {/* New Service Available */}
          <Touchable
            style={StyleSheet.applyWidth(
              { marginBottom: 10 },
              dimensions.width
            )}
          >
            {/* Item */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 48,
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              {/* Name */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 17,
                  },
                  dimensions.width
                )}
              >
                {'New Service Available'}
              </Text>
              <Switch />
            </View>
          </Touchable>
          {/* New Tips Available */}
          <Touchable
            style={StyleSheet.applyWidth(
              { marginBottom: 10 },
              dimensions.width
            )}
          >
            {/* Item */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 48,
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              {/* Name */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 17,
                  },
                  dimensions.width
                )}
              >
                {'New Tips Available'}
              </Text>
              <Switch />
            </View>
          </Touchable>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(NotificationSettingsScreen);
