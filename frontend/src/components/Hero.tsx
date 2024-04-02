import hero from '../assets/hero.jpg';
const Hero = () => {
  return (
    <div>
      <img src={hero} className="w-full max-h-[750px] object-cover" />
    </div>
  );
};

export default Hero;
