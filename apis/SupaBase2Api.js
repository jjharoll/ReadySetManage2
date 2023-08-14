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

export const areasGET = (Constants, _args, handlers = {}) =>
  fetch(`https://maeaicbvtsdmzhtwhmmz.supabase.co/rest/v1/area`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['token'],
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
  }).then(res => handleResponse(res, handlers));

export const useAreasGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(['Area', args], () => areasGET(Constants, args, handlers), {
    refetchInterval,
    onSuccess: () => queryClient.invalidateQueries(['Areas']),
  });
};

export const FetchAreasGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useAreasGET({}, { refetchInterval, handlers: { onData, ...handlers } });

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
  return children({ loading, data, error, refetchAreas: refetch });
};

export const autenticacionPOST = (
  Constants,
  { email, password },
  handlers = {}
) =>
  fetch(
    `https://maeaicbvtsdmzhtwhmmz.supabase.co/auth/v1/token?grant_type=password`,
    {
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header'],
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useAutenticacionPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['auth', args],
    () => autenticacionPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['auths']),
    }
  );
};

export const FetchAutenticacionPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  email,
  password,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useAutenticacionPOST(
    { email, password },
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
  return children({ loading, data, error, refetchAutenticacion: refetch });
};

export const conceptsGET = (Constants, _args, handlers = {}) =>
  fetch(
    `https://maeaicbvtsdmzhtwhmmz.supabase.co/rest/v1/collection?select=*`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['token'],
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header'],
      },
    }
  ).then(res => handleResponse(res, handlers));

export const useConceptsGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['Concepts', args],
    () => conceptsGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchConceptsGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useConceptsGET(
    {},
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
  return children({ loading, data, error, refetchConcepts: refetch });
};

export const deleteProjectDELETE = (Constants, { id }, handlers = {}) =>
  fetch(
    `https://maeaicbvtsdmzhtwhmmz.supabase.co/rest/v1/project?projectid=eq.${
      id ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['token'],
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header'],
      },
      method: 'DELETE',
    }
  ).then(res => handleResponse(res, handlers));

export const useDeleteProjectDELETE = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      deleteProjectDELETE(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('projects', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('project');
        queryClient.invalidateQueries('projects');
      },
    }
  );
};

export const manyCountryGET = (Constants, _args, handlers = {}) =>
  fetch(`https://maeaicbvtsdmzhtwhmmz.supabase.co/rest/v1/geocounty?select=*`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['token'],
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
  }).then(res => handleResponse(res, handlers));

export const useManyCountryGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['utils', args],
    () => manyCountryGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchManyCountryGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useManyCountryGET(
    {},
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
  return children({ loading, data, error, refetchManyCountry: refetch });
};

export const manyMeasureGET = (Constants, _args, handlers = {}) =>
  fetch(`https://maeaicbvtsdmzhtwhmmz.supabase.co/rest/v1/measure`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['token'],
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
  }).then(res => handleResponse(res, handlers));

export const useManyMeasureGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['Measures', args],
    () => manyMeasureGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchManyMeasureGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useManyMeasureGET(
    {},
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
  return children({ loading, data, error, refetchManyMeasure: refetch });
};

export const manycityGET = (Constants, _args, handlers = {}) =>
  fetch(`https://maeaicbvtsdmzhtwhmmz.supabase.co/rest/v1/geocity?select=*`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['token'],
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
  }).then(res => handleResponse(res, handlers));

export const useManycityGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['utils', args],
    () => manycityGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchManycityGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useManycityGET(
    {},
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
  return children({ loading, data, error, refetchManycity: refetch });
};

export const manyprojecstGET = (Constants, _args, handlers = {}) =>
  fetch(`https://maeaicbvtsdmzhtwhmmz.supabase.co/rest/v1/project?select=*`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['token'],
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
  }).then(res => handleResponse(res, handlers));

