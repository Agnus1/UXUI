import Header from "../header/header";
import Footer from "../footer/footer";

export default function Layout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Главная</title>
            </head>
            <body className="container-fluid">
            {/* <Header></Header> */}
            <main>
                {children}
            </main>
            {/* <Footer></Footer> */}
            </body>
        </html>
    )
}