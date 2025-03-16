import "@/styles/main.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>Navbar Component</header>
      <main>{children}</main>
      <footer>Footer Component</footer>
    </div>
  );
}