export const useManyprojecstGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['projects', args],
    () => manyprojecstGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchManyprojecstGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useManyprojecstGET(
    {},
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
  return children({ loading, data, error, refetchManyprojecst: refetch });
};

export const pruebaAreasGET = (Constants, _args, handlers = {}) =>
  fetch(`https://maeaicbvtsdmzhtwhmmz.supabase.co/rest/v1/area?select=*`, {
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6ImlIYmNpUkdwS0dGZnZ1SDkiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjkxNzM2OTgzLCJpYXQiOjE2OTE3MzMzODMsImlzcyI6Imh0dHBzOi8vaHR0cHM6Ly9tYWVhaWNidnRzZG16aHR3aG1tei5zdXBhYmFzZS5jby9hdXRoL3YxIiwic3ViIjoiZjczZWMyZDUtMTMwZS00ZmU5LWJhYzgtZDE3YTgwNzBmMzkxIiwiZW1haWwiOiJqaG9hbmExMjMyMEBvdXRsb29rLmNsIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE2OTE3MzMzODN9XSwic2Vzc2lvbl9pZCI6ImM0M2U5NWYwLWY2ODktNDM0NS04NGQ2LTExODY0NzJkMTgzMCJ9.kPLezQsZ3jcyJBxwWVtxYlCJufVfJ95kUNWyq54CLKA',
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
  }).then(res => handleResponse(res, handlers));

export const usePruebaAreasGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['Areas', args],
    () => pruebaAreasGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchPruebaAreasGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = usePruebaAreasGET(
    {},
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
  return children({ loading, data, error, refetchPruebaAreas: refetch });
};

export const pruebaAreas2GET = (Constants, _args, handlers = {}) =>
  fetch(`https://maeaicbvtsdmzhtwhmmz.supabase.co/rest/v1/area`, {
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6ImlIYmNpUkdwS0dGZnZ1SDkiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjkxNzM2OTgzLCJpYXQiOjE2OTE3MzMzODMsImlzcyI6Imh0dHBzOi8vaHR0cHM6Ly9tYWVhaWNidnRzZG16aHR3aG1tei5zdXBhYmFzZS5jby9hdXRoL3YxIiwic3ViIjoiZjczZWMyZDUtMTMwZS00ZmU5LWJhYzgtZDE3YTgwNzBmMzkxIiwiZW1haWwiOiJqaG9hbmExMjMyMEBvdXRsb29rLmNsIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE2OTE3MzMzODN9XSwic2Vzc2lvbl9pZCI6ImM0M2U5NWYwLWY2ODktNDM0NS04NGQ2LTExODY0NzJkMTgzMCJ9.kPLezQsZ3jcyJBxwWVtxYlCJufVfJ95kUNWyq54CLKA',
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
  }).then(res => handleResponse(res, handlers));

export const usePruebaAreas2GET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['Areas', args],
    () => pruebaAreas2GET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchPruebaAreas2GET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = usePruebaAreas2GET(
    {},
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
  return children({ loading, data, error, refetchPruebaAreas2: refetch });
};

export const pruebaMeasure2GET = (Constants, _args, handlers = {}) =>
  fetch(`https://maeaicbvtsdmzhtwhmmz.supabase.co/rest/v1/measure?select=*`, {
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6ImlIYmNpUkdwS0dGZnZ1SDkiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjkxNzgwNjE2LCJpYXQiOjE2OTE3NzcwMTYsImlzcyI6Imh0dHBzOi8vaHR0cHM6Ly9tYWVhaWNidnRzZG16aHR3aG1tei5zdXBhYmFzZS5jby9hdXRoL3YxIiwic3ViIjoiZjczZWMyZDUtMTMwZS00ZmU5LWJhYzgtZDE3YTgwNzBmMzkxIiwiZW1haWwiOiJqaG9hbmExMjMyMEBvdXRsb29rLmNsIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE2OTE3NzcwMTZ9XSwic2Vzc2lvbl9pZCI6ImUxYTM0NWYzLTg5NzMtNDg2MC05ZjYyLTlmZWY4OTE4YzlhYyJ9.R4E4dGGLxWICTiXObO_vv8v3KYWkK-LObQQ2C2eSUm4',
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
  }).then(res => handleResponse(res, handlers));

