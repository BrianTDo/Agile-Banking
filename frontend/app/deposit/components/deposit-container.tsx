import DepositCard from "./deposit-card";

export default function DepositContainer() {
  return (
    <div className="bg-white relative bg-gradient-to-bl from-blue-100 via-transparent lg:h-full">
      <div className="container justify-center max-w-screen-xl px-4 py-8 mx-auto">
        <div className="lg:px-20 lg:py-20">
          <DepositCard />
        </div>
      </div>
    </div>
  );
}
