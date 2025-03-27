import ContactComponent from "@/components/contacto";
import SeoComponent from "@/components/shared/SeoComponent";
import { PAGES } from "@/constants/rutas";

const ContactPage = () => {
    return (
        <>
            <SeoComponent pageId={PAGES.CONTACTO} />
            <ContactComponent />
        </>
    );
};

export default ContactPage;
