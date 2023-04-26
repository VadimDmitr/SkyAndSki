import YouTube from "react-youtube";

export const VideoAboutUs = () => {
	const videoId = "xGK2rxSr9ig";
	const opts = {
		height: "100%",
		width: "100%",
		playerVars: {
			autoplay: 0,
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
			<div className="video-section__content">
				<h1 className="video-section__title">
					Video about us
				</h1>
				<h2 className="video-section__description">
					Amet minim mollit non deserunt ullamco est sit
					aliqua dolor do amet sint. Velit officia consequat
					duis enim velit mollit.
				</h2>
			</div>
			<div className="video-section__video-wrapper">
				<YouTube
					className="video-section__video"
					videoId={videoId}
					opts={opts}
					onReady={onReady}
					onPlay={onPlay}
				/>
			</div>
		</div>
	);
};
