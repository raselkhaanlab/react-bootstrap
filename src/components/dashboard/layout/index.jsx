import { Container } from "react-bootstrap";
import { SideNav } from "./side-nav";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { useCallback, useState } from "react";
import { AuthGuard } from "../../auth/auth-guard";

export function Layout({children}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <AuthGuard>
      <div className="d-flex flex-column min-vh-100">
      <SideNav />
      <MobileNav open={isOpen} onClose={() => setIsOpen(false)} />
      <div className="flex-grow-1 d-flex flex-column ps-lg-280">
        {" "}
        <MainNav onToggle={handleToggle} />
        <main>
          <Container fluid className="py-5">
            {children}
          </Container>
        </main>
      </div>
    </div>
    </AuthGuard>
  );
}
