"use client"
import {usePathName} from "next/navigation";


export default function ProductButton(){
const pathName = usePathName()

    const isAdminView = pathName.includes("admin-view")
    return (
          <div>
              product button
               </div>
    );
}
