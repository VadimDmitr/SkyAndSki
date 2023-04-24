import YouTube from "react-youtube";

export const VideoAboutUs = () => {
	const videoId = "xGK2rxSr9ig";
	const opts = {
		height: "390",
		width: "640",
		playerVars: {
			autoplay: 1,
		},
	};

	const onReady = (event) => {
		console.log("Video is ready");
	};

	const onPlay = (event) => {
		console.log("Video is playing");
	};

	return (
		<div className="video-section">
			<h1 className="video-section__title video-section__text">
				Video about us
			</h1>
			<p className="video-section__description video-section__text">
				Amet minim mollit non deserunt ullamco est sit
				aliqua dolor do amet sint. Velit officia consequat
				duis enim velit mollit.
			</p>
			<YouTube
				className="video-section__video"
				videoId={videoId}
				opts={opts}
				onReady={onReady}
				onPlay={onPlay}
			/>
		</div>
	);
};
