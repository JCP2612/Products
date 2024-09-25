import React from "react";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";


const Products: React.FC = () => {

    return (
        <>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>
                        Product 1
                    </IonCardTitle>
                    <IonCardSubtitle>
                        Este es un producto
                    </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    Informacion de un producto
                </IonCardContent>
            </IonCard>

        </>
    )
}

export default Products;