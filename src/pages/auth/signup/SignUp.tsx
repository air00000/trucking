import Footer from "../../../containers/auth/layout/Footer";
import Header from "../../../containers/auth/layout/Header";
import SignUpForm from "../../../containers/auth/SignUpForm";
import AuthLayout from "../../../containers/auth/layout/AuthLayout";

export default function SignUp() {
    return (
        <AuthLayout>
            <Header/>
            <SignUpForm/>
            <Footer/>
        </AuthLayout>
    )
}