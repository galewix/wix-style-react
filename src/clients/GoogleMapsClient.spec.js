import GoogleMapsClient from './GoogleMapsClient';

describe('GoogleMapsClient', () => {
  afterEach(() => delete window.google);

  it('should handle null when autocompleting and getting ZERO_RESULTS', () => {
    window.google = new GoogleMapsMock({
      getPlacePredictions: (request, callback) => {
        callback(null, window.google.maps.GeocoderStatus.ZERO_RESULTS);
      },
    });
    const client = new GoogleMapsClient();
    return client.autocomplete({ request: {} }).then(result => {
      expect(result).toEqual([]);
    });
  });

  it('should handle null when geocoding and getting ZERO_RESULTS', () => {
    window.google = new GoogleMapsMock(null, {
      geocode: (request, callback) => {
        callback(null, window.google.maps.GeocoderStatus.ZERO_RESULTS);
      },
    });
    const client = new GoogleMapsClient();
    return client.geocode({ request: {} }).then(result => {
      expect(result).toEqual([]);
    });
  });

  it('should handle null when placeDetails and getting ZERO_RESULTS', () => {
    window.google = new GoogleMapsMock(null, null, {
      getDetails: (request, callback) => {
        callback(
          null,
          window.google.maps.places.PlacesServiceStatus.ZERO_RESULTS,
        );
      },
    });
    const client = new GoogleMapsClient();
    return client.placeDetails({ request: {} }).then(result => {
      expect(result).toEqual(undefined);
    });
  });
});

function GoogleMapsMock(
  autocompleteInstance,
  geocoderInstance,
  placesServiceInstance,
) {
  class AutocompleteService {
    constructor() {
      return autocompleteInstance;
    }
  }

  class Geocoder {
    constructor() {
      return geocoderInstance;
    }
  }

  class Map {}

  class PlacesService {
    constructor() {
      return placesServiceInstance;
    }
  }

  return {
    maps: {
      Map: Map,
      places: {
        AutocompleteService: AutocompleteService,
        PlacesService: PlacesService,
        PlacesServiceStatus: {
          OK: 'OK',
          ZERO_RESULTS: 'ZERO_RESULTS',
        },
      },
      Geocoder: Geocoder,
      GeocoderStatus: {
        OK: 'OK',
        ZERO_RESULTS: 'ZERO_RESULTS',
      },
    },
  };
}
