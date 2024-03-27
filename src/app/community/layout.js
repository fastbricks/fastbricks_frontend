export default function CommunityLayout({ children }) {
  return (
    <section>
      <nav className="fixed"></nav>

      {children}
    </section>
  );
}
