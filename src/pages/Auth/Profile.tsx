import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonText,
    IonList,
    IonItem,
    IonButton,
} from "@ionic/react";
import React, { useEffect } from "react";
import useUserState from "../../stores/useUserStore";
import "./Profile.css";
import { useHistory } from "react-router";

export const Profile: React.FC = () => {
    const { user, setUser } = useUserState();
    const history = useHistory();
    const dicAttributes: { [key: string]: string } = {
        username: "Nombre de usuario",
        fullname: "Nombre completo"
    };

    useEffect(() => {
        if (!user) history.push("/products");
    }, [user]);

    const handleLogout = () => {
        setUser(null);
        setTimeout(() => history.push("/products"), 10);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Perfil</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <main className="profile-content">
                    <IonCard>
                        <IonCardHeader>
                            <IonText>
                                Estado actual: <IonText color={"success"}>Activo</IonText>
                            </IonText>
                            <br />
                            <IonText className="profile__title">
                                Información personal
                            </IonText>
                            <IonList className="profile__list">
                                {Object.keys(user || {}).map((key: string, index: number) =>
                                    index != 0 ? (
                                        <IonItem key={`user-attr${index}`}>
                                            <section className="profile__list__item">
                                                <IonText>{dicAttributes[key]}:</IonText>
                                                <IonText>
                                                    {user ? user[key] : "Sin datos"}
                                                </IonText>
                                            </section>
                                        </IonItem>
                                    ) : (
                                        <div key={`user-attr${index}`}></div>
                                    )
                                )}
                            </IonList>
                        </IonCardHeader>
                    </IonCard>
                    <IonButton
                        className="button-logout"
                        shape="round"
                        expand="full"
                        color={"danger"}
                        onClick={handleLogout}
                    >
                        <IonText>Cerrar sesión</IonText>
                    </IonButton>
                </main>
            </IonContent>
        </IonPage>
    );
};
