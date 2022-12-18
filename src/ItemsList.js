import React, { useEffect, useState } from 'react'

const ItemsList = ({ generateItems }) => {

    const [items, setItems] = useState([])

    // Gets triggered even on color change. Why:
    // App Component gets rerendered -> generateAPIItems is recreated -> ItemsList useEffect sees that the function is new
    useEffect(() => {
        const arr = generateItems()
        console.log('render');
        setItems(arr)
    }, [generateItems])

    return (
        <ul>
            {
                items.map((el, i) => {
                   return <li key={i}>{el}</li>
                })
            }
        </ul>
    )

}

export default ItemsList;