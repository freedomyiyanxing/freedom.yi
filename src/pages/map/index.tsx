import React, { useEffect, useRef, Ref } from 'react';

declare let AMap: any;

const Map = () => {
  const containerRef: Ref<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const map = new AMap.Map(containerRef.current, {
      resizeEnable: true,
      // center: [116.480983, 39.989628],
      zoom: 15,
      viewMode: '3D',
    });

    const trafficLayer = new AMap.TileLayer.Traffic({
      zIndex: 10,
    });
    map.add(trafficLayer); // 添加图层到地图
  }, []);

  return (
    <div style={{ height: '100%' }} ref={containerRef}>map</div>
  );
};

export default Map;
