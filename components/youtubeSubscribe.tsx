import React from 'react';

let isLoaded = false;
export const YouTubeSubscribe = () => {
  React.useEffect(() => {
    if (!isLoaded) {
      const s = document.createElement("script");
      s.setAttribute("src", "https://apis.google.com/js/platform.js");
      document.body.appendChild(s);
      isLoaded = true;
    }
  }, []);
  return (
    <div
    className="g-ytsubscribe" 
    data-channelid="UCLuGKTyYGenU8SloMZ8KErQ" 
    data-layout="full" 
    data-count="default">
    </div>
  );
};