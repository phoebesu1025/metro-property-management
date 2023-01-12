/*
 * Copyright 2021 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Wrapper } from "@googlemaps/react-wrapper";
import { createCustomEqual } from "fast-equals";
import { isLatLngLiteral } from "@googlemaps/typescript-guards";
import {
  Children,
  cloneElement,
  Fragment,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";

const render = (status) => {
  return <h1>{status}</h1>;
};

const CustomMap = ({
  properties,
  mapZoom,
  mapCenter,
  setMapCenter,
  setMapZoom,
}) => {
  //const [clicks, setClicks] = useState([]);
  // const [zoom, setZoom] = useState(15); // initial zoom
  // const [center, setCenter] = useState({
  //   lat: -37.03722442387021,
  //   lng: 174.93828722687874,
  // });

  // useEffect(() => {
  //   properties &&
  //     properties.map((property) =>
  //       setClicks((preValues) => [...preValues, property])
  //     );
  // }, [properties]);

  const onClick = (e) => {
    // avoid directly mutating state
    //console.log(e.latLng);
    //setClicks([...clicks, e.latLng]);
  };

  const onIdle = (m) => {
    setMapZoom(m.getZoom());
    setMapCenter(m.getCenter().toJSON());
  };

  return (
    properties && (
      <div className="flex px-24 shadow-xl w-full mt-12 h-[40rem]">
        <Wrapper
          apiKey={"AIzaSyDi2wtQnBpxtno-WcOOEZk-kQQ4l8RxcRA"}
          render={render}
        >
          <Map
            center={mapCenter}
            onClick={onClick}
            onIdle={onIdle}
            zoom={mapZoom}
            style={{ flexGrow: "1", height: "100%" }}
            styles={[
              {
                featureType: "poi",
                elementType: "labels.icon",
                stylers: [
                  {
                    visibility: "off",
                  },
                ],
              },
            ]}
          >
            {properties.map((property, i) => (
              <Marker
                key={i}
                icon={{
                  url: "/images/property.png",
                }}
                property={property}
                position={property.geoCode}
              />
            ))}
          </Map>
        </Wrapper>

        {/* Basic form for controlling center and zoom of map. */}
      </div>
    )
  );
};
// {selectedMarker && <InfoWindow>dfdsfs</InfoWindow>}
const Map = ({ onClick, onIdle, children, style, ...options }) => {
  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  // because React does not do deep comparisons, a custom hook is used
  // see discussion in https://github.com/googlemaps/js-samples/issues/946
  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

  useEffect(() => {
    if (map) {
      ["click", "idle"].forEach((eventName) =>
        window.google.maps.event.clearListeners(map, eventName)
      );

      if (onClick) {
        map.addListener("click", onClick);
      }

      if (onIdle) {
        map.addListener("idle", () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle]);

  return (
    <Fragment>
      <div ref={ref} style={style} />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // set the map prop on the child component
          // @ts-ignore
          return cloneElement(child, { map });
        }
      })}
    </Fragment>
  );
};

const Marker = (options) => {
  const [marker, setMarker] = useState();

  useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    const infoWindow = new window.google.maps.InfoWindow();
    if (marker) {
      marker.setOptions(options);
      marker.addListener("click", () => {
        infoWindow.setPosition(options.property.geoCode);
        infoWindow.setContent(`
        <div class="h-24 w-24 flex justify-center items-center relative" >
        <p>${options.property.fullAddress}</p>
        
        </div>
        `);
        infoWindow.open(options.map);
        window.google.maps.event.addListener(options.map, "click", function () {
          infoWindow.close();
        });
      });
    }
  }, [marker, options]);

  return null;
};

const deepCompareEqualsForMaps = createCustomEqual((deepEqual) => (a, b) => {
  if (
    isLatLngLiteral(a) ||
    a instanceof window.google.maps.LatLng ||
    isLatLngLiteral(b) ||
    b instanceof window.google.maps.LatLng
  ) {
    return new window.google.maps.LatLng(a).equals(
      new window.google.maps.LatLng(b)
    );
  }

  // TODO extend to other types

  // use fast-equals for other objects
  return deepEqual(a, b);
});

function useDeepCompareMemoize(value) {
  const ref = useRef();

  if (!deepCompareEqualsForMaps(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

function useDeepCompareEffectForMaps(callback, dependencies) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, dependencies.map(useDeepCompareMemoize));
}

export default CustomMap;
