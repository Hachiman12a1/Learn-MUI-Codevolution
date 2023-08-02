import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";

import "./App.css";
import MuiAccordion from "./components/MuiAccordion";
import MuiAlert from "./components/MuiAlert";
import MuiAutoComplete from "./components/MuiAutoComplete";
import MuiAvatar from "./components/MuiAvatar";
import MuiBadge from "./components/MuiBadge";
import MuiBottomNavigation from "./components/MuiBottomNavigation";
import MuiBreadcrumbs from "./components/MuiBreadcrumbs";
import MuiButton from "./components/MuiButton";
import MuiCard from "./components/MuiCard";
import MuiCheckBox from "./components/MuiCheckBox";
import MuiChip from "./components/MuiChip";
import MuiDialog from "./components/MuiDialog";
import MuiDrawer from "./components/MuiDrawer";
import MuiImageList from "./components/MuiImageList";
import MuiLayouts from "./components/MuiLayouts";
import MuiLink from "./components/MuiLink";
import MuiList from "./components/MuiList";
import MuiLoadingButton from "./components/MuiLoadingButton";
import MuiNavbar from "./components/MuiNavbar";
import MuiProgress from "./components/MuiProgress";
import MuiRadioButton from "./components/MuiRadioButton";
import MuiRating from "./components/MuiRating";
import MuiSelect from "./components/MuiSelect";
import MuiSkeleton from "./components/MuiSkeleton";
import MuiSnackbar from "./components/MuiSnackbar";
import MuiSpeedDial from "./components/MuiSpeedDial";
import MuiSwitch from "./components/MuiSwitch";
import MuiTable from "./components/MuiTable";
import MuiTextField from "./components/MuiTextField";
import MuiTooltip from "./components/MuiTooltip";
import MuiTypography from "./components/MuiTypography";
import MuiPicker from "./components/MuiPicker";
import MuiDateRangePicker from "./components/MuiDateRangePicker";
import MuiTabs from "./components/MuiTabs";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        {/* <MuiTypography /> */}
        {/* <MuiButton /> */}
        {/* <MuiTextField /> */}
        {/* <MuiSelect /> */}
        {/* <MuiRadioButton />*/}
        {/* <MuiCheckBox /> */}
        {/* <MuiSwitch /> */}
        {/* <MuiRating /> */}
        {/* <MuiAutoComplete /> */}
        {/* <MuiLayouts /> */}
        {/* <MuiCard /> */}
        {/* <MuiAccordion /> */}
        {/* <MuiImageList /> */}
        {/* <MuiNavbar /> */}
        {/* <MuiLink /> */}
        {/* <MuiBreadcrumbs /> */}
        {/* <MuiDrawer /> */}
        {/* <MuiSpeedDial /> */}
        {/* <MuiBottomNavigation /> */}
        {/* <MuiAvatar /> */}
        {/* <MuiBadge /> */}
        {/* <MuiList /> */}
        {/* <MuiChip /> */}
        {/* <MuiTooltip /> */}
        {/* <MuiTable /> */}
        {/* <MuiAlert /> */}
        {/* <MuiSnackbar /> */}
        {/* <MuiDialog /> */}
        {/* <MuiProgress /> */}
        {/* <MuiSkeleton /> */}
        {/* <MuiLoadingButton /> */}
        {/* <MuiPicker /> */}
        {/* <MuiDateRangePicker /> */}
        <MuiTabs />
      </div>
    </LocalizationProvider>
  );
}

export default App;
