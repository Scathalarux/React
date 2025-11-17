import { Header } from "../components/Header";
import './NotFoundPage.css';
import NotFoundImage from '../../public/images/pageNotFound.webp';
import NotFoundIcon from '../assets/images/icons/notFound.png'

export function NotFoundPage({cartProducts}){
    return (
        <>
            <title>Page Not Foun</title>
                  <link
                    rel="icon"
                    type="image/svg+xml"
                    href={NotFoundIcon}
                  />

            <Header cartProducts={cartProducts}/>
            <div className="notFound-page">
                <h3>Page not found!</h3>
                <img src={NotFoundImage} alt="Page not found" />
            </div>
        </>
    );
}