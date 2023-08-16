import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as SupaBase2Api from '../apis/SupaBase2Api.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import RestaValores from '../global-functions/RestaValores';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import { MapView } from '@draftbit/maps';
import {
  Button,
  DatePicker,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const ProjectInfo3Screen = props => {
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
      console.log(Constants['project_name'], 'entreeeeeeeeeeeeeee');
      const result = RestaValores(Constants['balance'], Constants['pay_user']);
      console.log(result);
      setGlobalVariableValue({
        key: 'diferenciaValor',
        value: result,
      });
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);
  const [BOMModal, setBOMModal] = React.useState(false);
  const [BOMValor, setBOMValor] = React.useState('');
  const [menuTab1, setMenuTab1] = React.useState(false);
  const [menuTab2, setMenuTab2] = React.useState(false);
  const [pkgModal, setPkgModal] = React.useState(false);
  const [pkgModal2, setPkgModal2] = React.useState(false);
  const [pkgValor, setPkgValor] = React.useState('');
  const [pkgValor2, setPkgValor2] = React.useState('');
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
          {'Project Info'}
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
        <ScrollView
          bounces={true}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
        />
        <View>
          {/* summary */}
          <View
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['summary'],
              dimensions.width
            )}
          >
            {/* Sub Total */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: '"rgba(0, 0, 0, 0)"',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Strong'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                    opacity: 1,
                  },
                  dimensions.width
                )}
              >
                {'Current Cost:'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 15,
                    textAlign: 'right',
                  },
                  dimensions.width
                )}
              >
                {'$ '}
                {Constants['pay_user']}
              </Text>
            </View>
            {/* Admin Fee */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 12,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Strong'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                    opacity: 1,
                  },
                  dimensions.width
                )}
              >
                {'Project Price:'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 15,
                    textAlign: 'right',
                  },
                  dimensions.width
                )}
              >
                {'$ '}
                {Constants['balance']}
              </Text>
            </View>
            {/* shipping cost */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 12,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_900Black',
                    fontSize: 16,
                    opacity: 1,
                  },
                  dimensions.width
                )}
              >
                {'Balance:'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 15,
                    textAlign: 'right',
                  },
                  dimensions.width
                )}
              >
                {'$ '}
                {Constants['diferenciaValor']}
              </Text>
            </View>
          </View>
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
              defaultValue={Constants['project_name']}
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
          {/* listadeplegable2 */}
          <View
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['listadeplegable2'],
              dimensions.width
            )}
          >
            <Touchable
              onPress={() => {
                try {
                  setPkgModal(true);
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
                  {pkgValor}
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
            <Touchable
              onPress={() => {
                try {
                  setPkgModal2(true);
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
                  {pkgValor2}
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
              defaultValue={Constants['cellphone']}
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
              defaultValue={Constants['phone']}
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
              {'Full address'}
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
              defaultValue={Constants['address']}
              multiline={true}
              numberOfLines={4}
              placeholder={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
              textAlignVertical={'top'}
            />
            <Icon name={'MaterialCommunityIcons/google-maps'} size={24} />
          </View>
        </View>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'stretch',
              alignSelf: 'stretch',
              flexDirection: 'row',
            },
            dimensions.width
          )}
        >
          {/* boton 6 */}
          <Button
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'ContactAddres',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactPostal',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactPhone',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'contactCellphone',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactProject',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactCity',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactName',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContacLast',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactRequiredDate',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactStarteDate',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'totalAcumulado',
                  value: 0,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              GlobalStyles.ButtonStyles(theme)['boton 6'],
              dimensions.width
            )}
            icon={'AntDesign/areachart'}
            title={'AREA'}
          />
          {/* boton 5 */}
          <Button
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'ContactAddres',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactPostal',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactPhone',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'contactCellphone',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactProject',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactCity',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactName',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContacLast',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactRequiredDate',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactStarteDate',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'totalAcumulado',
                  value: 0,
                });
                setBOMModal(true);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              GlobalStyles.ButtonStyles(theme)['boton 5'],
              dimensions.width
            )}
            icon={'MaterialCommunityIcons/approximately-equal'}
            title={'BOM'}
          />
          {/* boton 4 */}
          <Button
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'ContactAddres',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactPostal',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactPhone',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'contactCellphone',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactProject',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactCity',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactName',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContacLast',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactRequiredDate',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactStarteDate',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'totalAcumulado',
                  value: 0,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              GlobalStyles.ButtonStyles(theme)['boton 4'],
              dimensions.width
            )}
            icon={'MaterialIcons/event'}
            title={'Events'}
          />
        </View>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'stretch',
              alignSelf: 'stretch',
              flexDirection: 'row',
            },
            dimensions.width
          )}
        >
          {/* boton 6 */}
          <Button
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'ContactAddres',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactPostal',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactPhone',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'contactCellphone',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactProject',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactCity',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactName',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContacLast',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactRequiredDate',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactStarteDate',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'totalAcumulado',
                  value: 0,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              GlobalStyles.ButtonStyles(theme)['boton 6'],
              dimensions.width
            )}
            icon={'MaterialIcons/mobile-screen-share'}
            title={'Evidence'}
          />
          {/* boton 5 */}
          <Button
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'ContactAddres',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactPostal',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactPhone',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'contactCellphone',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactProject',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactCity',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactName',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContacLast',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactRequiredDate',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactStarteDate',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'totalAcumulado',
                  value: 0,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              GlobalStyles.ButtonStyles(theme)['boton 5'],
              dimensions.width
            )}
            icon={'FontAwesome/dollar'}
            title={'Cost'}
          />
          {/* boton 4 */}
          <Button
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'ContactAddres',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactPostal',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactPhone',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'contactCellphone',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactProject',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactCity',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactName',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContacLast',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactRequiredDate',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'ContactStarteDate',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'totalAcumulado',
                  value: 0,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              GlobalStyles.ButtonStyles(theme)['boton 4'],
              dimensions.width
            )}
            icon={'MaterialCommunityIcons/timer'}
            title={'Time'}
          />
        </View>
      </KeyboardAwareScrollView>
      {/* modales */}
      <Modal visible={pkgModal} animationType={'none'}>
        {/* heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['#ffd20d'],
              fontFamily: 'Inter_500Medium',
              fontSize: 18,
              marginBottom: 30,
              marginTop: 75,
              paddingLeft: 26,
              paddingRight: 26,
            },
            dimensions.width
          )}
        >
          {'Select JobType'}
        </Text>
        {/* HEADERSEARCH */}
        <View
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['HEADERSEARCH 3'],
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 0.5,
                borderColor: theme.colors.textPlaceholder,
                borderLeftWidth: 0.5,
                borderRadius: 8,
                borderRightWidth: 0.5,
                borderTopWidth: 0.5,
                flex: 1,
                flexDirection: 'row',
                height: 48,
                paddingLeft: 16,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors.textPlaceholder}
              name={'Feather/search'}
              size={24}
            />
            <TextInput
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors.divider,
                  borderRadius: 8,
                  paddingBottom: 8,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              placeholder={'Search Here'}
              editable={true}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 0.5,
                borderColor: theme.colors.textPlaceholder,
                borderLeftWidth: 0.5,
                borderRadius: 8,
                borderRightWidth: 0.5,
                borderTopWidth: 0.5,
                height: 48,
                justifyContent: 'center',
                marginLeft: 16,
                width: 48,
              },
              dimensions.width
            )}
          >
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('NewcontactScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Icon
                color={theme.colors.medium}
                name={'Entypo/plus'}
                size={24}
              />
            </Touchable>
          </View>
        </View>

        <SupaBase2Api.FetchPruebasJobTypeGET>
          {({ loading, error, data, refetchPruebasJobType }) => {
            const fetchData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <FlatList
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <Touchable
                      onPress={() => {
                        try {
                          setPkgModal(false);
                          setPkgValor(listData?.collectionname);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors['Strong'],
                            fontFamily: 'Inter_400Regular',
                            paddingBottom: 16,
                            paddingLeft: 26,
                            paddingRight: 26,
                            paddingTop: 16,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {listData?.collectionname}
                      </Text>
                    </Touchable>
                  );
                }}
                data={fetchData}
                listKey={'yxXTRC1f'}
                keyExtractor={listData =>
                  listData?.id || listData?.uuid || JSON.stringify(listData)
                }
                contentContainerStyle={StyleSheet.applyWidth(
                  { flex: 1 },
                  dimensions.width
                )}
                numColumns={1}
              />
            );
          }}
        </SupaBase2Api.FetchPruebasJobTypeGET>
      </Modal>
      {/* modales */}
      <Modal visible={pkgModal2} animationType={'none'}>
        {/* heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['#ffd20d'],
              fontFamily: 'Inter_500Medium',
              fontSize: 18,
              marginBottom: 30,
              marginTop: 75,
              paddingLeft: 26,
              paddingRight: 26,
            },
            dimensions.width
          )}
        >
          {'Select JobType'}
        </Text>
        {/* HEADERSEARCH */}
        <View
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['HEADERSEARCH 3'],
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 0.5,
                borderColor: theme.colors.textPlaceholder,
                borderLeftWidth: 0.5,
                borderRadius: 8,
                borderRightWidth: 0.5,
                borderTopWidth: 0.5,
                flex: 1,
                flexDirection: 'row',
                height: 48,
                paddingLeft: 16,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors.textPlaceholder}
              name={'Feather/search'}
              size={24}
            />
            <TextInput
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors.divider,
                  borderRadius: 8,
                  paddingBottom: 8,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              placeholder={'Search Here'}
              editable={true}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 0.5,
                borderColor: theme.colors.textPlaceholder,
                borderLeftWidth: 0.5,
                borderRadius: 8,
                borderRightWidth: 0.5,
                borderTopWidth: 0.5,
                height: 48,
                justifyContent: 'center',
                marginLeft: 16,
                width: 48,
              },
              dimensions.width
            )}
          >
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('NewcontactScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Icon
                color={theme.colors.medium}
                name={'Entypo/plus'}
                size={24}
              />
            </Touchable>
          </View>
        </View>

        <SupaBase2Api.FetchContactGET>
          {({ loading, error, data, refetchContact }) => {
            const fetchData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <FlatList
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <Touchable
                      onPress={() => {
                        try {
                          setPkgModal2(false);
                          setPkgValor2(listData?.firstname);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors['Strong'],
                            fontFamily: 'Inter_400Regular',
                            paddingBottom: 16,
                            paddingLeft: 26,
                            paddingRight: 26,
                            paddingTop: 16,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {listData?.firstname}
                      </Text>
                    </Touchable>
                  );
                }}
                data={fetchData}
                listKey={'h3AjCO70'}
                keyExtractor={listData =>
                  listData?.id || listData?.uuid || JSON.stringify(listData)
                }
                contentContainerStyle={StyleSheet.applyWidth(
                  { flex: 1 },
                  dimensions.width
                )}
                numColumns={1}
              />
            );
          }}
        </SupaBase2Api.FetchContactGET>
      </Modal>
      {/* modales */}
      <Modal visible={BOMModal} animationType={'none'}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('ProjectInfo3Screen');
              setBOMModal(false);
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Icon
            style={StyleSheet.applyWidth(
              { bottom: -20, right: -30 },
              dimensions.width
            )}
            name={'Ionicons/arrow-back'}
            size={30}
          />
        </Touchable>
        {/* heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['#ffd20d'],
              fontFamily: 'Inter_500Medium',
              fontSize: 18,
              marginBottom: 30,
              marginTop: 75,
              paddingLeft: 26,
              paddingRight: 26,
            },
            dimensions.width
          )}
        >
          {'List BOM'}
        </Text>
        {/* HEADERSEARCH */}
        <View
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['HEADERSEARCH 3'],
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 0.5,
                borderColor: theme.colors.textPlaceholder,
                borderLeftWidth: 0.5,
                borderRadius: 8,
                borderRightWidth: 0.5,
                borderTopWidth: 0.5,
                flex: 1,
                flexDirection: 'row',
                height: 48,
                paddingLeft: 16,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors.textPlaceholder}
              name={'Feather/search'}
              size={24}
            />
            <TextInput
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors.divider,
                  borderRadius: 8,
                  paddingBottom: 8,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              placeholder={'Search Here'}
              editable={true}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 0.5,
                borderColor: theme.colors.textPlaceholder,
                borderLeftWidth: 0.5,
                borderRadius: 8,
                borderRightWidth: 0.5,
                borderTopWidth: 0.5,
                height: 48,
                justifyContent: 'center',
                marginLeft: 16,
                width: 48,
              },
              dimensions.width
            )}
          >
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('NewcontactScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Icon
                color={theme.colors.medium}
                name={'Entypo/plus'}
                size={24}
              />
            </Touchable>
          </View>
        </View>

        <SupaBase2Api.FetchContactGET>
          {({ loading, error, data, refetchContact }) => {
            const fetchData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <FlatList
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <Touchable>
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors['Strong'],
                            fontFamily: 'Inter_400Regular',
                            paddingBottom: 16,
                            paddingLeft: 26,
                            paddingRight: 26,
                            paddingTop: 16,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {listData?.firstname}
                      </Text>
                    </Touchable>
                  );
                }}
                data={fetchData}
                listKey={'rCu6RQVq'}
                keyExtractor={listData =>
                  listData?.id || listData?.uuid || JSON.stringify(listData)
                }
                contentContainerStyle={StyleSheet.applyWidth(
                  { flex: 1 },
                  dimensions.width
                )}
                numColumns={1}
              />
            );
          }}
        </SupaBase2Api.FetchContactGET>
      </Modal>
    </ScreenContainer>
  );
};

export default withTheme(ProjectInfo3Screen);
