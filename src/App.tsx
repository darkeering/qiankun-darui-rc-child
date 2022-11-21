import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ButtonContent } from "./Button/Button";
import HomeContent from "./Home/Home";
import { AutoCompleteContent } from "./AutoComplete/AutoComplete";
import { CarouselContent } from "./Carousel/Carousel";
import { CheckboxContent } from "./Checkbox/Checkbox";
import { CollspanContent } from "./Collspan/Collspan";
import { DatePickerContent } from "./DatePicker/DatePicker";
import { DropdownContent } from "./Dropdown/Dropdown";
import { InputContent } from "./Input/Input";
import { LoadingContent } from "./Loading/Loading";
import ModalContent from "./Modal/Modal";
import { NotificationContent } from "./Notification/Notification";
import { PaginationContent } from "./Pagination/Pagination";
import { SegmentedContent } from "./Segmented/Segmented";
import { SwitchContent } from "./Switch/Switch";
import SiderMenu from "./SiderMenu/SiderMenu";

function App() {
  return (
    <div style={{ height: "100%", display: "flex" }}>
      <div>
        <SiderMenu></SiderMenu>
      </div>
      <div>
        <Routes>
          <Route
            path="/"
            element={<HomeContent></HomeContent>}
          ></Route>
          <Route
            path="/button"
            element={<ButtonContent></ButtonContent>}
          ></Route>
          <Route
            path="/auto-complete"
            element={<AutoCompleteContent></AutoCompleteContent>}
          ></Route>
          <Route
            path="/carousel"
            element={<CarouselContent></CarouselContent>}
          ></Route>
          <Route
            path="/checkbox"
            element={<CheckboxContent></CheckboxContent>}
          ></Route>
          <Route
            path="/collspan"
            element={<CollspanContent></CollspanContent>}
          ></Route>
          <Route
            path="/date-picker"
            element={<DatePickerContent></DatePickerContent>}
          ></Route>
          <Route
            path="/dropdown"
            element={<DropdownContent></DropdownContent>}
          ></Route>
          <Route
            path="/input"
            element={<InputContent></InputContent>}
          ></Route>
          <Route
            path="/loading"
            element={<LoadingContent></LoadingContent>}
          ></Route>
          <Route
            path="/modal"
            element={<ModalContent></ModalContent>}
          ></Route>
          <Route
            path="/notification"
            element={<NotificationContent></NotificationContent>}
          ></Route>
          <Route
            path="/pagination"
            element={<PaginationContent></PaginationContent>}
          ></Route>
          <Route
            path="/segmented"
            element={<SegmentedContent></SegmentedContent>}
          ></Route>
          <Route
            path="/switch"
            element={<SwitchContent></SwitchContent>}
          ></Route>
          <Route path="*" element={<Navigate to="/home" />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
