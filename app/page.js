import Layout from "@/components/layout/Layout"
import About9 from "@/components/sections/About9"
import Brand3 from "@/components/sections/Brand3"
import Counter2 from "@/components/sections/Counter2"
import Slider3 from "@/components/sections/Slider3"
import About5 from "@/components/sections/About5"
import Project3 from "@/components/sections/Project3"
import Testimonials from "@/components/sections/Testimonials"
import Project1 from "@/components/sections/Project1"
import LetConnect from "@/components/LetConnect/LetConnect"
import BlogPost4 from "@/components/sections/BlogPost4"

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
                <BlogPost4 />           
                <Brand3 />             
            </Layout>
        </>
    )
}