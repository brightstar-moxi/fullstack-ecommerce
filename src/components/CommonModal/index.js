"use client"
import {Transition} from "@headlessui/react"
import {Fragment} from "react"

export default function CommonModal(){

    return(
        <Transition.Root as={Fragment}>
            <Dialog as="div" className={'relative z-10'}>
                <Transition.Child 
                as={Fragment}
                enter="ease-in-out duration-900"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                >

                </Transition.Child>
                </Dialog> 

        </Transition.Root>
    )
}