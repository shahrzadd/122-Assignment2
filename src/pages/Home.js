import * as React from "react";
import {Button} from "react-bootstrap";

const topBanner = require("../assets/Banner-Top.png");
const midBanner = require("../assets/Banner-2.png");
const sideBanner = require("../assets/Banner-Middle.png");

const Home = () => {
	return (
		<div className="mainBody">
			<div className="topSection">
				<div className="topLeftSide">
					<div className="topLeftText">
						<h2 className="slogan">
							WE WILL LANCH <br />
							YOUR BRAND IN <br />
							RIGHT WAY
						</h2>
					</div>
					<div className="topLeftBtn">
						<Button className="roundedBtn" variant="primary">
							Primary
						</Button>
					</div>
				</div>
				<div className="topRightSide">
					<img className="topBanner" src={topBanner} alt="top banner" />
				</div>
			</div>
			<main>
				<div className="mainTop">
					<img className="topBanner" src={midBanner} alt="mid banner" />
				</div>
				<div className="mainMid">
					<div className="mainMidTop">
						<h2 className="midSlogan">
							WE ENRICH HUMAN LIVES THROUGH <br />
							THE THOUGHTFUL APPLICATION OF <br />
							DESIGN AND TECHNOLOGY
						</h2>
					</div>
					<div className="mainMidMid">
						<div className="midLeftSide">
							<img className="sideBanner" src={sideBanner} alt="side banner" />
						</div>
						<div className="midRightSide">
							<div>
								<h4 className="mainBottomText">
									As a full-service partner to <br />
									the world’s most ambitious companies <br />
									we create transformational change <br />
									through best-in-class digital products <br />
									and communications.
								</h4>
							</div>
							<div className="midRightSideBtn">
								<Button className="roundedBtn" variant="primary">
									Primary
								</Button>
							</div>
						</div>
					</div>
					<div className="mainMidBottom">
						<h2 className="midBottomSlogan">I'D LOVE TO BE YOUR PARTNER</h2>
						<Button className="roundedBtn" variant="primary">
							Primary
						</Button>ƒ
					</div>
				</div>
			</main>
		</div>
	);
};

export default Home;
