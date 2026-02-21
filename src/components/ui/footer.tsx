import type { ReactNode } from "react";

type FooterLink = {
	href: string;
	label: string;
};

type FooterSocialLink = {
	href: string;
	label: string;
	icon: ReactNode;
};

type FooterProps = {
	logo: ReactNode;
	brandName: string;
	socialLinks: FooterSocialLink[];
	mainLinks: FooterLink[];
	legalLinks?: FooterLink[];
	copyright: {
		text: string;
		license: ReactNode;
	};
};

export function Footer({
	logo,
	brandName,
	socialLinks,
	mainLinks,
	legalLinks = [],
	copyright,
}: FooterProps) {
	return (
		<footer className="w-full">
			<div className="w-full px-6 py-10">
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
						<div className="flex items-center gap-3 text-mocha-text">
							<span className="flex h-10 w-10 items-center justify-center">
								{logo}
							</span>
							<span className="text-base font-light tracking-tight">
								{brandName}
							</span>
						</div>
						<div className="flex items-center gap-4 text-mocha-subtext0">
							{socialLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									aria-label={link.label}
									className="transition-colors duration-200 hover:text-mocha-lavender"
								>
									{link.icon}
								</a>
							))}
						</div>
					</div>

				<div className="flex flex-col gap-6 border-t border-mocha-surface0 pt-6 text-sm text-mocha-subtext0">
						<nav className="flex flex-wrap gap-x-6 gap-y-3">
							{mainLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									className="transition-colors duration-200 hover:text-mocha-lavender"
								>
									{link.label}
								</a>
							))}
						</nav>

						{legalLinks.length > 0 && (
							<nav className="flex flex-wrap gap-x-6 gap-y-3">
								{legalLinks.map((link) => (
									<a
										key={link.href}
										href={link.href}
										className="transition-colors duration-200 hover:text-mocha-lavender"
									>
										{link.label}
									</a>
								))}
							</nav>
						)}
					</div>

					<div className="flex flex-col gap-4 text-sm text-mocha-subtext0 sm:flex-row sm:items-start sm:justify-between">
						<div>
							<p>{copyright.text}</p>
							<p className="mt-1">{copyright.license}</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
