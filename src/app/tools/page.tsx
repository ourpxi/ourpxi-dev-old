import { Footer } from "@/components/ui/footer";
import { Wrench, Github, Twitter } from "lucide-react";
import Link from "next/link";

const tools = [
	{
		id: "server-icon",
		title: "Server Icon Generator",
		description:
			"Convert any image to a 64x64 PNG server icon. Perfect for Minecraft servers, Discord, and more. All processing happens in your browser—no uploads needed.",
		href: "/tools/server-icon",
		icon: "",
	},
	{
		id: "upcoming-1",
		title: "Coming Soon",
		description: "Coming soon...",
		href: "#",
		icon: "",
	},
	{
		id: "upcoming-2",
		title: "Coming Soon",
		description: "Coming soon...",
		href: "#",
		icon: "",
	},
];

export default function ToolsPage() {
	return (
		<div className="flex flex-col min-h-screen bg-mocha-base text-mocha-text">
			{/* Header */}
			<div className="flex items-center justify-center px-6 pt-16 pb-4">
				<div className="w-full max-w-[650px] flex flex-col items-center">
					<div className="w-20 h-20 rounded-full bg-mocha-surface0 flex items-center justify-center mb-8">
						<Wrench className="w-10 h-10 text-mocha-lavender" />
					</div>
					<h1 className="text-4xl font-light text-center mb-6 tracking-tight">
						Tools
					</h1>
					<p className="text-center text-mocha-subtext0 mb-16 leading-relaxed max-w-sm">
						A collection of simple, privacy-focused tools that run entirely in your browser.
					</p>
				</div>
			</div>

			{/* Tools Gallery */}
			<div className="flex items-center justify-center px-6 py-2">
				<section className="w-full px-6 py-12">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
						{tools.map((tool) => {
							const isDisabled = tool.href === "#";
							
							return isDisabled ? (
								<div
									key={tool.id}
									className="group relative overflow-hidden rounded-lg border border-mocha-surface0 transition-all duration-300 opacity-50 cursor-not-allowed"
								>
									<div className="p-8">
										<div className="text-5xl mb-4">{tool.icon}</div>
										<h3 className="text-xl font-medium text-mocha-text mb-3 transition-colors">
											{tool.title}
										</h3>
										<p className="text-sm text-mocha-subtext0 leading-relaxed">
											{tool.description}
										</p>
									</div>
								</div>
							) : (
								<Link
									key={tool.id}
									href={tool.href}
									className="group relative overflow-hidden rounded-lg border border-mocha-surface0 transition-all duration-300 hover:border-mocha-lavender hover:shadow-lg"
								>
									<div className="p-8">
										<div className="text-5xl mb-4">{tool.icon}</div>
										<h3 className="text-xl font-medium text-mocha-text mb-3 group-hover:text-mocha-lavender transition-colors">
											{tool.title}
										</h3>
										<p className="text-sm text-mocha-subtext0 leading-relaxed">
											{tool.description}
										</p>
									</div>
								</Link>
							);
						})}
					</div>
				</section>
			</div>

			<Footer
				logo={<img src="/favicon-32x32.png" alt="Logo" className="h-10 w-10 rounded-full" />}
				brandName="Jean Serrano"
				socialLinks={[
					{
						href: "https://github.com/ourpxi",
						label: "GitHub",
						icon: <Github className="h-5 w-5" />,
					},
					{
						href: "https://x.com/ourpxi_",
						label: "Twitter",
						icon: <Twitter className="h-5 w-5" />,
					},
				]}
				mainLinks={[
					{ href: "/", label: "Home" },
					{ href: "/tools", label: "Tools" },
					{ href: "https://status.ourpxi.dev", label: "Status" },
				]}
				legalLinks={[
					{ href: "/privacy", label: "Privacy Policy" },
					{ href: "/terms", label: "Terms of Service" },
				]}
				copyright={{
					text: "© 2026 Jean Serrano. All rights reserved.",
					license: (
						<>
							This website is licensed under the{" "}
							<a
								href="https://www.gnu.org/licenses/agpl-3.0.html"
								target="_blank"
								rel="noopener noreferrer"
								className="underline hover:text-mocha-lavender transition-colors"
							>
								GNU AGPLv3 license
							</a>
							.
						</>
					),
				}}
			/>
		</div>
	);
}
