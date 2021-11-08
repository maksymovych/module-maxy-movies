import { API_IMAGES } from "../../apis/auth";

export function getImgPath(path) {
  return `${API_IMAGES}${path}`;
}
