import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const CheckQuoteScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={false}
      scrollable={true}
    >
      {/* header */}
      <View
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['header 4'],
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
          {'Detail Quote'}
        </Text>
      </View>

      <Touchable>
        <Icon
          style={StyleSheet.applyWidth({ right: -300 }, dimensions.width)}
          color={theme.colors['#ffd20d']}
          name={'SimpleLineIcons/size-fullscreen'}
          size={30}
        />
      </Touchable>
      {/* encabezadoFactura */}
      <View>
        {/* Component Title Small */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.custom_rgb149_158_172,
              fontFamily: 'Cantarell_400Regular',
              fontSize: 10,
              marginBottom: 12,
              marginLeft: 12,
              textTransform: 'uppercase',
            },
            dimensions.width
          )}
        >
          {'Contact Information'}
        </Text>
        {/* Input Frame Second Line */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              flexGrow: 0,
              flexShrink: 0,
              marginBottom: 9,
            },
            dimensions.width
          )}
        >
          {/* Text Input Frame */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexGrow: 1,
                flexShrink: 0,
                height: 36,
                justifyContent: 'center',
                marginLeft: 12,
                marginRight: 12,
                maxHeight: 36,
                minHeight: 36,
              },
              dimensions.width
            )}
          >
            {/* Text Input Component */}
            <TextInput
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors.custom_rgb220_225_235,
                  borderLeftWidth: 1,
                  borderRadius: 64,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors.titleBlueBlack,
                  fontFamily: 'Cantarell_400Regular',
                  fontSize: 11,
                  height: '100%',
                  paddingBottom: 0,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 0,
                },
                dimensions.width
              )}
              placeholder={'Address'}
              defaultValue={Constants['ContactProject']}
              placeholderTextColor={theme.colors.custom_rgb108_118_136}
            />
          </View>
        </View>
        {/* Input Frame Top Line */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              flexGrow: 0,
              flexShrink: 0,
              marginBottom: 9,
            },
            dimensions.width
          )}
        >
          {/* Text Input Frame */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexGrow: 1,
                flexShrink: 0,
                height: 36,
                justifyContent: 'center',
                marginLeft: 12,
                marginRight: 4,
                maxHeight: 36,
                minHeight: 36,
              },
              dimensions.width
            )}
          >
            {/* Text Input Component */}
            <TextInput
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors.custom_rgb220_225_235,
                  borderLeftWidth: 1,
                  borderRadius: 64,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors.titleBlueBlack,
                  fontFamily: 'Cantarell_400Regular',
                  fontSize: 11,
                  height: '100%',
                  paddingLeft: 8,
                  paddingRight: 8,
                },
                dimensions.width
              )}
              placeholder={'First Name'}
              defaultValue={Constants['ContactName']}
              placeholderTextColor={theme.colors.custom_rgb108_118_136}
            />
          </View>
          {/* Text Input Frame */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexGrow: 1,
                flexShrink: 0,
                height: 36,
                justifyContent: 'center',
                marginLeft: 4,
                marginRight: 12,
                maxHeight: 36,
                minHeight: 36,
              },
              dimensions.width
            )}
          >
            {/* Text Input Component */}
            <TextInput
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors.custom_rgb220_225_235,
                  borderLeftWidth: 1,
                  borderRadius: 64,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors.titleBlueBlack,
                  fontFamily: 'Cantarell_400Regular',
                  fontSize: 11,
                  height: '100%',
                  paddingLeft: 8,
                  paddingRight: 8,
                },
                dimensions.width
              )}
              placeholder={'Last Name'}
              defaultValue={Constants['ContacLast']}
              placeholderTextColor={theme.colors.custom_rgb108_118_136}
            />
          </View>
        </View>
        {/* Input Frame Second Line */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              flexGrow: 0,
              flexShrink: 0,
              marginBottom: 9,
            },
            dimensions.width
          )}
        >
          {/* Text Input Frame */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexGrow: 1,
                flexShrink: 0,
                height: 36,
                justifyContent: 'center',
                marginLeft: 12,
                marginRight: 12,
                maxHeight: 36,
                minHeight: 36,
              },
              dimensions.width
            )}
          >
            {/* Text Input Component */}
            <TextInput
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors.custom_rgb220_225_235,
                  borderLeftWidth: 1,
                  borderRadius: 64,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors.titleBlueBlack,
                  fontFamily: 'Cantarell_400Regular',
                  fontSize: 11,
                  height: '100%',
                  paddingBottom: 0,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 0,
                },
                dimensions.width
              )}
              placeholder={'Address'}
              defaultValue={Constants['ContactAddres']}
              placeholderTextColor={theme.colors.custom_rgb108_118_136}
            />
          </View>
        </View>
        {/* Input Frame Third Line */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              flexGrow: 0,
              flexShrink: 0,
              marginBottom: 9,
            },
            dimensions.width
          )}
        >
          {/* Text Input Frame */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexGrow: 1,
                flexShrink: 0,
                height: 36,
                justifyContent: 'center',
                marginLeft: 12,
                marginRight: 4,
                maxHeight: 36,
                minHeight: 36,
              },
              dimensions.width
            )}
          >
            {/* Text Input Component */}
            <TextInput
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors.custom_rgb220_225_235,
                  borderLeftWidth: 1,
                  borderRadius: 64,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors.titleBlueBlack,
                  fontFamily: 'Cantarell_400Regular',
                  fontSize: 11,
                  height: '100%',
                  paddingLeft: 8,
                  paddingRight: 8,
                },
                dimensions.width
              )}
              placeholder={'City'}
              defaultValue={Constants['ContactCity']}
              placeholderTextColor={theme.colors.custom_rgb108_118_136}
            />
          </View>
          {/* Text Input Frame */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexGrow: 1,
                flexShrink: 0,
                height: 36,
                justifyContent: 'center',
                marginLeft: 4,
                marginRight: 12,
                maxHeight: 36,
                minHeight: 36,
              },
              dimensions.width
            )}
          >
            {/* Text Input Component */}
            <TextInput
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors.custom_rgb220_225_235,
                  borderLeftWidth: 1,
                  borderRadius: 64,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors.titleBlueBlack,
                  fontFamily: 'Cantarell_400Regular',
                  fontSize: 11,
                  height: '100%',
                  paddingLeft: 8,
                  paddingRight: 8,
                },
                dimensions.width
              )}
              placeholder={'Zip Code'}
              defaultValue={Constants['ContactPostal']}
              placeholderTextColor={theme.colors.custom_rgb108_118_136}
            />
          </View>
        </View>
        {/* Input Frame Fourth Line */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              flexGrow: 0,
              flexShrink: 0,
              marginBottom: 9,
            },
            dimensions.width
          )}
        >
          {/* Text Input Frame */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexGrow: 1,
                flexShrink: 0,
                height: 36,
                justifyContent: 'center',
                marginLeft: 12,
                marginRight: 4,
                maxHeight: 36,
                minHeight: 36,
              },
              dimensions.width
            )}
          >
            {/* Text Input Component */}
            <TextInput
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors.custom_rgb220_225_235,
                  borderLeftWidth: 1,
                  borderRadius: 64,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors.titleBlueBlack,
                  fontFamily: 'Cantarell_400Regular',
                  fontSize: 11,
                  height: '100%',
                  paddingLeft: 8,
                  paddingRight: 8,
                },
                dimensions.width
              )}
              defaultValue={Constants['contactCellphone']}
              placeholder={'Enter a value...'}
              placeholderTextColor={theme.colors.custom_rgb108_118_136}
            />
          </View>
          {/* Text Input Frame */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexGrow: 1,
                flexShrink: 0,
                height: 36,
                justifyContent: 'center',
                marginLeft: 4,
                marginRight: 12,
                maxHeight: 36,
                minHeight: 36,
              },
              dimensions.width
            )}
          >
            {/* Text Input Component */}
            <TextInput
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors.custom_rgb220_225_235,
                  borderLeftWidth: 1,
                  borderRadius: 64,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors.titleBlueBlack,
                  fontFamily: 'Cantarell_400Regular',
                  fontSize: 11,
                  height: '100%',
                  paddingLeft: 8,
                  paddingRight: 8,
                },
                dimensions.width
              )}
              placeholder={'Country'}
              defaultValue={Constants['ContactPhone']}
              placeholderTextColor={theme.colors.custom_rgb108_118_136}
            />
          </View>
        </View>
        {/* Input Frame Fourth Line */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              flexGrow: 0,
              flexShrink: 0,
              marginBottom: 9,
            },
            dimensions.width
          )}
        >
          {/* Text Input Frame */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexGrow: 1,
                flexShrink: 0,
                height: 36,
                justifyContent: 'center',
                marginLeft: 12,
                marginRight: 4,
                maxHeight: 36,
                minHeight: 36,
              },
              dimensions.width
            )}
          >
            {/* Text Input Component */}
            <TextInput
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors.custom_rgb220_225_235,
                  borderLeftWidth: 1,
                  borderRadius: 64,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors.titleBlueBlack,
                  fontFamily: 'Cantarell_400Regular',
                  fontSize: 11,
                  height: '100%',
                  paddingLeft: 8,
                  paddingRight: 8,
                },
                dimensions.width
              )}
              defaultValue={Constants['ContactStarteDate']}
              placeholder={'Enter a value...'}
              placeholderTextColor={theme.colors.custom_rgb108_118_136}
            />
          </View>
          {/* Text Input Frame */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexGrow: 1,
                flexShrink: 0,
                height: 36,
                justifyContent: 'center',
                marginLeft: 4,
                marginRight: 12,
                maxHeight: 36,
                minHeight: 36,
              },
              dimensions.width
            )}
          >
            {/* Text Input Component */}
            <TextInput
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors.custom_rgb220_225_235,
                  borderLeftWidth: 1,
                  borderRadius: 64,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors.titleBlueBlack,
                  fontFamily: 'Cantarell_400Regular',
                  fontSize: 11,
                  height: '100%',
                  paddingLeft: 8,
                  paddingRight: 8,
                },
                dimensions.width
              )}
              placeholder={'Country'}
              defaultValue={Constants['ContactRequiredDate']}
              placeholderTextColor={theme.colors.custom_rgb108_118_136}
            />
          </View>
        </View>
      </View>
      {/* pagometodo */}
      <View>
        {/* Component Title Small */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.custom_rgb149_158_172,
              fontFamily: 'Cantarell_400Regular',
              fontSize: 10,
              marginBottom: 12,
              marginLeft: 12,
              marginTop: 15,
              textTransform: 'uppercase',
            },
            dimensions.width
          )}
        >
          {'Payment Method'}
        </Text>
        {/* Payment Details Method Frame */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', marginLeft: 12 },
            dimensions.width
          )}
        >
          {/* Flex Attribute Frame */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: theme.colors.primary,
                borderLeftWidth: 1,
                borderRadius: 10,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexGrow: 0,
                flexShrink: 0,
                marginRight: 11,
                minWidth: 80,
                width: 80,
              },
              dimensions.width
            )}
          >
            {/* Payment Method Image 1 */}
            <Image
              style={StyleSheet.applyWidth(
                { height: 30, marginBottom: 5, marginTop: 11, width: 30 },
                dimensions.width
              )}
              resizeMode={'contain'}
              source={Images.CheckoutCustomIcons2}
            />
            {/* Option 1 Title */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.primaryTitleUiBaeg,
                  fontFamily: 'Cantarell_400Regular',
                  paddingBottom: 9,
                },
                dimensions.width
              )}
            >
              {'Bank'}
            </Text>
          </View>

          <Touchable>
            {/* Flex Attribute Frame */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderColor: theme.colors.custom_rgb220_225_235,
                  borderLeftWidth: 1,
                  borderRadius: 10,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  flexGrow: 0,
                  flexShrink: 0,
                  marginRight: 11,
                  minWidth: 80,
                  width: 80,
                },
                dimensions.width
              )}
            >
              {/* Payment Method Image 2 */}
              <Image
                style={StyleSheet.applyWidth(
                  { height: 30, marginBottom: 5, marginTop: 11, width: 30 },
                  dimensions.width
                )}
                resizeMode={'contain'}
                source={Images.NewCard}
              />
              {/* Option 2 */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.custom_rgb149_158_172,
                    fontFamily: 'Cantarell_400Regular',
                    paddingBottom: 9,
                  },
                  dimensions.width
                )}
              >
                {'Card'}
              </Text>
            </View>
          </Touchable>

          <Touchable>
            {/* Flex Attribute Frame */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderColor: theme.colors.custom_rgb220_225_235,
                  borderLeftWidth: 1,
                  borderRadius: 10,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  flexGrow: 0,
                  flexShrink: 0,
                  marginRight: 11,
                  minWidth: 80,
                  width: 80,
                },
                dimensions.width
              )}
            >
              {/* Payment Method Image 1 */}
              <Image
                style={StyleSheet.applyWidth(
                  { height: 30, marginBottom: 5, marginTop: 11, width: 30 },
                  dimensions.width
                )}
                resizeMode={'contain'}
                source={Images.Paypal}
              />
              {/* Option 2 */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.custom_rgb149_158_172,
                    fontFamily: 'Cantarell_400Regular',
                    paddingBottom: 9,
                  },
                  dimensions.width
                )}
              >
                {'Paypal'}
              </Text>
            </View>
          </Touchable>
        </View>
      </View>
      {/* Details */}
      <View
        style={StyleSheet.applyWidth(
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          },
          dimensions.width
        )}
      >
        {/* Date */}
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, marginTop: 16, width: '30%' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.viewBG,
                height: 40,
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                  paddingLeft: 16,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'Servic'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                height: 40,
                justifyContent: 'space-between',
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 5,
                paddingLeft: 16,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 15,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'Areas'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                height: 40,
                justifyContent: 'space-between',
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 5,
                paddingLeft: 16,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 15,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'Service'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                height: 40,
                justifyContent: 'space-between',
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 5,
                paddingLeft: 16,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 15,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'BOM'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                height: 40,
                justifyContent: 'space-between',
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 5,
                paddingLeft: 16,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 15,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'Extra'}
            </Text>
          </View>
        </View>
        {/* Number */}
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, marginTop: 16, width: '25%' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors.viewBG,
                height: 40,
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'Quantity'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 13,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {Constants['totalArea']}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 13,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {0}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 13,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {0}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 13,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {0}
            </Text>
          </View>
        </View>
        {/* Balance */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 16, width: '22%' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors.viewBG,
                height: 40,
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'cost'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 13,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {Constants['totalServices']}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 13,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {Constants['totalServices']}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 13,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {0}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 13,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {0}
            </Text>
          </View>
        </View>
        {/* Balance */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 16, width: '22%' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors.viewBG,
                height: 40,
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'c sell'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 13,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {0}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 13,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {0}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 13,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {0}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontSize: 13,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {0}
            </Text>
          </View>
        </View>
        {/* Actions */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 16, width: '22%' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors.viewBG,
                height: 40,
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'action'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Touchable>
              <Icon
                color={theme.colors.textPlaceholder}
                name={'Feather/edit'}
                size={18}
              />
            </Touchable>

            <Touchable
              style={StyleSheet.applyWidth(
                { marginLeft: 12 },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.error}
                name={'AntDesign/delete'}
                size={18}
              />
            </Touchable>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'flex-start',
                flexDirection: 'row',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Touchable>
              <Icon
                color={theme.colors.textPlaceholder}
                name={'Feather/edit'}
                size={18}
              />
            </Touchable>

            <Touchable
              style={StyleSheet.applyWidth(
                { marginLeft: 12 },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.error}
                name={'AntDesign/delete'}
                size={18}
              />
            </Touchable>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Touchable>
              <Icon
                color={theme.colors.textPlaceholder}
                name={'Feather/edit'}
                size={18}
              />
            </Touchable>

            <Touchable
              style={StyleSheet.applyWidth(
                { marginLeft: 12 },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.error}
                name={'AntDesign/delete'}
                size={18}
              />
            </Touchable>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                height: 40,
                justifyContent: 'center',
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Touchable>
              <Icon
                color={theme.colors.textPlaceholder}
                name={'Feather/edit'}
                size={18}
              />
            </Touchable>

            <Touchable
              style={StyleSheet.applyWidth(
                { marginLeft: 12 },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.error}
                name={'AntDesign/delete'}
                size={18}
              />
            </Touchable>
          </View>
        </View>
      </View>
      {/* Total */}
      <View
        style={StyleSheet.applyWidth(
          {
            borderColor: theme.colors.textPlaceholder,
            borderTopWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
            marginRight: 25,
            marginTop: 16,
            paddingBottom: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_600SemiBold',
              fontSize: 15,
              textTransform: 'capitalize',
            },
            dimensions.width
          )}
        >
          {'total:'}
        </Text>

        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_600SemiBold',
              fontSize: 15,
            },
            dimensions.width
          )}
        >
          {'$1850'}
        </Text>
      </View>
      {/* Action Btn */}
      <Button
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Strong'],
            borderRadius: 11,
            bottom: 5,
            color: theme.colors['#ffd20d'],
            fontFamily: 'System',
            fontSize: 18,
            fontWeight: '600',
            height: 51,
            left: 16,
            marginBottom: 20,
            marginTop: 20,
            position: 'absolute',
            right: 16,
            textAlign: 'center',
            textTransform: 'capitalize',
          },
          dimensions.width
        )}
        title={'Save Quote'}
      />
    </ScreenContainer>
  );
};

export default withTheme(CheckQuoteScreen);
