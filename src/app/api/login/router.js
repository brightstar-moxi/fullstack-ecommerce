import connectToDB from "@/database";




const schema =Joi.object({
    
})

export const dynamic = 'force-dynamic'; 


export async function POST(req){
await connectToDB();

const {email,password} = await req.json();
}