import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DeviceVariables = {
  AddresContact: ' ',
  CountyContact: ' ',
  GetProyects: ' ',
  Language: 'some Language',
  StateContact: ' ',
  UserPic: 'some UserPic',
  addresReal: ' ',
  address: ' ',
  balance: ' ',
  cantidadContactos: ' ',
  cantidadProyetos: ' ',
  cantidadQuotes: ' ',
  cantidadServices: ' ',
  cellphone: ' ',
  cityContact: ' ',
  contact_name: ' ',
  diferenciaValor: ' ',
  emailGlobal: ' ',
  full_address: ' ',
  id: ' ',
  id_user: ' ',
  job_type: ' ',
  lasContact: ' ',
  latitude: ' ',
  location: ' ',
  longitude: ' ',
  nomContact: ' ',
  notes: ' ',
  passwordUsuario: ' ',
  pay_user: ' ',
  phone: ' ',
  postalContact: ' ',
  project_date: ' ',
  project_name: ' ',
  project_type: ' ',
  required_date: ' ',
  start_date: ' ',
  status_id: ' ',
  tnan_id: ' ',
  token_authorization: ' ',
};
const AppVariables = {
  Api_Key_Header:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hZWFpY2J2dHNkbXpodHdobW16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk2OTMzMzUsImV4cCI6MjAwNTI2OTMzNX0.yEi8W0RRT3wTY3fAw_M9AFS23H-IvKSuW1RVAchNH_4',
  ContacLast: ' ',
  ContactAddres: ' ',
  ContactArray: [],
  ContactCity: ' ',
  ContactCountry: ' ',
  ContactName: ' ',
  ContactPhone: ' ',
  ContactPostal: ' ',
  ContactProject: ' ',
  ContactRequiredDate: ' ',
  ContactStarteDate: ' ',
  ContactState: ' ',
  ProfilePicture: 'some ProfilePicture',
  contactCellphone: ' ',
  emailUsuario: ' ',
  geocodio_api_key: ' ',
  idUsuario: ' ',
  speciaities: ['some speciaity'],
  token: '',
  totalAcumulado: 0,
  totalArea: 0,
  totalServices: 0,
};
const GlobalVariableContext = React.createContext();
const GlobalVariableUpdater = React.createContext();

// Attempt to parse a string as JSON. If the parse fails, return the string as-is.
// This is necessary to account for variables which are already present in local
// storage, but were not stored in JSON syntax (e.g. 'hello' instead of '"hello"').
function tryParseJson(str) {
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
}

class GlobalVariable {
  /**
   *  Filters an object of key-value pairs for those that should be
   *  persisted to storage, and persists them.
   *
   *  @param values Record<string, string>
   */
  static async syncToLocalStorage(values) {
    const update = Object.entries(values)
      .filter(([key]) => key in DeviceVariables)
      .map(([key, value]) => [key, JSON.stringify(value)]);

    if (update.length > 0) {
      await AsyncStorage.multiSet(update);
    }

    return update;
  }

  static async loadLocalStorage() {
    const entries = await AsyncStorage.multiGet(Object.keys(DeviceVariables));

    // If values isn't set, use the default. These will be written back to
    // storage on the next render.
    const withDefaults = entries.map(([key, value]) => [
      key,
      value ? tryParseJson(value) : DeviceVariables[key],
    ]);

    return Object.fromEntries(withDefaults);
  }
}

class State {
  static defaultValues = {
    ...AppVariables,
    ...DeviceVariables,
  };

  static reducer(state, { type, payload }) {
    switch (type) {
      case 'RESET':
        return { values: State.defaultValues, __loaded: true };
      case 'LOAD_FROM_ASYNC_STORAGE':
        return { values: { ...state.values, ...payload }, __loaded: true };
      case 'UPDATE':
        return state.__loaded
          ? {
              ...state,
              values: {
                ...state.values,
                [payload.key]: payload.value,
              },
            }
          : state;
      default:
        return state;
    }
  }

  static initialState = {
    __loaded: false,
    values: State.defaultValues,
  };
}

export function GlobalVariableProvider({ children }) {
  const [state, dispatch] = React.useReducer(State.reducer, State.initialState);

  React.useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  // This effect runs on mount to overwrite the default value of any
  // key that has a local value.
  React.useEffect(() => {
    async function initialStorageLoader() {
      try {
        const payload = await GlobalVariable.loadLocalStorage();
        dispatch({ type: 'LOAD_FROM_ASYNC_STORAGE', payload });
      } catch (err) {
        console.error(err);
      }
    }
    initialStorageLoader();
  }, []);

  // This effect runs on every state update after the initial load. Gives us
  // best of both worlds: React state updates sync, but current state made
  // durable next async tick.
  React.useEffect(() => {
    async function syncToAsyncStorage() {
      try {
        await GlobalVariable.syncToLocalStorage(state.values);
      } catch (err) {
        console.error(err);
      }
    }
    if (state.__loaded) {
      syncToAsyncStorage();
    }
  }, [state]);

  const onLayoutRootView = React.useCallback(async () => {
    if (state.__loaded) {
      await SplashScreen.hideAsync();
    }
  }, [state.__loaded]);

  // We won't want an app to read a default state when there might be one
  // incoming from storage.
  if (!state.__loaded) {
    return null;
  }

  return (
    <GlobalVariableUpdater.Provider
      value={dispatch}
      onLayout={onLayoutRootView}
    >
      <GlobalVariableContext.Provider value={state.values}>
        {children}
      </GlobalVariableContext.Provider>
    </GlobalVariableUpdater.Provider>
  );
}

// Hooks
export function useSetValue() {
  const dispatch = React.useContext(GlobalVariableUpdater);
  return ({ key, value }) => {
    dispatch({ type: 'UPDATE', payload: { key, value } });
    return value;
  };
}

export function useValues() {
  return React.useContext(GlobalVariableContext);
}
