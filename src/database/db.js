// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose();

// iniciar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;

/*

// utilizar o objeto de banco de dados, para nossas operações
db.serialize(() => {
	// criar tabela
	db.run(` 
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        )        
    `);

	// inserir dados na tabela
	const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?, ?, ?, ?, ?, ?, ?);
`;
	const values = [
		"https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80",
		"Colectoria",
		"Guilherme Gemballa, Jardim América",
		"Número 260",
		"Santa Catarina",
		"Rio do Sul",
		"Residuos Eletronicos, Lampadas",
	];

	function afterInsertData(err) {
		if (err) {
			return console.log(err);
		}

		console.log("Cadastrado com sucesso");
		console.log(this);
	}

	// db.run(query, values, afterInsertData);

	// consultar os dados da tabela
	db.all(`SELECT * FROM places`, function (err, rows) {
		if (err) {
			return console.log(err);
		}

		console.log("Aqui estão os seus registros:");
		console.log(rows);
	});

	// deletar um dado
	db.run(`DELETE FROM places WHERE id = ?`, [1], function* () {
		if (err) {
			return console.log(err);
		}

		console.log("Registro deletado com sucesso!");
	});
});

 */
