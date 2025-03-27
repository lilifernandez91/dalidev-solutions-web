import ServiciosComponent from "@/components/servicios";
import SeoComponent from "@/components/shared/SeoComponent";
import { PAGES } from "@/constants/rutas";

const ServiciosPage = () => {
    return (
        <>
            <SeoComponent pageId={PAGES.SERVICIOS} />

            <ServiciosComponent />
        </>
    );
}

export default ServiciosPage;