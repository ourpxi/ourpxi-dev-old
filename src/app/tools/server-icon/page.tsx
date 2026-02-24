"use client";

import { useState, useRef, DragEvent, ChangeEvent } from "react";
import { Upload, AlertTriangle, Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ServerIconTool() {
	const [isDragging, setIsDragging] = useState(false);
	const [preview, setPreview] = useState<string | null>(null);
	const [warning, setWarning] = useState<string | null>(null);
	const [isProcessing, setIsProcessing] = useState(false);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const ACCEPTED_TYPES = ["image/png", "image/jpeg", "image/jpg", "image/webp", "image/bmp"];
	const ACCEPTED_EXTENSIONS = ".png,.jpg,.jpeg,.webp,.bmp";

	const processImage = (file: File) => {
		if (!ACCEPTED_TYPES.includes(file.type)) {
			alert("Please upload a valid image file (.png, .jpg, .jpeg, .webp, .bmp)");
			return;
		}

		setIsProcessing(true);
		setWarning(null);

		const reader = new FileReader();
		reader.onload = (e) => {
			const img = new Image();
			img.onload = () => {
				// Check if image is smaller than 64px
				if (img.width < 64 || img.height < 64) {
					setWarning("Image is small, upscaling may cause blurriness");
				}

				// Create canvas and resize to 64x64
				const canvas = document.createElement("canvas");
				canvas.width = 64;
				canvas.height = 64;
				const ctx = canvas.getContext("2d");

				if (ctx) {
					// Draw the image scaled to 64x64
					ctx.drawImage(img, 0, 0, 64, 64);

					// Convert to PNG and show preview
					const dataUrl = canvas.toDataURL("image/png");
					setPreview(dataUrl);
					setIsProcessing(false);
				}
			};
			img.src = e.target?.result as string;
		};
		reader.readAsDataURL(file);
	};

	const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(true);
	};

	const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(false);
	};

	const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
	};

	const handleDrop = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(false);

		const files = e.dataTransfer.files;
		if (files && files[0]) {
			processImage(files[0]);
		}
	};

	const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (files && files[0]) {
			processImage(files[0]);
		}
	};

	const handleDownload = () => {
		if (!preview) return;

		// Create a temporary link and trigger download
		const link = document.createElement("a");
		link.href = preview;
		link.download = "server-icon.png";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handleReset = () => {
		setPreview(null);
		setWarning(null);
		if (fileInputRef.current) {
			fileInputRef.current.value = "";
		}
	};

	return (
		<div className="flex flex-col min-h-screen bg-mocha-base text-mocha-text">
			{/* Header */}
			<div className="flex items-center justify-center px-6 pt-16 pb-4">
				<div className="w-full max-w-[650px] flex flex-col items-center">
					<Link
						href="/tools"
						className="self-start mb-6 flex items-center gap-2 text-mocha-subtext0 hover:text-mocha-lavender transition-colors"
					>
						<ArrowLeft className="w-4 h-4" />
						Back to Tools
					</Link>
					<div className="w-20 h-20 rounded-full bg-mocha-surface0 flex items-center justify-center mb-8">
						<span className="text-4xl">🖼️</span>
					</div>
					<h1 className="text-4xl font-light text-center mb-6 tracking-tight">
						Server Icon Generator
					</h1>
					<p className="text-center text-mocha-subtext0 mb-8 leading-relaxed max-w-md">
						Convert any image to a perfect 64x64 PNG server icon. All processing happens
						in your browser—we never see your images.
					</p>
				</div>
			</div>

			{/* Tool */}
			<div className="flex items-center justify-center px-6 py-8">
				<div className="w-full max-w-[650px]">
					{!preview ? (
						<div
							className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
								isDragging
									? "border-mocha-lavender bg-mocha-surface0"
									: "border-mocha-surface0 hover:border-mocha-lavender"
							}`}
							onDragEnter={handleDragEnter}
							onDragOver={handleDragOver}
							onDragLeave={handleDragLeave}
							onDrop={handleDrop}
						>
							<Upload className="w-16 h-16 mx-auto mb-6 text-mocha-subtext0" />
							<h2 className="text-xl font-medium mb-2">
								{isDragging ? "Drop your image here" : "Upload an image"}
							</h2>
							<p className="text-mocha-subtext0 mb-6">
								Drag and drop or click to browse
							</p>
							<button
								onClick={() => fileInputRef.current?.click()}
								className="px-6 py-3 bg-mocha-lavender text-mocha-base rounded-lg font-medium hover:bg-mocha-mauve transition-colors"
								disabled={isProcessing}
							>
								{isProcessing ? "Processing..." : "Choose File"}
							</button>
							<input
								ref={fileInputRef}
								type="file"
								accept={ACCEPTED_EXTENSIONS}
								onChange={handleFileSelect}
								className="hidden"
							/>
							<p className="text-xs text-mocha-subtext0 mt-4">
								Accepted formats: PNG, JPG, JPEG, WEBP, BMP
							</p>
						</div>
					) : (
						<div className="border border-mocha-surface0 rounded-lg p-8">
							{warning && (
								<div className="flex items-start gap-3 mb-6 p-4 bg-mocha-yellow/10 border border-mocha-yellow/30 rounded-lg">
									<AlertTriangle className="w-5 h-5 text-mocha-yellow shrink-0 mt-0.5" />
									<p className="text-sm text-mocha-yellow">{warning}</p>
								</div>
							)}

							<div className="flex flex-col items-center">
								<div className="mb-6">
									<p className="text-center text-mocha-subtext0 mb-4">
										Preview (64x64)
									</p>
									<div className="w-32 h-32 rounded-lg overflow-hidden border-2 border-mocha-surface0">
										<img
											src={preview}
											alt="Preview"
											className="w-full h-full"
											style={{ imageRendering: "pixelated" }}
										/>
									</div>
								</div>

								<div className="flex gap-4">
									<button
										onClick={handleDownload}
										className="flex items-center gap-2 px-6 py-3 bg-mocha-lavender text-mocha-base rounded-lg font-medium hover:bg-mocha-mauve transition-colors"
									>
										<Download className="w-4 h-4" />
										Download
									</button>
									<button
										onClick={handleReset}
										className="px-6 py-3 border border-mocha-surface0 text-mocha-text rounded-lg font-medium hover:border-mocha-lavender transition-colors"
									>
										Try Another
									</button>
								</div>
							</div>
						</div>
					)}

					{/* Info Section */}
					<div className="mt-12 p-6 border border-mocha-surface0 rounded-lg">
						<h3 className="text-lg font-medium mb-4">How it works</h3>
						<ul className="space-y-2 text-sm text-mocha-subtext0">
							<li className="flex items-start gap-2">
								<span className="text-mocha-lavender mt-1">•</span>
								<span>Upload any image (PNG, JPG, WEBP, or BMP)</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-mocha-lavender mt-1">•</span>
								<span>The image is automatically resized to 64x64 pixels</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-mocha-lavender mt-1">•</span>
								<span>
									If your image is smaller than 64x64, it will be upscaled (may cause
									blurriness)
								</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-mocha-lavender mt-1">•</span>
								<span>The output is converted to PNG format</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-mocha-lavender mt-1">•</span>
								<span>
									All processing happens locally in your browser—no data is sent to any
									server
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
