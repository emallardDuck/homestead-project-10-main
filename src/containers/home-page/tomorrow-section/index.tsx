import Image from 'next/image';

const TomorrowSection = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="p-4 max-w-s">
          <div className="flex mb-[-0.5rem]">
            <Image
              src="/images/home-vegetable.webp" // Generally I'd put these in a CDN to serve media files faster
              alt="Vegetables on a plate"
              height={350}
              width={450}
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="h-full flex flex-col justify-center">
            <h2 className="text-purple text-5xl font-dm-serif-display mb-4">
              And, we&apos;ve got you covered for tomorrow
            </h2>
            <p>
              With our ongoing assessments and care professionals in their home,
              we can adjust and add services over the long term and work with
              other care providers to ensure holistic care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TomorrowSection;
