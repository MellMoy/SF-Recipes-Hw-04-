import React, {useState, useEffect,} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";


function Recipe() {

    const id = useParams().id;
    const [isLoading, setLoading] = useState(true);
    const [recipe, setRecipe] = useState();


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/recipes/${id}`).then(res => {
            setRecipe(res.data);
            setLoading(false);
        });
    }, [id]);


    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    return (
        <>
            <h1>{recipe.name}:</h1>
            <div className='recipe'>
                <span style={{ whiteSpace: "pre-line" }}>{recipe.description}</span>
            </div>
        </>
    );
};

export default Recipe;