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
import useFavoriteStore from "../../stores/useFavoriteStore";

export const Profile: React.FC = () => {
    const { user, setUser } = useUserState();
    const { clearFavorite } = useFavoriteStore();
    const history = useHistory();
    const dicAttributes: { [key: string]: string } = {
        username: "User Name",
        fullname: "Full Name",
    };

    useEffect(() => {
        if (!user) history.push("/products");
    }, [user]);

    const handleLogout = () => {
        setUser(null);
        clearFavorite();
        setTimeout(() => history.push("/products"), 10);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Profile</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <main className="profile-content">
                    <IonCard>
                        <IonCardHeader>
                            <IonText>
                                Current status: <IonText color={"success"}>Active</IonText>
                            </IonText>
                            <br />
                            <IonText className="profile__title">Personal Info</IonText>
                            <IonList className="profile__list">
                                {Object.keys(user || {}).map((key: string, index: number) =>
                                    index != 0 ? (
                                        <IonItem key={`user-attr${index}`}>
                                            <section className="profile__list__item">
                                                <IonText>{dicAttributes[key]}:</IonText>
                                                <IonText>{user ? user[key] : "Sin datos"}</IonText>
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
                        <IonText>Log Out</IonText>
                    </IonButton>
                </main>
            </IonContent>
        </IonPage>
    );
};
