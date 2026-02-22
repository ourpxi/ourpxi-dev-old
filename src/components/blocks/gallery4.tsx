import { AlertTriangle, CheckCircle2, Clock, PauseCircle, Wrench } from "lucide-react";
import type { ReactNode } from "react";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  role: string;
  status: string;
  statusHref?: string;
  statusBadgeUrl?: string;
  statusBadgeAlt?: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title: string;
  description: string;
  items: Gallery4Item[];
}

export function Gallery4({ title, description, items }: Gallery4Props) {
  const statusStyles: Record<string, { bg: string; text: string; icon?: ReactNode }> = {
    Online: {
      bg: "#a6e3a1",
      text: "#1e1e2e",
      icon: <CheckCircle2 className="h-3.5 w-3.5" />,
    },
    "In Development": {
      bg: "#89b4fa",
      text: "#1e1e2e",
      icon: <Wrench className="h-3.5 w-3.5" />,
    },
    Degraded: {
      bg: "#f9e2af",
      text: "#1e1e2e",
      icon: <AlertTriangle className="h-3.5 w-3.5" />,
    },
    Down: {
      bg: "#f38ba8",
      text: "#1e1e2e",
      icon: <AlertTriangle className="h-3.5 w-3.5" />,
    },
    Maintenance: {
      bg: "#89b4fa",
      text: "#1e1e2e",
      icon: <Wrench className="h-3.5 w-3.5" />,
    },
    Paused: {
      bg: "#f9e2af",
      text: "#1e1e2e",
      icon: <PauseCircle className="h-3.5 w-3.5" />,
    },
    Planned: {
      bg: "#89b4fa",
      text: "#1e1e2e",
      icon: <Clock className="h-3.5 w-3.5" />,
    },
  };

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
        {items.map((item) => {
          const isFeatured = item.id === "squidservers";

          return (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg border border-mocha-surface0 transition-all duration-300 hover:border-mocha-lavender hover:shadow-lg"
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {item.image && (
                  <div
                    className="relative overflow-hidden bg-mocha-surface0 h-48"
                    style={isFeatured ? { backgroundColor: "#1F2747" } : undefined}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {isFeatured && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-[#1F2747] border border-mocha-surface0">
                          <img
                            src="https://avatars.githubusercontent.com/u/221744416?s=200&v=4"
                            alt="SquidServers"
                            className="w-11 h-11 rounded-full"
                          />
                          <span className="text-xl font-semibold text-mocha-text">
                            SquidServers
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                {!item.image && (
                  <div className="relative overflow-hidden bg-mocha-surface0 h-48 flex items-center justify-center">
                    <span className="text-mocha-subtext0">Coming Soon</span>
                  </div>
                )}
                <div className="p-6 pb-12">
                  <h3 className="text-lg font-medium text-mocha-text mb-2 group-hover:text-mocha-lavender transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-mocha-subtext0 leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-sm text-mocha-subtext0 mt-3">
                    <span className="text-mocha-text"><b>Role:</b></span> {item.role}
                  </p>
                </div>
              </a>
              <div className="absolute bottom-4 right-4">
                {(() => {
                  const style = statusStyles[item.status] ?? {
                    bg: "#1f2747",
                    text: "#cdd6f4",
                  };
                  const content = item.statusBadgeUrl ? (
                    <img
                      src={item.statusBadgeUrl}
                      alt={item.statusBadgeAlt ?? item.status}
                      className="h-5 w-auto"
                    />
                  ) : (
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full border border-mocha-surface0 px-3 py-1 text-xs font-semibold"
                      style={{ backgroundColor: style.bg, color: style.text }}
                    >
                      {style.icon}
                      {item.status}
                    </span>
                  );

                  if (item.statusHref) {
                    return (
                      <a
                        href={item.statusHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform duration-200 hover:scale-[1.02]"
                      >
                        {content}
                      </a>
                    );
                  }

                  return content;
                })()}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
