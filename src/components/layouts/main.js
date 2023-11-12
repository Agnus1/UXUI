import Header from "../header/header";
import Footer from "../footer/footer";

export default function Layout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Главная</title>
                <link href="./public/css/styles.css" rel="stylesheet"/>
            </head>
            <body>
            <Header></Header>
            {children}
            <Footer></Footer>
            </body>
        </html>
    )
}