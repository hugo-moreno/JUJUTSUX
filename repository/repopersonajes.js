const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: "db",
    user: "mariadb",
    password: "mariadb",
    database: "mariadb",
    connectionLimit: 5
});

async function asyncFunction() {
    let conn;
    try {

        conn = await pool.getConnection();
        const rows = await conn.query("SELECT 1 as val");
        // rows: [ {val: 1}, meta: ... ]

        const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
        // res: { affectedRows: 1, insertId: 1, warningStatus: 0 }

    } finally {
        if (conn) conn.release(); //release to pool
    }
}

module.exports = Object.freeze({
    findById: async (id) => {
        try {

            conn = await pool.getConnection();
            const rows = await conn.query("SELECT * from Personajes where id = ?", [id]);
            // rows: [ {val: 1}, meta: ... ]
            console.log(rows);
            if (rows.length > 0) {
                return rows[0];
            }
            return null
        } finally {
            if (conn) conn.release(); //release to pool
        }
    },
    insert: async (Personaje) => {
        try{
            
        conn = await pool.getConnection();
        const rows = await conn.query("insert into Personajes (name, age, gender, species) values (?,?,?,?)", [Personaje.name, Personaje.age, Personaje.gender, Personaje.species]);
        // rows: [ {val: 1}, meta: ... ]
        if (rows.length > 0) {
            return rows[0];
        }
        return null
    } finally {
        if(conn) conn.release(); //release to pool
    }
        return null
},
    findAll: async () => {
        try {

            conn = await pool.getConnection();
            const rows = await conn.query("SELECT * from Personajes");
            // rows: [ {val: 1}, meta: ... ]
            return rows;
        } finally {
            if (conn) conn.release(); //release to pool
        }
    },
    removeById: async (id) => {
        try {

            conn = await pool.getConnection();
            const rows = await conn.query("DELETE FROM Personajes WHERE id = ?", [id]);
            console.log(rows);
            if (rows.affectedRows > 0) {
                return rows.affectedRows;
            }
            return null
        } finally {
            if (conn) conn.release(); //release to pool
        }
    },

    // update: async (updatedUser) => {
    //     if (!userDb.has(updatedUser.id)) throw new Error('user not found');
    //     userDb.set(updatedUser.id, { ...userDb.get(updatedUser.id), ...updatedUser });
    // },
});