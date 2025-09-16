import BannerCarousel from '../components/BannerCarousel';
import Products from '../components/products';

export default function Home() {
  // Sample images matching Toplady style
  const bannerImages = [
    {
      src: "/images/Banner1.png",
      alt: "Festive Collection",
      title: "Festive Unstitched",
      subtitle: "Luxury in Every Thread",
      buttonText: "SHOP NOW"
    },
    {
      src: "/images/Banner2.png",
      alt: "Premium Collection", 
      title: "Premium Collection",
      subtitle: "Elegance Redefined for Modern Style",
      buttonText: "EXPLORE"
    },
    {
      src: "/images/Banner3.png",
      alt: "New Arrivals",
      title: "New Arrivals",
      subtitle: "Discover Latest Fashion Trends",
      buttonText: "VIEW ALL"
    },
  
  ];

  return (
    <>
      

      <main className="bg-[#F7F8F3] min-h-screen">
        {/* Banner Carousel with proper container */}
        <section className="px-4 md:px-6 lg:px-8 xl:px-12 py-4">
          <BannerCarousel 
            images={bannerImages}
            autoplayDuration={5000}
            transitionType="fade"
          />
        </section>
        
        {/* Products Section - Using your existing component */}
        <Products />

        {/* Additional sections */}
        <section className="py-16 bg-gradient-to-br from-[#6B1E23] to-[#2C0F12]">
          <div className="px-4 md:px-6 lg:px-8 xl:px-12">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-[#F7F8F3] mb-6">
                Crafted with Excellence
              </h2>
              <p className="text-lg md:text-xl text-[#F7F8F3]/90 leading-relaxed">
                Every piece in our collection represents the perfect blend of traditional 
                craftsmanship and contemporary design, bringing you unparalleled quality 
                and style.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}