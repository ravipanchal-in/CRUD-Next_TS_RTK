"use client";
import Create from "./create/page";

function Main() {
  return false ? (
    <div>Loading... Please Wait!</div>
  ) : (
    <div>
      <Create />
    </div>
  );
}

export default Main;
