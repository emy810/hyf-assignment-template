function Layout({ children }) {
  return (
    <>
      <header>Reusable Component</header>
      <main>{children}</main>
      <footer> ... </footer>
    </>
  );
}

export default Layout;
