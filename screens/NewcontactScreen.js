import React from 'react';
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
import { Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const NewcontactScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [contact, setContact] = React.useState('');
  const [dateProject, setDateProject] = React.useState(new Date());
  const [nameProject, setNameProject] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', flexDirection: 'row', paddingLeft: 20 },
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
          {'New Contact'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        {/* Details */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          {/* Disclaimer */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom Color_6'],
                borderRadius: 4,
                flexDirection: 'row',
                paddingBottom: 10,
                paddingLeft: 10,
                paddingRight: 15,
                paddingTop: 10,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Primary']}
              name={'Ionicons/ios-information-circle-outline'}
              size={20}
            />
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_300Light',
                  fontSize: 12,
                  marginLeft: 10,
                },
                dimensions.width
              )}
            >
              {'Please enter the details according to the Project'}
            </Text>
          </View>
          {/* Perosonal Photo */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          />
          {/* Full name */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <Text
              style={StyleSheet.applyWidth(
                { color: theme.colors.strong, fontFamily: 'Inter_300Light' },
                dimensions.width
              )}
            >
              {'Name contact'}
            </Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['#ffd20d'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors.divider,
                  borderLeftWidth: 1,
                  borderRadius: 12,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 48,
                  marginTop: 10,
                  paddingBottom: 8,
                  paddingLeft: 20,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              value={nameProject}
              placeholder={'Enter full name project'}
              autoCapitalize={'none'}
              placeholderTextColor={theme.colors['Light']}
            />
          </View>
          {/* Full name */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <Text
              style={StyleSheet.applyWidth(
                { color: theme.colors.strong, fontFamily: 'Inter_300Light' },
                dimensions.width
              )}
            >
              {'Lastname'}
            </Text>
            <TextInput
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['#ffd20d'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors.divider,
                  borderLeftWidth: 1,
                  borderRadius: 12,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 48,
                  marginTop: 10,
                  paddingBottom: 8,
                  paddingLeft: 20,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              placeholder={'Enter full name project'}
              autoCapitalize={'none'}
              placeholderTextColor={theme.colors['Light']}
            />
          </View>
          {/* Full name */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <Text
              style={StyleSheet.applyWidth(
                { color: theme.colors.strong, fontFamily: 'Inter_300Light' },
                dimensions.width
              )}
            >
              {'Company Name'}
            </Text>
            <TextInput
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['#ffd20d'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors.divider,
                  borderLeftWidth: 1,
                  borderRadius: 12,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 48,
                  marginTop: 10,
                  paddingBottom: 8,
                  paddingLeft: 20,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              placeholder={'Enter full name project'}
              autoCapitalize={'none'}
              placeholderTextColor={theme.colors['Light']}
            />
          </View>
          {/* Relationship */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <Text
              style={StyleSheet.applyWidth(
                { color: theme.colors.strong, fontFamily: 'Inter_300Light' },
                dimensions.width
              )}
            >
              {'Contact'}
            </Text>

            <Touchable
              style={StyleSheet.applyWidth({ marginTop: 10 }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['#ffd20d'],
                    borderRadius: 12,
                    flexDirection: 'row',
                    height: 48,
                    justifyContent: 'space-between',
                    paddingLeft: 20,
                    paddingRight: 20,
                  },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Light'],
                      fontFamily: 'Inter_400Regular',
                    },
                    dimensions.width
                  )}
                >
                  {'Select contact'}
                </Text>
                <Icon
                  color={theme.colors['Light']}
                  name={'Entypo/chevron-small-down'}
                  size={24}
                />
              </View>
            </Touchable>
          </View>
          {/* Save */}
          <Button
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['#ffd20d'],
                borderRadius: 12,
                color: theme.colors['Strong'],
                fontFamily: 'Inter_500Medium',
                fontSize: 15,
                height: 52,
                marginBottom: 25,
                marginTop: 40,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Save'}
          />
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(NewcontactScreen);
