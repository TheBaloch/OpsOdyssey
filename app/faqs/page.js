import Faq from "@/components/Faq/Faq";
import Layout from "@/components/layout/Layout";
import Callback2 from "@/components/sections/Callback2";
import Faqs1 from "@/components/sections/Faqs1";

export default function Page(){
    return(
        <>
        <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="FAQS">
           <Faqs1 />
           <div className="mb-80 mt-0">
              <Callback2 />
           </div>
        </Layout>
        </>
    );
}