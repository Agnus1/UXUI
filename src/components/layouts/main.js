import Header from "../header/header";

export default function Layout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Главная</title>
                <link rel="icon" type="image/x-icon" href="/film-svgrepo-com.svg"/>
            </head>
            <body>
                <Header></Header>
                <main className="container-fluid pb-5 pt-5">
                    {children}
                </main>
            </body>
        </html>
    )
}