import * as path from 'path';

/**
 * 경로에서 파일에 해당하는 경로를 제거하여 반환합니다.
 * @param {string} str
 * @returns {string}
 */
export function removeExt(str: string) {
  return str.slice(0, -path.extname(str).length);
}

export function removeFilename(str: string): string {
  return str.slice(0, -path.basename(str).length);
}
