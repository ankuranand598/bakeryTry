import { useState } from "react";
// import Modal from "react-modal";
import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// Modal.setAppElement("#root");

export const Newone = function Newone({ sval, mval, lval ,radio}) {
	// console.log('sval,mval,lval:', sval,mval,lval)
	const [gender, setGender] = useState("small");

	const handleGender = (e) => {
		// console.log("e.target.value:", e.target.value);
		setGender(e.target.value);
		if (gender === "small") radio(sval);
		else if (gender === "medium") radio(mval);
		else radio(lval);
	};
	return (
		<div className="App">
			<div className="cont">
				<div style={{ marginTop: "11px" }}>
					&#8377;
					<span>{sval}</span>
				</div>
				<Radio
					value="small"
					checked={gender === "small"}
					color="primary"
					onChange={handleGender}
				/>
			</div>
			<div className="cont">
				<div style={{ marginTop: "11px" }}>
					&#8377;
					<span>{mval}</span>
				</div>
				<Radio
					value="medium"
					checked={gender === "medium"}
					color="primary"
					onChange={handleGender}
				/>
			</div>
			<div className="cont">
				<div style={{ marginTop: "11px" }}>
					&#8377;
					<span>{lval}</span>
				</div>
				<Radio
					value="large"
					checked={gender === "large"}
					color="primary"
					onChange={handleGender}
				/>
			</div>
		</div>
	);
};
