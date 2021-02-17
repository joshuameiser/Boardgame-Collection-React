import React from "react";
import classes from "./Field.module.css";
import BG from "../images/BG.webp";

const FieldSVG = (props: {
	field: Array<Array<number>>;
	clicked: Function;
}) => {
	let fieldVisual: JSX.Element[] = props.field.map((row, index) => {
		let key1 = index;
		return (
			<g key={key1}>
				{row.map((element, index) => {
					let key = key1 + index.toString();
					let player: string;
					if (element === 1) {
						player = classes.Player1;
					} else if (element === 2) {
						player = classes.Player2;
					} else player = "";

					return (
						<circle
							key={key}
							className={player}
							r="25"
							cx={25 + 60 * index}
							cy={25 + 60 * key1}
							fill="black"
							onClick={() => props.clicked(key)}></circle>
					);
				})}
			</g>
		);
	});
	return (
		<div>
			<svg
				width="520px"
				height="504px"
				viewBox="0 0 520 504"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink">
				<title>Board</title>
				<defs>
					<rect id="path-1" x="0" y="0" width="520" height="504"></rect>
					<pattern
						id="pattern-2"
						patternUnits="objectBoundingBox"
						width="100%"
						height="100%">
						<image href={BG} x="0" y="0" width="100%" height="100%" />
					</pattern>
					{/* <use
							xlinkHref="#image-3"
							transform="scale(0.302158273,0.302158273)"></use>
					</pattern>
					<image
						id="image-3"
						width="2388"
						height="1668"
						href="./../images/BG.png"
					/> */}
					<linearGradient
						x1="50%"
						y1="0%"
						x2="50%"
						y2="175.318282%"
						id="linearGradient-5">
						<stop stopColor="#DA0080" offset="0%"></stop>
						<stop stopColor="#190E88" offset="100%"></stop>
					</linearGradient>
					<rect id="path-6" x="0" y="399" width="520" height="105"></rect>
					<filter
						x="-4.1%"
						y="-21.4%"
						width="108.3%"
						height="141.0%"
						filterUnits="objectBoundingBox"
						id="filter-7">
						<feOffset
							dx="0"
							dy="-1"
							in="SourceAlpha"
							result="shadowOffsetOuter1"></feOffset>
						<feGaussianBlur
							stdDeviation="7"
							in="shadowOffsetOuter1"
							result="shadowBlurOuter1"></feGaussianBlur>
						<feColorMatrix
							values="0 0 0 0 0.0156862745   0 0 0 0 0   0 0 0 0 0.164705882  0 0 0 1 0"
							type="matrix"
							in="shadowBlurOuter1"></feColorMatrix>
					</filter>
					<linearGradient
						x1="50%"
						y1="0%"
						x2="50%"
						y2="99.5866682%"
						id="linearGradient-8">
						<stop stopColor="#00C8E5" offset="0%"></stop>
						<stop stopColor="#003F45" offset="100%"></stop>
					</linearGradient>
					<path
						d="M159.385635,474 C160.45859,474 161.613183,473.895597 162.849414,473.68679 C164.085645,473.477983 165.100288,473.211174 165.893342,472.886364 L165.893342,472.886364 L165.893342,465.926136 C164.353884,466.250947 162.697801,466.413352 160.925092,466.413352 C159.105734,466.413352 157.834515,466.076941 157.111436,465.404119 C156.388358,464.731297 155.921856,463.304451 155.71193,461.12358 C155.502004,458.942708 155.397041,455.068182 155.397041,449.5 C155.397041,443.931818 155.502004,440.057292 155.71193,437.87642 C155.921856,435.695549 156.388358,434.268703 157.111436,433.595881 C157.834515,432.923059 159.105734,432.586648 160.925092,432.586648 C162.324599,432.586648 163.934032,432.749053 165.753391,433.073864 L165.753391,433.073864 L165.753391,426.044034 C165.146938,425.719223 164.248921,425.464015 163.05934,425.278409 C161.86976,425.092803 160.645191,425 159.385635,425 C155.746917,425 153.064529,425.707623 151.338471,427.122869 C149.612413,428.538116 148.45782,430.927794 147.874692,434.291903 C147.291564,437.656013 147,442.725379 147,449.5 C147,456.367424 147.279901,461.459991 147.839704,464.777699 C148.399507,468.095407 149.542437,470.461884 151.268496,471.877131 C152.994554,473.292377 155.700267,474 159.385635,474 Z M183.17725,474 C187.23582,474 190.128134,473.303977 191.854192,471.911932 C193.580251,470.519886 194.664868,468.257812 195.108046,465.12571 C195.551223,461.993608 195.772811,456.785038 195.772811,449.5 L195.772021,448.753783 C195.757266,441.858219 195.535941,436.898389 195.108046,433.87429 C194.664868,430.742188 193.580251,428.480114 191.854192,427.088068 C190.128134,425.696023 187.23582,425 183.17725,425 C179.118681,425 176.238029,425.696023 174.535296,427.088068 C172.832563,428.480114 171.759607,430.742188 171.31643,433.87429 C170.873253,437.006392 170.651665,442.214962 170.651665,449.5 C170.651665,456.785038 170.873253,461.993608 171.31643,465.12571 C171.759607,468.257812 172.832563,470.519886 174.535296,471.911932 C176.238029,473.303977 179.118681,474 183.17725,474 Z M183.17725,466.413352 C181.777744,466.413352 180.833076,466.134943 180.343249,465.578125 C179.853422,465.021307 179.515208,463.640862 179.328607,461.43679 C179.142006,459.232718 179.048705,455.253788 179.048705,449.5 C179.048705,443.746212 179.142006,439.767282 179.328607,437.56321 C179.515208,435.359138 179.853422,433.978693 180.343249,433.421875 C180.833076,432.865057 181.777744,432.586648 183.17725,432.586648 C184.576757,432.586648 185.533087,432.865057 186.046239,433.421875 C186.559392,433.978693 186.897606,435.347538 187.060882,437.528409 C187.212063,439.547734 187.293253,443.11855 187.304451,448.240858 L187.304451,450.759142 C187.293253,455.88145 187.212063,459.452266 187.060882,461.471591 C186.897606,463.652462 186.559392,465.021307 186.046239,465.578125 C185.533087,466.134943 184.576757,466.413352 183.17725,466.413352 Z M210.117756,473.443182 L210.117756,446.4375 L210.397657,446.4375 L219.284525,473.443182 L226.771887,473.443182 L226.771887,425.556818 L218.794698,425.556818 L218.794698,450.683239 L218.374846,450.683239 L210.047781,425.556818 L202.070592,425.556818 L202.070592,473.443182 L210.117756,473.443182 Z M241.88656,473.443182 L241.88656,446.4375 L242.166461,446.4375 L251.053329,473.443182 L258.540691,473.443182 L258.540691,425.556818 L250.563502,425.556818 L250.563502,450.683239 L250.14365,450.683239 L241.816584,425.556818 L233.839396,425.556818 L233.839396,473.443182 L241.88656,473.443182 Z M284.781443,473.443182 L284.781443,465.856534 L274.075216,465.856534 L274.075216,453.049716 L283.451911,453.049716 L283.451911,445.463068 L274.075216,445.463068 L274.075216,433.143466 L284.781443,433.143466 L284.781443,425.556818 L265.6082,425.556818 L265.6082,473.443182 L284.781443,473.443182 Z M302.415228,474 C303.488183,474 304.642776,473.895597 305.879007,473.68679 C307.115238,473.477983 308.129881,473.211174 308.922935,472.886364 L308.922935,472.886364 L308.922935,465.926136 C307.383477,466.250947 305.727394,466.413352 303.954686,466.413352 C302.135327,466.413352 300.864108,466.076941 300.14103,465.404119 C299.417951,464.731297 298.951449,463.304451 298.741523,461.12358 C298.531597,458.942708 298.426634,455.068182 298.426634,449.5 C298.426634,443.931818 298.531597,440.057292 298.741523,437.87642 C298.951449,435.695549 299.417951,434.268703 300.14103,433.595881 C300.864108,432.923059 302.135327,432.586648 303.954686,432.586648 C305.354192,432.586648 306.963625,432.749053 308.782984,433.073864 L308.782984,433.073864 L308.782984,426.044034 C308.176531,425.719223 307.278514,425.464015 306.088933,425.278409 C304.899353,425.092803 303.674784,425 302.415228,425 C298.77651,425 296.094122,425.707623 294.368064,427.122869 C292.642006,428.538116 291.487413,430.927794 290.904285,434.291903 C290.321157,437.656013 290.029593,442.725379 290.029593,449.5 C290.029593,456.367424 290.309494,461.459991 290.869297,464.777699 C291.4291,468.095407 292.57203,470.461884 294.298089,471.877131 C296.024147,473.292377 298.72986,474 302.415228,474 Z M327.886252,473.443182 L327.886252,433.28267 L335.373613,433.28267 L335.373613,425.556818 L311.931874,425.556818 L311.931874,433.28267 L319.419236,433.28267 L319.419236,473.443182 L327.886252,473.443182 Z M370.641184,473.443182 L370.641184,463.698864 L374,463.698864 L374,456.112216 L370.641184,456.112216 L370.641184,442.887784 L364.413379,442.887784 L362.314118,456.112216 L356.506165,456.112216 L364.273428,425.556818 L355.666461,425.556818 L348.528977,457.15625 L348.528977,463.698864 L362.244143,463.698864 L362.244143,473.443182 L370.641184,473.443182 Z"
						id="path-9"></path>
					<filter
						x="-3.1%"
						y="-10.2%"
						width="106.2%"
						height="128.6%"
						filterUnits="objectBoundingBox"
						id="filter-10">
						<feOffset
							dx="0"
							dy="2"
							in="SourceAlpha"
							result="shadowOffsetOuter1"></feOffset>
						<feGaussianBlur
							stdDeviation="2"
							in="shadowOffsetOuter1"
							result="shadowBlurOuter1"></feGaussianBlur>
						<feColorMatrix
							values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
							type="matrix"
							in="shadowBlurOuter1"></feColorMatrix>
					</filter>
				</defs>
				<g
					id="Page-1"
					stroke="none"
					strokeWidth="1"
					fill="none"
					fillRule="evenodd">
					<g id="Artboard" transform="translate(-72.000000, -9.000000)">
						<g id="Board" transform="translate(72.000000, 9.000000)">
							<g id="Field">
								<mask id="mask-4" fill="white">
									<use xlinkHref="#path-1"></use>
								</mask>
								<use id="Mask" fill="url(#pattern-2)" xlinkHref="#path-1"></use>
								<g id="Rectangle" mask="url(#mask-4)">
									<use
										fill="black"
										fillOpacity="1"
										filter="url(#filter-7)"
										xlinkHref="#path-6"></use>
									<use
										fill="url(#linearGradient-5)"
										fillRule="evenodd"
										xlinkHref="#path-6"></use>
								</g>
							</g>
							<g id="CONNECT4" fillRule="nonzero">
								<use
									fill="black"
									fillOpacity="1"
									filter="url(#filter-10)"
									xlinkHref="#path-9"></use>
								<use fill="url(#linearGradient-8)" xlinkHref="#path-9"></use>
							</g>
							<g
								id="Stones"
								transform="translate(55.000000, 23.000000)"
								fill="#000000">
								{fieldVisual}
							</g>
						</g>
					</g>
				</g>
			</svg>
		</div>
	);
};

export default FieldSVG;