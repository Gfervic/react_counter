import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const SecondsCounter = (props) => {
	return (
		<div className="counterDiv">
			<div className="calendar" id="calender">
				<i className="far fa-clock"></i>
			</div>
			{/* We pass the the digits to the DOM and we get the last position of the number with % 10  */}
			<div className="six">{props.digitSix % 10}</div>
			<div className="five">{props.digitFive % 10}</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number,
};

export default SecondsCounter;
