import React, { useEffect, useState } from "react";
import { IonButton, IonSearchbar, IonText } from "@ionic/react";
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
} from "@ionic/react";
import axios from "axios";
import { Product } from "../../stores/useProduct";
import useFilter from "../../hooks/useFilter";
import "./Products.css";
import useFavoriteStore from "../../stores/useFavoriteStore";
import useFavorite from "../../hooks/useFavorite";
const Products: React.FC<Product> = ({ images }: Product) => {
    const [data, setData] = useState<Product[]>([]);
    let timerSearch: any;

    const { favorites } = useFavoriteStore();

    const { handleFilter } = useFilter();
    const { handleFavorite } = useFavorite();

    useEffect(() => {
        fetchData();
    }, [favorites]);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                "https://api.escuelajs.co/api/v1/products"
            );
            const results = response.data.map((product: Product) => ({
                ...product,
                favorite: favorites.some((f) => f.product.id == product.id),
            }));

            setData(results);
        } catch (error) {
            console.error(error);
        }
    };
    const handleSearch = async (e: CustomEvent) => {
        clearTimeout(timerSearch);
        const { value } = e.target as HTMLInputElement;
        const filter = await handleFilter(value);
        timerSearch = setTimeout(() => {
            if (filter) {
                setData(filter);
            } else {
                fetchData();
            }
        }, 100);
    };
    const imageStyle = {
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "10rem",
    };
    return (
        <>
            <div>
                <div>
                    <IonSearchbar
                        animated={true}
                        placeholder="Search"
                        onIonInput={handleSearch}
                    ></IonSearchbar>
                </div>
                <main className="cards-contain">
                    {data.map((product) => (
                        <IonCard key={product.id}>
                            <div
                                style={{
                                    ...imageStyle,
                                    backgroundImage: `url(${product.images && product.images.length > 0
                                            ? product.images[0]
                                            : "../../images/product.jpg"
                                        })`,
                                }}
                            ></div>
                            <IonCardHeader>
                                <IonCardTitle>{product.title}</IonCardTitle>
                                <IonCardSubtitle></IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>
                                {product.description}
                                <br />$ {product.price}
                            </IonCardContent>
                            <IonButton
                                onClick={() => {
                                    handleFavorite(product);
                                }}
                                className="product-button"
                                color={product.favorite
                                    ? "danger"
                                    : "success"}
                                fill="solid"
                            >
                                <IonText>
                                    {product.favorite
                                        ? "Delete to favorites"
                                        : "Add to favorites"}
                                </IonText>
                            </IonButton>
                        </IonCard>
                    ))}
                </main>
            </div>
        </>
    );
};

export default Products;
