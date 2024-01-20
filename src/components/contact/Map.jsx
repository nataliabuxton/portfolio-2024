import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-8, 2],
        scale: 3000
      }}
      style={{ width: "100%", height: "100%" }}
      onMoveEnd={({ coordinates, zoom }) => {
        console.log(coordinates, zoom);
      }}
    >
      <ZoomableGroup>
        <Geographies
          geography="/features.json"
          fill="#3D5C35"
          stroke="green"
          strokeWidth={0.5}
          opacity={0.8}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        <Annotation
          subject={[-2.022, 51.6566]}
          dx={-90}
          dy={-30}
          connectorProps={{
            stroke: "red",
            strokeWidth: 1,
            strokeLinecap: "round",
          }}
        >
          <text
            x="-8"
            textAnchor="end"
            alignmentBaseline="middle"
            fill="white"
          >
            {"Oxfordshire, UK"}
          </text>
        </Annotation>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default Map;
