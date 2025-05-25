// 全局存储，用于在Firebase不可用时存储数据
const globalShares = new Map<string, any>();

export function getGlobalShares() {
  return globalShares;
}

export function setGlobalShare(id: string, data: any) {
  globalShares.set(id, data);
}

export function getGlobalShare(id: string) {
  return globalShares.get(id);
}

export function hasGlobalShare(id: string) {
  return globalShares.has(id);
}

export function deleteGlobalShare(id: string) {
  return globalShares.delete(id);
}

export function getAllGlobalShares() {
  return Array.from(globalShares.entries());
} 