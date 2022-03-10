import { HealthProblemForm } from "./HealthProblemForm";
import Map from "../Map";
import { useEffect, useState } from "react";
//import { loadMapApi } from "../../utils/GoogleMapsUtils";


export interface HealthProblemPageProps {
  navigateToClinics: () => void;
}

export const HealthProblemPage = ({
   navigateToClinics,
 }: HealthProblemPageProps) => {
//   const [scriptLoaded, setScriptLoaded] = useState(false);
//   const [distanceInKm, setDistanceInKm] = useState<number>(-1);
//   useEffect(() => {
//     const googleMapScript = loadMapApi();
//     googleMapScript.addEventListener("load", function () {
//       setScriptLoaded(true);
//     });
//   }, []);

//   const renderDistanceSentence = () => {
//     return (
//       <div className="distance-info">
//         {`Distance between selected marker and home address is ${distanceInKm}km.`}
//       </div>
//     );
//  };

  return (
    <div>
      <HealthProblemForm
        navigateToClinics={navigateToClinics}
      ></HealthProblemForm>
      {/* <Map
        mapType={google.maps.MapTypeId.ROADMAP}
        mapTypeControl={true}
        setDistanceInKm={setDistanceInKm}
      /> */}
    </div>
  );
};
