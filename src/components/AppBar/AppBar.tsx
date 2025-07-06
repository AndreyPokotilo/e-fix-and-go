import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./AppBar.styled";

export function AppBar() {
  return (
    <Container>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
