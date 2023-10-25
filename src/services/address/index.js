import Cookies from "js-cookie";


export const addNewAddress = async (formdata) => {
    try {
        const res = await fetch('/api/address/add-new-address', {
            method: 'POST',
            headers: {
                'Content-Type': ' application/json',
                Authorization: `Bearer ${Cookies.get('token')}`
            },
            body: JSON.stringify(formdata)
        })

        const data = await res.json()

        return data;

    } catch (error) {
        console.log(error);
    }
}


export const fetchAllAddresses = async (id) => {
    try {
        const res = await fetch(`/api/address/get-all-address?id=${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`
            },
            body: JSON.stringify(formdata)
        })

        const data = await res.json()

        return data;
    } catch (error) {
        console.log(error);
    }
}
export const updateAddress = async (formdata) => {
    try {
        const res = await fetch('/api/address/update-address', {
            headers: {
                'Content-Type': ' application/json',
                Authorization: `Bearer ${Cookies.get('token')}`
            },
            body: JSON.stringify(formdata),
        })

        const data = await res.json()

        return data;


    } catch (error) {
        console.log(error);
    }
}
export const deleteAddress = async (id) => {
    try {
        const res = await fetch('/api/address/delete-address', {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`
            },
        })

        const data = await res.json()

        return data ;

    } catch (error) {
        console.log(error);
    }
}