import React from "react";

import PracticeSvg from "./pages/practicesvg/PracticeSvg";
import PracticeD3Lib from "./pages/practiced3lib/PracticeD3Lib";
import PracticeD3LibPie from "./pages/practiced3lib/PracticeD3LibPie";
import PracticeD3LibRect from "./pages/practiced3lib/PracticeD3LibRect";
import PracticeD3LibLine from "./pages/practiced3lib/PracticeD3LibLine";
import PracticeD3LibLine2 from "./pages/practiced3lib/PracticeD3LibLine2";
import PracticeD3LibLine3 from "./pages/practiced3lib/PracticeD3LibLine3";
import PracticeD3LibMap from "./pages/practiced3lib/PracticeD3LibMap";
import "./pages/css/App.css";

const App = () => {
 return (
  <>
   <div>
    <span>
     <PracticeD3Lib />
    </span>
    <span>
     <PracticeD3LibRect />
    </span>
   </div>
   <div>
    <PracticeD3LibPie />
   </div>
   <div>
    <span>
     <PracticeD3LibLine />
    </span>
    <span>
     <PracticeD3LibLine2 />
    </span>
   </div>
   <div>
    <span>
     <PracticeD3LibMap />
    </span>
    <span>
     <PracticeD3LibLine3 />
    </span>
   </div>
  </>
 );
};

export default App;