export const usePruebaMeasure2GET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['Measures', args],
    () => pruebaMeasure2GET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchPruebaMeasure2GET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = usePruebaMeasure2GET(
    {},
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
  return children({ loading, data, error, refetchPruebaMeasure2: refetch });
};

export const pruebasMeaureGET = (Constants, _args, handlers = {}) =>
  fetch(`https://maeaicbvtsdmzhtwhmmz.supabase.co/rest/v1/measure`, {
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6ImlIYmNpUkdwS0dGZnZ1SDkiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjkxNzcwODYzLCJpYXQiOjE2OTE3NjcyNjMsImlzcyI6Imh0dHBzOi8vaHR0cHM6Ly9tYWVhaWNidnRzZG16aHR3aG1tei5zdXBhYmFzZS5jby9hdXRoL3YxIiwic3ViIjoiZjczZWMyZDUtMTMwZS00ZmU5LWJhYzgtZDE3YTgwNzBmMzkxIiwiZW1haWwiOiJqaG9hbmExMjMyMEBvdXRsb29rLmNsIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE2OTE3NjcyNjN9XSwic2Vzc2lvbl9pZCI6ImYxY2U4OGJiLWQyOWEtNGFiOS05MmU4LTk1MzY5MDk1NzVjNyJ9.HFIqrTr_iXieIHQLjmCT7BJv1LGtD3a5zKU01gZNjD0',
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
  }).then(res => handleResponse(res, handlers));

export const usePruebasMeaureGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['Measures', args],
    () => pruebasMeaureGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchPruebasMeaureGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = usePruebasMeaureGET(
    {},
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
  return children({ loading, data, error, refetchPruebasMeaure: refetch });
};

export const pruebasServiciosGET = (Constants, _args, handlers = {}) =>
  fetch(`https://maeaicbvtsdmzhtwhmmz.supabase.co/rest/v1/service?select=*`, {
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6ImlIYmNpUkdwS0dGZnZ1SDkiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjkxNzc4NjMzLCJpYXQiOjE2OTE3NzUwMzMsImlzcyI6Imh0dHBzOi8vaHR0cHM6Ly9tYWVhaWNidnRzZG16aHR3aG1tei5zdXBhYmFzZS5jby9hdXRoL3YxIiwic3ViIjoiZjczZWMyZDUtMTMwZS00ZmU5LWJhYzgtZDE3YTgwNzBmMzkxIiwiZW1haWwiOiJqaG9hbmExMjMyMEBvdXRsb29rLmNsIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE2OTE3NzUwMzN9XSwic2Vzc2lvbl9pZCI6ImY2OTAwYzg0LWJhOGQtNGIzMi1hNWJjLWRhYmU0MjdkOGFlOCJ9.4xjDTA0Ii8psz3VYzINCKWK_GAP4-Z6NuvVQF1PGAes',
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
  }).then(res => handleResponse(res, handlers));

export const usePruebasServiciosGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['services', args],
    () => pruebasServiciosGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchPruebasServiciosGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = usePruebasServiciosGET(
    {},
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
  return children({ loading, data, error, refetchPruebasServicios: refetch });
};

