import { sql_query } from '../../../lib/db'
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest , res: NextApiResponse) {
    console.log(req.body)
    const { email } = req.body 
    try {
        const new_results = await sql_query (
            `SELECT email FROM newsletter WHERE email = '${email}'`    
        )
        if (new_results.length !== 0){
            console.log("You are already subscribed!")
            return res.status(201).json({ message: "You are already subscribed!" })
        }
        const results = await sql_query (
            `INSERT INTO
            newsletter ( email ) VALUES ( '${email}' )` , 
            [])
        res.status(200).json(req.body)
    } catch (e) {
        res.status(500).json({ message: (e as Error).message });
        console.log((e as Error).message);
    }
}