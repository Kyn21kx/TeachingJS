import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { PI, sumNumbers } from "../utils/constants";

//create your first component
const Home = () => {
	const perimetro = PI * 8;
	const sumResult = sumNumbers(3, 5);
	return (
		<div className="text-center">
            

			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home; // Yo quiero que la función Home sea pública y se pueda usar para todos los demás archivos
