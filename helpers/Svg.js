export class SvgHelper {
  static getCirclePath (center, radius) {
    return `
        M ${center} ${center}
        m ${-radius}, 0
        a ${radius}, ${radius}, 0 1,0 ${(radius * 2)}, 0
        a ${radius}, ${radius}, 0 1,0 ${-(radius * 2)}, 0
      `
  }
}
