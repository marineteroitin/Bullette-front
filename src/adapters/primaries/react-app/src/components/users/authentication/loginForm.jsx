import React from "react";

export function LoginForm(props) {
    return (
        <div className="BoxSubContainer">
            <div className="FormContainer">

                    <div className="-input"><input type="email" className="user-input blackColor" placeholder="Email"/></div>
                    <div className="-input"><input type="password" className="pass-input blackColor" placeholder="Mot de passe"/></div>
                </div>
                   <a className="font12px lavenderColor mediumMont noTextDecoration">Mot de passe oublié ?</a>
                    <button className="purpleButton">Connexion</button>
                <a className="font12px purpleColor mediumMont noTextDecoration">S'inscrire</a>

        </div>
    );
}
