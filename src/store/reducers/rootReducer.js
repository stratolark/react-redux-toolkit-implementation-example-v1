import fontSizeSlice from '../slices/fontSizeSlice';
import lineHeightSlice from '../slices/lineHeightSlice';

const rootReducer = {
  fontSizeSlice,
  lineHeightSlice,
};

// we export an object, no need to use combineReducers() as
// configureStore() will automatically use the combineReducers()
// funtion on the rootReducer object.
export default rootReducer;
