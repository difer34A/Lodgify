
import { getListings } from "../../lib/getListings"

// @ts-ignore
export default async function handler(req, res) {

    if(req.method === "GET"){
        try{
            const { listings, error } = await getListings()
            
            // @ts-ignore
            if(error) {throw new Error(error)}

            return res.status(200).json({listings})
            // @ts-ignore
        }catch(err){return res.status(500).json({err : err.message})}
    }

    res.setHeader('Allow', ['GET'])
    res.status(425).end(`method ${req.method} is not supported`)

}   