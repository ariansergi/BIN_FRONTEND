function geolocationErrorName(code: number): string {
  switch (code) {
    case GeolocationPositionError.PERMISSION_DENIED:
      return 'PERMISSION_DENIED'
    case GeolocationPositionError.POSITION_UNAVAILABLE:
      return 'POSITION_UNAVAILABLE'
    case GeolocationPositionError.TIMEOUT:
      return 'TIMEOUT'
    default:
      return 'UNKNOWN'
  }
}

export function handleGetLocation() {
  if (!navigator.geolocation) {
    console.error('Geolocation is not supported by this browser.')
    return
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { coords, timestamp } = position
      console.log({
        latitude: coords.latitude,
        longitude: coords.longitude,
        accuracy: coords.accuracy,
        altitude: coords.altitude,
        altitudeAccuracy: coords.altitudeAccuracy,
        heading: coords.heading,
        speed: coords.speed,
        timestamp,
        timestampISO: new Date(timestamp).toISOString(),
      })
    },
    (error) => {
      console.error({
        code: error.code,
        message: error.message,
        reason: geolocationErrorName(error.code),
      })
    },
    { enableHighAccuracy: true },
  )
}
