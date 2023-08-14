import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import { handleResponse, isOkStatus } from '../utils/handleRestApiResponse';
import usePrevious from '../utils/usePrevious';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const geocodeGET = (Constants, { address, api_key }, handlers = {}) =>
  fetch(
    `https://api.geocod.io/v1.7/geocode?api_key=${
      api_key ?? ''
    }&format=simple&limit=1&q=${address ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  ).then(res => handleResponse(res, handlers));

export const useGeocodeGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['local', args],
    () => geocodeGET(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['locals']),
    }
  );
};

export const FetchGeocodeGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  address,
  api_key,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useGeocodeGET(
    { address, api_key },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchGeocode: refetch });
};

export const reverseGeocodeGET = (
  Constants,
  { api_key, latitude, longitude },
  handlers = {}
) =>
  fetch(
    `https://api.geocod.io/v1.7/reverse?api_key=${
      api_key ?? ''
    }&format=simple&limit=1&q=${latitude ?? ''},${longitude ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  ).then(res => handleResponse(res, handlers));

export const useReverseGeocodeGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['locals', args],
    () => reverseGeocodeGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchReverseGeocodeGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  api_key,
  latitude,
  longitude,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useReverseGeocodeGET(
    { api_key, latitude, longitude },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchReverseGeocode: refetch });
};
