import Head from "next/head";
import Image from "next/image";
import topLeftFigure from '../public/assets/top-left-figure.svg'
import bottomLeftFigure from '../public/assets/bottom-left-figure.svg'
import bottomRightFigure from '../public/assets/bottom-right-figure.svg'

export const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Login Page</title>
                <meta name="Login page" content="" />
            </Head>
            <main>
                <Image className="top-left-figure" src={topLeftFigure} layout="fill" priority alt="top-left-figure" />
                <Image className="bottom-left-figure" src={bottomLeftFigure} layout="fill" priority alt="bottom-left-figure" />
                <Image className="bottom-right-figure" src={bottomRightFigure} layout="fill" priority alt="bottom-right-figure" />
                {children}
            </main>
        </>
    )
}

export default Layout;