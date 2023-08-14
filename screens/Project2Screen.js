import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as SupaBase2Api from '../apis/SupaBase2Api.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Getprojectid from '../global-functions/Getprojectid';
import myFunctionName from '../global-functions/myFunctionName';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  ActionSheet,
  ActionSheetCancel,
  ActionSheetItem,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const Project2Screen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const supaBase2DeleteProjectDELETE = SupaBase2Api.useDeleteProjectDELETE();

  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        const result_project = (
          await SupaBase2Api.pruebasProjectsGET(Constants)
        )?.json;
        console.log(result_project, 'reult project');
        const id = Getprojectid(result_project);
        console.log(id);
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);
  const [options, setOptions] = React.useState(false);
  const [textAreaValue, setTextAreaValue] = React.useState('');

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
          {'Project'}
        </Text>
      </View>
      {/* logo */}
      <Image
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ImageStyles(theme)['logo 2'], {
            marginBottom: dimensions,
          }),
          dimensions.width
        )}
        resizeMode={'cover'}
        source={Images.LogoRSW33210295Transparent}
      />
      {/* plus projects */}
      <Touchable
        onPress={() => {
          try {
            navigation.navigate('NewprojecScreen');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <Icon
          style={StyleSheet.applyWidth({ right: -310 }, dimensions.width)}
          color={theme.colors['Strong']}
          name={'FontAwesome/plus-square'}
          size={50}
        />
      </Touchable>

      <ScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 20 },
          dimensions.width
        )}
        bounces={true}
        showsVerticalScrollIndicator={true}
      >
        {/* Cart Items */}
        <SupaBase2Api.FetchManyprojecstGET>
          {({ loading, error, data, refetchManyprojecst }) => {
            const cartItemsData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <FlashList
                renderItem={({ item }) => {
                  const flashListData = item;
                  return (
                    <Touchable
                      onPress={() => {
                        try {
                          navigation.navigate('ProjectInfo3Screen');
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['Custom #ffffff'],
                            borderRadius: 12,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 20,
                            paddingBottom: 12,
                            paddingLeft: 12,
                            paddingRight: 12,
                            paddingTop: 12,
                          },
                          dimensions.width
                        )}
                      >
                        <Image
                          style={StyleSheet.applyWidth(
                            { height: 80, width: 80 },
                            dimensions.width
                          )}
                          resizeMode={'cover'}
                          source={Images.Descarga}
                        />
                        <View
                          style={StyleSheet.applyWidth(
                            { flex: 1, paddingLeft: 12 },
                            dimensions.width
                          )}
                        >
                          {/* TresPuntos2 */}
                          <Touchable
                            onPress={() => {
                              try {
                                setOptions(true);
                                const id = flashListData?.projectid;
                                console.log(id);
                                setGlobalVariableValue({
                                  key: 'id',
                                  value: id,
                                });
                                setGlobalVariableValue({
                                  key: 'project_name',
                                  value: flashListData?.projectname,
                                });
                                setGlobalVariableValue({
                                  key: 'project_date',
                                  value: flashListData?.createdat,
                                });
                                setGlobalVariableValue({
                                  key: 'contact_name',
                                  value: flashListData?.conctactemail,
                                });
                                setGlobalVariableValue({
                                  key: 'start_date',
                                  value: flashListData?.startdateest,
                                });
                                setGlobalVariableValue({
                                  key: 'required_date',
                                  value: flashListData?.requireddate,
                                });
                                setGlobalVariableValue({
                                  key: 'notes',
                                  value: flashListData?.recommendedby,
                                });
                                setGlobalVariableValue({
                                  key: 'project_type',
                                  value: flashListData?.projecttypeid,
                                });
                                setGlobalVariableValue({
                                  key: 'job_type',
                                  value: flashListData?.jobtypeid,
                                });
                                setGlobalVariableValue({
                                  key: 'balance',
                                  value: flashListData?.totalprojectprice,
                                });
                                setGlobalVariableValue({
                                  key: 'full_address',
                                  value: flashListData?.address,
                                });
                                setGlobalVariableValue({
                                  key: 'phone',
                                  value: flashListData?.contractnumber,
                                });
                                setGlobalVariableValue({
                                  key: 'pay_user',
                                  value: flashListData?.totalprojectpayment,
                                });
                                setGlobalVariableValue({
                                  key: 'id_user',
                                  value: flashListData?.user_id,
                                });
                                setGlobalVariableValue({
                                  key: 'tnan_id',
                                  value: flashListData?.tntenantid,
                                });
                                setGlobalVariableValue({
                                  key: 'status_id',
                                  value: flashListData?.status,
                                });
                                const result_dif = myFunctionName(
                                  Constants['balance'],
                                  Constants['pay_user']
                                );
                                console.log(result_dif);
                                setGlobalVariableValue({
                                  key: 'diferenciaValor',
                                  value: result_dif,
                                });
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                          >
                            <Icon
                              name={'MaterialCommunityIcons/dots-vertical'}
                              size={24}
                            />
                          </Touchable>
                          {/* ProjectName */}
                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors['Strong'],
                                fontFamily: 'Inter_400Regular',
                                fontSize: 16,
                              },
                              dimensions.width
                            )}
                          >
                            {flashListData?.projectname}
                          </Text>
                          {/* Status */}
                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors['Strong'],
                                fontFamily: 'Inter_400Regular',
                                fontSize: 13,
                                marginTop: 4,
                              },
                              dimensions.width
                            )}
                          >
                            {flashListData?.status}
                          </Text>
                          {/* DAte */}
                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors['Strong'],
                                fontFamily: 'Inter_400Regular',
                                fontSize: 13,
                                marginTop: 4,
                              },
                              dimensions.width
                            )}
                          >
                            {flashListData?.projectdate}
                          </Text>
                        </View>
                      </View>
                    </Touchable>
                  );
                }}
                data={cartItemsData}
                listKey={'Jt3Eyj8W'}
                keyExtractor={flashListData =>
                  flashListData?.id ||
                  flashListData?.uuid ||
                  JSON.stringify(flashListData)
                }
                contentContainerStyle={StyleSheet.applyWidth(
                  { flex: 1 },
                  dimensions.width
                )}
                estimatedItemSize={50}
                numColumns={1}
                onEndReachedThreshold={0.5}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              />
            );
          }}
        </SupaBase2Api.FetchManyprojecstGET>
      </ScrollView>
      {/* actiontrespuntos */}
      <ActionSheet visible={options}>
        {/* Edit */}
        <ActionSheetItem
          onPress={() => {
            try {
              navigation.navigate('ProjectDetailScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            { textAlign: 'center' },
            dimensions.width
          )}
          label={'Edit'}
          color={theme.colors.strong}
        />
        {/* Copy */}
        <ActionSheetItem
          onPress={() => {
            try {
              setOptions(false);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            { textAlign: 'center' },
            dimensions.width
          )}
          label={'Copy'}
          color={theme.colors.strong}
        />
        {/* Delete */}
        <ActionSheetItem
          onPress={() => {
            const handler = async () => {
              try {
                const result_delete = (
                  await supaBase2DeleteProjectDELETE.mutateAsync({
                    id: Constants['id'],
                  })
                )?.json;
                console.log(result_delete);
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            { opacity: 1, textAlign: 'center' },
            dimensions.width
          )}
          label={'Delete'}
          color={theme.colors['Strong']}
        />
        <ActionSheetCancel
          onPress={() => {
            try {
              setOptions(false);
            } catch (err) {
              console.error(err);
            }
          }}
          label={'Cancel'}
        />
      </ActionSheet>
    </ScreenContainer>
  );
};

export default withTheme(Project2Screen);
