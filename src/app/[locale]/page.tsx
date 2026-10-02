import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import ViewpointsSection from '@/components/ViewpointsSection';
import MapEmbed from '@/components/MapEmbed';
import InfoSection from '@/components/InfoSection';
import HoursSection from '@/components/HoursSection';
import TicketsSection from '@/components/TicketsSection';
import TransportSection from '@/components/TransportSection';
import ParkingSection from '@/components/ParkingSection';
import BasicInfo from '@/components/BasicInfo';
import RouteSection from '@/components/RouteSection';
import EventsSection from '@/components/EventsSection';
import PhotoSpotsSection from '@/components/PhotoSpotsSection';
import StaySection from '@/components/StaySection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

// Order follows the way visitors actually plan the trip: what it is → where to stand
// → where it is → history → practicalities → travel → events → photos → more.
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <ViewpointsSection />
        <MapEmbed />
        <InfoSection />
        <HoursSection />
        <TicketsSection />
        <TransportSection />
        <ParkingSection />
        <BasicInfo />
        <RouteSection />
        <EventsSection />
        <PhotoSpotsSection />
        <StaySection />
        <Gallery />
        <Reviews />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
