import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as SupaBase2Api from '../apis/SupaBase2Api.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Circle,
  Divider,
  Icon,
  Link,
  ScreenContainer,
  Spacer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const RegisterScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors.studilyWhiteBG },
        dimensions.width
      )}
      hasSafeArea={false}
      scrollable={false}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          {
            flex: 1,
            justifyContent: 'center',
            paddingBottom: 36,
            paddingLeft: 36,
            paddingRight: 36,
            paddingTop: 36,
          },
          dimensions.width
        )}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        <View>
          {/* Heading */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center' },
              dimensions.width
            )}
          >
            {/* logo */}
            <Image
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ImageStyles(theme)['logo'], {
                  marginBottom: dimensions,
                }),
                dimensions.width
              )}
              resizeMode={'cover'}
              source={Images.LogoRSW33210295Transparent}
            />
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.studilyGrayMachine,
                  fontFamily: 'Nunito_600SemiBold',
                  fontSize: 16,
                  marginTop: 8,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {'Enter your login details to\ncreate your account'}
            </Text>
          </View>
          <Spacer bottom={16} left={8} right={8} top={16} />
          {/* Form */}
          <View>
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.studilyWhite,
                  borderBottomWidth: 1,
                  borderColor: theme.colors.studilyMilkWhite,
                  borderLeftWidth: 1,
                  borderRadius: 12,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  overflow: 'hidden',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    paddingBottom: 16,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 16,
                  },
                  dimensions.width
                )}
              >
                <TextInput
                  onChangeText={newTextInputValue => {
                    try {
                      setTextInputValue(newTextInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.studilyLightBlue,
                      fontFamily: 'Nunito_500Medium',
                      fontSize: 16,
                    },
                    dimensions.width
                  )}
                  value={textInputValue}
                  placeholder={'Your email'}
                  keyboardType={'email-address'}
                />
              </View>
              <Divider
                style={StyleSheet.applyWidth({ height: 1 }, dimensions.width)}
                color={theme.colors.studilyMilkWhite}
              />
              <View
                style={StyleSheet.applyWidth(
                  {
                    paddingBottom: 16,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 16,
                  },
                  dimensions.width
                )}
              >
                <TextInput
                  onChangeText={newTextInputValue => {
                    try {
                      setTextInputValue2(newTextInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.studilyLightBlue,
                      fontFamily: 'Nunito_500Medium',
                      fontSize: 16,
                    },
                    dimensions.width
                  )}
                  value={textInputValue2}
                  placeholder={'Your password'}
                  secureTextEntry={true}
                />
              </View>
            </View>
          </View>
          <Spacer bottom={24} left={8} right={8} top={24} />
          {/* Button */}
          <View>
            {/* Touchable Frame */}
            <View
              style={StyleSheet.applyWidth({ zIndex: 10 }, dimensions.width)}
            >
              <Touchable
                onPress={() => {
                  const handler = async () => {
                    try {
                      const result = (
                        await SupaBase2Api.crearUsuarioPOST(Constants, {
                          email: textInputValue,
                          password: textInputValue2,
                        })
                      )?.json;
                      if (result) {
                        return;
                      }
                      const id = result?.id;
                      console.log(result, 'resulttttttt');
                      if (result) {
                        navigation.navigate('HomepageScreen');
                      }
                    } catch (err) {
                      console.error(err);
                    }
                  };
                  handler();
                }}
              >
                {/* CTA Frame */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors['#ffd20d'],
                      borderRadius: 12,
                      flexDirection: 'row',
                      paddingBottom: 12,
                      paddingLeft: 18,
                      paddingRight: 18,
                      paddingTop: 12,
                      zIndex: 10,
                    },
                    dimensions.width
                  )}
                >
                  {/* Label Frame */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexGrow: 1,
                        flexShrink: 0,
                        justifyContent: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    {/* Label */}
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Strong'],
                          fontFamily: 'Nunito_700Bold',
                          fontSize: 15,
                          lineHeight: 21,
                          marginLeft: 42,
                          textTransform: 'uppercase',
                        },
                        dimensions.width
                      )}
                    >
                      {'Continue'}
                    </Text>
                  </View>
                  {/* Icon Group Frame */}
                  <View>
                    <Circle bgColor={theme.colors.studilyOpacity25} size={42}>
                      {/* Icon Flex Frame */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            flexGrow: 0,
                            flexShrink: 0,
                            paddingBottom: 12,
                            paddingLeft: 12,
                            paddingRight: 12,
                            paddingTop: 12,
                          },
                          dimensions.width
                        )}
                      >
                        {/* Icon  */}
                        <Icon
                          color={theme.colors.studilyWhite}
                          name={'AntDesign/arrowright'}
                          size={18}
                        />
                      </View>
                    </Circle>
                  </View>
                </View>
              </Touchable>
            </View>
          </View>
          <Spacer bottom={16} left={8} right={8} top={16} />
          {/* Login */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center' },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.studilyGrayMachine,
                  fontFamily: 'Nunito_600SemiBold',
                },
                dimensions.width
              )}
            >
              {'Already have an account?'}
            </Text>
            <Link
              onPress={() => {
                try {
                  navigation.navigate('LoginScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['#ffd20d'],
                  fontFamily: 'Nunito_700Bold',
                  fontSize: 16,
                  marginTop: 8,
                },
                dimensions.width
              )}
              title={'SIGN IN'}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(RegisterScreen);
