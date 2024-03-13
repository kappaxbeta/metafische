import { Footer, Navbar } from '../../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../../sections';
import {BackgroundGradientAnimation} from "../../components/GradientBgAnimation";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">

      <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
              <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                  Gradients X Animations
              </p>
          </div>
      </BackgroundGradientAnimation>


  </div>
);

export default Page;
