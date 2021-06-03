import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { API_KEY } from './weatherApiKey';

type WeatherType = {
  weather: string | null,
  temp: number | null
};

type FetchWeatherError = {
  message: string
};

export const fetchWeather = createAsyncThunk<
  WeatherType,
  string,
  { rejectValue: FetchWeatherError }
>('weather/fetchWeather', async (_, thunkApi) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    const result: WeatherType = {
      weather: data.weather[0].description,
      temp: data.main.temp
    };
    return result;
  } catch (err) {
    return thunkApi.rejectWithValue({
      message: 'Failed to fetch'
    });
  }
});

type WeatherDataState = {
  weather: WeatherType,
  status: 'loading' | 'idle',
  error: string | null
};

const initialState: WeatherDataState = {
  weather: {
    weather: null,
    temp: null
  },
  error: null,
  status: 'idle'
};

const fetchWeahterSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });

    builder.addCase(fetchWeather.fulfilled, (state, { payload }) => {
      //console.log(payload);
      state.weather = payload;
      state.status = 'idle';
    });
    builder.addCase(fetchWeather.rejected, (state, { payload }) => {
      console.log(payload);
    });
  }
});

export const weather = (state: RootState) => state.weather;
export default fetchWeahterSlice.reducer;
