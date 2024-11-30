import Image from "next/image";
import ChristmasHeader from "@/components/ChristmasHeader/page";
import Facilities from "@/components/Facilities/page";
import About from "@/components/About/page";
import Rooms from "@/components/Rooms/page";
import Gallery from "@/components/Gallery/page";
import RestaurantSection from "@/components/Restaurant/page";
import ContactSection from "@/components/Contact/page";

export default function Home() {
  return (
    <>
        <ChristmasHeader />
        <Facilities />
        <About />
        <Rooms />
        <Gallery />
        <RestaurantSection
            image="despre1.jpg"
            title="Experience Fine Dining"
            description="Join us for an unforgettable dining experience with exceptional cuisine, a warm atmosphere, and impeccable service."
            link="#menu"
        />
        <ContactSection
            address="PO Box 97845 Baker St. 567, Los Angeles, California - US."
            email="booking@Paradise.com - info@Paradise.com"
            phone="+ 61 (2) 8093 3402"
            description="Feel free to reach out to us anytime! We are here to help."
        />
    </>
  );
}
