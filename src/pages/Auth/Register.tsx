import React, { useState } from 'react';
import {
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonInput,
    IonButton,
    IonContent,
    IonText
} from '@ionic/react';
import './Login.css';
import { FormRegister, useRegister } from '../../hooks/useRegister';
import { useValidateForm } from '../../hooks/validateForm';

const Register: React.FC = () => {

    const { handleValidate, valid, errors } = useValidateForm();
    const { handleRegister } = useRegister();
    const [formData, setFormData] = useState<FormRegister>({
        username: { value: "", regex: "username" },
        fullname: { value: "", regex: "fullname" },
        password: { value: "", regex: "password" },
    });

    const handleChange = (e: CustomEvent) => {
        const { id, value } = e.target as HTMLInputElement;
        setFormData({
            ...formData,
            [id]: { value, regex: formData[id].regex },
        });
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const isValid = handleValidate(formData);
        if (isValid) handleRegister(formData);
        else console.log(errors);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        <IonText>
                            Register
                        </IonText>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <main className="auth">
                    <IonCard className="auth__card">
                        <IonCardContent>
                            <form onSubmit={handleSubmit}>
                                <IonInput
                                    fill="outline"
                                    label="Email"
                                    placeholder="Por favor ingresa tu correo"
                                    type="email"
                                    id="email"
                                    autocomplete={"off"}
                                    labelPlacement="stacked"
                                    onIonChange={handleChange}
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
                                    onIonChange={handleChange}
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
export default Register;