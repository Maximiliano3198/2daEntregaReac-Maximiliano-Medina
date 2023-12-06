import React from 'react'
import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import arrayProductos from '../Components/arrayProductos.json'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        const promesa = new Promise ((resolve)=>{
            setTimeout(()=>{
                resolve(arrayProductos.find(item=> item.id === parseInt(id)))
            }, 1000)
        });
        promesa.then((data)=>{
            setItem(data)
        })
    }, [id])


    const estiloSaludo = {
        justifyContent: 'center',
        display: 'flex',
        marginBottom: '-8px'
    }
    return (
        <div className="bg-success">
            <ItemDetail producto={item}/>
        </div>


    );
}


export default ItemDetailContainer
