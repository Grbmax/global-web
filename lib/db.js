import mysql from 'serverless-mysql'

export const db = mysql ({
    config: {
        host: 'localhost',
        user: 'root',
        password: '20012001',
        database: 'grocery_mgmt',
        insecureAuth: true
    }
})

export async function sql_query(query_string,values = []) {
    try {
        const results = await db.query(query_string, values)
        await db.end()
        return results
    } catch (e) {
        throw Error(e.message)
    }
}
