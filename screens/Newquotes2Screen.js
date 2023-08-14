import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GeocodioApi from '../apis/GeocodioApi.js';
import * as SupaBase2Api from '../apis/SupaBase2Api.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import incrementarValor from '../global-functions/incrementarValor';
import multiplicar from '../global-functions/multiplicar';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import getLocationUtil from '../utils/getLocation';
import {
  Button,
  DatePicker,
  Icon,
  ScreenContainer,
  Spacer,
  Stepper,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Modal,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const Newquotes2Screen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [AddresScreen, setAddresScreen] = React.useState('');
  const [PkgTypeModal, setPkgTypeModal] = React.useState(false);
  const [PkgTypeModal2, setPkgTypeModal2] = React.useState(false);
  const [PkgTypeModal3, setPkgTypeModal3] = React.useState(false);
  const [PkgTypeModal4, setPkgTypeModal4] = React.useState(false);
  const [PkgTypeModal5, setPkgTypeModal5] = React.useState(false);
  const [PkgTypeModal7, setPkgTypeModal7] = React.useState(false);
  const [PkgTypeModal8, setPkgTypeModal8] = React.useState(false);
  const [RequiredDate, setRequiredDate] = React.useState(new Date());
  const [addressScreen, setAddressScreen] = React.useState('');
  const [arrayAreas, setArrayAreas] = React.useState([]);
  const [cellphone, setCellphone] = React.useState('');
  const [ciudadScreen, setCiudadScreen] = React.useState('');
  const [codPostal, setCodPostal] = React.useState('');
  const [height, setHeight] = React.useState(0);
  const [l1, setL1] = React.useState(0);
  const [length, setLength] = React.useState(0);
  const [measureUnit, setMeasureUnit] = React.useState('');
  const [nomArea, setNomArea] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [pkgType, setPkgType] = React.useState('Select Area');
  const [pkgType2, setPkgType2] = React.useState('Select Measure');
  const [pkgType3, setPkgType3] = React.useState('Select');
  const [pkgType4, setPkgType4] = React.useState('');
  const [pkgType5, setPkgType5] = React.useState('');
  const [pkgType7, setPkgType7] = React.useState('');
  const [pkgType8, setPkgType8] = React.useState('');
  const [quoteNameProjec, setQuoteNameProjec] = React.useState('');
  const [selectedMode, setSelectedMode] = React.useState('slow');
  const [selectedStep, setSelectedStep] = React.useState('personal');
  const [startedDate, setStartedDate] = React.useState(new Date());
  const [stepperValue, setStepperValue] = React.useState('');
  const [stepperValue2, setStepperValue2] = React.useState('');
  const [subAreas, setSubAreas] = React.useState(0);
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [valorArea, setValorArea] = React.useState(0);
  const [width, setWidth] = React.useState(0);

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={false}
      hasTopSafeArea={false}
      scrollable={true}
    >
      <View>
        {/* Tabs View */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 16,
              paddingBottom: 16,
              paddingLeft: 32,
              paddingRight: 32,
            },
            dimensions.width
          )}
        >
          {/* Personal */}
          <View>
            {/* Active */}
            <>
              {!(selectedStep === 'personal') ? null : (
                <Touchable>
                  {/* Personal Active */}
                  <View
                    style={StyleSheet.applyWidth(
                      { alignItems: 'center', justifyContent: 'center' },
                      dimensions.width
                    )}
                  >
                    {/* image */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: theme.colors['#ffd20d'],
                          borderRadius: 10,
                          height: 55,
                          justifyContent: 'center',
                          overflow: 'hidden',
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Icon
                        color={theme.colors['Strong']}
                        name={'MaterialCommunityIcons/warehouse'}
                        size={24}
                      />
                    </View>
                    {/* tab name */}
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Inter_400Regular',
                          fontSize: 12,
                          opacity: 0.6,
                          paddingTop: 6,
                        },
                        dimensions.width
                      )}
                    >
                      {'Info'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            {/* Inactve */}
            <>
              {selectedStep === 'personal' ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setSelectedStep('personal');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* Personal Inactive */}
                  <View
                    style={StyleSheet.applyWidth(
                      { alignItems: 'center', justifyContent: 'center' },
                      dimensions.width
                    )}
                  >
                    {/* image */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: theme.colors.bGGray,
                          borderRadius: 10,
                          height: 55,
                          justifyContent: 'center',
                          overflow: 'hidden',
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Icon
                        name={'MaterialCommunityIcons/warehouse'}
                        size={24}
                      />
                    </View>
                    {/* tab name */}
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Inter_400Regular',
                          fontSize: 12,
                          opacity: 0.6,
                          paddingTop: 6,
                        },
                        dimensions.width
                      )}
                    >
                      {'Info'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
          </View>
          {/* Divider Active */}
          <>
            {selectedStep === 'personal' ? null : (
              <View
                style={StyleSheet.applyWidth(
                  {
                    borderBottomWidth: 4,
                    borderColor: theme.colors['#ffd20d'],
                    borderStyle: 'dotted',
                    flex: 1,
                    height: 2,
                    marginTop: -16,
                  },
                  dimensions.width
                )}
              />
            )}
          </>
          {/* Divider Inactive */}
          <>
            {!(selectedStep === 'personal') ? null : (
              <View
                style={StyleSheet.applyWidth(
                  {
                    borderBottomWidth: 4,
                    borderColor: theme.colors.divider,
                    borderStyle: 'dotted',
                    flex: 1,
                    marginTop: -16,
                  },
                  dimensions.width
                )}
              />
            )}
          </>
          {/* Package */}
          <View>
            {/* Active */}
            <>
              {!(selectedStep === 'package') ? null : (
                <Touchable>
                  {/* Package Active */}
                  <View
                    style={StyleSheet.applyWidth(
                      { alignItems: 'center', justifyContent: 'center' },
                      dimensions.width
                    )}
                  >
                    {/* image */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: theme.colors['#ffd20d'],
                          borderRadius: 10,
                          height: 55,
                          justifyContent: 'center',
                          overflow: 'hidden',
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Icon
                        color={theme.colors['Strong']}
                        name={'AntDesign/book'}
                        size={24}
                      />
                    </View>
                    {/* tab name */}
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Inter_400Regular',
                          fontSize: 12,
                          opacity: 0.6,
                          paddingTop: 6,
                        },
                        dimensions.width
                      )}
                    >
                      {'Quote'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            {/* Inactive */}
            <>
              {selectedStep === 'package' ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setSelectedStep('package');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* Package Inactive */}
                  <View
                    style={StyleSheet.applyWidth(
                      { alignItems: 'center', justifyContent: 'center' },
                      dimensions.width
                    )}
                  >
                    {/* image */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: theme.colors.bGGray,
                          borderRadius: 10,
                          height: 55,
                          justifyContent: 'center',
                          overflow: 'hidden',
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Icon name={'AntDesign/book'} size={24} />
                    </View>
                    {/* tab name */}
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Inter_400Regular',
                          fontSize: 12,
                          opacity: 0.6,
                          paddingTop: 6,
                        },
                        dimensions.width
                      )}
                    >
                      {'Quote'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
          </View>
          {/* Divider Active */}
          <>
            {!(selectedStep === 'finish') ? null : (
              <View
                style={StyleSheet.applyWidth(
                  {
                    borderBottomWidth: 4,
                    borderColor: theme.colors['#ffd20d'],
                    borderStyle: 'dotted',
                    flex: 1,
                    height: 2,
                    marginTop: -16,
                  },
                  dimensions.width
                )}
              />
            )}
          </>
          {/* Divider Inactive */}
          <>
            {selectedStep === 'finish' ? null : (
              <View
                style={StyleSheet.applyWidth(
                  {
                    borderBottomWidth: 4,
                    borderColor: theme.colors.divider,
                    borderStyle: 'dotted',
                    flex: 1,
                    marginTop: -16,
                  },
                  dimensions.width
                )}
              />
            )}
          </>
          {/* Finish */}
          <View>
            {/* Active */}
            <>
              {!(selectedStep === 'finish') ? null : (
                <Touchable>
                  {/* Finish Active */}
                  <View
                    style={StyleSheet.applyWidth(
                      { alignItems: 'center', justifyContent: 'center' },
                      dimensions.width
                    )}
                  >
                    {/* image */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: theme.colors['#ffd20d'],
                          borderRadius: 10,
                          height: 55,
                          justifyContent: 'center',
                          overflow: 'hidden',
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Icon
                        color={theme.colors['Strong']}
                        name={'MaterialIcons/attach-money'}
                        size={24}
                      />
                    </View>
                    {/* tab name */}
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Inter_400Regular',
                          fontSize: 12,
                          opacity: 0.6,
                          paddingTop: 6,
                        },
                        dimensions.width
                      )}
                    >
                      {'Finish'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            {/* Inactive */}
            <>
              {selectedStep === 'finish' ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setSelectedStep('finish');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* Finish Inactive */}
                  <View
                    style={StyleSheet.applyWidth(
                      { alignItems: 'center', justifyContent: 'center' },
                      dimensions.width
                    )}
                  >
                    {/* image */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: theme.colors.bGGray,
                          borderRadius: 10,
                          height: 55,
                          justifyContent: 'center',
                          overflow: 'hidden',
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Icon name={'MaterialIcons/attach-money'} size={24} />
                    </View>
                    {/* tab name */}
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Inter_400Regular',
                          fontSize: 12,
                          opacity: 0.6,
                          paddingTop: 6,
                        },
                        dimensions.width
                      )}
                    >
                      {'Cost'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
          </View>
        </View>
        {/* Personal Data View */}
        <>
          {!(selectedStep === 'personal') ? null : (
            <View
              style={StyleSheet.applyWidth(
                {
                  paddingBottom: 16,
                  paddingLeft: 32,
                  paddingRight: 32,
                  paddingTop: 16,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { paddingBottom: 16, paddingTop: 16 },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'Name Project '}
                </Text>
                <TextInput
                  onChangeText={newTextInputValue => {
                    try {
                      setQuoteNameProjec(newTextInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.bGGray,
                      borderBottomWidth: 1,
                      borderColor: theme.colors.divider,
                      borderLeftWidth: 1,
                      borderRadius: 8,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      height: 50,
                      marginTop: 10,
                      paddingBottom: 8,
                      paddingLeft: 16,
                      paddingRight: 8,
                      paddingTop: 8,
                    },
                    dimensions.width
                  )}
                  value={quoteNameProjec}
                  placeholder={'Enter name project'}
                  placeholderTextColor={theme.colors.textPlaceholder}
                  selectionColor={theme.colors.appGreen}
                  textContentType={'none'}
                />
              </View>
              {/* inputFecha */}
              <View
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['inputFecha'],
                  dimensions.width
                )}
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
                  {'Started date:'}
                </Text>
                <DatePicker
                  style={StyleSheet.applyWidth(
                    { marginTop: 4 },
                    dimensions.width
                  )}
                  date={startedDate}
                  label={' '}
                  format={'dd-mm-yyyy'}
                  leftIconMode={'inset'}
                  mode={'date'}
                  rightIconName={'Feather/calendar'}
                  type={'solid'}
                />
              </View>
              {/* inputFecha2 */}
              <View
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['inputFecha'],
                  dimensions.width
                )}
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
                  {'Required date:'}
                </Text>
                <DatePicker
                  style={StyleSheet.applyWidth(
                    { marginTop: 4 },
                    dimensions.width
                  )}
                  date={RequiredDate}
                  label={' '}
                  format={'dd-mm-yyyy'}
                  leftIconMode={'inset'}
                  mode={'date'}
                  rightIconName={'Feather/calendar'}
                  type={'solid'}
                />
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { paddingBottom: 16, paddingTop: 16 },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'Job type'}
                </Text>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.bGGray,
                      borderBottomWidth: 1,
                      borderColor: theme.colors.divider,
                      borderLeftWidth: 1,
                      borderRadius: 12,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      flexDirection: 'row',
                      height: 50,
                      justifyContent: 'space-between',
                      marginTop: 10,
                      paddingLeft: 16,
                      paddingRight: 10,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['#ffd20d']}
                    name={'Ionicons/md-build-outline'}
                    size={24}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        { fontSize: 15 }
                      ),
                      dimensions.width
                    )}
                  >
                    {pkgType4}
                  </Text>

                  <Touchable
                    onPress={() => {
                      try {
                        setPkgTypeModal4(true);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    <Icon
                      color={theme.colors.textPlaceholder}
                      name={'Entypo/chevron-right'}
                      size={24}
                    />
                  </Touchable>
                </View>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { paddingBottom: 16, paddingTop: 16 },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'Contact '}
                </Text>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.bGGray,
                      borderBottomWidth: 1,
                      borderColor: theme.colors.divider,
                      borderLeftWidth: 1,
                      borderRadius: 12,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      flexDirection: 'row',
                      height: 50,
                      justifyContent: 'space-between',
                      marginTop: 10,
                      paddingLeft: 16,
                      paddingRight: 10,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['#ffd20d']}
                    name={'AntDesign/contacts'}
                    size={24}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      GlobalStyles.TextStyles(theme)['Text'],
                      dimensions.width
                    )}
                  >
                    {pkgType5}
                  </Text>

                  <Touchable
                    onPress={() => {
                      try {
                        setPkgTypeModal5(true);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    <Icon
                      color={theme.colors.textPlaceholder}
                      name={'Entypo/chevron-right'}
                      size={24}
                    />
                  </Touchable>
                </View>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { paddingBottom: 16, paddingTop: 16 },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'Address'}
                </Text>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.bGGray,
                      borderBottomWidth: 1,
                      borderColor: theme.colors.divider,
                      borderLeftWidth: 1,
                      borderRadius: 12,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      flexDirection: 'row',
                      height: 50,
                      justifyContent: 'space-between',
                      marginTop: 10,
                      paddingLeft: 16,
                      paddingRight: 10,
                    },
                    dimensions.width
                  )}
                >
                  <TextInput
                    onChangeText={newTextInputValue => {
                      try {
                        setAddresScreen(newTextInputValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.TextInputStyles(theme)['Text Input'],
                      dimensions.width
                    )}
                    value={AddresScreen}
                    placeholder={'enter Address'}
                    autoCapitalize={'none'}
                    changeTextDelay={500}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      GlobalStyles.TextStyles(theme)['Text'],
                      dimensions.width
                    )}
                  >
                    {Constants['addresReal']}
                  </Text>

                  <Touchable
                    onPress={() => {
                      const handler = async () => {
                        try {
                          const location = await getLocationUtil();
                          console.log(location);
                          setGlobalVariableValue({
                            key: 'location',
                            value: location,
                          });
                          const latitude = location?.latitude;
                          const longitude = location?.longitude;
                          setGlobalVariableValue({
                            key: 'latitude',
                            value: latitude,
                          });
                          setGlobalVariableValue({
                            key: 'longitude',
                            value: longitude,
                          });
                          const result_addres = (
                            await GeocodioApi.reverseGeocodeGET(Constants, {
                              api_key:
                                '66d3d7a4d44d79a6329daab6d29a6aba697b2b3',
                              latitude: latitude,
                              longitude: longitude,
                            })
                          )?.json;
                          const dirreccion = result_addres?.address;
                          setGlobalVariableValue({
                            key: 'addresReal',
                            value: dirreccion,
                          });
                          console.log(Constants['addresReal']);
                        } catch (err) {
                          console.error(err);
                        }
                      };
                      handler();
                    }}
                  >
                    <Icon
                      color={theme.colors.textPlaceholder}
                      name={'Entypo/chevron-right'}
                      size={24}
                    />
                  </Touchable>
                </View>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { paddingBottom: 16, paddingTop: 16 },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'City'}
                </Text>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.bGGray,
                      borderBottomWidth: 1,
                      borderColor: theme.colors.divider,
                      borderLeftWidth: 1,
                      borderRadius: 12,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      flexDirection: 'row',
                      height: 50,
                      justifyContent: 'space-between',
                      marginTop: 10,
                      paddingLeft: 16,
                      paddingRight: 10,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['#ffd20d']}
                    name={'MaterialCommunityIcons/city-variant-outline'}
                    size={24}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      GlobalStyles.TextStyles(theme)['Text'],
                      dimensions.width
                    )}
                  >
                    {pkgType7}
                  </Text>

                  <Touchable
                    onPress={() => {
                      try {
                        setPkgTypeModal7(true);
                        setCiudadScreen(pkgType7);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    <Icon
                      color={theme.colors.textPlaceholder}
                      name={'Entypo/chevron-right'}
                      size={24}
                    />
                  </Touchable>
                </View>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { paddingBottom: 16, paddingTop: 16 },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'Postal Zip'}
                </Text>
                <TextInput
                  onChangeText={newTextInputValue => {
                    try {
                      setCodPostal(newTextInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.bGGray,
                      borderBottomWidth: 1,
                      borderColor: theme.colors.divider,
                      borderLeftWidth: 1,
                      borderRadius: 8,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      height: 50,
                      marginTop: 10,
                      paddingBottom: 8,
                      paddingLeft: 16,
                      paddingRight: 8,
                      paddingTop: 8,
                    },
                    dimensions.width
                  )}
                  value={codPostal}
                  placeholder={'00000'}
                  keyboardType={'numeric'}
                  placeholderTextColor={theme.colors.textPlaceholder}
                  textContentType={'none'}
                />
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { marginTop: 8, paddingBottom: 16, paddingTop: 16 },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'Contact Number'}
                </Text>
                <TextInput
                  onChangeText={newTextInputValue => {
                    try {
                      setPhone(newTextInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.bGGray,
                      borderBottomWidth: 1,
                      borderColor: theme.colors.divider,
                      borderLeftWidth: 1,
                      borderRadius: 8,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      height: 50,
                      marginTop: 10,
                      paddingBottom: 8,
                      paddingLeft: 16,
                      paddingRight: 8,
                      paddingTop: 8,
                    },
                    dimensions.width
                  )}
                  value={phone}
                  placeholder={'+1  (415) xxx-xxx'}
                  keyboardType={'numeric'}
                  placeholderTextColor={theme.colors.textPlaceholder}
                  textContentType={'none'}
                />
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { marginTop: 8, paddingBottom: 16, paddingTop: 16 },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'Contact tel'}
                </Text>
                <TextInput
                  onChangeText={newTextInputValue => {
                    try {
                      setCellphone(newTextInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.bGGray,
                      borderBottomWidth: 1,
                      borderColor: theme.colors.divider,
                      borderLeftWidth: 1,
                      borderRadius: 8,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      height: 50,
                      marginTop: 10,
                      paddingBottom: 8,
                      paddingLeft: 16,
                      paddingRight: 8,
                      paddingTop: 8,
                    },
                    dimensions.width
                  )}
                  value={cellphone}
                  placeholder={'+1  (415) xxx-xxx'}
                  keyboardType={'numeric'}
                  placeholderTextColor={theme.colors.textPlaceholder}
                  textContentType={'none'}
                />
              </View>
              {/* Button Solid */}
              <Button
                onPress={() => {
                  try {
                    setGlobalVariableValue({
                      key: 'ContactAddres',
                      value: AddresScreen,
                    });
                    setGlobalVariableValue({
                      key: 'ContactPostal',
                      value: codPostal,
                    });
                    setGlobalVariableValue({
                      key: 'ContactPhone',
                      value: phone,
                    });
                    setGlobalVariableValue({
                      key: 'contactCellphone',
                      value: cellphone,
                    });
                    setGlobalVariableValue({
                      key: 'ContactProject',
                      value: quoteNameProjec,
                    });
                    setGlobalVariableValue({
                      key: 'ContactCity',
                      value: pkgType7,
                    });
                    setGlobalVariableValue({
                      key: 'ContactName',
                      value: pkgType5,
                    });
                    setGlobalVariableValue({
                      key: 'ContacLast',
                      value: pkgType5,
                    });
                    setGlobalVariableValue({
                      key: 'ContactRequiredDate',
                      value: RequiredDate,
                    });
                    setGlobalVariableValue({
                      key: 'ContactStarteDate',
                      value: startedDate,
                    });
                    setGlobalVariableValue({
                      key: 'totalAcumulado',
                      value: 0,
                    });
                    setSelectedStep('package');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors['Strong'],
                    borderRadius: 12,
                    color: theme.colors['#ffd20d'],
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 16,
                    height: 51,
                    marginBottom: 5,
                    marginTop: 5,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
                icon={'MaterialCommunityIcons/page-next-outline'}
                title={'Next'}
              />
            </View>
          )}
        </>
        {/* Package View */}
        <>
          {!(selectedStep === 'package') ? null : (
            <View
              style={StyleSheet.applyWidth(
                {
                  paddingBottom: 16,
                  paddingLeft: 32,
                  paddingRight: 32,
                  paddingTop: 16,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              {/* CampoDeplegableNewQuotes */}
              <View
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['CampoDeplegableNewQuotes'],
                  dimensions.width
                )}
              >
                {/* heading */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'Type Area'}
                </Text>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      marginTop: 16,
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Touchable
                    onPress={() => {
                      try {
                        setPkgTypeModal(true);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={StyleSheet.applyWidth(
                      { width: '100%' },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: theme.colors.bGGray,
                          borderRadius: 15,
                          flexDirection: 'row',
                          height: 55,
                          justifyContent: 'space-between',
                          paddingLeft: 16,
                          paddingRight: 10,
                          width: '100%',
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
                            color: theme.colors.custom_rgb0_0_0,
                            fontFamily: 'Inter_500Medium',
                            textAlign: 'left',
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {pkgType}
                      </Text>
                      <Icon
                        color={theme.colors.textPlaceholder}
                        name={'Entypo/chevron-right'}
                        size={24}
                      />
                    </View>
                  </Touchable>
                </View>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { paddingBottom: 16, paddingTop: 16, width: '100%' },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'Select subArea'}
                </Text>
                {/* Modes */}
                <View
                  style={StyleSheet.applyWidth(
                    { flexDirection: 'row', marginTop: 16 },
                    dimensions.width
                  )}
                >
                  {/* Slow */}
                  <View
                    style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                  >
                    {/* Mode 1 Active */}
                    <>
                      {!(selectedMode === 'slow') ? null : (
                        <Touchable>
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                backgroundColor: theme.colors['#ffd20d'],
                                borderRadius: 12,
                                height: 140,
                                justifyContent: 'center',
                                paddingBottom: 12,
                                paddingLeft: 12,
                                paddingRight: 12,
                                paddingTop: 12,
                              },
                              dimensions.width
                            )}
                          >
                            <Icon
                              style={StyleSheet.applyWidth(
                                { opacity: 0.5 },
                                dimensions.width
                              )}
                              name={'MaterialCommunityIcons/wall'}
                              size={40}
                            />
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors['Strong'],
                                  fontFamily: 'Inter_600SemiBold',
                                  marginTop: 22,
                                  opacity: 0.7,
                                  textAlign: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              {'Wall'}
                            </Text>

                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors['Strong'],
                                  fontFamily: 'Inter_600SemiBold',
                                  marginTop: 22,
                                  opacity: 0.7,
                                  textAlign: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              {measureUnit}
                            </Text>
                          </View>
                        </Touchable>
                      )}
                    </>
                    {/* Mode 1 Inactive */}
                    <>
                      {selectedMode === 'slow' ? null : (
                        <Touchable
                          onPress={() => {
                            try {
                              setSelectedMode('slow');
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                backgroundColor: theme.colors.bGGray,
                                borderRadius: 12,
                                height: 140,
                                justifyContent: 'center',
                                paddingBottom: 12,
                                paddingLeft: 12,
                                paddingRight: 12,
                                paddingTop: 12,
                              },
                              dimensions.width
                            )}
                          >
                            <Icon
                              style={StyleSheet.applyWidth(
                                { opacity: 0.5 },
                                dimensions.width
                              )}
                              name={'MaterialCommunityIcons/wall'}
                              size={40}
                            />
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.strong,
                                  fontFamily: 'Inter_600SemiBold',
                                  marginTop: 22,
                                  opacity: 0.7,
                                  textAlign: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              {'Wall'}
                            </Text>

                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.strong,
                                  fontFamily: 'Inter_600SemiBold',
                                  marginTop: 22,
                                  opacity: 0.7,
                                  textAlign: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              {measureUnit}
                            </Text>
                          </View>
                        </Touchable>
                      )}
                    </>
                  </View>
                  <Spacer bottom={8} left={8} right={8} top={8} />
                  {/* Medium */}
                  <View
                    style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                  >
                    {/* Mode 2 Active */}
                    <>
                      {!(selectedMode === 'medium') ? null : (
                        <Touchable>
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                backgroundColor: theme.colors['#ffd20d'],
                                borderRadius: 12,
                                height: 140,
                                justifyContent: 'center',
                                paddingBottom: 12,
                                paddingLeft: 12,
                                paddingRight: 12,
                                paddingTop: 12,
                              },
                              dimensions.width
                            )}
                          >
                            <Icon
                              style={StyleSheet.applyWidth(
                                { opacity: 0.5 },
                                dimensions.width
                              )}
                              name={'MaterialCommunityIcons/floor-plan'}
                              size={40}
                            />
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors['Strong'],
                                  fontFamily: 'Inter_600SemiBold',
                                  marginTop: 22,
                                  opacity: 0.7,
                                  textAlign: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              {'Floor'}
                            </Text>

                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors['Strong'],
                                  fontFamily: 'Inter_600SemiBold',
                                  marginTop: 22,
                                  opacity: 0.7,
                                  textAlign: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              {measureUnit}
                            </Text>
                          </View>
                        </Touchable>
                      )}
                    </>
                    {/* Mode 2 Inactive */}
                    <>
                      {selectedMode === 'medium' ? null : (
                        <Touchable
                          onPress={() => {
                            try {
                              setSelectedMode('medium');
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                backgroundColor: theme.colors.bGGray,
                                borderRadius: 12,
                                height: 140,
                                justifyContent: 'center',
                                paddingBottom: 12,
                                paddingLeft: 12,
                                paddingRight: 12,
                                paddingTop: 12,
                              },
                              dimensions.width
                            )}
                          >
                            <Icon
                              style={StyleSheet.applyWidth(
                                { opacity: 0.5 },
                                dimensions.width
                              )}
                              name={'MaterialCommunityIcons/floor-plan'}
                              size={40}
                            />
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.strong,
                                  fontFamily: 'Inter_600SemiBold',
                                  marginTop: 22,
                                  opacity: 0.7,
                                  textAlign: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              {'Floor'}
                            </Text>

                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.strong,
                                  fontFamily: 'Inter_600SemiBold',
                                  marginTop: 22,
                                  opacity: 0.7,
                                  textAlign: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              {measureUnit}
                            </Text>
                          </View>
                        </Touchable>
                      )}
                    </>
                  </View>
                  <Spacer bottom={8} left={8} right={8} top={8} />
                  {/* Fast */}
                  <View
                    style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                  >
                    {/* Mode 3 Active */}
                    <>
                      {!(selectedMode === 'fast') ? null : (
                        <Touchable>
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                backgroundColor: theme.colors['#ffd20d'],
                                borderRadius: 12,
                                height: 140,
                                justifyContent: 'center',
                                paddingBottom: 12,
                                paddingLeft: 12,
                                paddingRight: 12,
                                paddingTop: 12,
                              },
                              dimensions.width
                            )}
                          >
                            <Icon
                              style={StyleSheet.applyWidth(
                                { opacity: 0.5 },
                                dimensions.width
                              )}
                              name={'MaterialCommunityIcons/home-roof'}
                              size={40}
                            />
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors['Strong'],
                                  fontFamily: 'Inter_600SemiBold',
                                  marginTop: 22,
                                  opacity: 0.7,
                                  textAlign: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              {'Roof'}
                            </Text>

                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors['Strong'],
                                  fontFamily: 'Inter_600SemiBold',
                                  marginTop: 22,
                                  opacity: 0.7,
                                  textAlign: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              {measureUnit}
                            </Text>
                          </View>
                        </Touchable>
                      )}
                    </>
                    {/* Mode 3 Inactive */}
                    <>
                      {selectedMode === 'fast' ? null : (
                        <Touchable
                          onPress={() => {
                            try {
                              setSelectedMode('fast');
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                backgroundColor: theme.colors.bGGray,
                                borderRadius: 12,
                                height: 140,
                                justifyContent: 'center',
                                paddingBottom: 12,
                                paddingLeft: 12,
                                paddingRight: 12,
                                paddingTop: 12,
                              },
                              dimensions.width
                            )}
                          >
                            <Icon
                              style={StyleSheet.applyWidth(
                                { opacity: 0.5 },
                                dimensions.width
                              )}
                              name={'MaterialCommunityIcons/home-roof'}
                              size={40}
                            />
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.strong,
                                  fontFamily: 'Inter_600SemiBold',
                                  marginTop: 22,
                                  opacity: 0.7,
                                  textAlign: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              {'Roof'}
                            </Text>

                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.strong,
                                  fontFamily: 'Inter_600SemiBold',
                                  marginTop: 22,
                                  opacity: 0.7,
                                  textAlign: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              {measureUnit}
                            </Text>
                          </View>
                        </Touchable>
                      )}
                    </>
                  </View>
                </View>
              </View>
              {/* campoinut */}
              <View
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['campoinut 2'],
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'Width'}
                </Text>
                <TextInput
                  onChangeText={newTextInputValue => {
                    try {
                      setWidth(newTextInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.bGGray,
                      borderBottomWidth: 1,
                      borderColor: theme.colors.divider,
                      borderLeftWidth: 1,
                      borderRadius: 8,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      height: 50,
                      marginTop: 10,
                      paddingBottom: 8,
                      paddingLeft: 16,
                      paddingRight: 8,
                      paddingTop: 8,
                    },
                    dimensions.width
                  )}
                  value={width}
                  keyboardType={'numeric'}
                  placeholder={'Enter a value...'}
                  placeholderTextColor={theme.colors.textPlaceholder}
                  textContentType={'none'}
                />
              </View>
              {/* campoinut */}
              <View
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['campoinut 2'],
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'Height'}
                </Text>
                <TextInput
                  onChangeText={newTextInputValue => {
                    try {
                      setHeight(newTextInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.bGGray,
                      borderBottomWidth: 1,
                      borderColor: theme.colors.divider,
                      borderLeftWidth: 1,
                      borderRadius: 8,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      height: 50,
                      marginTop: 10,
                      paddingBottom: 8,
                      paddingLeft: 16,
                      paddingRight: 8,
                      paddingTop: 8,
                    },
                    dimensions.width
                  )}
                  value={height}
                  keyboardType={'numeric'}
                  placeholder={'Enter a value...'}
                  placeholderTextColor={theme.colors.textPlaceholder}
                  textContentType={'none'}
                />
              </View>
              {/* campoinut */}
              <View
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['campoinut 2'],
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'AREA:'}
                </Text>
                {/* Text 2 */}
                <Text
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      fontSize: 28,
                      textDecorationColor: theme.colors['#ffd20d'],
                      textDecorationLine: 'underline',
                    }),
                    dimensions.width
                  )}
                >
                  {subAreas} {measureUnit}
                </Text>
              </View>
              {/* stepet elegante */}
              <View
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['stepet elegante'],
                  dimensions.width
                )}
              >
                <Stepper
                  onChange={newStepperValue => {
                    const stepperValue = newStepperValue;
                    try {
                      setStepperValue(stepperValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  value={stepperValue}
                />
              </View>
              {/* notasNewQuotes */}
              <View
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['notasNewQuotes 2'],
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'Notes'}
                </Text>
                <TextInput
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.bGGray,
                      borderBottomWidth: 1,
                      borderColor: theme.colors.divider,
                      borderLeftWidth: 1,
                      borderRadius: 8,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      height: 140,
                      marginTop: 16,
                      paddingBottom: 16,
                      paddingLeft: 16,
                      paddingRight: 16,
                      paddingTop: 16,
                    },
                    dimensions.width
                  )}
                  placeholder={'Type...'}
                  multiline={true}
                  numberOfLines={4}
                  placeholderTextColor={theme.colors.textPlaceholder}
                />
              </View>
              {/* Button Solid */}
              <Button
                onPress={() => {
                  try {
                    const result = multiplicar(height, width);
                    setSubAreas(result);
                    const suma = incrementarValor(
                      Constants['totalArea'],
                      result
                    );
                    console.log('dumssssss', Constants['totalArea']);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors['Strong'],
                    borderRadius: 12,
                    color: theme.colors['#ffd20d'],
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 16,
                    height: 51,
                    marginBottom: 5,
                    marginTop: 5,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
                icon={'Ionicons/ios-add'}
                title={'Add Area'}
              />
              {/* CampoDeplegableNewQuotes */}
              <View
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['CampoDeplegableNewQuotes'],
                  dimensions.width
                )}
              >
                {/* heading */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'Type Service'}
                </Text>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      marginTop: 16,
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Touchable
                    onPress={() => {
                      try {
                        setPkgTypeModal3(true);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={StyleSheet.applyWidth(
                      { width: '100%' },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: theme.colors.bGGray,
                          borderRadius: 15,
                          flexDirection: 'row',
                          height: 55,
                          justifyContent: 'space-between',
                          paddingLeft: 16,
                          paddingRight: 10,
                          width: '100%',
                        },
                        dimensions.width
                      )}
                    >
                      <Icon
                        color={theme.colors['#ffd20d']}
                        name={'MaterialCommunityIcons/room-service-outline'}
                        size={24}
                      />
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.custom_rgb0_0_0,
                            fontFamily: 'Inter_500Medium',
                            textAlign: 'left',
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {null}
                      </Text>
                      <Icon
                        color={theme.colors.textPlaceholder}
                        name={'Entypo/chevron-right'}
                        size={24}
                      />
                    </View>
                  </Touchable>
                </View>
              </View>
              {/* View 2 */}
              <View>
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.custom_rgb0_0_0,
                      fontFamily: 'Inter_500Medium',
                      fontSize: 20,
                      textAlign: 'left',
                      textTransform: 'capitalize',
                    },
                    dimensions.width
                  )}
                >
                  {'BOM\n'}
                </Text>
                {/* stepet elegante */}
                <View
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ViewStyles(theme)['stepet elegante'],
                    dimensions.width
                  )}
                >
                  <Stepper
                    onChange={newStepperValue => {
                      const stepperValue = newStepperValue;
                      try {
                        setStepperValue(stepperValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    value={stepperValue}
                  />
                </View>
              </View>
              {/* Button Solid */}
              <Button
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors['Strong'],
                    borderRadius: 12,
                    color: theme.colors['#ffd20d'],
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 16,
                    height: 51,
                    marginBottom: 5,
                    marginTop: 20,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
                icon={'Ionicons/ios-add'}
                title={'Add Service'}
              />
              {/* Button Solid */}
              <Button
                onPress={() => {
                  try {
                    setSelectedStep('finish');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors['Strong'],
                    borderRadius: 12,
                    color: theme.colors['#ffd20d'],
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 16,
                    height: 51,
                    marginBottom: 5,
                    marginTop: 5,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
                icon={'MaterialCommunityIcons/dolly'}
                title={'Continue'}
              />
            </View>
          )}
        </>
        {/* Finish View */}
        <>
          {!(selectedStep === 'finish') ? null : (
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  height: '70%',
                  justifyContent: 'center',
                  paddingLeft: 16,
                  paddingRight: 16,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              {/* addimagenes */}
              <View
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['addimagenes'],
                    { marginTop: 125 }
                  ),
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_300Light',
                    },
                    dimensions.width
                  )}
                >
                  {'Evidence'}
                </Text>

                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('AddEvidenciasScreen');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    { marginTop: 10 },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: theme.colors['#ffd20d'],
                        borderBottomWidth: 1,
                        borderColor: theme.colors['Light'],
                        borderLeftWidth: 1,
                        borderRadius: 12,
                        borderRightWidth: 1,
                        borderStyle: 'dashed',
                        borderTopWidth: 1,
                        height: 140,
                        justifyContent: 'center',
                        width: 140,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      color={theme.colors['Strong']}
                      name={'AntDesign/camerao'}
                      size={35}
                    />
                  </View>
                </Touchable>
              </View>
              {/* notasNewQuotes */}
              <View
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['notasNewQuotes'],
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'Notes'}
                </Text>
                <TextInput
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.bGGray,
                      borderBottomWidth: 1,
                      borderColor: theme.colors.divider,
                      borderLeftWidth: 1,
                      borderRadius: 8,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      height: 140,
                      marginTop: 16,
                      paddingBottom: 16,
                      paddingLeft: 16,
                      paddingRight: 16,
                      paddingTop: 16,
                    },
                    dimensions.width
                  )}
                  placeholder={'Type...'}
                  multiline={true}
                  numberOfLines={4}
                  placeholderTextColor={theme.colors.textPlaceholder}
                />
              </View>
              {/* campoinut */}
              <View
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['campoinut'],
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'Correo Usuario'}
                </Text>
                <TextInput
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.bGGray,
                      borderBottomWidth: 1,
                      borderColor: theme.colors.divider,
                      borderLeftWidth: 1,
                      borderRadius: 8,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      height: 50,
                      marginTop: 10,
                      paddingBottom: 8,
                      paddingLeft: 16,
                      paddingRight: 8,
                      paddingTop: 8,
                    },
                    dimensions.width
                  )}
                  keyboardType={'numeric'}
                  placeholder={'Enter a value...'}
                  placeholderTextColor={theme.colors.textPlaceholder}
                  textContentType={'none'}
                />
              </View>
              {/* Check Estimates */}
              <Button
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors['Strong'],
                    borderRadius: 12,
                    color: theme.colors['#ffd20d'],
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 16,
                    height: 51,
                    marginBottom: 5,
                    marginTop: 5,
                    textAlign: 'center',
                    width: '100%',
                  },
                  dimensions.width
                )}
                icon={'FontAwesome/external-link'}
                title={'Providers'}
              />
              {/* Check Estimates */}
              <Button
                onPress={() => {
                  try {
                    navigation.navigate('CheckQuoteScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors['Strong'],
                    borderRadius: 12,
                    color: theme.colors['#ffd20d'],
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 16,
                    height: 51,
                    marginBottom: 5,
                    marginTop: 5,
                    textAlign: 'center',
                    width: '100%',
                  },
                  dimensions.width
                )}
                icon={'Feather/dollar-sign'}
                title={'Check Quote'}
              />
              {/* Check Estimates */}
              <Button
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors['Strong'],
                    borderRadius: 12,
                    color: theme.colors['#ffd20d'],
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 16,
                    height: 51,
                    marginBottom: 5,
                    marginTop: 5,
                    textAlign: 'center',
                    width: '100%',
                  },
                  dimensions.width
                )}
                icon={'MaterialCommunityIcons/email-check-outline'}
                title={'Send Email'}
              />
              {/* Check Estimates */}
              <Button
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors['Strong'],
                    borderRadius: 12,
                    color: theme.colors['#ffd20d'],
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 16,
                    height: 51,
                    marginBottom: 5,
                    marginTop: 5,
                    textAlign: 'center',
                    width: '100%',
                  },
                  dimensions.width
                )}
                icon={'Feather/save'}
                title={'Save Quote'}
              />
            </View>
          )}
        </>
      </View>
      {/* modalNewAreas */}
      <>
        {!PkgTypeModal ? null : (
          <Modal animationType={'none'}>
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
              {'Select Area'}
            </Text>

            <SupaBase2Api.FetchAreasGET>
              {({ loading, error, data, refetchAreas }) => {
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
                              setPkgTypeModal(false);
                              setPkgType(listData?.areaname);
                              setNomArea(pkgType);
                              setMeasureUnit(listData?.measurecode);
                              console.log(listData?.id);
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
                            {listData?.areaname}
                          </Text>
                        </Touchable>
                      );
                    }}
                    data={fetchData}
                    listKey={'DWRr45Ie'}
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
            </SupaBase2Api.FetchAreasGET>
          </Modal>
        )}
      </>
      {/* modalNewAreas */}
      <>
        {!PkgTypeModal2 ? null : (
          <Modal animationType={'none'}>
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
              {'Select measure'}
            </Text>

            <SupaBase2Api.FetchManyMeasureGET>
              {({ loading, error, data, refetchManyMeasure }) => {
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
                              console.log(listData?.id);
                              setPkgTypeModal2(false);
                              setPkgType2(listData?.measurenamees);
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
                            {listData?.measurenamees}
                          </Text>
                        </Touchable>
                      );
                    }}
                    data={fetchData}
                    listKey={'qQMaBf7q'}
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
            </SupaBase2Api.FetchManyMeasureGET>
          </Modal>
        )}
      </>
      {/* modalNewAreas */}
      <>
        {!PkgTypeModal3 ? null : (
          <Modal animationType={'none'}>
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
              {'Select service'}
            </Text>

            <SupaBase2Api.FetchServicesGET>
              {({ loading, error, data, refetchServices }) => {
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
                              console.log(listData?.id);
                              setPkgTypeModal3(false);
                              setPkgType3(listData?.servicename);
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
                            {listData?.servicename}
                          </Text>
                        </Touchable>
                      );
                    }}
                    data={fetchData}
                    listKey={'GVUegfpU'}
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
            </SupaBase2Api.FetchServicesGET>
          </Modal>
        )}
      </>
      {/* modalNewAreas */}
      <Modal visible={PkgTypeModal4} animationType={'none'}>
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
          {'Select job type'}
        </Text>

        <SupaBase2Api.FetchCollectionNAme2GET>
          {({ loading, error, data, refetchCollectionNAme2 }) => {
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
                          console.log(listData?.id);
                          setPkgTypeModal4(false);
                          setPkgType4(listData?.collectionname);
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
                listKey={'9CMo5mdp'}
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
        </SupaBase2Api.FetchCollectionNAme2GET>
      </Modal>
      {/* modalNewAreas */}
      <>
        {!PkgTypeModal5 ? null : (
          <Modal animationType={'none'}>
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
              {'Select Contact'}
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
                      setPkgTypeModal5(false);
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
                              setPkgTypeModal5(false);
                              setPkgType5(listData?.firstname);
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
                            {listData?.firstname} {listData?.lastname}
                          </Text>
                        </Touchable>
                      );
                    }}
                    data={fetchData}
                    listKey={'tL26C5XX'}
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
        )}
      </>
      {/* modalNewAreas */}
      <>
        {!PkgTypeModal7 ? null : (
          <Modal animationType={'none'}>
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
              {'Select city'}
            </Text>
            {/* HEADERSEARCH */}
            <View
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ViewStyles(theme)['HEADERSEARCH'],
                  { paddingLeft: 40, paddingRight: 40 }
                ),
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
                    height: 60,
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
                  onChangeText={newTextInputValue => {
                    try {
                      setGlobalVariableValue({
                        key: 'ContactAddres',
                        value: newTextInputValue,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
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
                  value={Constants['ContactAddres']}
                  placeholder={'Search Here'}
                  editable={true}
                  placeholderTextColor={theme.colors.textPlaceholder}
                />
              </View>
            </View>

            <SupaBase2Api.FetchManycityGET>
              {({ loading, error, data, refetchManycity }) => {
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
                              console.log(listData?.id);
                              setPkgTypeModal7(false);
                              setPkgType7(listData?.cityname);
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
                            {listData?.cityname}
                          </Text>
                        </Touchable>
                      );
                    }}
                    data={fetchData}
                    listKey={'L8Qrtglu'}
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
            </SupaBase2Api.FetchManycityGET>
          </Modal>
        )}
      </>
      {/* modalNewAreas */}
      <>
        {!PkgTypeModal8 ? null : (
          <Modal animationType={'none'}>
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
              {'Select Country'}
            </Text>

            <SupaBase2Api.FetchManyCountryGET>
              {({ loading, error, data, refetchManyCountry }) => {
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
                              console.log(listData?.id);
                              setPkgTypeModal8(false);
                              setPkgType8(listData?.countyname);
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
                            {listData?.countyname}
                          </Text>
                        </Touchable>
                      );
                    }}
                    data={fetchData}
                    listKey={'D330wJGq'}
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
            </SupaBase2Api.FetchManyCountryGET>
          </Modal>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(Newquotes2Screen);
