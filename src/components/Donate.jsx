import React from 'react';
import { Link } from 'gatsby';
import donate_mobile from '../static/images/donate_mobile.jpg';
import donate_big from '../static/images/donate_big.jpg';
import {
	donate,
	donate_img,
	donate_card,
	donate_btn,
	donate_pic,
	credit,
	donate_vid
} from '../static/css/donate.module.css';
import { Button, Card, Elevation } from '@blueprintjs/core';

function Donate() {
	return (
		<section className={donate}>
			<Card interactive={true} elevation={Elevation.TWO} className={donate_card}>
				<div>
					<Link to="/">Home</Link>
				</div>
				<h2 style={{ textAlign: 'center' }}>Life Lifters Organization</h2>
				<div className={donate_img}>
					<picture>
						<source srcSet={donate_big} media="(min-width: 640px)" />
						<img className={donate_pic} src={donate_mobile} alt="life lifters" />
					</picture>
				</div>
				<div>
					<p>
						An empowered woman moves through the world with confidence and grace. Most girls in rural
						communities and villages will never experience this truth. Though they are directly affected by
						poverty, culture and cultural practices, most of them receive close to zero attention when it
						comes to their education, security and general welfare. So to tell you are a making a difference
						by donating to us is an understatement.
					</p>
					<p>Truth is you are our hidden hero.</p>
				</div>
				<div>
					<p>Make your online donations through our fiscal sponsor She’s the first</p>
				</div>
				<div>
					<a
						href="https://secure.givelively.org/donate/she-s-the-first/cynthia-muhonja"
						rel="noreferrer noopener"
						className={donate_btn}
					>
						<div>
							<img src="https://img.icons8.com/dusk/64/000000/donate.png" alt="donate" />
						</div>
						<h2>Donate</h2>
					</a>
				</div>
			</Card>
			<a className={credit} href="https://icons8.com/icon/46478/donate" rel="noreferrer noopener">
				Donate icon by Icons8
			</a>
		</section>
	);
}

export default Donate;
