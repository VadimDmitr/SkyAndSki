import React from "react";

const styles = {
	topBanner: {
		backgroundColor: "#f8f9fa",
		padding: "2rem",
		textAlign: "center",
		boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
	},
	title: {
		fontSize: "2.5rem",
		fontWeight: "bold",
		marginBottom: "1rem",
	},
	subTitle: {
		fontSize: "1.25rem",
	},
};

const TopBanner = () => {
	return (
		<div style={styles.topBanner}>
			<h1 style={styles.title}>
				Welcome to Our eSchop Store
			</h1>
			<p style={styles.subTitle}>
				Discover our wide range of products and enjoy
				exclusive deals!
			</p>
		</div>
	);
};

export default TopBanner;
