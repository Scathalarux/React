import { Header } from "../components/Header";
import './NotFoundPage.css';
export function NotFoundPage(){
    return (
        <>
            <Header />
            <div className="notFound-page">
                <h3>Page not found!</h3>
                <img src="images/pageNotFound.webp" alt="Page not found" />
            </div>
        </>
    );
}