import React from 'react'
import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import arrayProductos from '../Components/arrayProductos.json'
import ItemList from './ItemList';




const ItemListContainer = ({ greeting }) => {
    const [item, setItem] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        const fetchData =async()=>{
            try{
                const data = await new Promise((resolve)=>{
                    setTimeout(()=>{
                        resolve (id ? arrayProductos.filter(item=> item.categoria === id) : arrayProductos)
                    },1000);
                });
                setItem(data);
            }catch(error){
                console.log('Error', error)
            }
        }
        fetchData();
    }, [id])


    const estiloSaludo = {
        justifyContent: 'center',
        display: 'flex',
        marginBottom: '-8px'
    }
    return (
        <div className="bg-success" style={{ minHeight: 'calc(100vh - 58px)' }}>
            <h1 style={estiloSaludo} className="text-dark">{greeting}</h1>
            <ItemList items={item}/>
        </div>


    );
}


export default ItemListContainer