export const collectionNAmeGET = (Constants, _args, handlers = {}) =>
  fetch(
    `https://maeaicbvtsdmzhtwhmmz.supabase.co/rest/v1/collection?select=*`,
    {
      headers: {
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6ImlIYmNpUkdwS0dGZnZ1SDkiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjkxNzgwNjE2LCJpYXQiOjE2OTE3NzcwMTYsImlzcyI6Imh0dHBzOi8vaHR0cHM6Ly9tYWVhaWNidnRzZG16aHR3aG1tei5zdXBhYmFzZS5jby9hdXRoL3YxIiwic3ViIjoiZjczZWMyZDUtMTMwZS00ZmU5LWJhYzgtZDE3YTgwNzBmMzkxIiwiZW1haWwiOiJqaG9hbmExMjMyMEBvdXRsb29rLmNsIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE2OTE3NzcwMTZ9XSwic2Vzc2lvbl9pZCI6ImUxYTM0NWYzLTg5NzMtNDg2MC05ZjYyLTlmZWY4OTE4YzlhYyJ9.R4E4dGGLxWICTiXObO_vv8v3KYWkK-LObQQ2C2eSUm4',
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header'],
      },
    }
  ).then(res => handleResponse(res, handlers));

export const useCollectionNAmeGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['collections', args],
    () => collectionNAmeGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchCollectionNAmeGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useCollectionNAmeGET(
    {},
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
  return children({ loading, data, error, refetchCollectionNAme: refetch });
};

export const collectionNAme2GET = (Constants, _args, handlers = {}) =>
  fetch(`https://maeaicbvtsdmzhtwhmmz.supabase.co/rest/v1/collection`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['token'],
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
  }).then(res => handleResponse(res, handlers));

export const useCollectionNAme2GET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['collections', args],
    () => collectionNAme2GET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchCollectionNAme2GET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useCollectionNAme2GET(
    {},
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
  return children({ loading, data, error, refetchCollectionNAme2: refetch });
};

export const contactGET = (Constants, _args, handlers = {}) =>
  fetch(`https://maeaicbvtsdmzhtwhmmz.supabase.co/rest/v1/contact?select=*`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['token'],
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
  }).then(res => handleResponse(res, handlers));

export const useContactGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['contacts', args],
    () => contactGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchContactGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useContactGET({}, { refetchInterval, handlers: { onData, ...handlers } });

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
  return children({ loading, data, error, refetchContact: refetch });
};

export const crearProjectsPOST = (
  Constants,
  { contactid, projectdate, projectname, status, tntenantid, user_id },
  handlers = {}
) =>
  fetch(`https://maeaicbvtsdmzhtwhmmz.supabase.co/rest/v1/project`, {
    body: JSON.stringify({
      projectdate: projectdate,
      projectname: projectname,
      contactid: contactid,
      status: status,
      user_id: user_id,
      tntenantid: tntenantid,
    }),
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6ImlIYmNpUkdwS0dGZnZ1SDkiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjkxNjk1MjE0LCJpYXQiOjE2OTE2OTE2MTQsImlzcyI6Imh0dHBzOi8vaHR0cHM6Ly9tYWVhaWNidnRzZG16aHR3aG1tei5zdXBhYmFzZS5jby9hdXRoL3YxIiwic3ViIjoiZjczZWMyZDUtMTMwZS00ZmU5LWJhYzgtZDE3YTgwNzBmMzkxIiwiZW1haWwiOiJqaG9hbmExMjMyMEBvdXRsb29rLmNsIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE2OTE2OTE2MTR9XSwic2Vzc2lvbl9pZCI6IjA3MjYwODRmLTI3MTMtNDgxOS1hYWIyLTE3NjJmNzU5MGU4NyJ9.1q27d5GYCxA5-ewEyre53eCjciGcyrm2wAjpVpf714s',
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useCrearProjectsPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => crearProjectsPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('projects', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('project');
        queryClient.invalidateQueries('projects');
      },
    }
  );
};

export const FetchCrearProjectsPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  contactid,
  projectdate,
  projectname,
  status,
  tntenantid,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useCrearProjectsPOST(
    { contactid, projectdate, projectname, status, tntenantid, user_id },
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
  return children({ loading, data, error, refetchCrearProjects: refetch });
};

