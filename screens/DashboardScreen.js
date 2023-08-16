import React from 'react';
import * as SupaBase2Api from '../apis/SupaBase2Api.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import cantidadElementos from '../global-functions/cantidadElementos';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Circle,
  CircleImage,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const DashboardScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        const result_project = (
          await SupaBase2Api.manyprojecstGET(Constants, { tnt: 80 })
        )?.json;
        const result_contact = (await SupaBase2Api.contactGET(Constants))?.json;
        const result_quote = (await SupaBase2Api.manyQuotesGET(Constants))
          ?.json;
        const result_services = (
          await SupaBase2Api.servicesGET(Constants, { tnt: 80 })
        )?.json;
        const proyectos = cantidadElementos(result_project);
        const contact = cantidadElementos(result_contact);
        const services = cantidadElementos(result_services);
        const quote = cantidadElementos(result_quote);
        setGlobalVariableValue({
          key: 'cantidadProyetos',
          value: proyectos,
        });
        setGlobalVariableValue({
          key: 'cantidadContactos',
          value: contact,
        });
        setGlobalVariableValue({
          key: 'cantidadQuotes',
          value: quote,
        });
        setGlobalVariableValue({
          key: 'cantidadServices',
          value: services,
        });
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);
  const [CantidadContactos, setCantidadContactos] = React.useState({});
  const [cantidadProeytos, setCantidadProeytos] = React.useState({});
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Background'] },
        dimensions.width
      )}
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={false}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            height: 48,
            justifyContent: 'center',
            marginTop: 12,
            paddingLeft: 16,
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
              left: 16,
              position: 'absolute',
              top: 0,
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
              fontSize: 18,
            },
            dimensions.width
          )}
        >
          {'Dashboard'}
        </Text>
      </View>

      <ScrollView bounces={true} showsVerticalScrollIndicator={true}>
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', marginTop: 30 },
            dimensions.width
          )}
        >
          <View>
            <Touchable>
              <CircleImage size={80} source={Images.UserImage} />
              <CircleImage
                style={StyleSheet.applyWidth(
                  { position: 'absolute' },
                  dimensions.width
                )}
                size={80}
                source={{ uri: `${Constants['ProfilePicture']}` }}
              />
            </Touchable>
          </View>

          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Strong'],
                fontFamily: 'Inter_500Medium',
                fontSize: 18,
                marginTop: 16,
                opacity: 1,
              },
              dimensions.width
            )}
          >
            {Constants['emailUsuario']}
          </Text>
        </View>
        {/* Actions */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
              paddingLeft: 20,
              paddingRight: 20,
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom Color_5'],
                borderRadius: 8,
                height: 40,
                justifyContent: 'center',
                width: 111,
              },
              dimensions.width
            )}
          >
            <Touchable>
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors['Strong']}
                  name={'Entypo/plus'}
                  size={20}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Strong'],
                      fontFamily: 'Inter_400Regular',
                      fontSize: 13,
                      marginLeft: 6,
                    },
                    dimensions.width
                  )}
                >
                  {'Call'}
                </Text>
              </View>
            </Touchable>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: theme.colors['Strong'],
                borderLeftWidth: 1,
                borderRadius: 8,
                borderRightWidth: 1,
                borderTopWidth: 1,
                height: 40,
                justifyContent: 'center',
                marginLeft: 20,
                width: 111,
              },
              dimensions.width
            )}
          >
            <Touchable>
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors['Strong']}
                  name={'Feather/plus-square'}
                  size={20}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Strong'],
                      fontFamily: 'Inter_400Regular',
                      fontSize: 13,
                      marginLeft: 6,
                    },
                    dimensions.width
                  )}
                >
                  {'Message'}
                </Text>
              </View>
            </Touchable>
          </View>
        </View>
        {/* Report */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              marginLeft: 20,
              marginRight: 20,
              marginTop: 30,
            },
            dimensions.width
          )}
        >
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Strong'],
                fontFamily: 'Inter_500Medium',
                fontSize: 18,
                marginTop: 16,
                opacity: 1,
              },
              dimensions.width
            )}
          >
            {'08/15/2023    9 days left'}
          </Text>

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
            <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    backgroundColor: theme.colors['Custom Color_10'],
                    borderRadius: 8,
                    flex: 1,
                    height: 111,
                    justifyContent: 'center',
                    marginTop: 16,
                    paddingBottom: 12,
                    paddingLeft: 20,
                    paddingTop: 12,
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { opacity: 0.38 },
                    dimensions.width
                  )}
                >
                  <Circle bgColor={theme.colors['Custom Color_2']} size={30} />
                </View>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      height: 30,
                      justifyContent: 'center',
                      left: 20,
                      position: 'absolute',
                      top: 12,
                      width: 30,
                    },
                    dimensions.width
                  )}
                >
                  <Image
                    style={StyleSheet.applyWidth(
                      { height: 16, width: 16 },
                      dimensions.width
                    )}
                    resizeMode={'cover'}
                    source={Images.BxsHot1}
                  />
                </View>

                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Strong'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 14,
                      marginTop: 10,
                      opacity: 1,
                    },
                    dimensions.width
                  )}
                >
                  {'Quotes'}
                </Text>

                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Strong'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 22,
                      marginTop: 4,
                    },
                    dimensions.width
                  )}
                >
                  {Constants['cantidadQuotes']}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    backgroundColor: theme.colors['Custom Color_12'],
                    borderRadius: 8,
                    flex: 1,
                    height: 111,
                    justifyContent: 'center',
                    marginTop: 16,
                    paddingBottom: 12,
                    paddingLeft: 20,
                    paddingTop: 12,
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { opacity: 0.38 },
                    dimensions.width
                  )}
                >
                  <Circle bgColor={theme.colors['Custom Color_2']} size={30} />
                </View>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      height: 30,
                      justifyContent: 'center',
                      left: 20,
                      position: 'absolute',
                      top: 12,
                      width: 30,
                    },
                    dimensions.width
                  )}
                >
                  <Image
                    style={StyleSheet.applyWidth(
                      { height: 16, width: 16 },
                      dimensions.width
                    )}
                    resizeMode={'cover'}
                    source={Images.BxsBowlRice1}
                  />
                </View>

                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Strong'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 14,
                      marginTop: 10,
                      opacity: 1,
                    },
                    dimensions.width
                  )}
                >
                  {'Services'}
                </Text>

                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Strong'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 22,
                      marginTop: 4,
                    },
                    dimensions.width
                  )}
                >
                  {Constants['cantidadServices']}
                </Text>
              </View>
            </View>

            <View
              style={StyleSheet.applyWidth(
                { flex: 1, marginLeft: 20 },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    backgroundColor: theme.colors['Light'],
                    borderRadius: 8,
                    flex: 1,
                    height: 111,
                    justifyContent: 'center',
                    marginTop: 16,
                    paddingBottom: 12,
                    paddingLeft: 20,
                    paddingTop: 12,
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { opacity: 0.38 },
                    dimensions.width
                  )}
                >
                  <Circle bgColor={theme.colors['Custom Color_2']} size={30} />
                </View>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      height: 30,
                      justifyContent: 'center',
                      left: 20,
                      position: 'absolute',
                      top: 12,
                      width: 30,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['Custom Color_2']}
                    name={'AntDesign/heart'}
                    size={15}
                  />
                </View>

                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Strong'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 14,
                      marginTop: 10,
                      opacity: 1,
                    },
                    dimensions.width
                  )}
                >
                  {'Projects'}
                </Text>

                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Strong'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 22,
                      marginTop: 4,
                    },
                    dimensions.width
                  )}
                >
                  {Constants['cantidadProyetos']}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    backgroundColor: theme.colors['Custom Color_13'],
                    borderRadius: 8,
                    flex: 1,
                    height: 111,
                    justifyContent: 'center',
                    marginTop: 16,
                    paddingBottom: 12,
                    paddingLeft: 20,
                    paddingTop: 12,
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { opacity: 0.38 },
                    dimensions.width
                  )}
                >
                  <Circle bgColor={theme.colors['Custom Color_2']} size={30} />
                </View>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      height: 30,
                      justifyContent: 'center',
                      left: 20,
                      position: 'absolute',
                      top: 12,
                      width: 30,
                    },
                    dimensions.width
                  )}
                >
                  <Image
                    style={StyleSheet.applyWidth(
                      { height: 16, position: 'absolute', width: 16 },
                      dimensions.width
                    )}
                    resizeMode={'cover'}
                    source={Images.BxDumbbell}
                  />
                </View>

                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Strong'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 14,
                      marginTop: 10,
                      opacity: 1,
                    },
                    dimensions.width
                  )}
                >
                  {'Contacts'}
                </Text>

                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Strong'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 22,
                      marginTop: 4,
                    },
                    dimensions.width
                  )}
                >
                  {Constants['cantidadContactos']}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(DashboardScreen);
