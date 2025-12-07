/**
 * @file canvasBaseUtils.ts
 * @description 用于获取画布元素对象 CanvasBaseElement 的工具函数，提供默认值，以及安全戍卫。
 */
import type { CanvasBaseElement } from "../../types/canvas";
export const createDefaultCanvasBaseElement = (): CanvasBaseElement => ({
  id: '__canvas_base__',
  type: 'canvas',
  name: '画布',
  x: 50,
  y: 50,
  width: 1200,
  height: 800,
  rotation: 0,
  opacity: 1,
  fill: '#FFFFFF',
  locked: true,
  grid: {
    enabled: true,
    size: 40,
    color: '#49A0E2',
    mainLineColor: '#E0E0E0',
    gap: 8,
  },
  shadow: {
    enabled: true,
    offsetX: 15,
    offsetY: 15,
    blur: 0,
    color: '#000000',
  }
});

export const ensureCanvasBaseElement = (element: Partial<CanvasBaseElement>): CanvasBaseElement => {
  const defaults = createDefaultCanvasBaseElement();
  return {
    ...defaults,
    ...element,
    grid: {
      ...defaults.grid,
      ...element.grid,
    },
    shadow: {
      ...defaults.shadow,
      ...element.shadow,
    }
  };
};