import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Container>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
