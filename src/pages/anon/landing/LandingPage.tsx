import LandingLayout from "../../../containers/anon/layout/LandingLayout";
import Footer from "../../../containers/anon/layout/Footer";
import Header from "../../../containers/anon/layout/Header";
import Page from "../../../containers/anon/landing";


export default function LandingPage() {
    return(
        <div className={"flex flex-col"}>
            <LandingLayout>
                <Header/>
                    <Page/>
                <Footer/>
            </LandingLayout>
        </div>
    )
}
