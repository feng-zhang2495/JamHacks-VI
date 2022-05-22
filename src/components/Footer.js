import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "white",
				textAlign: "center",
				}}>
		Headstart Tutors: Providing better education for everyone
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="mailto:tranw3046@wrdsb.ca">Will Tran</FooterLink>
			<FooterLink href="mailto:zhanf2495@wrdsb.ca">Feng Zhang</FooterLink>
			<FooterLink href="chena9363@wrdsb.ca">Alim Chen</FooterLink>
			<FooterLink href="wanh1977@wrdsb.ca">Harry Wang</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
