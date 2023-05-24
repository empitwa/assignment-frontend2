// ====================================================================
// FRONTEND ASSIGNMENT STARTS HERE
//
// All your assignment code instances must be removed from the internet
// after your next interview, do not share them with anyone.
//
// REMARKS:
// All Programming must occur in TypeScript Syntax Extension
// (TSX, in .tsx files). No vanilla JavaScript.
// Use the React Hooks paradigm & functional components in all TODOs.
// ====================================================================

import { useEffect, useState } from "react";

// TODO: Use MUI framework for UI components

// TODO: construct types for GeoJSON data
// Alternatively, you can import and use pre-defined from `@types/geojson`
// type CustomJSON = ...;

// TODO: Install dependencies for the assignment along with their TypeScript type definitions:
// - Leaflet: A JS library for creating interactive 2D maps.
// - React Leaflet: A React wrapper around the Leaflet JS library.
// - MUI: Material UI, a React UI component library. https://mui.com/

import "./styles.css";
// import CustomMap from "./components/CustomMap";

export default function App() {
  // TODO: Declare variables with the useState() hook.
  // Be sure to annotate all variables with their proper TypeScript types. Type `any` must be avoided.
  // This rule also applies to parameters in functions and return values. e.g. unique<T>(a: Array<T>): Array<T>

  // TODO: fetch at least 2 items of GeoJSON data of your choice from the internet.
  // such items can be found here: https://datahub.io/collections/geojson
  // You may use the native fetch() API or another library of your choice.

  // TODO: Implement the backend assignment and fetch another item of data from it.

  // TODO: Type-cast the fetched data if necessary. You can also use type guards where needed.

  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>
        Implement the frontend. See comments marked with TODO in the code for more
        details.
      </h2>
      An assignment template for the backend can be found at:
      <br />
      <a href="https://replit.com/github/empitwa/assignment-backend">
        https://replit.com/github/empitwa/assignment-backend
      </a>
      <hr />
      In your submission, please update the entries in the table below:
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. Frontend finished?</td>
            <td>No</td>
          </tr>
          <tr>
            <td>2. Backend: Endpoint finished?</td>
            <td>No</td>
          </tr>
          <tr>
            <td>3. Backend: Retrieving from database using ORM is finished?</td>
            <td>No</td>
          </tr>
          <tr>
            <td>4. Overall percentage of assignment completion (frontend & backend)</td>
            <td>0%</td>
          </tr>
        </tbody>
      </table>
      <br />
      Remarks (if any)
      <div>...</div>
      <br />
      <hr />
      (frontend)
      {/* TODO: */}
      {/* Implement a mechanism to switch between the GeoJSON data to be displayed.*/}
      {/* Buttons are recommended (e.g. one button per fetched GeoJSON data) but any
      component type or method can be used. */}
      {/* ----------------------------------------------------------------------------- */}
      {/* TODO:  */}
      {/* The GeoJSON format (https://geojson.org/) uses JSON to encode various types of
      geographical information using 2D geometry and properties.
      Implement a mechanism to list the 'features' contained in the selected GeoJSON
      data and a way for users to select a specific one to have it highlighted on the map. */}
      {/* ----------------------------------------------------------------------------- */}
      {/* TODO: */}
      {/* Add a custom Leaflet Map component here */}
      {/* <CustomMap ....> */}
    </div>
  );
}