export const crearUsuarioPOST = (
  Constants,
  { email, password },
  handlers = {}
) =>
  fetch(`https://maeaicbvtsdmzhtwhmmz.supabase.co/auth/v1/signup`, {
    body: JSON.stringify({ email: email, password: password }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useCrearUsuarioPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['supaBase2CrearUsuarioPOST', args],
    () => crearUsuarioPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['supaBase2CrearUsuarioPOSTS']),
    }
  );
};

export const FetchCrearUsuarioPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  email,
  password,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useCrearUsuarioPOST(
    { email, password },
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
  return children({ loading, data, error, refetchCrearUsuario: refetch });
};

export const eliminarProjectoDELETE = (
  Constants,
  { projectid },
  handlers = {}
) =>
  fetch(
    `https://maeaicbvtsdmzhtwhmmz.supabase.co/rest/v1/project?projectid=${
      projectid ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization:
          'bearer eyJhbGciOiJIUzI1NiIsImtpZCI6ImlIYmNpUkdwS0dGZnZ1SDkiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjkxMTc4MTI1LCJpYXQiOjE2OTExNzQ1MjUsImlzcyI6Imh0dHBzOi8vaHR0cHM6Ly9tYWVhaWNidnRzZG16aHR3aG1tei5zdXBhYmFzZS5jby9hdXRoL3YxIiwic3ViIjoiMDQ1MjE1YWEtZWYxMy00ZjQzLWE4NDAtYzY0NTdiMDBkZWQzIiwiZW1haWwiOiJ0ZW5hbnRAcHJ1ZWJhLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNjkxMTc0NTI1fV0sInNlc3Npb25faWQiOiIzYzU4NTc4MS0xMDM5LTRjMmUtOTY0Mi01NTIwYzgzYzNlMjQifQ.pGCGYEqpoIYXKTAEy64pfES8ippMcAhgonJ8vKvu4GQ',
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header'],
      },
      method: 'DELETE',
    }
  ).then(res => handleResponse(res, handlers));

export const useEliminarProjectoDELETE = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      eliminarProjectoDELETE(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('projects', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('project');
        queryClient.invalidateQueries('projects');
      },
    }
  );
};

export const manyQuotesGET = (Constants, _args, handlers = {}) =>
  fetch(`https://maeaicbvtsdmzhtwhmmz.supabase.co/rest/v1/quote?select=*`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['token'],
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
  }).then(res => handleResponse(res, handlers));

export const useManyQuotesGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['Quotes', args],
    () => manyQuotesGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchManyQuotesGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useManyQuotesGET(
    {},
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
  return children({ loading, data, error, refetchManyQuotes: refetch });
};

export const projecst3GET = (Constants, _args, handlers = {}) =>
  fetch(`https://maeaicbvtsdmzhtwhmmz.supabase.co/rest/v1/project?select=*`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['token_authorization'],
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
  }).then(res => handleResponse(res, handlers));

export const useProjecst3GET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['projects', args],
    () => projecst3GET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchProjecst3GET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useProjecst3GET(
    {},
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
  return children({ loading, data, error, refetchProjecst3: refetch });
};

export const pruebasContacts2GET = (Constants, _args, handlers = {}) =>
  fetch(`https://maeaicbvtsdmzhtwhmmz.supabase.co/rest/v1/contact`, {
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6ImlIYmNpUkdwS0dGZnZ1SDkiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjkxNjE2MTQxLCJpYXQiOjE2OTE2MTI1NDEsImlzcyI6Imh0dHBzOi8vaHR0cHM6Ly9tYWVhaWNidnRzZG16aHR3aG1tei5zdXBhYmFzZS5jby9hdXRoL3YxIiwic3ViIjoiZjczZWMyZDUtMTMwZS00ZmU5LWJhYzgtZDE3YTgwNzBmMzkxIiwiZW1haWwiOiJqaG9hbmExMjMyMEBvdXRsb29rLmNsIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE2OTE2MTI1NDF9XSwic2Vzc2lvbl9pZCI6IjdlNzcwM2NlLTRlMDktNDg4Mi1hYTM1LTkwM2E3ZDRiZDViNyJ9.bY68Az-qMHQhw5z9bnKpgAjt4YOHIsJsflDkSqMZs6o',
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
  }).then(res => handleResponse(res, handlers));

