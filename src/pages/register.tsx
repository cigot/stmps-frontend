import React from "react";
import { Link, useNavigate } from "react-router-dom";
import InputCheckbox from "../components/form/checkboxInput";
import InputText from "../components/form/textInput";
import convertInputToFormData from "../utilities/convertInputToFormData";
import postForm from "../utilities/postForm";

export default function Register() {
    const navigate = useNavigate();
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = convertInputToFormData(e);
        let x: { [key: string]: any } = {};

        formData.forEach((val, key) => {
            x[key] = val;
        });

        postForm("/api/register", formData).then((output) => {
            console.log("REGISTRATION OUTPUT", output);
            switch (output.status) {
                case 200:
                    navigate("/home");
                    break;
                case 418:
                    //TODO: error here
                    break;
                default:
                    // navigate("/login");
                    break;
            }
        });
    }
    return (
        <div className="page modal">
            <div className="modal__form">
                <form
                    className=""
                    action=""
                    method="post"
                    onSubmit={handleSubmit}
                >
                    <p className="logo--large" />
                    <h4>Register</h4>
                    <InputText name="username" />
                    <InputText name="email" type="email" />
                    <InputText name="password" type="password" />
                    <InputText
                        name="passwordConfirm"
                        type="password"
                        label="password confirmation"
                    />
                    <InputCheckbox name={"isPrivate"} label="private?" />

                    <p>
                        Go back to <Link to={"/login"}>Login</Link> page
                    </p>
                    <button className="btn-primary" type="submit">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
