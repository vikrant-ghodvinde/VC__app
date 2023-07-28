import CountryOrCity from "Screens/User/CountryOrCity/CountryOrCity";
import Login from "Screens/User/Login/Login";
// import Login from "Screens/Admin/Login/Login";
import Register from "Screens/User/Register/Register";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Dashboard from "Screens/User/Dashboard/Dashboard";
import Navbar from "Components/Navbar/Navbar";
import CreateAccount from "Screens/Admin/CreateAccount/CreateAccount";
import TypeOfFund from "Screens/Admin/TypeOfFund/TypeOfFund";
import InvestInCountry from "Screens/Admin/InvestInCountry/InvestInCountry";
import Industry from "Screens/Admin/Industry/Industry";
import Application from "Screens/Admin/Application/Application";
import CompanyInformation from "Screens/Admin/CompanyInformation/CompanyInformation";
import Setting from "Screens/Admin/Setting/Setting";
// import DataRoom from "Screens/User/DataRoom/DataRoom";
// import CapTable from "Screens/User/CapTable/CapTable";
// import NewShareholder from "Screens/User/CapTable/Components/NewShareholder";
// import EditShareholder from "Screens/User/CapTable/Components/EditShareholder";
// import Funding from "Screens/User/Funding/Funding";
// import PreviousFundingRound from "Screens/User/Funding/Components/PreviousFundingRound";
// import NewFundingShareholder from "Screens/User/Funding/Components/NewFundingShareholder";
import InvestorList from "Screens/User/InvestorList/InvestorList";
import InvertorsNewFunding from "Screens/User/InvestorList/Screens/InvestorsNewFunding";
import SignIn from "Screens/User/SignIn/SignIn";
import InvertorsFunding from "Screens/User/InvestorList/Components/InvestorsFunding";
import InvertorsDocuments from "Screens/User/InvestorList/Screens/InvestorsDocuments";
import DataRoom from "Screens/User/DataRoom/DataRoom";
import Dashboard from "Screens/User/Dashboard/Dashboard";
import NewShareholder from "Screens/User/CapTable/Components/NewShareholder";
import EditShareholder from "Screens/User/CapTable/Components/EditShareholder";
// import InvertorsFunding from "Screens/User/InvestorList/Components/InvestorsFunding";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/select-country" element={<CountryOrCity />} />
        <Route path="/admin-login" element={<Login />} />
        <Route path="/admin-register" element={<CreateAccount />} />
        <Route path="/admin-fundtype" element={<TypeOfFund />} />
        <Route path="/admin-invest-in-country" element={<InvestInCountry />} />
        <Route path="/admin-industry" element={<Industry />} />
        <Route path="/admin" element={<Application />} />
        <Route path="/admin-company" element={<CompanyInformation />} />
        <Route path="/admin-setting" element={<Setting />} />
        <Route path="/investor-list" element={<InvestorList />} />
        <Route path="/data-room" element={<DataRoom />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cap-table/new-shareholder" element={<NewShareholder />} />
        <Route path="/cap-table/edit-shareholder" element={<EditShareholder />} />
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cap-table" element={<CapTable />} />
        <Route path="/cap-table/new-shareholder" element={<NewShareholder />} />
        <Route path="/cap-table/edit-shareholder" element={<EditShareholder />} />
        <Route path="/funding" element={<Funding />} />
        <Route path="/funding/previous-funding-round" element={<PreviousFundingRound />} />
        <Route path="/funding/new-funding-shareholder" element={<NewFundingShareholder />} />
        <Route path="/investor-list/invertor-funding" element={<InvertorsFunding />} /> */}
        <Route path="/investor-list/new" element={<InvertorsNewFunding />} />
        <Route path="/investor-list/invertor-funding" element={<InvertorsDocuments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
