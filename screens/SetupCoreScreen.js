import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Divider,
  Icon,
  Link,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const SetupCoreScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors.cupertinoBackground },
        dimensions.width
      )}
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={true}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            paddingBottom: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        {/* Edit */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'flex-end' },
            dimensions.width
          )}
        >
          <Link
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['#ffd20d'],
                fontFamily: 'System',
                fontSize: 16,
                fontWeight: '400',
              },
              dimensions.width
            )}
            title={'Edit'}
          />
        </View>
        {/* Settings Heading */}
        <View>
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'System',
                fontSize: 26,
                fontWeight: '700',
              },
              dimensions.width
            )}
          >
            {'Settings Core'}
          </Text>
        </View>
        <Spacer bottom={6} top={6} />
        {/* Settings */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.background,
              borderRadius: 8,
              paddingBottom: 12,
              paddingLeft: 12,
              paddingTop: 12,
            },
            dimensions.width
          )}
        >
          {/* All Items */}
          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row' },
                dimensions.width
              )}
            >
              <View>
                <Icon
                  color={theme.colors['#ffd20d']}
                  name={'Ionicons/ios-grid-outline'}
                  size={24}
                />
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, marginLeft: 16 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, flexDirection: 'row', paddingRight: 12 },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      { flex: 1, justifyContent: 'center' },
                      dimensions.width
                    )}
                  >
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.medium,
                          fontFamily: 'System',
                          fontSize: 16,
                          fontWeight: '400',
                        },
                        dimensions.width
                      )}
                    >
                      {'Areas'}
                    </Text>
                  </View>

                  <View
                    style={StyleSheet.applyWidth(
                      { justifyContent: 'center' },
                      dimensions.width
                    )}
                  >
                    <Icon
                      color={theme.colors.light}
                      name={'Ionicons/ios-chevron-forward'}
                      size={24}
                    />
                  </View>
                </View>
                <Divider
                  style={StyleSheet.applyWidth(
                    { height: 1, marginTop: 12 },
                    dimensions.width
                  )}
                  color={theme.colors.divider}
                />
              </View>
            </View>
          </Touchable>
          <Spacer bottom={6} top={6} />
          {/* Starter Items */}
          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row' },
                dimensions.width
              )}
            >
              <View>
                <Icon
                  color={theme.colors['#ffd20d']}
                  name={'Ionicons/ios-folder-outline'}
                  size={24}
                />
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, marginLeft: 16 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, flexDirection: 'row', paddingRight: 12 },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      { flex: 1, justifyContent: 'center' },
                      dimensions.width
                    )}
                  >
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.medium,
                          fontFamily: 'System',
                          fontSize: 16,
                          fontWeight: '400',
                        },
                        dimensions.width
                      )}
                    >
                      {'Concepts'}
                    </Text>
                  </View>
                  <View
                    style={StyleSheet.applyWidth(
                      { justifyContent: 'center' },
                      dimensions.width
                    )}
                  />
                  <View
                    style={StyleSheet.applyWidth(
                      { justifyContent: 'center', marginLeft: 6 },
                      dimensions.width
                    )}
                  >
                    <Icon
                      color={theme.colors.light}
                      name={'Ionicons/ios-chevron-forward'}
                      size={24}
                    />
                  </View>
                </View>
                <Divider
                  style={StyleSheet.applyWidth(
                    { height: 1, marginTop: 12 },
                    dimensions.width
                  )}
                  color={theme.colors.divider}
                />
              </View>
            </View>
          </Touchable>
          <Spacer bottom={6} top={6} />
          {/* Favorites */}
          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row' },
                dimensions.width
              )}
            >
              <View>
                <Icon
                  color={theme.colors['#ffd20d']}
                  name={'Ionicons/ios-star-outline'}
                  size={24}
                />
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, marginLeft: 16 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, flexDirection: 'row', paddingRight: 12 },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      { flex: 1, justifyContent: 'center' },
                      dimensions.width
                    )}
                  >
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.medium,
                          fontFamily: 'System',
                          fontSize: 16,
                          fontWeight: '400',
                        },
                        dimensions.width
                      )}
                    >
                      {'Collection'}
                    </Text>
                  </View>
                  <View
                    style={StyleSheet.applyWidth(
                      { justifyContent: 'center' },
                      dimensions.width
                    )}
                  />
                  <View
                    style={StyleSheet.applyWidth(
                      { justifyContent: 'center', marginLeft: 6 },
                      dimensions.width
                    )}
                  >
                    <Icon
                      color={theme.colors.light}
                      name={'Ionicons/ios-chevron-forward'}
                      size={24}
                    />
                  </View>
                </View>
                <Divider
                  style={StyleSheet.applyWidth(
                    { height: 1, marginTop: 12 },
                    dimensions.width
                  )}
                  color={theme.colors.divider}
                />
              </View>
            </View>
          </Touchable>
          <Spacer bottom={6} top={6} />
          {/* Share */}
          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row' },
                dimensions.width
              )}
            >
              <View>
                <Icon
                  color={theme.colors['#ffd20d']}
                  name={'Ionicons/ios-share-outline'}
                  size={24}
                />
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, justifyContent: 'center', marginLeft: 16 },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.medium,
                      fontFamily: 'System',
                      fontSize: 16,
                      fontWeight: '400',
                    },
                    dimensions.width
                  )}
                >
                  {'Service'}
                </Text>
              </View>
            </View>
          </Touchable>
        </View>
        <Spacer bottom={12} top={12} />
        {/* Lifestyle Heading */}
        <View>
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'System',
                fontSize: 20,
                fontWeight: '700',
              },
              dimensions.width
            )}
          >
            {'Profile'}
          </Text>
        </View>
        <Spacer bottom={6} top={6} />
        {/* Lifestyle */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.background,
              borderRadius: 8,
              paddingBottom: 12,
              paddingLeft: 12,
              paddingTop: 12,
            },
            dimensions.width
          )}
        >
          {/* Activities */}
          <Touchable />
          {/* Sleep */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('TenantsetupScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row' },
                dimensions.width
              )}
            >
              <View>
                <Icon
                  color={theme.colors['#ffd20d']}
                  name={'Ionicons/md-person-outline'}
                  size={24}
                />
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, marginLeft: 16 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, flexDirection: 'row', paddingRight: 12 },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      { flex: 1, justifyContent: 'center' },
                      dimensions.width
                    )}
                  >
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.medium,
                          fontFamily: 'System',
                          fontSize: 16,
                          fontWeight: '400',
                        },
                        dimensions.width
                      )}
                    >
                      {'Edit Prfile'}
                    </Text>
                  </View>
                  <View
                    style={StyleSheet.applyWidth(
                      { justifyContent: 'center' },
                      dimensions.width
                    )}
                  />
                  <View
                    style={StyleSheet.applyWidth(
                      { justifyContent: 'center', marginLeft: 6 },
                      dimensions.width
                    )}
                  >
                    <Icon
                      color={theme.colors.light}
                      name={'Ionicons/ios-chevron-forward'}
                      size={24}
                    />
                  </View>
                </View>
              </View>
            </View>
          </Touchable>
        </View>
        <Spacer bottom={12} top={12} />
        {/* Extra Heading */}
        <View />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SetupCoreScreen);
