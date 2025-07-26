import { Link } from "react-router-dom";

interface VerificationProps {
  props: (confirmed: boolean) => void;
}

function Verification({ props }: VerificationProps) {
  return (
    <div className="flex w-screen h-screen inset-0 items-center justify-center z-50">
      <div className="relative z-20 border border-blue-500 py-20 px-14 flex flex-col align-top rounded-xl text-center">
        <p className="text-xl font-medium my-9 flex-wrap">Cette page contient du contenue sexuel qui pourrait être inadapté pour certainnes personne <span className="text-red-500"> Etes vous majeur ? </span></p>
        <div>
          <button
            className="bg-blue-600 py-3 px-5 rounded-lg mx-3"
            onClick={() => {
              props(true);
            }}
          >
            Oui
          </button>
          <Link to="/">
            <button className="bg-gray-500 py-3 px-5 rounded-lg mx-3">
              Non
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Verification;
