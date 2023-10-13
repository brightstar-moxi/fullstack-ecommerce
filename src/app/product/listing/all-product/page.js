import CommonListing from "@/components/CommonListing";
import { getAllAdminProducts } from '@/services/product'



export default async function AllProduct(){

const getAllProducts = await getAllAdminProducts()

    return <CommonListing/>
}