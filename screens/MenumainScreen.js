import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, Text, View, useWindowDimensions } from 'react-native';

const MenumainScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        {
          alignItems: 'stretch',
          backgroundColor: [
            { minWidth: Breakpoints.Mobile, value: theme.colors['Surface'] },
            { minWidth: Breakpoints.Mobile, value: theme.colors['Background'] },
          ],
          justifyContent: 'space-evenly',
        },
        dimensions.width
      )}
      hasSafeArea={true}
      scrollable={true}
    >
      {/* backgroundFinal */}
      <ImageBackground
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ImageBackgroundStyles(theme)['backgroundFinal'],
            { height: '70%', opacity: 1 }
          ),
          dimensions.width
        )}
        backfaceVisibility={'visible'}
        backgroundColor={'"rgba(0, 0, 0, 0)"'}
        resizeMode={'center'}
        source={Images.Marcaagua}
      >
        {/* Header Wrapper */}
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
          {/* Settings */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['#ffd20d'],
                fontFamily: 'System',
                fontSize: 40,
                fontWeight: '600',
                lineHeight: 40,
                marginBottom: 6,
              },
              dimensions.width
            )}
          >
            {'Main Menu'}
          </Text>
        </View>
        {/* Content Wrapper */}
        <View
          style={StyleSheet.applyWidth(
            { flexGrow: 1, flexShrink: 0, marginLeft: 24, marginRight: 24 },
            dimensions.width
          )}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('DashboardScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            {/* Row Wrapper */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  height: 60,
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              {/* Left Aligned */}
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flex: 1, flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors['amarillo']}
                  name={'MaterialCommunityIcons/monitor-dashboard'}
                  size={24}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'System',
                      fontWeight: '600',
                      marginLeft: 12,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                  allowFontScaling={true}
                  ellipsizeMode={'tail'}
                  textBreakStrategy={'highQuality'}
                >
                  {'Dashboard'}
                </Text>
              </View>
              {/* Right Aligned */}
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors.strong}
                  name={'MaterialIcons/chevron-right'}
                  size={24}
                />
              </View>
            </View>
            <Divider
              style={StyleSheet.applyWidth({ height: 1 }, dimensions.width)}
              color={theme.colors.divider}
              height={1}
            />
          </Touchable>

          <Touchable>
            {/* Row Wrapper */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  height: 60,
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              {/* Left Aligned */}
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flex: 1, flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Icon
                  style={StyleSheet.applyWidth(
                    { backgroundColor: 'rgba(0, 0, 0, 0)' },
                    dimensions.width
                  )}
                  color={theme.colors['amarillo']}
                  name={'Octicons/project'}
                  size={24}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'System',
                      fontWeight: '600',
                      marginLeft: 12,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                  allowFontScaling={true}
                  ellipsizeMode={'tail'}
                  textBreakStrategy={'highQuality'}
                >
                  {'Projects'}
                </Text>
              </View>
              {/* Right Aligned */}
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors.strong}
                  name={'MaterialIcons/chevron-right'}
                  size={24}
                />
              </View>
            </View>
            <Divider
              style={StyleSheet.applyWidth({ height: 1 }, dimensions.width)}
              color={theme.colors.divider}
              height={1}
            />
          </Touchable>

          <Touchable>
            {/* Row Wrapper */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  height: 60,
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              {/* Left Aligned */}
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flex: 1, flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors['amarillo']}
                  name={'MaterialIcons/payments'}
                  size={24}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'System',
                      fontSize: 14,
                      fontWeight: '600',
                      marginLeft: 12,
                    },
                    dimensions.width
                  )}
                  allowFontScaling={true}
                  ellipsizeMode={'tail'}
                  textBreakStrategy={'highQuality'}
                >
                  {'Quotes'}
                </Text>
              </View>
              {/* Right Aligned */}
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors.strong}
                  name={'MaterialIcons/chevron-right'}
                  size={24}
                />
              </View>
            </View>
            <Divider
              style={StyleSheet.applyWidth({ height: 1 }, dimensions.width)}
              color={theme.colors.divider}
              height={1}
            />
          </Touchable>

          <Touchable>
            {/* Row Wrapper */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  height: 60,
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              {/* Left Aligned */}
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flex: 1, flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors['amarillo']}
                  name={'Ionicons/person-add'}
                  size={24}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'System',
                      fontWeight: '600',
                      marginLeft: 12,
                    },
                    dimensions.width
                  )}
                  allowFontScaling={true}
                  ellipsizeMode={'tail'}
                  textBreakStrategy={'highQuality'}
                >
                  {'Concepts'}
                </Text>
              </View>
              {/* Row Aligned */}
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors.strong}
                  name={'Entypo/chevron-small-right'}
                  size={24}
                />
              </View>
            </View>
            <Divider
              style={StyleSheet.applyWidth({ height: 1 }, dimensions.width)}
              color={theme.colors.divider}
              height={1}
            />
          </Touchable>

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('ProjectTimeControlScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            {/* Row Wrapper */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  height: 60,
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              {/* Left Aligned */}
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flex: 1, flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors['amarillo']}
                  name={'Entypo/back-in-time'}
                  size={24}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'System',
                      fontWeight: '600',
                      marginLeft: 12,
                    },
                    dimensions.width
                  )}
                  allowFontScaling={true}
                  ellipsizeMode={'tail'}
                  textBreakStrategy={'highQuality'}
                >
                  {'Time Controls'}
                </Text>
              </View>
              {/* Right Aligned */}
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors.strong}
                  name={'MaterialIcons/chevron-right'}
                  size={24}
                />
              </View>
            </View>
            <Divider
              style={StyleSheet.applyWidth({ height: 1 }, dimensions.width)}
              color={theme.colors.divider}
              height={1}
            />
          </Touchable>
        </View>
        {/* Footer Wrapper */}
        <View
          style={StyleSheet.applyWidth(
            { flexGrow: 1, flexShrink: 0 },
            dimensions.width
          )}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('SetupCoreScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon
              style={StyleSheet.applyWidth({ right: -150 }, dimensions.width)}
              color={theme.colors['#ffd20d']}
              name={'FontAwesome/gear'}
              size={50}
            />
          </Touchable>

          <Touchable>
            {/* Button Wrapper */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexGrow: 1,
                  flexShrink: 0,
                  justifyContent: 'center',
                  minHeight: 54,
                },
                dimensions.width
              )}
            >
              {/* Sign Out Text */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: 'rgb(0,0,0)',
                    fontFamily: 'AbrilFatface_400Regular',
                    fontSize: 25,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {'Sign Out'}
              </Text>
            </View>
          </Touchable>
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

export default withTheme(MenumainScreen);
