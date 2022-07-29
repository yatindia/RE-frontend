let Property = {
  video: "",
  photos: [],
  type: "building",
  space_use: "personal",
  for : "sale",
  address_1: "",
  address_2: "",
  country: "",
  state: "",
  city: "",
  zip_code: 0,
  year_built: 0,
  renovated : false,
  renovated_year: 0,
  building_size: 0,
  lot_size: 0,
  construction_type:"concrete",
  electricity: "no electricity",
  sewer: "city",
  zoning: "",
  highlights: [],
  featured:false,
  importance: 0,
  gps:{
    lat: 40,
    lng: -74.5
  },
  
  floors: [
  
    {
      floor_number:0,
      floor_size: 0,
      term: "",
      rate: 0,
      space_use: "",
      condition: "",
      amenities: [""],
      period_of_tenure: 0,
      avaliable: true,
    }
  ]
  
};

export default Property