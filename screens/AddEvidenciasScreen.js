import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openCameraUtil from '../utils/openCamera';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const AddEvidenciasScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;

  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { justifyContent: 'space-between' },
        dimensions.width
      )}
      hasSafeArea={true}
      scrollable={false}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 10,
          },
          dimensions.width
        )}
      >
        {/* Back */}
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
          <Touchable>
            <Icon name={'AntDesign/arrowleft'} size={24} />
          </Touchable>
        </View>
      </View>

      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            paddingBottom: 5,
            paddingLeft: 30,
            paddingRight: 30,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        {/* Add photos */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['#ffd20d'],
              fontFamily: 'Poppins_700Bold',
              fontSize: 35,
              marginLeft: 40,
              marginRight: 40,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Add Evidence'}
        </Text>

        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Strong'],
              fontFamily: 'Poppins_400Regular',
              fontSize: 15,
              marginBottom: 30,
              marginLeft: 40,
              marginRight: 40,
              marginTop: 20,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Please add minimum 2 photos'}
        </Text>
        {/* Buttons Row 1 */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 25,
              width: '100%',
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom Color_10'],
                borderRadius: 10,
                height: 90,
                justifyContent: 'center',
                overflow: 'hidden',
                width: 90,
              },
              dimensions.width
            )}
          >
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    const img = await openCameraUtil({ cameraType: 'back' });
                    setGlobalVariableValue({
                      key: 'UserPic',
                      value: '',
                    });
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
              style={StyleSheet.applyWidth(
                { height: 90, width: 90 },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    height: 90,
                    justifyContent: 'center',
                    width: 90,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors['Custom Color_2']}
                  name={'AntDesign/plus'}
                  size={24}
                />
                <Image
                  style={StyleSheet.applyWidth(
                    {
                      height: 90,
                      left: 0,
                      position: 'absolute',
                      top: 0,
                      width: 90,
                    },
                    dimensions.width
                  )}
                  resizeMode={'cover'}
                  source={{ uri: `${Constants['UserPic']}` }}
                />
              </View>
            </Touchable>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom Color_10'],
                borderRadius: 10,
                height: 90,
                justifyContent: 'center',
                width: 90,
              },
              dimensions.width
            )}
          >
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    const img = await openCameraUtil({ cameraType: 'back' });
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
            >
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'AntDesign/plus'}
                size={24}
              />
            </Touchable>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom Color_10'],
                borderRadius: 10,
                height: 90,
                justifyContent: 'center',
                width: 90,
              },
              dimensions.width
            )}
          >
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    const img = await openCameraUtil({ cameraType: 'back' });
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
            >
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'AntDesign/plus'}
                size={24}
              />
            </Touchable>
          </View>
        </View>
        {/* Buttons Row 2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 25,
              width: '100%',
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom Color_10'],
                borderRadius: 10,
                height: 90,
                justifyContent: 'center',
                width: 90,
              },
              dimensions.width
            )}
          >
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    const img = await openCameraUtil({ cameraType: 'back' });
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
            >
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'AntDesign/plus'}
                size={24}
              />
            </Touchable>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom Color_10'],
                borderRadius: 10,
                height: 90,
                justifyContent: 'center',
                width: 90,
              },
              dimensions.width
            )}
          >
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    const img = await openCameraUtil({ cameraType: 'back' });
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
            >
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'AntDesign/plus'}
                size={24}
              />
            </Touchable>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom Color_10'],
                borderRadius: 10,
                height: 90,
                justifyContent: 'center',
                width: 90,
              },
              dimensions.width
            )}
          >
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    const img = await openCameraUtil({ cameraType: 'back' });
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
            >
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'AntDesign/plus'}
                size={24}
              />
            </Touchable>
          </View>
        </View>
        {/* Buttons Row 3 */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 25,
              width: '100%',
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom Color_10'],
                borderRadius: 10,
                height: 90,
                justifyContent: 'center',
                width: 90,
              },
              dimensions.width
            )}
          >
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    const img = await openCameraUtil({ cameraType: 'back' });
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
            >
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'AntDesign/plus'}
                size={24}
              />
            </Touchable>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom Color_10'],
                borderRadius: 10,
                height: 90,
                justifyContent: 'center',
                width: 90,
              },
              dimensions.width
            )}
          >
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    const img = await openCameraUtil({ cameraType: 'back' });
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
            >
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'AntDesign/plus'}
                size={24}
              />
            </Touchable>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom Color_10'],
                borderRadius: 10,
                height: 90,
                justifyContent: 'center',
                width: 90,
              },
              dimensions.width
            )}
          >
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    const img = await openCameraUtil({ cameraType: 'back' });
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
            >
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'AntDesign/plus'}
                size={24}
              />
            </Touchable>
          </View>
        </View>
      </View>
      {/* Clicks */}
      <View>
        {/* Save */}
        <Button
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['#ffd20d'],
              borderRadius: 24,
              fontFamily: 'Poppins_500Medium',
              fontSize: 17,
              height: 48,
              marginBottom: 55,
              marginLeft: 30,
              marginRight: 30,
              marginTop: 25,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Save'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(AddEvidenciasScreen);
