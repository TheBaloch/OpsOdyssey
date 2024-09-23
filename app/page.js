import Layout from "@/components/layout/Layout"
import About9 from "@/components/sections/About9"
import Brand3 from "@/components/sections/Brand3"
import Counter2 from "@/components/sections/Counter2"
import Slider3 from "@/components/sections/Slider3"
import About5 from "@/components/sections/About5"
import Testimonials from "@/components/sections/Testimonials"
import Services2 from "@/components/sections/Services2"
import Steps from "@/components/sections/Steps"
import Services4 from "@/components/sections/Services4"
import LetConnect from "@/components/LetConnect/LetConnect"
import Callback2 from "@/components/sections/Callback2"
import CallService from "@/components/CallService/CallService"

export const metadata = {
    title: 'OpsOdyssey',
}

export default function Home() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={6} transparent>
                <Slider3 />
                <About9 /> 
                <About5 />
                <Counter2 />
                <Testimonials />
                {/* <Services4 /> */}
                <Services2 />
                <Brand3 />  
                <Steps />
                <div className=" mt-80 mb-80">
               <Callback2 />
               </div>  
                      
                         
            </Layout>
        </>
    )
}