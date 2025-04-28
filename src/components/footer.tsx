const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="flex relative bottom-0 border-grid border-t py-6 md:py-0">
            <div className="w-full p-4">
                <div className="text-left text-sm leading-loose text-muted-foreground md:text-center">Copyright&copy; {currentYear} - All rights reserved by YYYeung</div>
            </div>
        </footer>
    );
}

export default Footer;