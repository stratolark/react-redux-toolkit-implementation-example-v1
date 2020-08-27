import React from 'react';
// import { useSelector } from "react-redux";

// We can get and use the store from this component or, pass the
// values need as props from App and handle all the logic outside
// the compomenents. Or we can keep the logic of each compoenent
// inside its own.

export default function Button({ bodyFontSize, bodyLineHeight }) {
  // useSelecto must be inside the compoment.
  // const bodyFontSize = useSelector((state) => state.fontSizeSlice);

  return (
    <div className="body-text">
      <h2>Body of Text:</h2>
      <div
        style={{
          fontSize: `${bodyFontSize}px`,
          lineHeight: `${bodyLineHeight}`,
          /* fontFamily: `${fontFamily}`, */
          /* fontWeight: `${fontWeight}`, */
          /*  marginTop: `${marginTop}`,
              textAlign: `${textAlign}`,
              textIndent: `${textIndent}`, */
        }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, libero
          parturient rhoncus facilisis proin ullamcorper rutrum felis, suscipit
          bibendum penatibus dictum pellentesque orci. Ornare aenean nullam et
          mus massa tristique tellus tortor dis, bibendum luctus erat mattis
          nibh mi pharetra aptent montes senectus, nulla viverra proin pretium
          pulvinar cubilia torquent nascetur. Euismod netus vulputate malesuada
          id habitasse nibh purus fringilla morbi habitant, vehicula laoreet
          eget condimentum aliquet at taciti posuere egestas lacinia tristique,
          pulvinar aptent magna porta interdum in varius gravida suscipit.
          Ultrices sociis hendrerit est curae tincidunt potenti fusce velit,
          luctus egestas iaculis elementum tellus vestibulum mattis, sem cum
          phasellus mi sagittis nullam et.
        </p>{' '}
        <p>
          Auctor magnis a erat egestas neque himenaeos suscipit proin non,
          tempor luctus dignissim vivamus pellentesque sem aptent pulvinar
          nascetur, fringilla tempus montes nunc platea rhoncus cum morbi.
          Blandit velit suspendisse imperdiet cursus vitae porta tellus neque
          metus, phasellus curae nunc himenaeos rutrum integer aenean litora,
          purus nostra vulputate class diam placerat libero feugiat. Montes et
          nunc lacus pharetra sem fringilla semper, eget a interdum per porta
          quisque cursus vulputate, leo diam proin etiam nibh fermentum.
        </p>{' '}
        <p>
          Est etiam bibendum odio natoque curae maecenas rhoncus, viverra erat
          id pharetra aliquam ad ligula porta, mauris condimentum montes feugiat
          magnis fermentum. Ullamcorper felis penatibus rutrum id vehicula
          natoque mauris pretium ad, sem semper per faucibus inceptos dictum
          aenean praesent malesuada vitae, curabitur vel condimentum erat massa
          ornare morbi sed. Lacus placerat nibh justo urna dis venenatis ac
          porttitor metus, malesuada sodales aptent class nisl curabitur magna.
        </p>
      </div>
    </div>
  );
}
