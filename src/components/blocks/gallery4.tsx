export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title: string;
  description: string;
  items: Gallery4Item[];
}

export function Gallery4({ title, description, items }: Gallery4Props) {
  return (
    <section className="w-full px-6 py-12">
      <div className="mb-12">
        <h2 className="text-3xl font-light text-center mb-4 tracking-tight">
          {title}
        </h2>
        <p className="text-center text-mocha-subtext0 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-lg border border-mocha-surface0 transition-all duration-300 hover:border-mocha-lavender hover:shadow-lg"
          >
            {item.image && (
              <div className="relative overflow-hidden bg-mocha-surface0 h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            )}
            {!item.image && (
              <div className="relative overflow-hidden bg-mocha-surface0 h-48 flex items-center justify-center">
                <span className="text-mocha-subtext0">Coming Soon</span>
              </div>
            )}
            <div className="p-6">
              <h3 className="text-lg font-medium text-mocha-text mb-2 group-hover:text-mocha-lavender transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-mocha-subtext0 leading-relaxed">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
