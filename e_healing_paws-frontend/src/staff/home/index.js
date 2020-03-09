import React from "react";
import petTable from "./pet_table";

export default class Main extends React.PureComponent {
  render() {
    return (
      <div>
        <petTable />
      </div>
    );
  }
}
