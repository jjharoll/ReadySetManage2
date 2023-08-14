import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  CircleImage,
  Icon,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, Text, View, useWindowDimensions } from 'react-native';

const ProfileScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('tab1');
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={false}
    >
      {/* Profile Header */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', paddingBottom: 8 },
          dimensions.width
        )}
      >
        <ImageBackground
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 300,
              justifyContent: 'space-evenly',
              paddingBottom: 55,
              paddingTop: 55,
              width: '100%',
            },
            dimensions.width
          )}
          resizeMode={'cover'}
          source={Images.Descarga}
        >
          <Surface
            style={StyleSheet.applyWidth(
              {
                borderRadius: 50,
                justifyContent: 'center',
                marginLeft: 12,
                minHeight: 40,
                overflow: 'hidden',
              },
              dimensions.width
            )}
            elevation={3}
          >
            <CircleImage size={100} source={Images.Avatar} />
          </Surface>

          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.custom_rgb255_255_255,
                fontFamily: 'Inter_700Bold',
                fontSize: 21,
                marginTop: 8,
              },
              dimensions.width
            )}
          >
            {'Arvind Limba'}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row', marginTop: 3 },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors.custom_rgb255_255_255}
              name={'Feather/map-pin'}
              size={15}
            />
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.custom_rgb255_255_255,
                  fontFamily: 'Inter_700Bold',
                  fontSize: 15,
                  paddingLeft: 8,
                  paddingRight: 5,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'Noida, India'}
            </Text>
            <Icon
              color={theme.colors.custom_rgb255_255_255}
              name={'Entypo/chevron-small-down'}
              size={24}
            />
          </View>
        </ImageBackground>
        {/* Logout */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: 16,
              top: 16,
            },
            dimensions.width
          )}
        >
          <Touchable>
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
              <Icon
                style={StyleSheet.applyWidth(
                  { marginTop: 14 },
                  dimensions.width
                )}
                color={theme.colors.custom_rgb255_255_255}
                name={'MaterialCommunityIcons/logout'}
                size={30}
              />
            </View>
          </Touchable>
        </View>
      </View>
      {/* Top options */}
      <Surface
        style={StyleSheet.applyWidth(
          {
            borderBottomWidth: 1,
            borderColor: theme.colors.divider,
            borderLeftWidth: 1,
            borderRadius: 10,
            borderRightWidth: 1,
            borderTopWidth: 1,
            justifyContent: 'center',
            marginLeft: 16,
            marginRight: 16,
            marginTop: 16,
            minHeight: 40,
          },
          dimensions.width
        )}
      >
        <Touchable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: theme.colors.divider,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 12,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 12,
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
              <Icon
                color={theme.colors.textPlaceholder}
                name={'Entypo/users'}
                size={24}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.medium,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 15,
                    paddingLeft: 16,
                  },
                  dimensions.width
                )}
              >
                {'Profile & address'}
              </Text>
            </View>
            <Icon
              color={theme.colors.textPlaceholder}
              name={'Entypo/chevron-right'}
              size={24}
            />
          </View>
        </Touchable>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('SelectPaymentMethodScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: theme.colors.divider,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 12,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 12,
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
              <Icon
                color={theme.colors.textPlaceholder}
                name={'Ionicons/ios-wallet-sharp'}
                size={24}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.medium,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 15,
                    paddingLeft: 16,
                  },
                  dimensions.width
                )}
              >
                {'Payment method'}
              </Text>
            </View>
            <Icon
              color={theme.colors.textPlaceholder}
              name={'Entypo/chevron-right'}
              size={24}
            />
          </View>
        </Touchable>
      </Surface>
      {/* Bottom option */}
      <Surface
        style={StyleSheet.applyWidth(
          {
            borderBottomWidth: 1,
            borderColor: theme.colors.divider,
            borderLeftWidth: 1,
            borderRadius: 10,
            borderRightWidth: 1,
            borderTopWidth: 1,
            justifyContent: 'center',
            marginLeft: 16,
            marginRight: 16,
            marginTop: 25,
            minHeight: 40,
          },
          dimensions.width
        )}
      >
        <Touchable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: theme.colors.divider,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 12,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 12,
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
              <Icon
                color={theme.colors.textPlaceholder}
                name={'MaterialCommunityIcons/ticket-account'}
                size={24}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.medium,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 15,
                    paddingLeft: 16,
                  },
                  dimensions.width
                )}
              >
                {'My tickets'}
              </Text>
            </View>
            <Icon
              color={theme.colors.textPlaceholder}
              name={'Entypo/chevron-right'}
              size={24}
            />
          </View>
        </Touchable>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('NotificationsScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: theme.colors.divider,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 12,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 12,
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
              <Icon
                color={theme.colors.textPlaceholder}
                name={'Ionicons/ios-notifications'}
                size={24}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.medium,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 15,
                    paddingLeft: 16,
                  },
                  dimensions.width
                )}
              >
                {'Notifications'}
              </Text>
            </View>
            <Icon
              color={theme.colors.textPlaceholder}
              name={'Entypo/chevron-right'}
              size={24}
            />
          </View>
        </Touchable>

        <Touchable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: theme.colors.divider,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 12,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 12,
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
              <Icon
                color={theme.colors.textPlaceholder}
                name={'Entypo/key'}
                size={24}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.medium,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 15,
                    paddingLeft: 16,
                  },
                  dimensions.width
                )}
              >
                {'Passwords'}
              </Text>
            </View>
            <Icon
              color={theme.colors.textPlaceholder}
              name={'Entypo/chevron-right'}
              size={24}
            />
          </View>
        </Touchable>

        <Touchable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: theme.colors.divider,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 12,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 12,
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
              <Icon
                color={theme.colors.textPlaceholder}
                name={'Ionicons/ios-settings-sharp'}
                size={24}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.medium,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 15,
                    paddingLeft: 16,
                  },
                  dimensions.width
                )}
              >
                {'Setting'}
              </Text>
            </View>
            <Icon
              color={theme.colors.textPlaceholder}
              name={'Entypo/chevron-right'}
              size={24}
            />
          </View>
        </Touchable>
      </Surface>
    </ScreenContainer>
  );
};

export default withTheme(ProfileScreen);
