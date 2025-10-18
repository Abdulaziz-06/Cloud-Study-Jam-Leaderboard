export default function Footer() {
  return (
    <footer className="w-full mt-12 py-6 text-center text-sm text-[var(--color-secondary)] border-t border-[var(--color-border)] bg-[var(--color-background)]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <p>
          © {new Date().getFullYear()} 
          <span className="mx-1 font-semibold text-[var(--color-primary)] hover:text-blue-400 transition-colors">
            Abdul Aziz
          </span>
          | WebDevLead @ GDGOC GCTC
        </p>
      </div>
    </footer>
  );
}
