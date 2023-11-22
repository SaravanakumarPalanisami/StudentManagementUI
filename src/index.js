import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentForm from "./components/InsertForm";
import ResponsiveAppBar from "./components/Header"
import DeleteForm from "./components/DeleteForm";
import GetRankForm from "./components/GetRankForm";
import UpdateScoreForm from "./components/UpdateScoreForm";
import DataTable from "./components/GetDataTable";

const AppRouter = (
  <Router>

    <Routes>

      <Route
        path="/*"
        element={
          <div style={{ backgroundImage: 'url("https://i0.wp.com/www.lovelycoding.org/wp-content/uploads/2022/09/Student-Management-System.webp?fit=640%2C427&ssl=1")', height: '100vh', backgroundSize: 'cover' }}>
            <ResponsiveAppBar />
          </div>
        }
      />
      <Route
        path="/insertentry"
        element={
          <>
          <ResponsiveAppBar></ResponsiveAppBar>
          <StudentForm></StudentForm>
          </>
        }
      />
      <Route
        path="/deleteentry"
        element={
          <>
          <ResponsiveAppBar></ResponsiveAppBar>
          <DeleteForm></DeleteForm>
          </>
        }
      />
      <Route
        path="/getrank"
        element={
          <>
          <ResponsiveAppBar></ResponsiveAppBar>
          <GetRankForm/>
          </>
        }
      />
       <Route
        path="/updatescore"
        element={
          <>
          <ResponsiveAppBar></ResponsiveAppBar>
          <UpdateScoreForm/>
          </>
        }
      />
         <Route
        path="/getallstudents"
        element={
          <>
          <ResponsiveAppBar></ResponsiveAppBar>
          <DataTable/>
          </>
        }
      />
     

    </Routes>

  </Router>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(AppRouter);
