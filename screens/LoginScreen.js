import React from 'react';
import * as SupaBase2Api from '../apis/SupaBase2Api.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import getTokenAutorization from '../global-functions/getTokenAutorization';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  CheckboxRow,
  Divider,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  StatusBar,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const LoginScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  const [Autenticacion, setAutenticacion] = React.useState(false);
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState([]);

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flex: 1,
            justifyContent: 'space-evenly',
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 20,
          },
          dimensions.width
        )}
      >
        {/* Logo */}
        <Image
          style={StyleSheet.applyWidth(
            {
              height: 190,
              marginBottom: dimensions,
              position: 'relative',
              top: 2,
              width: 350,
            },
            dimensions.width
          )}
          resizeMode={'cover'}
          source={Images.LogoRSW33210295Transparent}
        />
        {/* Email */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors['BG Gray'],
              borderBottomWidth: 1,
              borderColor: theme.colors['Divider'],
              borderLeftWidth: 1,
              borderRadius: 16,
              borderRightWidth: 1,
              borderTopWidth: 1,
              flexDirection: 'row',
              height: 60,
              justifyContent: 'space-between',
              paddingLeft: 20,
              paddingRight: 20,
              width: '100%',
            },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Strong']}
            name={'MaterialCommunityIcons/email'}
            size={24}
          />
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, paddingLeft: 10, paddingRight: 10 },
              dimensions.width
            )}
          >
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setEmail(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  borderRadius: 8,
                  paddingBottom: 8,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              placeholder={'Email'}
              editable={true}
              placeholderTextColor={theme.colors['Strong']}
            />
          </View>
        </View>
        {/* Password */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors['BG Gray'],
              borderBottomWidth: 1,
              borderColor: theme.colors['Divider'],
              borderLeftWidth: 1,
              borderRadius: 16,
              borderRightWidth: 1,
              borderTopWidth: 1,
              flexDirection: 'row',
              height: 60,
              justifyContent: 'space-between',
              paddingLeft: 20,
              paddingRight: 20,
              width: '100%',
            },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Strong']}
            name={'FontAwesome/lock'}
            size={24}
          />
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, paddingLeft: 10, paddingRight: 10 },
              dimensions.width
            )}
          >
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setPassword(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  borderRadius: 8,
                  paddingBottom: 8,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              placeholder={'Password'}
              editable={true}
              placeholderTextColor={theme.colors['Strong']}
              secureTextEntry={true}
            />
          </View>
        </View>
        {/* Remember me */}
        <View style={StyleSheet.applyWidth({ width: 160 }, dimensions.width)}>
          <CheckboxRow
            onPress={newCheckboxRowValue => {
              try {
                setCheckboxRowValue(newCheckboxRowValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ minHeight: 50 }, dimensions.width)}
            label={'Remember me'}
            direction={'row-reverse'}
          />
        </View>
        {/* Sign in */}
        <Button
          onPress={() => {
            const handler = async () => {
              try {
                const result = (
                  await SupaBase2Api.autenticacionPOST(Constants, {
                    email: email,
                    password: password,
                  })
                )?.json;
                console.log(result);
                const access_token = result?.access_token;
                const emailusuario = result?.user.email;
                console.log(
                  emailusuario,
                  'email del usuario ------------------------------'
                );
                setGlobalVariableValue({
                  key: 'emailUsuario',
                  value: emailusuario,
                });
                const userID = result?.user.id;
                setGlobalVariableValue({
                  key: 'idUsuario',
                  value: userID,
                });
                console.log(
                  Constants['idUsuario'],
                  'user iddddddddddddddddddddddddddddddddddd'
                );
                const resulttoken = getTokenAutorization(result);
                setGlobalVariableValue({
                  key: 'token',
                  value: result,
                });
                setGlobalVariableValue({
                  key: 'token_authorization',
                  value: access_token,
                });
                if (access_token) {
                  console.log(
                    'entreeeee',
                    Constants['idUsuario'],
                    'variabl global'
                  );
                  navigation.navigate('HomepageScreen');
                } else {
                  console.log('entre al not');
                }
                if (result) {
                  return;
                }
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['#ffd20d'],
              borderRadius: 100,
              color: 'rgb(0, 0, 0)',
              fontFamily: 'Inter_600SemiBold',
              fontSize: 15,
              height: 58,
              textAlign: 'center',
              width: '100%',
            },
            dimensions.width
          )}
          title={'Sign in'}
        />
        {/* Forgot Password */}
        <Touchable
          style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingBottom: 10,
                paddingTop: 10,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['#ffd20d'],
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                  marginLeft: 10,
                },
                dimensions.width
              )}
            >
              {'Forgot Password?'}
            </Text>
          </View>
        </Touchable>
        {/* or continue with */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              height: 45,
              justifyContent: 'space-between',
              width: '100%',
            },
            dimensions.width
          )}
        >
          <Divider
            style={StyleSheet.applyWidth(
              { height: 2, width: '20%' },
              dimensions.width
            )}
            color={theme.colors.divider}
          />
          {/* OR */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
                marginLeft: 20,
                marginRight: 20,
                opacity: 0.7,
              },
              dimensions.width
            )}
          >
            {'or continue with'}
          </Text>
          <Divider
            style={StyleSheet.applyWidth(
              { height: 2, width: '20%' },
              dimensions.width
            )}
            color={theme.colors.divider}
          />
        </View>
        {/* Social options */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width: '100%',
            },
            dimensions.width
          )}
        >
          {/* Facebook */}
          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 2,
                  borderColor: theme.colors['Divider'],
                  borderLeftWidth: 2,
                  borderRadius: 16,
                  borderRightWidth: 2,
                  borderTopWidth: 2,
                  flexDirection: 'row',
                  height: 60,
                  justifyContent: 'center',
                  width: 88,
                },
                dimensions.width
              )}
            >
              <Image
                style={StyleSheet.applyWidth(
                  { height: 24, width: 24 },
                  dimensions.width
                )}
                resizeMode={'cover'}
                source={Images.ObFB}
              />
            </View>
          </Touchable>
          {/* Google */}
          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 2,
                  borderColor: theme.colors['Divider'],
                  borderLeftWidth: 2,
                  borderRadius: 16,
                  borderRightWidth: 2,
                  borderTopWidth: 2,
                  flexDirection: 'row',
                  height: 60,
                  justifyContent: 'center',
                  width: 88,
                },
                dimensions.width
              )}
            >
              <Image
                style={StyleSheet.applyWidth(
                  { height: 24, width: 24 },
                  dimensions.width
                )}
                resizeMode={'cover'}
                source={Images.ObGoogle}
              />
            </View>
          </Touchable>
          {/* Apple */}
          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 2,
                  borderColor: theme.colors['Divider'],
                  borderLeftWidth: 2,
                  borderRadius: 16,
                  borderRightWidth: 2,
                  borderTopWidth: 2,
                  flexDirection: 'row',
                  height: 60,
                  justifyContent: 'center',
                  width: 88,
                },
                dimensions.width
              )}
            >
              <Image
                style={StyleSheet.applyWidth(
                  { height: 24, width: 24 },
                  dimensions.width
                )}
                resizeMode={'cover'}
                source={Images.ObApple}
              />
            </View>
          </Touchable>
        </View>
        {/* Sign up */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('RegisterScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingBottom: 10,
                paddingTop: 10,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Strong'],
                  fontFamily: 'Inter_400Regular',
                },
                dimensions.width
              )}
            >
              {'Don’t have an account?'}
            </Text>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['#ffd20d'],
                  fontFamily: 'Inter_500Medium',
                  marginLeft: 7,
                },
                dimensions.width
              )}
            >
              {'Sign up'}
            </Text>
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(LoginScreen);