export const usePruebasContacts2GET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['contacts', args],
    () => pruebasContacts2GET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchPruebasContacts2GET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = usePruebasContacts2GET(
    {},
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
  return children({ loading, data, error, refetchPruebasContacts2: refetch });
};

export const pruebasProjectsGET = (Constants, _args, handlers = {}) =>
  fetch(`https://maeaicbvtsdmzhtwhmmz.supabase.co/rest/v1/project?select=*`, {
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6ImlIYmNpUkdwS0dGZnZ1SDkiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjkxNjg0ODg4LCJpYXQiOjE2OTE2ODEyODgsImlzcyI6Imh0dHBzOi8vaHR0cHM6Ly9tYWVhaWNidnRzZG16aHR3aG1tei5zdXBhYmFzZS5jby9hdXRoL3YxIiwic3ViIjoiZjczZWMyZDUtMTMwZS00ZmU5LWJhYzgtZDE3YTgwNzBmMzkxIiwiZW1haWwiOiJqaG9hbmExMjMyMEBvdXRsb29rLmNsIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE2OTE2ODEyODh9XSwic2Vzc2lvbl9pZCI6IjQ0MTMxNTUwLTBmZGYtNDBmMS05MDUxLWQ2ZmRiNTllNGE1ZCJ9.B4yzUcTMxgO4ZbzoIb7JV5qIvL11FHsi84ZmIyzzD0Q',
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
  }).then(res => handleResponse(res, handlers));

export const usePruebasProjectsGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['projects', args],
    () => pruebasProjectsGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchPruebasProjectsGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = usePruebasProjectsGET(
    {},
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
  return children({ loading, data, error, refetchPruebasProjects: refetch });
};

export const pruebasQuotesGET = (Constants, _args, handlers = {}) =>
  fetch(`https://maeaicbvtsdmzhtwhmmz.supabase.co/rest/v1/quote?select=*`, {
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6ImlIYmNpUkdwS0dGZnZ1SDkiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjkxODA5MzMwLCJpYXQiOjE2OTE4MDU3MzAsImlzcyI6Imh0dHBzOi8vaHR0cHM6Ly9tYWVhaWNidnRzZG16aHR3aG1tei5zdXBhYmFzZS5jby9hdXRoL3YxIiwic3ViIjoiZjczZWMyZDUtMTMwZS00ZmU5LWJhYzgtZDE3YTgwNzBmMzkxIiwiZW1haWwiOiJqaG9hbmExMjMyMEBvdXRsb29rLmNsIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE2OTE4MDU3MzB9XSwic2Vzc2lvbl9pZCI6IjIxMWRlMDQ3LWUxNWMtNDRkOS04YTk4LWNiMWU2NmY4MzU2ZCJ9.KMzLNQLjOFyrT_DIQ-CYi3-gX_EqI2zUKzVDJbZDVSo',
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
  }).then(res => handleResponse(res, handlers));

export const usePruebasQuotesGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['Quotes', args],
    () => pruebasQuotesGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchPruebasQuotesGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = usePruebasQuotesGET(
    {},
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
  return children({ loading, data, error, refetchPruebasQuotes: refetch });
};

export const servicesGET = (Constants, _args, handlers = {}) =>
  fetch(`https://maeaicbvtsdmzhtwhmmz.supabase.co/rest/v1/service?select=*`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['token'],
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
  }).then(res => handleResponse(res, handlers));

export const useServicesGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['services', args],
    () => servicesGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchServicesGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useServicesGET(
    {},
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
  return children({ loading, data, error, refetchServices: refetch });
};
