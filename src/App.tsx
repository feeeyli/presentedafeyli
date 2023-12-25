import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(500);

	if (count <= 0)
		return (
			<>
				<h1>Feliz Natal!!</h1>
				<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
					<div className="player">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="48"
							height="48"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-play"
						>
							<polygon points="5 3 19 12 5 21 5 3" />
						</svg>
					</div>
				</a>
			</>
		);

	return (
		<>
			<h1>Clique pra abrir!!</h1>
			<button onClick={() => setCount((old) => old - 1)}>
				<img
					src="https://em-content.zobj.net/source/microsoft/378/wrapped-gift_1f381.png"
					width={512 - 128}
					height={512 - 128}
				/>
			</button>
			{count < 500 && <span>{count}</span>}
			<br />
			{count === 450 && <span>Você consegue!</span>}
			{count === 400 && <span>Tá quase em!</span>}
			{count === 350 && <span>Mais um pouco e tu chega!</span>}
			{count === 300 && <span>ZzZZZz ZZzzZz</span>}
			{count === 250 && <span>Tu ainda tá aqui? Caralho 👏</span>}
			{count === 200 && <span>O presente deve ser foda!</span>}
			{count === 150 && (
				<span>
					Sabia que cosmonautas russos costumavam levar uma espingarda
					para caso pousassem na Sibéria pudessem se defender dos
					ursos? Eu também não
				</span>
			)}
			{count === 100 && (
				<span>A cor de fundo é #8f0835 caso tenha gostado!</span>
			)}
			{count === 50 && <span>HO HO HO FALTA SÓ MAIS 50</span>}
			{count === 10 && <span>MAIS 10 SÓ, VAMO</span>}
			{count === 3 && <span>TÁ</span>}
			{count === 2 && <span>QUASE</span>}
			{count === 1 && <span>LÁ!!!!!!</span>}
		</>
	);
}

export default App;
