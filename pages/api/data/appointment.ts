import { sql_query } from "../../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { username, email, contact } = req.body
    try {
        const new_results = await sql_query (
            `SELECT email , contact FROM appointment WHERE email = '${email}' or
            contact = '${contact}'`
        )
        if (new_results.length !== 0) {
            console.log(new_results)
            return res.status(201).json({ 
                message: "Your appointment is already booked, we should get back in touch soon!"})
        }  
            const results = await sql_query (
            `INSERT INTO appointment (username , email, contact) VALUES 
            ( '${username}' , '${email}' , '${contact}'  )` ,
            [])
            res.status(200).json(req.body)

    } catch(e) {
        res.status(500).json({ message: (e as Error).message });
        console.log((e as Error).message);
    }
}