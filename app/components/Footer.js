const Footer = () => {
    return (

        <footer>
            <div className="justify-center list-none flex items-center bg-white sticky bottom-0 h-14 w-full border-t-2 shadow-md shadow-gray-300">
                <ul className="flex items-center justify-center space-x-4 md:mt-3">
                    <li>
                        <a href="#">© 2023 Airbnblike, all rights reserved</a>
                    </li>
                    <li>
                        <a href="#">Politique de confidentialité</a>
                    </li>
                    <li>
                        <a href="#">Conditions générales</a>
                    </li>
                    <li>
                        <a href="#">Centre d'aide</a>
                    </li>
                    <li>
                        <a href="#">Nous contacter</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;