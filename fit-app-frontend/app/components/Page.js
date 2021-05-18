import React, { useEffect } from "react";
import Container from "./Container";

function Page(props) {
  // Updates the page title and snaps to the top when a link is clicked
  useEffect(() => {
    document.title = `${props.title} | FitnessApp`;
    window.scrollTo(0, 0);
  }, []);
  return <Container wide={props.wide}>{props.children}</Container>;
}

export default Page;
