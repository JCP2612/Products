import { IonText } from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";

interface RedirectAuthProps {
    route: string;
    type: "register" | "login";
}

const RedirectAuth: React.FC<RedirectAuthProps> = ({
    route = "/login",
    type = "login",
}: RedirectAuthProps) => {
    const history = useHistory();
    return (
        <>
            <a onClick={() => history.push(route)}>
                <IonText className="info_text">
                    {type == "login" ? "Registrate" : "Iniciar sesion"}{" "}
                </IonText>
            </a>
        </>
    );
};

export default RedirectAuth;