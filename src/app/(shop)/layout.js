import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";

export default function ShopLayout({ children }) {
    return (
        <div >
            <Navbar />
            
            {children}
            
            <Footer />
        </div>
    )
  }