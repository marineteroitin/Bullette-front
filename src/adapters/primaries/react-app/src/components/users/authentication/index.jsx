import './authentication.css';
import { LoginForm } from "./loginForm";

const Index = () => {

    return (

        <div className="BoxContainer">
            <div className="TopContainer">
                <div className="purpleForm"></div>
                <div className="Container">
                    <div className="font30px semiBoldMont whiteColor noMargin zindex10">Hello,</div>
                    <div className="font12px mediumMont whiteColor noMargin zindex10">Connecte toi pour continuer !
                    </div>
                </div>
            </div>
            <div className="Container">
                <LoginForm/>
            </div>
        </div>
    );
}

export default Index;
