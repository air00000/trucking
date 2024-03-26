import AuthLayout from "../../../containers/auth/layout/AuthLayout";
import Footer from "../../../containers/auth/layout/Footer";
import Header from "../../../containers/auth/layout/Header";
import SignUpForm from "../../../containers/auth/SignUpForm";

export default function SignUp() {
    return (
        <AuthLayout>
            <Header/>
            <SignUpForm/>
            <Footer/>
        </AuthLayout>
    )
}