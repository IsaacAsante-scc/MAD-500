class ContentList {
  static contentCount = 0;
  private items: Content[];
  constructor(item: Content) {
    this.items[0] = item;
  }
  get _items(): Content[]{
    return this.items;
  }
  increaseCount(): number {
    return ++ContentList.contentCount;
  }
  returnCount(items): number {
    return items.count();
  }

}


