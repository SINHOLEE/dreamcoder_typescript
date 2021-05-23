{
  type Check<T> = T extends string? boolean:number
  type CrossZone = {
    type:'crosszone',
    id:number,
    title:string,
    members:string[]
  }
  type Network = {
    id:number,
    name:string
  }

  type action<T> = T extends CrossZone? CrossZone:Network


}