import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from './components/Counter';
import BodyText from './components/BodyText';

import './styles.css';

export default function App() {
  // get state from store
  const bodyFontSize = useSelector((state) => state.fontSizeSlice);
  const bodyLineHeight = useSelector((state) => state.lineHeightSlice);
  // initi dispatch
  const dispatch = useDispatch();
  // make dispatch functions into variables to pass down as props.
  // This is optional.
  const dispatchIncrementFontSize = () =>
    dispatch({ type: 'fontSize/increment' });
  const dispatchDecrementFontSize = () =>
    dispatch({ type: 'fontSize/decrement' });
  const dispatchResetFontSize = () => dispatch({ type: 'fontSize/reset' });

  const dispatchIncrementLineHeight = () =>
    dispatch({ type: 'lineHeight/increment' });
  const dispatchDecrementLineHeight = () =>
    dispatch({ type: 'lineHeight/decrement' });
  const dispatchResetLineHeight = () => dispatch({ type: 'lineHeight/reset' });

  return (
    <div className="App">
      <h1>Redux Toolkit Implementation Exmaple</h1>
      <h2>Click the buttons to change font size and line height.</h2>
      <Counter
        counterName={'Font Size:'}
        counterData={bodyFontSize}
        increment={dispatchIncrementFontSize}
        decrement={dispatchDecrementFontSize}
        reset={dispatchResetFontSize}
        lowerLimit={12}
        upperLimit={30}
      />
      <Counter
        counterName={'Line Height:'}
        counterData={bodyLineHeight}
        increment={dispatchIncrementLineHeight}
        decrement={dispatchDecrementLineHeight}
        reset={dispatchResetLineHeight}
        lowerLimit={1.2}
        upperLimit={2}
      />
      <BodyText bodyFontSize={bodyFontSize} bodyLineHeight={bodyLineHeight} />
    </div>
  );
}

/** Step 1 - Structure:
 *
 *  1. Initialize store through react-redux's Provider on index.js
 *  2. Create a folder to hold the desire "state".
 *     In the offial documentation for redux-toolkit they recommed
 *     calling this folder "feature". I think the name is confusing.
 *  3. Create a store.js file (or folder called store with the store
 *     inside a file called index.js )
 *  4. Create your redecurs, in this case we are usin createClisces()
 *     to create our reducers. For a counter exmaple this is overkill,
 *     but this function allows to showcase the real power of redux
 *     toolkit.
 *  5. Create a rootRedcuer file, it doens't have to be inside it's ownn
 *     folder, but for the sake of order I have decided to separete each
 *     little pice of the puzzel in its own folder. Inside the rootReducer
 *     we create and export an objet with the same name containing the
 *     slices.
 *  6. Optionally, yu can use a middleware like redux-logge inside the
 *     sotre/index.js file.
 *
 * */

/** Step 2 - :
 *
 *
 *
 */
