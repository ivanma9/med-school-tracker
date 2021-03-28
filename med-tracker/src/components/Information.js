import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const top100Schools = [
	{ school: "Harvard" },
	{ school: "John Hopkins" },
	{ school: "UCI" },
	{ school: "UW" },
	{ school: "UChicago" },
	{ school: "USC" },
	{ school: "UCLA" },
];

export default function Information() {
	return (
		<div>
			<h1>for the end</h1>
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

			<Container className="bg-info">
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
		</div>
	);
}
