"use client"
import { GlobalContext } from "@/context"
import { useContext } from "react"

export default function ClientView() {

    const { user } = useContext(GlobalContext);

    return (
        <section>
            <div className="mx-auto mt-20 bg-gray-100 w-25 px-4 sm:px-6 lg:px-6">               
                <div className="bg-white shadow">
                <div className="p-6 sm:p-6">

                    <div className="flex flex-col flex-1 ">
                        <h4 className="text-lg font-semibold text-center md:text-center"> You are welcome {user?.name}</h4>


                    </div>
                </div>
            </div>

            </div>
        </section>
    )
}

//"use client"

// import { GlobalContext } from "@/context"
// import { useContext } from "react"

// export default function Account() {

//     const { user } = useContext(GlobalContext);


//     return (
//         <>
//             <section>
//                 <div className="mx-auto bg:gray-100 px-4 sm:px-6 lg:px-6">
//                     <div className="bg-white shadow">
//                         <div className="p-6 sm:p-12">
//                             <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
//                                 {
//                                     // we have render random user image here
//                                 }
//                             </div>
//                             <div className="flex flex-col flex-1">
//                                 <h4 className="text-lg font-semibold text-center md:text-left">{user?.name}</h4>
//                                 <p>{user?.email}</p>
//                                 <p>{user?.role}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }