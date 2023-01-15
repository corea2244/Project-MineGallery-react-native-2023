import { AdMobRewarded } from "expo-ads-admob";
import { useEffect, useState } from "react";

const MY_APP_ID = "ca-app-pub-6329346831820983/2829945372";
const TEST_APP_ID = "ca-app-pub-3940256099942544/5224354917";

export const useRewardAs = () => {
  const [isLoaded, setIsLoaded] = useState(false); // 광고가 로딩이 됐는지
  const [isRewarded, setIsRewarded] = useState(false); // 보상을 받을 수 있는 상태까지 광고를 봤는지
  const [isClosed, setIsClosed] = useState(false); // 광고가 닫혔는지

  const loadRewardAd = async () => {
    await AdMobRewarded.setAdUnitID(TEST_APP_ID);
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();
  };

  const resetAdValue = () => {
    setIsLoaded(false);
    setIsRewarded(false);
    setIsClosed(false);
  };

  useEffect(() => {
    AdMobRewarded.addEventListener("rewardedVideoUserDidEarnReward", () => {
      console.log("rewardedVideoUserDidEarnReward");
      setIsLoaded(true);
    });
    AdMobRewarded.addEventListener("rewardedVideoDidLoad", () => {
      console.log("rewardedVideoDidLoad");
      setIsRewarded(true);
    });
    // AdMobRewarded.addEventListener("rewardedVideoDidFailToLoad", () => {
    //   console.log("rewardedVideoDidFailToLoad");
    // });
    // AdMobRewarded.addEventListener("rewardedVideoDidPresent", () => {
    //   console.log("rewardedVideoDidPresent");
    // });
    // AdMobRewarded.addEventListener("rewardedVideoDidFailToPresent", () => {
    //   console.log("rewardedVideoDidFailToPresent");
    // });
    AdMobRewarded.addEventListener("rewardedVideoDidDismiss", () => {
      console.log("rewardedVideoDidDismiss");
      setIsClosed(true);
    });

    return () => {
      AdMobRewarded.removeAllListeners();
    };
  }, []);

  return { loadRewardAd, isLoaded, isRewarded, isClosed, resetAdValue };
};
