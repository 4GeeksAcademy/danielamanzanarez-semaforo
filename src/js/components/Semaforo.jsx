import React, { useState } from "react";
import "../../styles/index.css"; 

function Semaforo () {
    const [ color, setColor ] = useState(["Red", "Yellow", "Green"]);
	const [ glowSemaforo, setGlowSemaforo] = useState(""); 

	const botonCambiarLuz = () => {
		if (glowSemaforo == "Red"){
			setGlowSemaforo("Green")
		} 
		if (glowSemaforo == "Green"){
			setGlowSemaforo("Yellow")
		}
		if (glowSemaforo == "Yellow"){
			setGlowSemaforo ("Red")
		}
		if (glowSemaforo == ""){
			setGlowSemaforo ("Red")
		}
		//setGlowSemaforo(glowSemaforo === "Red" ? "glow.Red" : "Red") // no sirve
	};

	const botonAgregarViolet = () => setColor([...color, "Violet"]);
		//color.push("Violet"); // no sirve

	const botonEliminarViolet = () => setColor(color.slice(0, color.length -1));

	const handleColorClick = (glow) => {
		setGlowSemaforo(glow);
	};

    return(
        <div className="container">
			<div className="tubo">
					<h1>Semáforo</h1>
					<button
					style={{backgroundColor: "black",
					border: "solid 3px grey",
					color: "violet",
					borderRadius: "10px",
					cursor: "pointer",
					fontSize: "16px",
					width: "180px",
					padding: "8px",
					textShadow: "1px 1px 2px yellow"}}
					onClick={botonCambiarLuz}>Cambiar Luz
					</button>
					<button
					style={{backgroundColor: "black",
					border: "solid 3px grey",
					color: "violet",
					borderRadius: "10px",
					cursor: "pointer",
					fontSize: "16px",
					width: "180px",
					padding: "8px",
					textShadow: "1px 1px 2px yellow"}}
					onClick={botonAgregarViolet}>Agregar Luz Violeta
					</button>
					<button
					style={{backgroundColor: "black",
					border: "solid 3px grey",
					color: "violet",
					borderRadius: "10px",
					cursor: "pointer",
					fontSize: "16px",
					width: "180px",
					padding: "8px",
					textShadow: "1px 1px 2px yellow"}}
					onClick={botonEliminarViolet}>Eliminar Luz Violeta
					</button>
					
		<div className="semaforo">
		  {color.map((elemento, index) => (
			<li 
				key={index}
				onClick={() => handleColorClick(elemento)}
				className={`luz ${elemento} ${glowSemaforo === elemento ? "glow" : ""}`}
			>{elemento}
			</li>
		))}
		</div>
		</div>
		</div>
	
    );
};

export default Semaforo;
