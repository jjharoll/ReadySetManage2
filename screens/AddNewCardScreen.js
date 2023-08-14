import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  DatePicker,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AddNewCardScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [sliderValue, setSliderValue] = React.useState(0);
  const [switchValue, setSwitchValue] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            height: 48,
            marginTop: 12,
            paddingLeft: 10,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        {/* Back Click */}
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
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon
              color={theme.colors['Custom Color_2']}
              name={'Ionicons/arrow-back-sharp'}
              size={24}
            />
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Strong'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 20,
              marginLeft: 16,
            },
            dimensions.width
          )}
        >
          {'Add New Card'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        {/* Form */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* Card Image */}
          <View>
            <Image
              style={StyleSheet.applyWidth({ height: 300 }, dimensions.width)}
              resizeMode={'center'}
              source={Images.NewCard}
            />
          </View>
          {/* Card Number */}
          <View
            style={StyleSheet.applyWidth(
              { paddingLeft: 20, paddingRight: 20 },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                },
                dimensions.width
              )}
            >
              {'Card Number'}
            </Text>
            <TextInput
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Divider'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors.divider,
                  borderLeftWidth: 1,
                  borderRadius: 16,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 56,
                  marginTop: 14,
                  paddingBottom: 8,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              defaultValue={'3827 4637 3103 4679'}
              editable={true}
              placeholder={'Enter a value...'}
              placeholderTextColor={theme.colors['BG Gray']}
            />
          </View>
          {/* Card Name */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                },
                dimensions.width
              )}
            >
              {'Card Name'}
            </Text>
            <TextInput
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Divider'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors.divider,
                  borderLeftWidth: 1,
                  borderRadius: 16,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 56,
                  marginTop: 14,
                  paddingBottom: 8,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              defaultValue={'Andrew Ainsley'}
              editable={true}
              placeholder={'Enter a value...'}
              placeholderTextColor={theme.colors['BG Gray']}
            />
          </View>

          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row' },
              dimensions.width
            )}
          >
            {/* Expiration Date */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, marginTop: 20, paddingLeft: 20, paddingRight: 20 },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 16,
                  },
                  dimensions.width
                )}
              >
                {'Expiration Date'}
              </Text>
              <DatePicker
                onDateChange={newDatePickerValue => {
                  try {
                    setDatePickerValue(newDatePickerValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { fontSize: 12, marginTop: 5 },
                  dimensions.width
                )}
                date={datePickerValue}
                format={'mm/yy'}
                label={'Date'}
                leftIconMode={'inset'}
                mode={'date'}
                rightIconName={'EvilIcons/calendar'}
                type={'solid'}
              />
            </View>
            {/* CVV */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, marginTop: 20, paddingLeft: 20, paddingRight: 20 },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 16,
                  },
                  dimensions.width
                )}
              >
                {'CVV'}
              </Text>
              <TextInput
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors['Divider'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors.divider,
                    borderLeftWidth: 1,
                    borderRadius: 16,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    fontFamily: 'Inter_400Regular',
                    height: 56,
                    marginTop: 14,
                    paddingBottom: 8,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
                defaultValue={566}
                editable={true}
                keyboardType={'phone-pad'}
                placeholder={'Enter a value...'}
                placeholderTextColor={theme.colors['BG Gray']}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      {/* Button */}
      <View
        style={StyleSheet.applyWidth(
          {
            borderColor: theme.colors['Divider'],
            borderTopWidth: 2,
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingLeft: 20,
            paddingRight: 20,
          },
          dimensions.width
        )}
      >
        {/* Add */}
        <Button
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.primary,
              borderRadius: 100,
              fontFamily: 'System',
              fontWeight: '700',
              height: 58,
              marginBottom: 20,
              marginTop: 15,
              textAlign: 'center',
              width: '100%',
            },
            dimensions.width
          )}
          title={'Add'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(AddNewCardScreen);
