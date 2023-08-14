import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

export const ButtonStyles = theme =>
  StyleSheet.create({
    Button: {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      fontFamily: 'System',
      fontWeight: '700',
      textAlign: 'center',
    },
  });

export const ViewStyles = theme =>
  StyleSheet.create({
    CampoDeplegableNewQuotes: { paddingBottom: 16, paddingTop: 16 },
    'CampoDeplegableNewQuotes 2': { paddingBottom: 16, paddingTop: 16 },
    HEADERSEARCH: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
    },
    'HEADERSEARCH 2': {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
    },
    'HEADERSEARCH 3': {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
    },
    abajoboton: {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom #ffffff'],
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      flexDirection: 'row',
      height: 117,
      justifyContent: 'space-between',
      paddingBottom: 20,
      paddingLeft: 30,
      paddingRight: 30,
    },
    back: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      left: 16,
      position: 'absolute',
      top: 0,
      width: 48,
    },
    'back 2': {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      left: 16,
      position: 'absolute',
      top: 0,
      width: 48,
    },
    'back 3': {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      left: 16,
      position: 'absolute',
      top: 0,
      width: 48,
    },
    'back 4': {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      left: 16,
      position: 'absolute',
      top: 0,
      width: 48,
    },
    busqueda: { paddingLeft: 20, paddingRight: 20, paddingTop: 20 },
    'busqueda 2': { paddingLeft: 20, paddingRight: 20, paddingTop: 20 },
    'busqueda 3': { paddingLeft: 20, paddingRight: 20, paddingTop: 20 },
    'busqueda 4': { paddingLeft: 20, paddingRight: 20, paddingTop: 20 },
    'busqueda 5': { paddingLeft: 20, paddingRight: 20, paddingTop: 20 },
    calculadoraNewquotes: {
      borderStyle: 'dashed',
      paddingBottom: 16,
      paddingTop: 16,
    },
    campoinut: { paddingBottom: 16, paddingTop: 16 },
    'campoinut 2': { paddingBottom: 16, paddingTop: 16 },
    fechas: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 16,
    },
    header: { alignItems: 'center', flexDirection: 'row', paddingLeft: 20 },
    'header 2': { alignItems: 'center', flexDirection: 'row', paddingLeft: 20 },
    'header 3': { alignItems: 'center', flexDirection: 'row', paddingLeft: 20 },
    'header 4': { alignItems: 'center', flexDirection: 'row', paddingLeft: 20 },
    inputFecha: { marginTop: 20 },
    listaNewQuotes: { paddingBottom: 16, paddingTop: 16 },
    'listaNewQuotes 2': { paddingBottom: 16, paddingTop: 16 },
    'listaNewQuotes 3': { paddingBottom: 16, paddingTop: 16 },
    listadeplegable2: {
      backgroundColor: theme.colors['Divider'],
      borderRadius: 16,
      flexDirection: 'column',
      height: 56,
      justifyContent: 'center',
      marginTop: 14,
      paddingLeft: 20,
      paddingRight: 20,
    },
    listadeplegable3: {
      backgroundColor: theme.colors['Divider'],
      borderRadius: 16,
      flexDirection: 'column',
      height: 56,
      justifyContent: 'center',
      marginTop: 14,
      paddingLeft: 20,
      paddingRight: 20,
    },
    mapas: { paddingLeft: 16, paddingRight: 16 },
    notasNewQuotes: { paddingBottom: 16, paddingTop: 16 },
    'notasNewQuotes 2': { paddingBottom: 16, paddingTop: 16 },
    notes: { paddingBottom: 16, paddingTop: 16 },
    search: { paddingLeft: 20, paddingRight: 20, paddingTop: 20 },
    'stepet elegante': {
      alignSelf: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors.light,
      borderLeftWidth: 1,
      borderRadius: theme.roundness,
      borderRightWidth: 1,
      borderTopWidth: 1,
      marginBottom: 32,
      marginTop: 32,
      paddingBottom: 16,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 16,
    },
    summary: {
      backgroundColor: theme.colors['Custom Color'],
      borderRadius: 12,
      marginLeft: 20,
      marginRight: 20,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
    },
    tablaCostos: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    'tablaCostos 2': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
  });

export const CheckboxRowStyles = theme =>
  StyleSheet.create({ 'Checkbox Row': { minHeight: 50 } });

export const ImageStyles = theme =>
  StyleSheet.create({
    Image: { height: 100, width: 100 },
    logo: { height: 190, position: 'relative', top: 2, width: 350 },
    'logo 2': { height: 190, position: 'relative', top: 2, width: 350 },
    'logo 3': { height: 190, position: 'relative', top: 2, width: 350 },
  });

export const ImageBackgroundStyles = theme =>
  StyleSheet.create({
    'Image Background': { flex: 1 },
    backgroundFinal: {
      height: '100%',
      justifyContent: 'space-around',
      paddingLeft: 16,
      paddingRight: 16,
    },
  });

export const MapViewStyles = theme =>
  StyleSheet.create({ 'Map View': { flex: 1, height: '100%', width: '100%' } });

export const TabViewItemStyles = theme =>
  StyleSheet.create({ 'Tab View Item': { flex: 1 } });

export const TableStyles = theme => StyleSheet.create({ Table: { flex: 1 } });

export const TableCellStyles = theme =>
  StyleSheet.create({ 'Table Cell': { flex: 1, flexDirection: 'row' } });

export const TextStyles = theme =>
  StyleSheet.create({ Text: { color: theme.colors.strong } });

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Text Input': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
  });

export const TouchableStyles = theme =>
  StyleSheet.create({
    back3: { height: '100%', width: '100%' },
    backgorund: { height: '100%', width: '100%' },
  });

export const StepperStyles = theme =>
  StyleSheet.create({
    contador: {
      fontFamily: 'Inter_400Regular',
      fontSize: 13,
      marginTop: 12,
      opacity: 0.8,
    },
    'contador 2': {
      fontFamily: 'Inter_400Regular',
      fontSize: 13,
      marginTop: 12,
      opacity: 0.8,
    },
    'contador 3': {
      fontFamily: 'Inter_400Regular',
      fontSize: 13,
      marginTop: 12,
      opacity: 0.8,
    },
  });

export const IconStyles = theme =>
  StyleSheet.create({
    icon1: { bottom: 50, position: 'absolute', right: 45 },
    icon2: { bottom: 50, position: 'absolute', right: 80 },
    icon3: { bottom: 50, position: 'absolute', right: 45 },
  });

export const KeyboardAwareScrollViewStyles = theme =>
  StyleSheet.create({
    infoProjects: {
      flex: 1,
      justifyContent: 'space-between',
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
    },
  });
