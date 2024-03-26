import AuthLayout from "../../../containers/auth/layout/AuthLayout";
import Footer from "../../../containers/auth/layout/Footer";
import Header from "../../../containers/auth/layout/Header";
import SignInForm from "../../../containers/auth/SignInForm";

export default function SignIn() {
    return (
        <AuthLayout>
            <Header/>
            <SignInForm/>
            <Footer/>
        </AuthLayout>
    )
}