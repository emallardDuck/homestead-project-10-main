import Image from 'next/image';
import {
  MortarIcon,
  FirstAidKitIcon,
  Doctor02Icon,
  Apple01Icon,
} from 'hugeicons-react';

const CoverSection = () => {
  return (
    <section className="container mx-auto py-50">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex-1 p-4">
          <div className="h-full flex flex-col justify-center">
            <h2 className="text-purple text-5xl mb-4 font-dm-serif-display">
              We&apos;ve got you covered for today
            </h2>
            <p className="mb-2">We can help with:</p>
            <ul className="list-none space-y-2">
              <li className="flex items-center">
                <MortarIcon color="#DF5847" className="mr-2" /> Medication
                reminders
              </li>
              <li className="flex items-center">
                <FirstAidKitIcon color="#DF5847" className="mr-2" />{' '}
                Transitioning home from the hospital
              </li>
              <li className="flex items-center">
                <Doctor02Icon color="#DF5847" className="mr-2" />
                Transportation to and from the doctor&apos;s office
              </li>
              <li className="flex items-center">
                <Apple01Icon color="#DF5847" className="mr-2" />
                Healthy diet and nutrition
              </li>
            </ul>
          </div>
        </div>
        <div className="p-4">
          <Image
            src="/images/home-medicine.webp"
            alt="Pills next to an alarm clock"
            width={544}
            height={477}
            style={{
              width: '100%',
              height: 'auto',
            }}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CoverSection;
