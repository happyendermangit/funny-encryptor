class k extends i.Store {
  constructor(){
    this.country = "en-US"
  }
  getCountry(){
    return this.country
  }
  
}

k.displayName = "LocationSettingsStore"

var h = new k(null,{
    COUNTRY_SET: (e) => {
      let {
        country: t,
        userId: b,
        ip: l
      } = e
    }
})
