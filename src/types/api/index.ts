//item
export type itemType = {
  id: string,
  name: string,
  category: {
    id: string,
    name: string,
    slug: string,
  }[],
  contents:string,
}

//itemListSingle
export type itemListSingleType = {
  id: string,
  name: string,
  category: {
    id: string,
    name: string,
    slug: string,
  }[],
}