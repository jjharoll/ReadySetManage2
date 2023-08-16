import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import addBearerToken from '../global-functions/addBearerToken';
import getTokenAutorization from '../global-functions/getTokenAutorization';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Checkbox,
  Circle,
  CircleImage,
  Icon,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const HomepageCopyScreen = props => {
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
  const [showNav, setShowNav] = React.useState(false);

  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      {/* Drawer */}
      <>
        {!showNav ? null : (
          <Surface
            style={StyleSheet.applyWidth(
              GlobalStyles.SurfaceStyles(theme)['Drawer'],
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Custom Color_18'],
                  paddingBottom: 24,
                  paddingLeft: 24,
                  paddingRight: 24,
                  paddingTop: 72,
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
                <Circle bgColor={theme.colors.surface} size={64}>
                  <CircleImage
                    size={60}
                    source={{
                      uri: 'https://global-uploads.webflow.com/5e740d74e6787687577e9b38/61eb13cf6bbef833d45c5560_avatar%20(5).png',
                    }}
                  />
                </Circle>

                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, marginLeft: 12 },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['#ffd20d'],
                        fontFamily: 'System',
                        fontSize: 18,
                        fontWeight: '400',
                      },
                      dimensions.width
                    )}
                  >
                    {Constants['emailUsuario']}
                  </Text>

                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginTop: 4,
                      },
                      dimensions.width
                    )}
                  >
                    <Circle bgColor={theme.colors.error} size={8} />
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.error,
                          fontFamily: 'System',
                          fontWeight: '400',
                          marginLeft: 4,
                        },
                        dimensions.width
                      )}
                    >
                      {'Away'}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingBottom: 16, paddingTop: 16 },
                dimensions.width
              )}
            >
              {/* Home */}
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('DashboardScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      paddingBottom: 12,
                      paddingLeft: 24,
                      paddingRight: 24,
                      paddingTop: 12,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['#ffd20d']}
                    name={'Feather/home'}
                    size={24}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'System',
                        fontSize: 18,
                        fontWeight: '400',
                        marginLeft: 8,
                      },
                      dimensions.width
                    )}
                  >
                    {'Dashboard'}
                  </Text>
                </View>
              </Touchable>
              {/* Home */}
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Project2Screen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      paddingBottom: 12,
                      paddingLeft: 24,
                      paddingRight: 24,
                      paddingTop: 12,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['#ffd20d']}
                    name={'FontAwesome/building-o'}
                    size={24}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'System',
                        fontSize: 18,
                        fontWeight: '400',
                        marginLeft: 8,
                      },
                      dimensions.width
                    )}
                  >
                    {'Projects'}
                  </Text>
                </View>
              </Touchable>
              {/* Projects */}
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Quote2Screen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      paddingBottom: 12,
                      paddingLeft: 24,
                      paddingRight: 24,
                      paddingTop: 12,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['#ffd20d']}
                    name={'EvilIcons/paperclip'}
                    size={24}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'System',
                        fontSize: 18,
                        fontWeight: '400',
                        marginLeft: 8,
                      },
                      dimensions.width
                    )}
                  >
                    {'Quotes'}
                  </Text>
                </View>
              </Touchable>
              {/* Messages */}
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('ProjectTimeControlScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      paddingBottom: 12,
                      paddingLeft: 24,
                      paddingRight: 24,
                      paddingTop: 12,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['#ffd20d']}
                    name={'Entypo/back-in-time'}
                    size={24}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'System',
                        fontSize: 18,
                        fontWeight: '400',
                        marginLeft: 8,
                      },
                      dimensions.width
                    )}
                  >
                    {'Time Tracking'}
                  </Text>
                </View>
              </Touchable>
              {/* Messages */}
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Contact2Screen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      paddingBottom: 12,
                      paddingLeft: 24,
                      paddingRight: 24,
                      paddingTop: 12,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['#ffd20d']}
                    name={'MaterialCommunityIcons/contacts-outline'}
                    size={24}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'System',
                        fontSize: 18,
                        fontWeight: '400',
                        marginLeft: 8,
                      },
                      dimensions.width
                    )}
                  >
                    {'Contacts'}
                  </Text>
                </View>
              </Touchable>
              {/* Profile */}
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('TenantsetupScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      paddingBottom: 12,
                      paddingLeft: 24,
                      paddingRight: 24,
                      paddingTop: 12,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['#ffd20d']}
                    name={'Feather/user'}
                    size={24}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'System',
                        fontSize: 18,
                        fontWeight: '400',
                        marginLeft: 8,
                      },
                      dimensions.width
                    )}
                  >
                    {'Profile'}
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
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      paddingBottom: 12,
                      paddingLeft: 24,
                      paddingRight: 24,
                      paddingTop: 12,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['#ffd20d']}
                    name={'Feather/log-out'}
                    size={24}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'System',
                        fontSize: 18,
                        fontWeight: '400',
                        marginLeft: 8,
                      },
                      dimensions.width
                    )}
                  >
                    {'Sign out'}
                  </Text>
                </View>
              </Touchable>
            </View>
          </Surface>
        )}
      </>
      {/* contentHOME */}
      <View
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['contentHOME'],
          dimensions.width
        )}
      >
        {/* Header */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors['Custom Color_18'],
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 20,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 72,
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flex: 1, flexDirection: 'row' },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['#ffd20d']}
              name={'Feather/home'}
              size={26}
            />
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['#ffd20d'],
                  flex: 1,
                  fontFamily: 'System',
                  fontSize: 20,
                  fontWeight: '600',
                  marginLeft: 6,
                },
                dimensions.width
              )}
            >
              {'Home'}
            </Text>
          </View>
          <Checkbox
            onPress={newCheckboxValue => {
              try {
                setShowNav(newCheckboxValue);
              } catch (err) {
                console.error(err);
              }
            }}
            status={showNav}
            checkedIcon={'Feather/x'}
            color={theme.colors.surface}
            size={32}
            uncheckedColor={theme.colors['#ffd20d']}
            uncheckedIcon={'Feather/menu'}
          />
        </View>
        {/* Body */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          <KeyboardAvoidingView
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'stretch',
                flexGrow: 1,
                justifyContent: 'space-around',
              },
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
                      backgroundColor: theme.colors['Custom Color_18'],
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
                      backgroundColor: theme.colors['Custom Color_18'],
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
                      backgroundColor: theme.colors['Custom Color_18'],
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
                      backgroundColor: theme.colors['Custom Color_18'],
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
                      backgroundColor: theme.colors['Custom Color_18'],
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
                      backgroundColor: theme.colors['Custom Color_18'],
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
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(HomepageCopyScreen);
