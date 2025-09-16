import Products from '@/components/products';
import BannerCarousel from '../components/BannerCarousel';

export default function Home() {
  // Sample images with placeholder data
  const bannerImages = [
    {
      src: "/images/Banner1.png",
      alt: "Elegant boutique collection",
      title: "Luxurious Collection",
      subtitle: "Discover our premium handcrafted pieces"
    },
    {
      src: "/images/Banner2.png",
      alt: "New arrivals showcase",
      title: "New Arrivals",
      subtitle: "Fresh styles for the modern individual"
    },
    {
      src: "/images/Banner3.png",
      alt: "New arrivals showcase",
      title: "New Arrivals",
      subtitle: "Fresh styles for the modern individual"
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F8F3]">
      {/* Banner Carousel */}
      <BannerCarousel 
        images={bannerImages}
        autoplayDuration={4000}
        transitionType="fade" // Change to 'slide' for slide transitions
      />
      
    

            <Products/>
    


    </main>
  );
}