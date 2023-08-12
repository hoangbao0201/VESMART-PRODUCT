import MainLayout from "@/components/layouts/MainLayout";
import { NextPageWithLayout } from "./_app";
import WrapperLayout from "@/components/layouts/WrapperLayout";
import ListProduct from "@/components/share/ListProduct";

interface HomePageProps {}

const HomePage: NextPageWithLayout<HomePageProps> = () => {
    return (
        <>
            <div className="lg:max-w-screen-lg sm:max-w-screen-md max-w-screen-sm w-full mx-auto px-3">
                <ListProduct />
            </div>
        </>
    );
};

export default HomePage;

HomePage.getLayout = (page) => {
    return <MainLayout>{page}</MainLayout>;
};
