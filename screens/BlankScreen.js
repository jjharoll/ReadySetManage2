import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  ScreenContainer,
  TabView,
  TabViewItem,
  Table,
  TableCell,
  TableRow,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Modal, Text, View, useWindowDimensions } from 'react-native';

const BlankScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Modal animationType={'none'}>
        <TabViewItem
          style={StyleSheet.applyWidth(
            GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
            dimensions.width
          )}
          title={'Title'}
        >
          <Text
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['Text'],
              dimensions.width
            )}
          >
            {'prueba --------------------------------'}
          </Text>
        </TabViewItem>
        {/* listadeplegable2 */}
        <View
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ViewStyles(theme)['listadeplegable3'],
              { height: 60 }
            ),
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
                {'English'}
              </Text>
              <Icon name={'FontAwesome/caret-down'} size={24} />
            </View>
          </Touchable>
        </View>
        <Button
          style={StyleSheet.applyWidth(
            GlobalStyles.ButtonStyles(theme)['Button'],
            dimensions.width
          )}
          title={'Get Started'}
        />
        <TabView
          activeColor={theme.colors.primary}
          indicatorColor={theme.colors.primary}
          keyboardDismissMode={'auto'}
          pressColor={theme.colors.primary}
          swipeEnabled={true}
          tabBarPosition={'top'}
          tabsBackgroundColor={theme.colors.background}
        >
          <TabViewItem
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
                { flex: 2, flexWrap: 'wrap' }
              ),
              dimensions.width
            )}
            icon={'AntDesign/pluscircle'}
            title={'RSM'}
          >
            <Table
              style={StyleSheet.applyWidth(
                GlobalStyles.TableStyles(theme)['Table'],
                dimensions.width
              )}
              borderColor={theme.colors.divider}
              borderStyle={'solid'}
              borderWidth={1}
              cellHorizontalPadding={10}
              cellVerticalPadding={10}
              drawTopBorder={true}
              showsVerticalScrollIndicator={true}
            >
              <TableRow drawBottomBorder={true} drawStartBorder={true}>
                <TableCell
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TableCellStyles(theme)['Table Cell'],
                    dimensions.width
                  )}
                  drawEndBorder={true}
                />
              </TableRow>
            </Table>
          </TabViewItem>
          <TabViewItem
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
                { flex: 2 }
              ),
              dimensions.width
            )}
            icon={'AntDesign/stepbackward'}
            title={'BOM'}
          />
          <TabViewItem
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
                { flex: 2 }
              ),
              dimensions.width
            )}
            icon={'AntDesign/camera'}
            title={'Events'}
          />
          <TabViewItem
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
                { flex: 2, flexWrap: 'wrap' }
              ),
              dimensions.width
            )}
            icon={'AntDesign/staro'}
            title={'Evidence'}
          />
          <TabViewItem
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
                { flex: 2, flexWrap: 'wrap' }
              ),
              dimensions.width
            )}
            icon={'AntDesign/barschart'}
            title={'Cost'}
          />
          <TabViewItem
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
                { alignContent: 'stretch', flex: 2, flexWrap: 'wrap' }
              ),
              dimensions.width
            )}
            icon={'AntDesign/inbox'}
            title={'Time'}
          />
        </TabView>

        <TableRow drawBottomBorder={true} drawStartBorder={true}>
          <TableCell
            style={StyleSheet.applyWidth(
              GlobalStyles.TableCellStyles(theme)['Table Cell'],
              dimensions.width
            )}
            drawEndBorder={true}
          />
        </TableRow>
      </Modal>
    </ScreenContainer>
  );
};

export default withTheme(BlankScreen);
