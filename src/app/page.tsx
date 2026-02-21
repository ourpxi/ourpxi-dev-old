export default function Home() {
	return (
		<div className="flex flex-col min-h-screen bg-mocha-base text-mocha-text">
			{/* Hero Section */}
			<div className="flex-1 flex items-center justify-center px-6 py-20">
				<div className="w-full max-w-[650px] flex flex-col items-center">
					{/* Profile Image */}
					<div className="w-20 h-20 rounded-full bg-mocha-surface0 mb-12 flex items-center justify-center">
						<span className="text-3xl">↑</span>
					</div>

					{/* Name */}
					<h1 className="text-4xl font-light text-center mb-6 tracking-tight">
						Your Name
					</h1>

					{/* Description */}
					<p className="text-center text-mocha-subtext0 mb-16 leading-relaxed max-w-sm">
						A brief, intentional statement about who you are and what you do.
					</p>

					{/* Navigation Links */}
					<nav className="flex flex-col items-center space-y-4 w-full">
						<a
							href="/"
							className="text-mocha-text transition-colors duration-200 hover:text-mocha-lavender"
						>
							home
						</a>
						<a
							href="/work"
							className="text-mocha-text transition-colors duration-200 hover:text-mocha-lavender"
						>
							work
						</a>
						<a
							href="/thoughts"
							className="text-mocha-text transition-colors duration-200 hover:text-mocha-lavender"
						>
							thoughts
						</a>
						<a
							href="/lab"
							className="text-mocha-text transition-colors duration-200 hover:text-mocha-lavender"
						>
							lab
						</a>
					</nav>
				</div>
			</div>

			{/* Footer */}
			<footer className="px-6 py-8 border-t border-mocha-surface0">
				<div className="max-w-[650px] mx-auto text-center">
					<p className="text-sm text-mocha-subtext0">
						Colors by{" "}
						<a
							href="https://catppuccin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="transition-colors duration-200 hover:text-mocha-lavender"
						>
							Catppuccin
						</a>
					</p>
				</div>
			</footer>
		</div>
	);
}
