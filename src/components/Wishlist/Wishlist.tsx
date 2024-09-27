import React, { useState, useEffect } from "react";
import useFavoriteStore from "../../stores/useFavoriteStore";
import {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonList,
    IonItem,
    IonText,
    IonButton,
} from "@ionic/react";
import "./Wishlist.css";
import useFavorite from "../../hooks/useFavorite";
export const Wishlist = () => {
    const { favorites } = useFavoriteStore();
    const { handleUnFavorite } = useFavorite();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Wishlist</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList className="list-content">
                    {favorites.map((fav) => (
                        <IonItem key={fav.id}>
                            <main className="product">
                                <section className="product-text">
                                    <h5>
                                        <IonText color="warning">
                                            Name: {fav.product.title}
                                        </IonText>
                                    </h5>
                                    <h5>
                                        <IonText color="success">$ {fav.product.price}</IonText>
                                    </h5>
                                    <IonText className="product-date">
                                        <span>Add: </span>
                                        {new Date(fav.addDate).toLocaleDateString()} - {new Date(fav.addDate).toLocaleTimeString()}
                                    </IonText>
                                    <br />
                                    <br />
                                    <IonButton
                                        onClick={() => {
                                            handleUnFavorite(fav.id);
                                        }}
                                        className="product-button"
                                        color="danger"
                                        fill="solid"
                                    >
                                        <IonText>Delete from favorites</IonText>
                                    </IonButton>
                                </section>
                            </main>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};
