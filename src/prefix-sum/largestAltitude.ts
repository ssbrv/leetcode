function largestAltitude(gain: number[]): number {
  let prevAltitude = 0,
    maxAltitude = 0;

  for (let i = 1; i <= gain.length; i++) {
    const altitude = gain[i - 1] + prevAltitude;
    if (altitude > maxAltitude) {
      maxAltitude = altitude;
    }
    prevAltitude = altitude;
  }

  return maxAltitude;
}
