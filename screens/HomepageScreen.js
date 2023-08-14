import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import addBearerToken from '../global-functions/addBearerToken';
import getTokenAutorization from '../global-functions/getTokenAutorization';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const HomepageScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      const email = Constants['emailUsuario'];
      console.log('entreeeeeeeeeeeeeeeeeeeeeee', email);
      console.log(Constants['token'], 'ptrpp');
      const acces_token = addBearerToken(Constants['token_authorization']);
      console.log(acces_token, 'ahora si');
      setGlobalVariableValue({
        key: 'token',
        value: acces_token,
      });
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      <KeyboardAvoidingView
        style={StyleSheet.applyWidth(
          { alignSelf: 'stretch', flexGrow: 1, justifyContent: 'space-around' },
          dimensions.width
        )}
        behavior={'position'}
        enabled={false}
        keyboardVerticalOffset={44}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              marginLeft: 16,
              marginRight: 16,
              paddingBottom: 14,
              paddingLeft: 32,
              paddingRight: 32,
              paddingTop: 32,
            },
            dimensions.width
          )}
        >
          {/* Test */}
          <Text
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'center',
                color: theme.colors['#ffd20d'],
                fontFamily: 'Anton_400Regular',
                fontSize: 40,
                textAlign: 'center',
                typography: theme.typography.headline4,
              },
              dimensions.width
            )}
          >
            {'Main Menu'}
          </Text>
          {/* Section Header */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 14,
                marginTop: 24,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 18,
                  typography: theme.typography.headline5,
                },
                dimensions.width
              )}
              allowFontScaling={true}
              ellipsizeMode={'tail'}
              textBreakStrategy={'highQuality'}
            >
              {'Hello, '}
              {Constants['emailUsuario']}
              {'\n'}
            </Text>

            <Touchable
              onPress={() => {
                try {
                  const token_user = getTokenAutorization('acces_token2');
                  setGlobalVariableValue({
                    key: 'token',
                    value: token_user,
                  });
                  navigation.navigate('LoginScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                { alignSelf: 'flex-end', justifyContent: 'center' },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['#ffd20d'],
                    fontSize: 18,
                    typography: theme.typography.headline5,
                  },
                  dimensions.width
                )}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Sign Out'}
              </Text>
            </Touchable>
          </View>
        </View>
        {/* browse-grid */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              paddingBottom: 72,
              paddingLeft: 32,
              paddingRight: 32,
            },
            dimensions.width
          )}
          needsOffscreenAlphaCompositing={false}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('DashboardScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'stretch',
                borderColor: theme.colors['#ffd20d'],
                marginBottom: 14,
                marginTop: 14,
                width: '45%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  backgroundColor: theme.colors['Strong'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors.divider,
                  borderLeftWidth: 1,
                  borderRadius: theme.roundness,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  height: 140,
                  justifyContent: 'space-around',
                  paddingBottom: 14,
                  paddingLeft: 14,
                  paddingRight: 14,
                  paddingTop: 14,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { marginBottom: 24 },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['#ffd20d'],
                      fontSize: 22,
                      textAlign: 'left',
                      typography: theme.typography.subtitle1,
                    },
                    dimensions.width
                  )}
                  allowFontScaling={true}
                >
                  {'Dashboard'}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    height: 42,
                    justifyContent: 'center',
                    width: 42,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                  color={theme.colors['#ffd20d']}
                  name={'Entypo/bar-graph'}
                  size={24}
                />
              </View>
              {null}
            </View>
          </Touchable>

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('Project2Screen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'stretch',
                borderColor: theme.colors['#ffd20d'],
                marginBottom: 14,
                marginTop: 14,
                width: '45%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  backgroundColor: theme.colors['Strong'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors.divider,
                  borderLeftWidth: 1,
                  borderRadius: theme.roundness,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  height: 140,
                  justifyContent: 'space-around',
                  paddingBottom: 14,
                  paddingLeft: 14,
                  paddingRight: 14,
                  paddingTop: 14,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { marginBottom: 24 },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['#ffd20d'],
                      fontSize: 22,
                      textAlign: 'left',
                      typography: theme.typography.subtitle1,
                    },
                    dimensions.width
                  )}
                  allowFontScaling={true}
                >
                  {'Projects'}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    height: 42,
                    justifyContent: 'center',
                    width: 42,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                  color={theme.colors['#ffd20d']}
                  name={'Entypo/new-message'}
                  size={24}
                />
              </View>
            </View>
          </Touchable>

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('Quote2Screen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'stretch',
                borderColor: theme.colors['#ffd20d'],
                marginBottom: 14,
                marginTop: 14,
                width: '45%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  backgroundColor: theme.colors['Strong'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors.divider,
                  borderLeftWidth: 1,
                  borderRadius: theme.roundness,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  height: 140,
                  justifyContent: 'space-around',
                  paddingBottom: 14,
                  paddingLeft: 14,
                  paddingRight: 14,
                  paddingTop: 14,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { marginBottom: 24 },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['#ffd20d'],
                      fontSize: 22,
                      textAlign: 'left',
                      typography: theme.typography.subtitle1,
                    },
                    dimensions.width
                  )}
                  allowFontScaling={true}
                >
                  {'Quotes'}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    height: 42,
                    justifyContent: 'center',
                    width: 42,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                  color={theme.colors['#ffd20d']}
                  name={'AntDesign/switcher'}
                  size={24}
                />
              </View>
            </View>
          </Touchable>

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('ProjectTimeControlScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'stretch',
                borderColor: theme.colors['#ffd20d'],
                marginBottom: 14,
                marginTop: 14,
                width: '45%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  backgroundColor: theme.colors['Strong'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors.divider,
                  borderLeftWidth: 1,
                  borderRadius: theme.roundness,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  height: 140,
                  justifyContent: 'space-around',
                  paddingBottom: 14,
                  paddingLeft: 14,
                  paddingRight: 14,
                  paddingTop: 14,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { marginBottom: 24 },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['#ffd20d'],
                      fontSize: 22,
                      textAlign: 'left',
                      typography: theme.typography.subtitle1,
                    },
                    dimensions.width
                  )}
                  allowFontScaling={true}
                >
                  {'Time  Tracking'}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    height: 42,
                    justifyContent: 'center',
                    width: 42,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                  color={theme.colors['#ffd20d']}
                  name={'Ionicons/ios-body'}
                  size={24}
                />
              </View>
            </View>
          </Touchable>

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('Contact2Screen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'stretch',
                borderColor: theme.colors['#ffd20d'],
                marginBottom: 14,
                marginTop: 14,
                width: '45%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  backgroundColor: theme.colors['Strong'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors.divider,
                  borderLeftWidth: 1,
                  borderRadius: theme.roundness,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  height: 140,
                  justifyContent: 'space-around',
                  paddingBottom: 14,
                  paddingLeft: 14,
                  paddingRight: 14,
                  paddingTop: 14,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { marginBottom: 24 },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['#ffd20d'],
                      fontSize: 22,
                      textAlign: 'left',
                      typography: theme.typography.subtitle1,
                    },
                    dimensions.width
                  )}
                  allowFontScaling={true}
                >
                  {'Contacts\n'}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    height: 42,
                    justifyContent: 'center',
                    width: 42,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                  color={theme.colors['#ffd20d']}
                  name={'AntDesign/barchart'}
                  size={24}
                />
              </View>
            </View>
          </Touchable>

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('SetupCoreScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'stretch',
                borderColor: theme.colors['#ffd20d'],
                marginBottom: 14,
                marginTop: 14,
                width: '45%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  backgroundColor: theme.colors['Strong'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors.divider,
                  borderLeftWidth: 1,
                  borderRadius: theme.roundness,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  height: 140,
                  justifyContent: 'space-around',
                  paddingBottom: 14,
                  paddingLeft: 14,
                  paddingRight: 14,
                  paddingTop: 14,
                  right: -30,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { marginBottom: 24 },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['#ffd20d'],
                      fontSize: 25,
                      textAlign: 'left',
                      typography: theme.typography.subtitle1,
                    },
                    dimensions.width
                  )}
                  allowFontScaling={true}
                >
                  {'Setting'}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    height: 42,
                    justifyContent: 'center',
                    width: 42,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                  color={theme.colors['#ffd20d']}
                  name={'Ionicons/ios-settings-outline'}
                  size={24}
                />
              </View>
            </View>
          </Touchable>
          <ScrollView
            bounces={true}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}
          />
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default withTheme(HomepageScreen);
