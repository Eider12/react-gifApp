import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = [ 'One', 'Two', 'Thre'];

    const [categories, setCategories] = useState([ 'cosmos']);

    // const handleAdd = () => {
    //     let algo = 'Nuevo';
    //     // setCategories( [...categories, algo]);
    //     setCategories( cats => [ ...cats, algo]);
    // }

  return (
    <div>
        <div className="titulo">
        <h2>GifExpertApp</h2>
        <h4>by neki</h4>
        </div>

        <AddCategory setCategories={ setCategories } />

        <hr/>

        <ol>
            {
                categories.map( category => (
                    // return <li key={category}>{ category }</li>
                   <GifGrid
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </ol>

    </div>
  )
}
