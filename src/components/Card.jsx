import React from "react";

export const Card = ({ items }) => {
	return (
		<div>
			{items.map((item) => {
				return (
					<div key={item.id}>
						<img src={item.img} alt={item.title} />
                        <p>{item.title}</p>
						<p>{item.price}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Card;
