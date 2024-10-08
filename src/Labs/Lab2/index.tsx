import BackgroundColors from "./BackgroundColors";
import BootstrapGrids from "./BootstrapGrids";
import BootstrapTables from "./BootstrapTables";
import Borders from "./Borders";
import Dimensions from "./Dimensions";
import Flex from "./Flex";
import Float from "./Float";
import ForegroundColors from "./ForegroundColors";
import GridLayout from "./GridLayout";
import "./index.css";
import Padding from "./Padding";
import Positions from "./Positions";
import ScreenSizeLabel from "./ScreenSizeLabel";
import Zindex from "./Zindex";
import ReactIcons from "./ReactIcons";
import BootstrapLists from "./BootstrapLists";
import BootstrapForms from "./BootstrapForms";
import BootstrapNavigation from "./BootstrapNavigation";
export default function Lab2() {
  return (
    <div id="wd-lab2" className="container">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p id="wd-first-p">
        Style attribute allows configuring look and feel right on the element.
        Although it's very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>
      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Dimensions />
      {/* <Positions /> */}
      <Zindex />
      <Float />
      <GridLayout />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <Flex /> */}
      <BootstrapGrids />
      <br />
      <br />
      <ScreenSizeLabel />
      <div className="row">
        <div className="col-3 bg-warning fs-1 d-none d-sm-block">Side bar</div>
        <div className="col-12 col-sm-9 bg-primary fs-1 text-white">
          Main content
        </div>
      </div>
      <br />
      <br />
      <BootstrapTables />
      <ReactIcons />
      <BootstrapLists />
      <BootstrapForms />
      <BootstrapNavigation />
    </div>
  );
}
