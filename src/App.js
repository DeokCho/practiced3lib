import React from "react";

import PracticeSvg from "./pages/practicesvg/PracticeSvg";
import PracticeD3Lib from "./pages/practiced3lib/PracticeD3Lib";
import PracticeD3LibPie from "./pages/practiced3lib/PracticeD3LibPie";
import PracticeD3LibRect from "./pages/practiced3lib/PracticeD3LibRect";
import PracticeD3LibLine from "./pages/practiced3lib/PracticeD3LibLine";
import PracticeD3LibLine2 from "./pages/practiced3lib/PracticeD3LibLine2";
import PracticeD3LibMap from "./pages/practiced3lib/PracticeD3LibMap";

const App = () => {
 return (
  <>
   <div>{/* <PracticeD3LibPie /> */}</div>
   <div>
    <PracticeD3Lib />
   </div>
   <div>
    <PracticeD3LibRect />
   </div>
   <div>
    <PracticeD3LibLine />
   </div>
   <div>
    <PracticeD3LibLine2 />
   </div>
   <div>
    <PracticeD3LibMap />
   </div>
  </>
 );
};

export default App;
