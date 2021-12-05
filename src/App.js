import React from "react";

import PracticeSvg from "./pages/practicesvg/PracticeSvg";
import PracticeD3Lib from "./pages/practiced3lib/PracticeD3Lib";
import PracticeD3LibRect from "./pages/practiced3lib/PracticeD3LibRect";
import PracticeD3LibLine from "./pages/practiced3lib/PracticeD3LibLine";

const App = () => {
 return (
  <>
   <div>
    <PracticeSvg />
   </div>
   <div>
    <PracticeD3Lib />
   </div>
   <div>
    <PracticeD3LibRect />
   </div>
   <div>
    <PracticeD3LibLine />
   </div>
  </>
 );
};

export default App;
