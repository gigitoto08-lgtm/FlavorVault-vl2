export default function FooterSection() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h4 className="font-display font-bold text-foreground">
              AiUltra<span className="text-primary">DL</span>
            </h4>
            <p className="text-sm text-muted-foreground">
              Neural-link video extraction for power users.
            </p>
          </div>
          {[
            { title: "Product", links: ["Features", "Pricing", "Platforms", "API"] },
            { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
            { title: "Legal", links: ["Privacy Policy", "Terms of Service", "DMCA", "Support"] },
          ].map((col) => (
            <div key={col.title} className="space-y-3">
              <h4 className="font-display font-bold text-foreground text-sm">{col.title}</h4>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-mono-func">
            © 2026 AiUltraDL. All rights reserved. Built with neural precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
