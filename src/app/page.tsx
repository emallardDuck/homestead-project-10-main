// Importing Google Analytics component from the third-party library
import { GoogleAnalytics } from '@next/third-parties/google';
// Importing sections of the home page
import CareSection from '@/containers/home-page/care-section';
import CoverSection from '@/containers/home-page/cover-section';
import TomorrowSection from '@/containers/home-page/tomorrow-section';

export default function Home() {
  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <>
          <GoogleAnalytics gaId="G-XXXXXXXXXX" />
          {/* Add some other scripts if we need them for SEO */}
        </>
      )}
      <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 container mx-auto">
        <CareSection />
        <CoverSection />
        <TomorrowSection />
      </div>
    </>
  );
}
