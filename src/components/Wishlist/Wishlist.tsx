import React, { useState, useEffect } from 'react';
import useFavoriteStore from '../../stores/useFavoriteStore';
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
} from '@ionic/react';
export const Wishlist = () => {

    const { addFavorite, favorites } = useFavoriteStore()

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Wishlist
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>
                        <main className='product'>
                            <section className='product-text'>
                                <h5>
                                    <IonText color="warning">

                                    </IonText>
                                </h5>
                                <h5>
                                    <IonText color="secondary">
                                        $
                                    </IonText>
                                </h5>
                                <IonButton
                                    className='product-button'
                                    color="danger"
                                    fill='solid'>
                                    <IonText>
                                        Delete from favorites
                                    </IonText>
                                </IonButton>
                                <IonText className='product-date'>
                                    <span>Agregado: </span>{" "}
                                </IonText>
                            </section>
                        </main>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    )
}
