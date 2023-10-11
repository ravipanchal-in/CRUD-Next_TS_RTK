"use client";
import Form from "@/components/form/Form";

function Main() {
  return false ? (
    <div>Loading... Please Wait!</div>
  ) : (
    <div>
      <Form />
    </div>
  );
}

export default Main;
