import * as React from 'react';
import './App.css';
import Button from './components/Button'
import logo from './assets/logo.svg';
import twitter from './assets/twitter.svg';
import discord from './assets/discord.svg';
import cards from './assets/cards.png'


export default function App() {
	return (
		<main>
			<div className="desktop flex-col-hstart-vstart">
				<div className="frame-1484 flex-row-vcenter-hsb">
					<div className="logo flex-row-vend-hstart">
            <img src={logo} alt="logo"/>
					</div>
					<div className="frame-1485 flex-row-vcenter-hstart">
            <img src={twitter} alt="twitter" className="icons"/>
            <img src={discord} alt="discord" className="icons"/>
<Button text="Launch app"/>
					</div>
				</div>
				<div className="frame-1483 flex-row-vcenter-hsb">
					<div className="frame-1476 flex-col-hstart-vstart">
						<p className="txt-715">
							Democratizing investing in your favorite NFTs
						</p>
						<p className="txt-938">
							We are a web3 derivatives platform for NFTs. We allow you to
							invest in your favorite NFTs with any amount
						</p>
<Button text="Follow on Twitter"/>
					</div>
          <img src={cards} alt="card stack" className="card-stack" />

				</div>
			</div>
		</main>
	);
}
