import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import {
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const TenantsetupScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={false}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          { height: 48, marginLeft: 20, marginTop: 12 },
          dimensions.width
        )}
      >
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_500Medium',
              fontSize: 24,
            },
            dimensions.width
          )}
        >
          {'Profile'}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          { flex: 1, marginBottom: 20, paddingBottom: 25 },
          dimensions.width
        )}
        bounces={true}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        {/* User Details */}
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, justifyContent: 'center', minHeight: 200 },
            dimensions.width
          )}
        >
          {/* Photo */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center' },
              dimensions.width
            )}
          >
            <Image
              style={StyleSheet.applyWidth(
                {
                  borderRadius: 60,
                  height: 110,
                  position: 'absolute',
                  top: 5,
                  width: 110,
                },
                dimensions.width
              )}
              resizeMode={'cover'}
              source={Images.Ellipse21}
            />
            <Touchable activeOpacity={0.8} disabledOpacity={0.8}>
              <Image
                style={StyleSheet.applyWidth(
                  {
                    borderColor: theme.colors['#ffd20d'],
                    height: 137,
                    opacity: 1,
                    width: 120,
                  },
                  dimensions.width
                )}
                resizeMode={'cover'}
                source={Images.EditPicFrame}
              />
            </Touchable>
          </View>
          {/* Name */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_500Medium',
                fontSize: 18,
                marginTop: 12,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {Constants['emailUsuario']}
          </Text>
          {/* ID */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_400Regular',
                fontSize: 12,
                marginTop: 4,
                opacity: 0.6,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {Constants['id_user']}
          </Text>
        </View>
        {/* Menu */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom #ffffff'],
              borderRadius: 12,
              marginBottom: 20,
              marginLeft: 20,
              marginRight: 20,
              paddingBottom: 10,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 10,
            },
            dimensions.width
          )}
        >
          {/* Location */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('NotificationSettingsScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            activeOpacity={0.8}
            disabledOpacity={0.8}
          >
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', height: 60 },
                dimensions.width
              )}
            >
              <Icon
                style={StyleSheet.applyWidth(
                  { opacity: 0.6 },
                  dimensions.width
                )}
                color={theme.colors['Strong']}
                name={'AntDesign/notification'}
                size={24}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 15,
                    marginLeft: 10,
                    opacity: 0.8,
                  },
                  dimensions.width
                )}
              >
                {'Notification'}
              </Text>
            </View>
          </Touchable>
          {/* Payment */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('SelectPaymentMethodScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            activeOpacity={0.8}
            disabledOpacity={0.8}
          >
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', height: 60 },
                dimensions.width
              )}
            >
              <Icon
                style={StyleSheet.applyWidth(
                  { opacity: 0.6 },
                  dimensions.width
                )}
                color={theme.colors['Strong']}
                name={'Ionicons/md-wallet-outline'}
                size={24}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 15,
                    marginLeft: 10,
                    opacity: 0.8,
                  },
                  dimensions.width
                )}
              >
                {'Payment'}
              </Text>
            </View>
          </Touchable>
          {/* Privacy */}
          <Touchable activeOpacity={0.8} disabledOpacity={0.8}>
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', height: 60 },
                dimensions.width
              )}
            >
              <Icon
                style={StyleSheet.applyWidth(
                  { opacity: 0.6 },
                  dimensions.width
                )}
                color={theme.colors['Strong']}
                name={'MaterialCommunityIcons/security'}
                size={24}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 15,
                    marginLeft: 10,
                    opacity: 0.8,
                  },
                  dimensions.width
                )}
              >
                {'Privacy Policy'}
              </Text>
            </View>
          </Touchable>
          {/* Terms and Conditions */}
          <Touchable activeOpacity={0.8} disabledOpacity={0.8}>
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', height: 60 },
                dimensions.width
              )}
            >
              <Icon
                style={StyleSheet.applyWidth(
                  { opacity: 0.6 },
                  dimensions.width
                )}
                color={theme.colors['Strong']}
                name={'Entypo/text-document'}
                size={24}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 15,
                    marginLeft: 10,
                    opacity: 0.8,
                  },
                  dimensions.width
                )}
              >
                {'Term And Conditions'}
              </Text>
            </View>
          </Touchable>
          {/* Contact Us */}
          <Touchable activeOpacity={0.8} disabledOpacity={0.8}>
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', height: 60 },
                dimensions.width
              )}
            >
              <Icon
                style={StyleSheet.applyWidth(
                  { opacity: 0.6 },
                  dimensions.width
                )}
                color={theme.colors['Strong']}
                name={'AntDesign/contacts'}
                size={24}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 15,
                    marginLeft: 10,
                    opacity: 0.8,
                  },
                  dimensions.width
                )}
              >
                {'Contact Us'}
              </Text>
            </View>
          </Touchable>
          {/* Logout */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('LoginScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            activeOpacity={0.8}
            disabledOpacity={0.8}
          >
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', height: 60 },
                dimensions.width
              )}
            >
              <Icon
                style={StyleSheet.applyWidth(
                  { opacity: 0.6 },
                  dimensions.width
                )}
                color={theme.colors['Strong']}
                name={'AntDesign/logout'}
                size={24}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 15,
                    marginLeft: 10,
                    opacity: 0.8,
                  },
                  dimensions.width
                )}
              >
                {'Logout'}
              </Text>
            </View>
          </Touchable>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(TenantsetupScreen);
