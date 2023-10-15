import { productById } from "@/services/product"
import CommonDetails from "@/components/CommonDetails";


export default async function ProductDetails({params}){

    const productDetailsData = await productById(params.details)

    console.log(productDetailsData , 'brightstar');
    return <CommonDetails item={productDetailsData && productDetailsData.data}/>
}