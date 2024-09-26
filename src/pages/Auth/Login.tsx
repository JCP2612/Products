import React from "react";
import {
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonInput,
    IonText,
    IonButton,
    IonContent
} from "@ionic/react";
import './Login.css'

const Login: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        <IonText>
                            Login
                        </IonText>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <main className="auth">
                    <IonCard className="auth__card">
                        <IonCardContent>
                            <form>
                                <IonInput
                                    fill="outline"
                                    label="Email"
                                    placeholder="Por favor ingresa tu correo"
                                    type="email"
                                    id="email"
                                    autocomplete={"off"}
                                    labelPlacement="stacked"
                                >
                                </IonInput>
                                <br />
                                <IonInput
                                    fill="outline"
                                    label="Password"
                                    placeholder="Por favor ingresa tu contraseña"
                                    type="password"
                                    id="password"
                                    labelPlacement="stacked"
                                >
                                </IonInput>
                                <br />
                                <IonButton
                                    className="auth__card--button"
                                    type="submit"
                                >
                                    Ingresar
                                </IonButton>
                            </form>
                        </IonCardContent>
                    </IonCard>
                </main>
            </IonContent>
        </IonPage>
    )
}

export default Login;