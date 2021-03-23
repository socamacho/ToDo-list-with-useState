import React, { useState } from "react";

export function Home() {
	const [task, setTask] = useState(""); //Se indica que va a recibir un string
	const [list, setList] = useState([]); //Array vacio para alamcenar mis datos aqui

	return (
		<div className="container">
			<h1 className="display-3 text-center text-muted font-weight-light">
				todos
			</h1>
			<div className="input-group mb-3">
				<input
					onChange={e => setTask(e.target.value)} //El evento onChange actualiza mi tarea al presionar enter con el task typeado.
					value={task}
					onKeyPress={e => {
						//Funcion que al presionar enter se agrega un task.
						if (e.key == "Enter") {
							setList(list.concat(task)); //Mediante setList en list concatene un nuevo task.Esto me genera un nuevo array con los datos anteriores.
							setTask(""); //Limpio el task
							console.log({ list });
						}
					}}
					type="text"
					className="form-control"
					placeholder="No tasks, add a task"
					aria-label="Recipient's username"
					aria-describedby="button-addon2"
				/>
			</div>

			<ul className="list-group">
				{list.map((item, index) => {
					return (
						//Solucion:Se agrega el estilo de la clase dentro del li y es suficiente.
						<li
							className="list-group-item font-weight-light"
							key={index}>
							<button
								onClick={() => {
									setList(
										list.filter(
											//Recordar: Metodo .filter me genera un array nuevo basandose en las condiciones indicadas en la funcion. Y se utiliza para eliminar al tocar el boton ya que indexf es dinsinto de index.
											(itemf, indexf) => indexf !== index
										)
									);
								}}
								type="button"
								className="btn btn-outline-light float-right">
								<i className="fas fa-times"></i>
							</button>
							{item}
						</li>
					);
				})}
			</ul>

			<p className="text-muted card pl-1">{list.length} items left</p>
		</div>
	);
}
