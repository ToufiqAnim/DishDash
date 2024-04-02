import landingImage from '../assets/landing.png';
import appStore from '../assets/appStore.png';
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          "Savor the Flavor, Take it to Go!"
        </h1>
        <p className="text-xl">"Foodie Fantasies, One Click Away!"</p>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} alt="" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Quick Click, Quicker Takeaway!
          </span>
          <p>
            Upgrade to Ultimate Dining: Download DishDash App for Speedy Orders
            & personalised recomendations!
          </p>
          <img src={appStore} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
