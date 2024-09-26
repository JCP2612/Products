import React, { useEffect, useState } from "react";
import { IonSearchbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import axios from "axios";
import { Product } from "../../stores/useProduct";
import useFilter from '../../hooks/useFilter';
import "./Products.css"

const Products: React.FC<Product> = ({
    images
}: Product) => {

    const [data, setData] = useState<Product[]>([]);
    let timerSearch: any;

    const { handleFilter } = useFilter();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://api.escuelajs.co/api/v1/products");
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    const handleSearch = async (e: CustomEvent) => {
        clearTimeout(timerSearch);
        const { value } = e.target as HTMLInputElement;
        const filter = await handleFilter(value);
        timerSearch = setTimeout(() => {
            if (filter) {
                setData(filter);
            }
            else {
                fetchData();
            };
        }, 100);
    };
    const imageStyle = {
        backgroundImage: `url(${images})`,
    };
    return (
        <>
            <div>
                <div>
                    <IonSearchbar animated={true} placeholder='Search' onIonInput={handleSearch}></IonSearchbar>
                </div>

                {data.map((products) => (
                    <IonCard key={products.id}>
                        <div
                            style={imageStyle}>
                        </div>
                        <IonCardHeader>
                            <IonCardTitle>{products.title}</IonCardTitle>
                            <IonCardSubtitle></IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>
                            {products.description}
                            <br />
                            $ {products.price}
                        </IonCardContent>
                    </IonCard>
                ))
                }
            </div>

        </>
    )
}

export default Products;