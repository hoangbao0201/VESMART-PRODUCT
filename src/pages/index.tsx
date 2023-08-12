import MainLayout from "@/components/layouts/MainLayout";
import { NextPageWithLayout } from "./_app";
import WrapperLayout from "@/components/layouts/WrapperLayout";

interface HomePageProps {}

const HomePage: NextPageWithLayout<HomePageProps> = () => {
    return (
        <>
            <WrapperLayout className="bg-white">
                Page Home
            </WrapperLayout>
        </>
    );
};

export default HomePage;

HomePage.getLayout = (page) => {
    return <MainLayout>{page}</MainLayout>;
};
