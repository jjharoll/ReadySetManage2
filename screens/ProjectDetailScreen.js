import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import { MapView } from '@draftbit/maps';
import {
  DatePicker,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ProjectDetailScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [selectedMode, setSelectedMode] = React.useState('slow');
  const [selectedStep, setSelectedStep] = React.useState('personal');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={false}
      hasTopSafeArea={false}
      scrollable={true}
    >
      {/* header */}
      <View
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['header 2'],
          dimensions.width
        )}
      >
        {/* Back btn */}
        <Touchable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 44,
                justifyContent: 'center',
                width: 44,
              },
              dimensions.width
            )}
          >
            <Icon name={'AntDesign/arrowleft'} size={24} />
          </View>
        </Touchable>
        {/* Screen Heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_500Medium',
              fontSize: 16,
              marginLeft: 10,
            },
            dimensions.width
          )}
        >
          {'Project Detail'}
        </Text>
      </View>
      {/* infoProjects5 */}
      <KeyboardAwareScrollView
        style={StyleSheet.applyWidth(
          GlobalStyles.KeyboardAwareScrollViewStyles(theme)['infoProjects'],
          dimensions.width,
          ['width', 'height', 'flexGrow']
        )}
        contentContainerStyle={StyleSheet.applyWidth(
          GlobalStyles.KeyboardAwareScrollViewStyles(theme)['infoProjects'],
          dimensions.width
        )}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        <View>
          <ScrollView
            bounces={true}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}
          />
          {/* Profile Pic */}
          <View>
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center' },
                dimensions.width
              )}
            >
              <Image
                style={StyleSheet.applyWidth(
                  {
                    borderRadius: 55,
                    height: 110,
                    position: 'absolute',
                    top: 5,
                    width: 110,
                  },
                  dimensions.width
                )}
                resizeMode={'cover'}
                source={Images.LogoRSW33210295Transparent}
              />
              <Touchable
                onPress={() => {
                  const handler = async () => {
                    try {
                      await openImagePickerUtil({});
                    } catch (err) {
                      console.error(err);
                    }
                  };
                  handler();
                }}
                activeOpacity={0.8}
                disabledOpacity={0.8}
              >
                <Image
                  style={StyleSheet.applyWidth(
                    { height: 137, width: 120 },
                    dimensions.width
                  )}
                  resizeMode={'cover'}
                  source={Images.EditProfile}
                />
              </Touchable>
            </View>
          </View>
          {/* Full name */}
          <View>
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  opacity: 0.85,
                },
                dimensions.width
              )}
            >
              {'Project Name'}
            </Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setGlobalVariableValue({
                    key: 'project_name',
                    value: newTextInputValue,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Light'],
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 48,
                  marginTop: 8,
                  paddingBottom: 8,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              value={Constants['project_name']}
              autoCapitalize={'none'}
              placeholder={'Enter a value...'}
            />
          </View>
          {/* Birth date */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  opacity: 0.85,
                },
                dimensions.width
              )}
            >
              {'Project Date:'}
            </Text>
            <DatePicker
              onDateChange={newDatePickerValue => {
                try {
                  setGlobalVariableValue({
                    key: 'project_date',
                    value: newDatePickerValue,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth({ marginTop: 4 }, dimensions.width)}
              date={Constants['project_date']}
              label={' '}
              format={'dd-mm-yyyy'}
              leftIconMode={'inset'}
              mode={'date'}
              rightIconName={'Feather/calendar'}
              type={'solid'}
            />
          </View>
          {/* Birth date */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  opacity: 0.85,
                },
                dimensions.width
              )}
            >
              {'Estimated start date:'}
            </Text>
            <DatePicker
              onDateChange={newDatePickerValue => {
                try {
                  setGlobalVariableValue({
                    key: 'start_date',
                    value: newDatePickerValue,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth({ marginTop: 4 }, dimensions.width)}
              date={Constants['start_date']}
              label={' '}
              format={'dd-mm-yyyy'}
              leftIconMode={'inset'}
              mode={'date'}
              rightIconName={'Feather/calendar'}
              type={'solid'}
            />
          </View>
          {/* Birth date */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  opacity: 0.85,
                },
                dimensions.width
              )}
            >
              {'Project date:'}
            </Text>
            <DatePicker
              onDateChange={newDatePickerValue => {
                try {
                  setGlobalVariableValue({
                    key: 'required_date',
                    value: newDatePickerValue,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth({ marginTop: 4 }, dimensions.width)}
              date={Constants['required_date']}
              label={' '}
              format={'dd-mm-yyyy'}
              leftIconMode={'inset'}
              mode={'date'}
              rightIconName={'Feather/calendar'}
              type={'solid'}
            />
          </View>
          {/* Email address */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  opacity: 0.85,
                },
                dimensions.width
              )}
            >
              {'Contact Name'}
            </Text>
            <TextInput
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Light'],
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 48,
                  marginTop: 8,
                  paddingBottom: 8,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              autoCapitalize={'none'}
              placeholder={'Enter a value...'}
            />
          </View>
          {/* listadeplegable2 */}
          <View
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['listadeplegable2'],
              dimensions.width
            )}
          >
            <Touchable>
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
                      fontFamily: 'Inter_400Regular',
                    },
                    dimensions.width
                  )}
                >
                  {'Project Type'}
                </Text>
                <Icon name={'FontAwesome/caret-down'} size={24} />
              </View>
            </Touchable>
          </View>
          {/* listadeplegable2 */}
          <View
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['listadeplegable2'],
              dimensions.width
            )}
          >
            <Touchable>
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
                      fontFamily: 'Inter_400Regular',
                    },
                    dimensions.width
                  )}
                >
                  {'Job Type'}
                </Text>
                <Icon name={'FontAwesome/caret-down'} size={24} />
              </View>
            </Touchable>
          </View>
          {/* Email address */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  opacity: 0.85,
                },
                dimensions.width
              )}
            >
              {'Cellphone:'}
            </Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setGlobalVariableValue({
                    key: 'phone',
                    value: newTextInputValue,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Light'],
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 48,
                  marginTop: 8,
                  paddingBottom: 8,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              value={Constants['phone']}
              autoCapitalize={'none'}
              placeholder={'Enter a value...'}
            />
          </View>
          {/* Email address */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  opacity: 0.85,
                },
                dimensions.width
              )}
            >
              {'Phone:'}
            </Text>
            <TextInput
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Light'],
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 48,
                  marginTop: 8,
                  paddingBottom: 8,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              autoCapitalize={'none'}
              placeholder={'Enter a value...'}
            />
          </View>
          {/* Full address */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <MapView
              style={StyleSheet.applyWidth(
                GlobalStyles.MapViewStyles(theme)['Map View'],
                dimensions.width
              )}
              apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
              autoClusterMarkersDistanceMeters={10000}
              customMapStyle={'Beautiful West Coast Villa'}
              latitude={37.40241}
              loadingEnabled={true}
              longitude={-122.12125}
              provider={'google'}
              rotateEnabled={true}
              scrollEnabled={true}
              showsPointsOfInterest={true}
              zoom={8}
              zoomEnabled={true}
            />
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  opacity: 0.85,
                },
                dimensions.width
              )}
            >
              {'Notes'}
            </Text>
            <TextInput
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Light'],
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 120,
                  marginTop: 8,
                  paddingBottom: 8,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 12,
                },
                dimensions.width
              )}
              defaultValue={'Notes'}
              multiline={true}
              numberOfLines={4}
              placeholder={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
              textAlignVertical={'top'}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(ProjectDetailScreen);
