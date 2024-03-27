export default function CommunityLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <nav className="fixed"></nav>

      {children}
    </section>
  );
}
