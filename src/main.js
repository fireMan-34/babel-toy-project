/**
 *  babel watch 配置更新後無觸發重建，僅監聽目錄發生變更
 */
const runObject = {
  add(a, b, ...any) {
    if (any) {
      return a + b + this.add(...any);
    } else {
      return a + b;
    }
  },
  Add: (a, b, ...any) => {
    if (any) {
      return a + b + this.add(...any);
    } else {
      a + b;
    }
  }
}