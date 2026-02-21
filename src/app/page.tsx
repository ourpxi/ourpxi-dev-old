export default function Home() {
	return (
		<div className="flex flex-col min-h-screen bg-mocha-base text-mocha-text">
			{/* profile */}
			<div className="flex-1 flex items-center justify-center px-6 py-20">
				<div className="w-full max-w-[650px] flex flex-col items-center">
					{<img src="/profile.jpeg" alt="Profile Picture" className="w-50 h-50 rounded-full mb-12 profile-shadow" />}
					{/* Name */}
					<h1 className="text-4xl font-light text-center mb-6 tracking-tight">
						Jean Serrano
					</h1>
					{/* bio */}
					<p className="text-center text-mocha-subtext0 mb-16 leading-relaxed max-w-sm">
						Self-taught amateur developer and designer.
					</p>
					{/* nav */}
					<nav className="flex flex-col items-center space-y-4 w-full">
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
						© 2026 Jean Serrano | Colors by{" "}
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
