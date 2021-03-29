import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Autocomplete } from "@material-ui/lab";
import {
	TextField,
	Typography,
	AccordionActions,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Button,
	Slider,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { blue } from "@material-ui/core/colors";

const top100Schools = [
	{ school: "Harvard", mcat: 500, gpa: 3.8 },
	{ school: "John Hopkins", mcat: 400, gpa: 3.7 },
	{ school: "UCI", mcat: 450, gpa: 3.8 },
	{ school: "UW", mcat: 450, gpa: 3.8 },
	{ school: "UChicago", mcat: 450, gpa: 3.8 },
	{ school: "USC", mcat: 450, gpa: 3.8 },
	{ school: "UCLA", mcat: 450, gpa: 3.8 },
];

const unitedStates = [
	"AK - Alaska",
	"AL - Alabama",
	"AR - Arkansas",
	"AS - American Samoa",
	"AZ - Arizona",
	"CA - California",
	"CO - Colorado",
	"CT - Connecticut",
	"DC - District of Columbia",
	"DE - Delaware",
	"FL - Florida",
	"GA - Georgia",
	"GU - Guam",
	"HI - Hawaii",
	"IA - Iowa",
	"ID - Idaho",
	"IL - Illinois",
	"IN - Indiana",
	"KS - Kansas",
	"KY - Kentucky",
	"LA - Louisiana",
	"MA - Massachusetts",
	"MD - Maryland",
	"ME - Maine",
	"MI - Michigan",
	"MN - Minnesota",
	"MO - Missouri",
	"MS - Mississippi",
	"MT - Montana",
	"NC - North Carolina",
	"ND - North Dakota",
	"NE - Nebraska",
	"NH - New Hampshire",
	"NJ - New Jersey",
	"NM - New Mexico",
	"NV - Nevada",
	"NY - New York",
	"OH - Ohio",
	"OK - Oklahoma",
	"OR - Oregon",
	"PA - Pennsylvania",
	"PR - Puerto Rico",
	"RI - Rhode Island",
	"SC - South Carolina",
	"SD - South Dakota",
	"TN - Tennessee",
	"TX - Texas",
	"UT - Utah",
	"VA - Virginia",
	"VI - Virgin Islands",
	"VT - Vermont",
	"WA - Washington",
	"WI - Wisconsin",
	"WV - West Virginia",
	"WY - Wyoming",
];

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},
	accordion: {
		borderRadius: 3,
		color: "#0366d6",
	},
	heading: {
		fontSize: theme.typography.pxToRem(25),
		flexBasis: "33.33%",
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(25),
		color: theme.palette.text.secondary,
	},
}));

function nextAccordion() {}

export default function Home() {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);
	const [state, setState] = React.useState("");
	const [gpa, setGpa] = React.useState("");
	const [mcat, setMcat] = React.useState("");


	const handleChange = (panel) => (event, isExpanded) => {
		console.log(state);
		console.log(gpa);
		console.log(mcat);
		setExpanded(isExpanded ? panel : false);
	};
	return (
		<div>
			{/* <h1> bruhopop </h1>
			<Container className="bg-dark">
				<Autocomplete
					id="combo-box-demo"
					options={top100Schools}
					getOptionLabel={(option) => option.school}
					style={{ width: 300 }}
					renderInput={(params) => (
						<TextField {...params} label="Pick a school" variant="outlined" />
					)}
				/>{" "}
			</Container>
			<Container className="bg-light">
				<Autocomplete
					id="combo-box-demo"
					options={top100Schools}
					getOptionLabel={(option) => option.gpa.toString()}
					style={{ width: 300 }}
					renderInput={(params) => (
						<TextField {...params} label="GPA" variant="outlined" />
					)}
				/>{" "}
			</Container>
			<Container className="bg-info"></Container> */}

			<div className={classes.root}>
				<Accordion
					expanded={expanded === "panel1"}
					onChange={handleChange("panel1")}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1bh-content"
						id="panel1bh-header"
						className="rounded"
					>
						<Typography className={classes.heading}>State</Typography>
						<Typography className={classes.secondaryHeading}>
							{state ? state : ""}
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Container>
							<Autocomplete
								id="combo-box-demo"
								options={unitedStates}
								getOptionLabel={(option) => option}
								style={{ width: 300 }}
								onChange={(e, value) => setState(value)}
								renderInput={(params) => (
									<TextField
										{...params}
										label="Choose State"
										variant="outlined"
									/>
								)}
							/>
							<h1> {} </h1>
						</Container>
					</AccordionDetails>
					<AccordionActions>
						<Button onClick={handleChange("panel1")}>Confirm</Button>
					</AccordionActions>
				</Accordion>
				<Accordion
					expanded={expanded === "panel2"}
					onChange={handleChange("panel2")}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2bh-content"
						id="panel2bh-header"
					>
						<Typography className={classes.heading}>GPA</Typography>
						<Typography className={classes.secondaryHeading}>
							You are currently not an owner
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Container>
							<Slider
								defaultValue={80}
								aria-labelledby="discrete-slider-always"
								min={427}
								max={528}
								valueLabelDisplay="on"
							/>
						</Container>
					</AccordionDetails>
					<AccordionActions>
						<Button onClick={handleChange("panel1")}>Confirm</Button>
					</AccordionActions>
				</Accordion>
				<Accordion
					expanded={expanded === "panel3"}
					onChange={handleChange("panel3")}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel3bh-content"
						id="panel3bh-header"
					>
						<Typography className={classes.heading}>MCAT</Typography>
						<Typography className={classes.secondaryHeading}>
							Filtering has been entirely disabled for whole web server
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
							sit amet egestas eros, vitae egestas augue. Duis vel est augue.
						</Typography>
					</AccordionDetails>
					<AccordionActions>
						<Button onClick={handleChange("panel1")}>Confirm</Button>
					</AccordionActions>
				</Accordion>
			</div>
		</div>
	);
}
