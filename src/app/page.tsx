import { Github, Twitter } from "lucide-react";
import { Footer } from "@/components/ui/footer";
import { Gallery4, type Gallery4Props } from "@/components/blocks/gallery4";

const demoData: Gallery4Props = {
	title: "Projects",
	description:
		"Here are some of the projects I've worked on. Click on any of them to learn more!",
	items: [
		{
			id: "tetobot",
			title: "TetoBot: A discord bot for Club del Chisme",
			description:
				"TetoBot is a private discord bot designed for the Club del Chisme community, focused on providing moderation and utilities to the server staff, as well as an integration with OpenAI to simulate a chat with the real Kasane Teto.",
			role: "Owner / Lead Developer",
			status: "Online",
			statusHref: "https://status.ourpxi.dev",
			href: "https://discord.gg/clubdelchismess",
			image:
				"https://cdn.discordapp.com/banners/1341458831267332167/10ed463d54851cab8e2bb71866ef7f2b.webp?size=1024",
		},
		{
			id: "rompopetinsmp",
			title: "RompopetinSMP: A Minecraft SMP Server",
			description:
				"A Minecraft SMP server made for the Rompopetin project and its community.",
			role: "Server Admin / Developer",
			status: "Paused",
			statusHref: "https://status.ourpxi.dev",
			href: "https://rompopetin.lat",
			image:
				"/rompopetinsmp.png",
		},
		{
			id: "squidservers",
			title: "SquidServers",
			description: "SquidServers is a Self Hosted game server dashboard with build in tunneling via playit.gg.",
			role: "Support Team Member",
			status: "Operational",
			statusHref: "https://status.ourpxi.dev",
			href: "https://squidservers.com",
			image:
				"https://github.com/SquidServers/image-canvas-generator/blob/main/example.png?raw=true",
		},
		{
			id: "ecca",
			title: "ECOCOARTE",
			description: "Coming soon...",
			role: "Lead Developer/Maker",
			status: "Planned",
			href: "#",
			image: "/bannerecca.webp",
		},
		{
			id: "placeholder",
			title: "Upcoming Project",
			description: "Coming soon...",
			role: "TBD",
			status: "Planned",
			href: "#",
			image: "",
		},
	],
};

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen bg-mocha-base text-mocha-text">
			{/* profile */}
			<div className="flex items-center justify-center px-6 pt-16 pb-4">
				<div className="w-full max-w-[650px] flex flex-col items-center">
					{<img src="/profile.jpeg" alt="Profile Picture" className="w-50 h-50 rounded-full mb-12 profile-shadow profile-image" />}
					{/* Name */}
					<h1 className="text-4xl font-light text-center mb-6 tracking-tight">
						Jean Serrano
					</h1>
					{/* bio */}
					<p className="text-center text-mocha-subtext0 mb-16 leading-relaxed max-w-sm">
						Self-taught amateur developer and designer.
					</p>
				</div>
			</div>

			{/* Gallery */}
			<div className="flex items-center justify-center px-6 py-2">
				<Gallery4 {...demoData} />
			</div>

			<Footer
				logo={<img src="/favicon-32x32.png" alt="Logo" className="h-10 w-10 rounded-full" />}
				brandName="Jean Serrano"
				socialLinks={[
					{
						icon: <img src="/bmc-logo-no-background.png" alt="Buy Me A Coffee" className="h-5 w-5" />,
						href: "https://buymeacoffee.com/justpaulcr",
						label: "Buy Me A Coffee",
					},
					{
						icon: <Github className="h-5 w-5" />,
						href: "https://github.com/ourpxi",
						label: "GitHub",
					},
				]}
				mainLinks={[
					{ href: "https://status.ourpxi.dev", label: "Services Status" },
					{ href: "/contact", label: "Contact" },
				]}
				copyright={{
					text: "© 2026 Jean Serrano",
					license: (
						<>
							Colors by{" "}
							<a
								href="https://catppuccin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="transition-colors duration-200 hover:text-mocha-lavender"
							>
								Catppuccin
							</a>
						</>
					),
				}}
			/>
		</div>
	);
}
