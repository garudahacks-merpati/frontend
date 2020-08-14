import React from "react";
import NavBar from "../components/NavBar";
import CourseList from "../components/CourseList";

export default function Home() {
  return (
    <div>
      <NavBar name="Home"></NavBar>
      <CourseList></CourseList>
    </div>
  );
}
