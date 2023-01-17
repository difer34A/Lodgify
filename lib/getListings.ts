import clientPromise from "./mongodb"
require('dotenv').config()

let client:any
let db:any
let listings:any

async function init() {
    if(db) return
    try{
        client = await clientPromise
        db = client.db()
        listings = await db.collection("listingsAndReviews")
    } catch(err) {throw new Error(err);}
}
;(async () =>{
    await init()
});

// @ts-ignore
var num:number = process.env.NUMBER_OF_PICS

export async function getListings(){
    try{
        if(!listings) await init()
        const result = await listings
            .find({})
            .limit(Number(num))
            // @ts-ignore
            .map(user =>({ ...user, _id: user._id.toString()}))
            .toArray()

        return { listings : result }
    }catch(error) { return{error : error} }
}