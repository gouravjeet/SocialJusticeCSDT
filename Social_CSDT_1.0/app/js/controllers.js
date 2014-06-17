'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {



              $scope.name= "wilderness";
              
                

              $scope.map = {
              center: {
                  latitude: 42,
                  longitude: -74
              },
              zoom: 6,
              options: {
                  streetViewControl: false,
                  panControl: false,
                  maxZoom: 10,
                  minZoom: 3
              },
              
              dragging: true,
              };
             

          $scope.paths=[ {
  "market_name" : "Altamont Farmers' Market",
  "zip" : "12009",
  "phone" : "5184563150",
  "operation_hours" : "Daily except Wed  11am-6pm (Sat/Sun 10am-2pm)",
  "location" : "Altamont Free Library,181 Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.03254",
    "latitude" : "42.70149"
  },
  "state" : "NY",
  "contact" : "Linda Cure",
  "operation_months_code" : "M",
  "city" : "Altamont",
  "address_line_1" : "181 Main Street",
  "county" : "Albany",
  "fmnp" : "Y",
  "operation_season" : "July 1 - September 1",
  "longitude" : "-74.03254",
  "latitude" : "42.70149",
  "snap_status" : "N"
}
, {
  "market_name" : "Capital District Farmers' Market",
  "zip" : "12204",
  "phone" : "5184640889",
  "operation_hours" : "Saturday  9am-1pm",
  "location" : "Pavillion at 381 BroadwayMenands",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.72001",
    "latitude" : "42.69621"
  },
  "state" : "NY",
  "contact" : "Al Lansing",
  "operation_months_code" : "P/M",
  "city" : "Menands",
  "address_line_1" : "381 Broadway",
  "county" : "Albany",
  "fmnp" : "Y",
  "operation_season" : "May 3 - October 25",
  "longitude" : "-73.72001",
  "latitude" : "42.69621",
  "snap_status" : "Y"
}
, {
  "market_name" : "Capital District Veggie Mobile - Albany",
  "zip" : "12206",
  "phone" : "5182748685",
  "operation_hours" : "Tuesday - Saturday",
  "location" : "Contact for locations & times518-274-8685  or visit www.cdcg.org",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.78603",
    "latitude" : "42.67577"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.cdcg.org"
  },
  "contact" : "EJ Krans",
  "operation_months_code" : "YR",
  "city" : "Albany",
  "address_line_1" : "Albany County Inner-city Neighborhoods",
  "county" : "Albany",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-73.78603",
  "latitude" : "42.67577",
  "snap_status" : "Y"
}
, {
  "market_name" : "CDPHP Farmers' Market",
  "zip" : "12206",
  "phone" : "5187653500",
  "operation_hours" : "Thursday  11am-1:30pm",
  "location" : "CDPHP prkg lot, off Washington Ave.500 Patroon Creek Blvd., Albany",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.80513",
    "latitude" : "42.68485"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.cdphp.com"
  },
  "contact" : "Tom Gallagher",
  "operation_months_code" : "P/M",
  "city" : "Albany",
  "address_line_1" : "500 Patroon Creek Bvld.",
  "county" : "Albany",
  "fmnp" : "Y",
  "operation_season" : "May 29 - October 2",
  "longitude" : "-73.80513",
  "latitude" : "42.68485",
  "snap_status" : "N"
}
, {
  "market_name" : "Cohoes Farmers' Market",
  "zip" : "12047",
  "phone" : "5182332119",
  "operation_hours" : "Friday  4pm-7pm",
  "location" : "Remsen St.,btwn Ontario & Oneida Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.70068",
    "latitude" : "42.77161"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.cohoesfarmersmarket.com"
  },
  "contact" : "Amanda Kenton",
  "operation_months_code" : "M",
  "city" : "Cohoes",
  "address_line_1" : "185 Remsen St",
  "county" : "Albany",
  "fmnp" : "Y",
  "operation_season" : "June 13 - October 3",
  "longitude" : "-73.70068",
  "latitude" : "42.77161",
  "snap_status" : "Y"
}
, {
  "market_name" : "Colonie Crossings Farmers' Market",
  "zip" : "12211",
  "phone" : "5187832760",
  "operation_hours" : "Saturday  9am-1pm",
  "location" : "580 Albany Shaker Rd.,Loudonville",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.78029",
    "latitude" : "42.71016"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.colonie.org"
  },
  "contact" : "Alicia Osur",
  "operation_months_code" : "P/M",
  "city" : "Colonie",
  "address_line_1" : "580 Albany Shaker Rd",
  "county" : "Albany",
  "fmnp" : "Y",
  "operation_season" : "May 17 - September 13",
  "longitude" : "-73.78029",
  "latitude" : "42.71016",
  "snap_status" : "N"
}
, {
  "market_name" : "Delmar Farmers' Market",
  "zip" : "12054",
  "phone" : "5182104727",
  "operation_hours" : "Saturday 9am - 1pm",
  "location" : "Bethlehem Central Middle School332 Kenwood Avenue",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.82515",
    "latitude" : "42.61953"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.delmarmarket.org"
  },
  "contact" : "Paul Tick",
  "operation_months_code" : "P/M/X",
  "city" : "Delmar",
  "address_line_1" : "332 Kenwood Avenue",
  "county" : "Albany",
  "fmnp" : "Y",
  "operation_season" : "May 31 - December 20",
  "longitude" : "-73.82515",
  "latitude" : "42.61953",
  "snap_status" : "N"
}
, {
  "market_name" : "Downtown Albany Farmers' Market",
  "zip" : "12207",
  "phone" : "5187322991",
  "operation_hours" : "Thursday  11am-2pm",
  "location" : "Pine St. & Broadway,Off Maiden Lane",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.75041",
    "latitude" : "42.65027"
  },
  "state" : "NY",
  "contact" : "Annette Van Auken",
  "operation_months_code" : "P/M",
  "city" : "Albany",
  "address_line_1" : "Broadway and Pine St.",
  "county" : "Albany",
  "fmnp" : "Y",
  "operation_season" : "May 1 - October 29",
  "longitude" : "-73.75041",
  "latitude" : "42.65027",
  "snap_status" : "N"
}
, {
  "market_name" : "Empire State Plaza Farmers' Market",
  "zip" : "12210",
  "phone" : "5184732982",
  "operation_hours" : "Wednesday  10am-2pmFriday 10-2, May 7 - Oct 10",
  "location" : "Empire State Plaza",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.75709",
    "latitude" : "42.65093"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.empirestateplaza.org"
  },
  "contact" : "Jason Rumpf",
  "operation_months_code" : "YR",
  "city" : "Albany",
  "address_line_1" : "170 State St",
  "county" : "Albany",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-73.75709",
  "latitude" : "42.65093",
  "snap_status" : "Y"
}
, {
  "market_name" : "Empire State Plaza WINTER Farmers' Market",
  "zip" : "12210",
  "phone" : "5184732982",
  "operation_hours" : "Wednesday 10am - 2pmTuesday Nov 26, week of Thanksgiving",
  "location" : "South Concourse, IndoorEmpire State Plaza",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.76089",
    "latitude" : "42.64994"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.empirestateplaza.org"
  },
  "contact" : "Jason Rumpf",
  "operation_months_code" : "M/W/P",
  "city" : "Albany",
  "address_line_1" : "Empire State Plaza",
  "county" : "Albany",
  "fmnp" : "N",
  "operation_season" : "October 30 - April 30",
  "longitude" : "-73.76089",
  "latitude" : "42.64994",
  "snap_status" : "N"
}
, {
  "market_name" : "Farm to Preschool III Farmers' Market",
  "zip" : "12047",
  "phone" : "5184267181",
  "operation_hours" : "Monday 2:30-5:30",
  "location" : "Cohoes Community Center22-40 Remsen St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.70149",
    "latitude" : "42.7756"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.facebook.com/Farm2Preschool"
  },
  "contact" : "Darlene Yule",
  "operation_months_code" : "M",
  "city" : "Cohoes",
  "address_line_1" : "22-40 Remsen Street",
  "county" : "Albany",
  "fmnp" : "Y",
  "operation_season" : "June 16 - September 15",
  "longitude" : "-73.70149",
  "latitude" : "42.7756",
  "snap_status" : "Y"
}
, {
  "market_name" : "First United Methodist Church Farmers' Market",
  "zip" : "12054",
  "phone" : "5187322991",
  "operation_hours" : "Tuesday  2:30pm-6pm",
  "location" : "Church Parking Lot, 428 Kenwood Ave., Delmar",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.83631",
    "latitude" : "42.62265"
  },
  "state" : "NY",
  "contact" : "Annette Van Auken",
  "operation_months_code" : "P/M",
  "city" : "Delmar",
  "address_line_1" : "428 Kenwood Ave",
  "county" : "Albany",
  "fmnp" : "Y",
  "operation_season" : "April 29 - November 25",
  "longitude" : "-73.83631",
  "latitude" : "42.62265",
  "snap_status" : "N"
}
, {
  "market_name" : "Harriman State Campus Farmers' Market",
  "zip" : "12203",
  "phone" : "5184732982",
  "operation_hours" : "Thursday  10am-2pm",
  "location" : "Harriman State Office Campusbehind Bldg. 8A, Albany",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.81041",
    "latitude" : "42.68035"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.empirestateplaza.org"
  },
  "contact" : "Jason Rumpf",
  "operation_months_code" : "P/M",
  "city" : "Albany",
  "address_line_1" : "1220 Washington Ave",
  "county" : "Albany",
  "fmnp" : "Y",
  "operation_season" : "May 8 - October 9",
  "longitude" : "-73.81041",
  "latitude" : "42.68035",
  "snap_status" : "N"
}
, {
  "market_name" : "Voorheesville Farmers' Market",
  "zip" : "12186",
  "phone" : "5187654536",
  "operation_hours" : "Wed  3:30pm - 6:30pm",
  "location" : "First United Methodist lot,68 Maple Ave.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.92991",
    "latitude" : "42.64892"
  },
  "state" : "NY",
  "contact" : "Dianne Luci",
  "operation_months_code" : "M",
  "city" : "Voorheesville",
  "address_line_1" : "68 Maple Ave",
  "county" : "Albany",
  "fmnp" : "Y",
  "operation_season" : "June 18 - October 1",
  "longitude" : "-73.92991",
  "latitude" : "42.64892",
  "snap_status" : "N"
}
, {
  "market_name" : "Angelica Farmers' Market",
  "zip" : "14709",
  "phone" : "5854667422",
  "operation_hours" : "Saturday  9am-1pm",
  "location" : "Park Circle",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-78.01631",
    "latitude" : "42.30553"
  },
  "state" : "NY",
  "contact" : "Bob Jones",
  "operation_months_code" : "M",
  "city" : "Angelica",
  "address_line_1" : "28 Park Cir",
  "county" : "Allegany",
  "fmnp" : "Y",
  "operation_season" : "June 14 - September 27",
  "longitude" : "-78.01631",
  "latitude" : "42.30553",
  "snap_status" : "N"
}
, {
  "market_name" : "Belmont Farmers' Market",
  "zip" : "14813",
  "phone" : "7169423710",
  "operation_hours" : "Thursday  11am-5pm",
  "location" : "Grange Hall Lawn, 32 Willets Ave, Rt 19",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-78.03994",
    "latitude" : "42.22613"
  },
  "state" : "NY",
  "contact" : "Phyllis Couture",
  "operation_months_code" : "P/M",
  "city" : "Belmont",
  "address_line_1" : "32 Willets Ave",
  "county" : "Allegany",
  "fmnp" : "Y",
  "operation_season" : "May 22 - October 30",
  "longitude" : "-78.03994",
  "latitude" : "42.22613",
  "snap_status" : "Y"
}
, {
  "market_name" : "Bissel Gardens Farmers' Market",
  "zip" : "10470",
  "phone" : "3474272547",
  "operation_hours" : "Sat/Wed  9am-5pm",
  "location" : "Baychester Ave. & E. 241 St.,Bronx",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.84702",
    "latitude" : "40.90151"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.justfood.org"
  },
  "contact" : "Heather Warren-Dombrowa",
  "operation_months_code" : "M",
  "city" : "Bronx",
  "address_line_1" : "Baychester Ave and East 241st St",
  "county" : "Bronx",
  "fmnp" : "Y",
  "operation_season" : "July 12 - November 22",
  "longitude" : "-73.84702",
  "latitude" : "40.90151",
  "snap_status" : "Y"
}
, {
  "market_name" : "Bronx Borough Hall Greenmarket",
  "zip" : "10452",
  "phone" : "2127887476",
  "operation_hours" : "Tuesday  8am-4pm",
  "location" : "Grand Concourse,161st & 162nd Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.92276",
    "latitude" : "40.82715"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "M",
  "city" : "Bronx",
  "address_line_1" : "901 Grand Concourse",
  "county" : "Bronx",
  "fmnp" : "Y",
  "operation_season" : "June 3 - November 25",
  "longitude" : "-73.92276",
  "latitude" : "40.82715",
  "snap_status" : "Y"
}
, {
  "market_name" : "Harvest Home Co-op City Farmers' Market",
  "zip" : "10475",
  "phone" : "2128283361",
  "operation_hours" : "Wednesday  8am-4pm",
  "location" : "Ash Loop & Aldrich Street,Bronx",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.82447",
    "latitude" : "40.87368"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.harvesthomefm.org"
  },
  "contact" : "Maritza Owens",
  "operation_months_code" : "M",
  "city" : "Bronx",
  "address_line_1" : "Co-Op City Blvd and Bellamy Loop",
  "county" : "Bronx",
  "fmnp" : "Y",
  "operation_season" : "July 9 - November 26",
  "longitude" : "-73.82447",
  "latitude" : "40.87368",
  "snap_status" : "Y"
}
, {
  "market_name" : "Harvest Home Forest Ave. Farmers' Market",
  "zip" : "10455",
  "phone" : "2128283361",
  "operation_hours" : "Wednesday  8am-4pm",
  "location" : "Forest Ave., btwn Westchester Ave. &  E. 156th St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.90651",
    "latitude" : "40.81732"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.harvesthomefm.org"
  },
  "contact" : "Maritza Owens",
  "operation_months_code" : "M",
  "city" : "Bronx",
  "address_line_1" : "East 156st St and Forest Ave",
  "county" : "Bronx",
  "fmnp" : "Y",
  "operation_season" : "July 9 - September 10",
  "longitude" : "-73.90651",
  "latitude" : "40.81732",
  "snap_status" : "Y"
}
, {
  "market_name" : "Harvest Home Jacobi  Hospital Farmers' Market",
  "zip" : "10461",
  "phone" : "2128283361",
  "operation_hours" : "Tue/Fri  8am-4pm",
  "location" : "1400 Pelham Parkway,Bronx",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.8467",
    "latitude" : "40.85431"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.harvesthomefm.org"
  },
  "contact" : "Maritza Owens",
  "operation_months_code" : "M",
  "city" : "Bronx",
  "address_line_1" : "1400 Pelham Pkwy",
  "county" : "Bronx",
  "fmnp" : "Y",
  "operation_season" : "June 10 - November 25",
  "longitude" : "-73.8467",
  "latitude" : "40.85431",
  "snap_status" : "Y"
}
, {
  "market_name" : "Harvest Home Jerome Ave. Farmers' Market",
  "zip" : "10452",
  "phone" : "2128283361",
  "operation_hours" : "Friday  8am-4pm",
  "location" : "Mullaly Park,btwn River & McClellan Aves, Bronx",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.91766",
    "latitude" : "40.84025"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.harvesthomefm.org"
  },
  "contact" : "Maritza Owens",
  "operation_months_code" : "M",
  "city" : "Bronx",
  "address_line_1" : "Jerome Ave and East 170th St",
  "county" : "Bronx",
  "fmnp" : "Y",
  "operation_season" : "June 27 - November 21",
  "longitude" : "-73.91766",
  "latitude" : "40.84025",
  "snap_status" : "Y"
}
, {
  "market_name" : "Harvest Home Mt. Eden Farmers' Market",
  "zip" : "10457",
  "phone" : "2128283361",
  "operation_hours" : "Tue/Thu  8am-4pm",
  "location" : "Mt. Eden & Morris Aves., near Bronx-Lebanon Hospital",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.90947",
    "latitude" : "40.84305"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.harvesthomefm.org"
  },
  "contact" : "Maritza Owens",
  "operation_months_code" : "P/M",
  "city" : "Bronx",
  "address_line_1" : "Mt Eden Pkwy and Morris Ave",
  "county" : "Bronx",
  "fmnp" : "Y",
  "operation_season" : "May 20 - November 25",
  "longitude" : "-73.90947",
  "latitude" : "40.84305",
  "snap_status" : "Y"
}
, {
  "market_name" : "Harvest Home North Central Bronx Farmers' Market",
  "zip" : "10467",
  "phone" : "2128283361",
  "operation_hours" : "Wednesday  8am-4pm",
  "location" : "Mosholu Parkway North & Jerome Ave.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.88385",
    "latitude" : "40.88046"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.harvesthomefm.org"
  },
  "contact" : "Maritza Owens",
  "operation_months_code" : "M",
  "city" : "Bronx",
  "address_line_1" : "Jerome Ave and East Mosholu Pkwy North",
  "county" : "Bronx",
  "fmnp" : "Y",
  "operation_season" : "July 9 - November 26",
  "longitude" : "-73.88385",
  "latitude" : "40.88046",
  "snap_status" : "Y"
}
, {
  "market_name" : "Harvest Home Sunday Farmers' Market",
  "zip" : "10456",
  "phone" : "2128283361",
  "operation_hours" : "Sunday  8am-4pm",
  "location" : "Grand Concourse & E. 165th St.,  at Bronx Museum of the Arts",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.90953",
    "latitude" : "40.83102"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.harvesthomefm.org"
  },
  "contact" : "Maritza Owens",
  "operation_months_code" : "M",
  "city" : "Bronx",
  "address_line_1" : "Grand Concourse and East 165st St",
  "county" : "Bronx",
  "fmnp" : "Y",
  "operation_season" : "June 29 - November 23",
  "longitude" : "-73.90953",
  "latitude" : "40.83102",
  "snap_status" : "Y"
}
, {
  "market_name" : "Heights Community Farmers' Market",
  "zip" : "10453",
  "phone" : "7189335300",
  "operation_hours" : "Thursday  9am-3pm",
  "location" : "University Ave. and W. 181 Street,The Bronx",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.90768",
    "latitude" : "40.85658"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.bronxworks.org"
  },
  "contact" : "Kimberley Wong",
  "operation_months_code" : "M",
  "city" : "Bronx",
  "address_line_1" : "University Ave and W 181st Street",
  "county" : "Bronx",
  "fmnp" : "Y",
  "operation_season" : "July 10 - November 20",
  "longitude" : "-73.90768",
  "latitude" : "40.85658",
  "snap_status" : "Y"
}
, {
  "market_name" : "Herban Farmers' Market at Williamsbridge Square",
  "zip" : "10467",
  "phone" : "6463517611",
  "operation_hours" : "Wednesday  10am-5pm",
  "location" : "Williamsbridge Square Park,White Plains Rd. & East Gun Hill Rd.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.8663",
    "latitude" : "40.87734"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.125thstreetfarmersmarket.com"
  },
  "contact" : "Tupacamaru Tiwoni",
  "operation_months_code" : "M",
  "city" : "Bronx",
  "address_line_1" : "White Plains Road and East Gun Hill Road",
  "county" : "Bronx",
  "fmnp" : "Y",
  "operation_season" : "July 2 - November 12",
  "longitude" : "-73.8663",
  "latitude" : "40.87734",
  "snap_status" : "Y"
}
, {
  "market_name" : "Hunts Point Farmers' Market",
  "zip" : "10459",
  "phone" : "9149234837",
  "operation_hours" : "Wed/Sat  8:30am-4pm",
  "location" : "Monsignor Raul del Valle Sq.(subway#6)Southern Blvd., E. 163rd & Bruckner Blvd.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.89151",
    "latitude" : "40.82098"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.downtoearthmarkets.com"
  },
  "contact" : "Doug Ornstein",
  "operation_months_code" : "M",
  "city" : "Bronx",
  "address_line_1" : "Southern Blvd and East 163rd St",
  "county" : "Bronx",
  "fmnp" : "N",
  "operation_season" : "July 9 - November 22",
  "longitude" : "-73.89151",
  "latitude" : "40.82098",
  "snap_status" : "Y"
}
, {
  "market_name" : "Kingsbridge Heights Youth Market",
  "zip" : "10463",
  "phone" : "7188840700",
  "operation_hours" : "Friday  11am-5pm",
  "location" : "Kingsbridge Heights Comm. Ctr,3101 Kingsbridge Terrace, Bronx",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.90071",
    "latitude" : "40.87758"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.khcc-nyc.org"
  },
  "contact" : "Jane Folloro",
  "operation_months_code" : "M",
  "city" : "Bronx",
  "address_line_1" : "3101 Kingsbridge Terrace",
  "county" : "Bronx",
  "fmnp" : "Y",
  "operation_season" : "July 11 - August 29",
  "longitude" : "-73.90071",
  "latitude" : "40.87758",
  "snap_status" : "Y"
}
, {
  "market_name" : "La Familia Verde Farmers' Market",
  "zip" : "10457",
  "phone" : "7185831765",
  "operation_hours" : "Tuesday  8am-3pm",
  "location" : "Tremont Park, on Tremont Ave.,btwn LaFontaine & Arthur Aves.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.89334",
    "latitude" : "40.84643"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.lafamiliaverde.org"
  },
  "contact" : "Heidi Hynes",
  "operation_months_code" : "M",
  "city" : "Bronx",
  "address_line_1" : "East Tremont Ave and Arthur Ave",
  "county" : "Bronx",
  "fmnp" : "Y",
  "operation_season" : "July 8 - November 11",
  "longitude" : "-73.89334",
  "latitude" : "40.84643",
  "snap_status" : "Y"
}
, {
  "market_name" : "Learn it, Grow it, Eat it Youthmarket",
  "zip" : "10456",
  "phone" : "2127887476",
  "operation_hours" : "Wednesday  10am-2:30pm",
  "location" : "169th St. and Boston Rd.McKinley Square",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.90022",
    "latitude" : "40.83121"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org/youthmarket"
  },
  "contact" : "Kory Petrovic",
  "operation_months_code" : "M",
  "city" : "Bronx",
  "address_line_1" : "E. 169th St. and Boston Rd.",
  "county" : "Bronx",
  "fmnp" : "Y",
  "operation_season" : "July 9 - November 26",
  "longitude" : "-73.90022",
  "latitude" : "40.83121",
  "snap_status" : "Y"
}
, {
  "market_name" : "Lincoln Hospital Greenmarket",
  "zip" : "10451",
  "phone" : "2127887476",
  "operation_hours" : "Tue/Fri  8am-3pm",
  "location" : "149th St. btwn Park & Morris Aves.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.92274",
    "latitude" : "40.81739"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "M",
  "city" : "Bronx",
  "address_line_1" : "East 149th St and Morris Ave",
  "county" : "Bronx",
  "fmnp" : "Y",
  "operation_season" : "June 27 - November 25",
  "longitude" : "-73.92274",
  "latitude" : "40.81739",
  "snap_status" : "Y"
}
, {
  "market_name" : "Marble Hill Youthmarket",
  "zip" : "10463",
  "phone" : "2127883818",
  "operation_hours" : "Thursday  2pm-6pm",
  "location" : "225th St. & Broadwaybtwn Marshalls & Applebees, Bronx",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.90961",
    "latitude" : "40.8746"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org/youthmarket"
  },
  "contact" : "Jackie Bach",
  "operation_months_code" : "M",
  "city" : "Bronx",
  "address_line_1" : "W. 225th and Broadway & Exterior",
  "county" : "Bronx",
  "fmnp" : "Y",
  "operation_season" : "July 10 - November 20",
  "longitude" : "-73.90961",
  "latitude" : "40.8746",
  "snap_status" : "Y"
}
, {
  "market_name" : "Montefiore Youthmarket",
  "zip" : "10467",
  "phone" : "2127883818",
  "operation_hours" : "Thursday  1pm-7pm",
  "location" : "E 210th St. & Bainbridge Ave.,Bronx",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.879",
    "latitude" : "40.87958"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org/youthmarket"
  },
  "contact" : "Jackie Bach",
  "operation_months_code" : "M",
  "city" : "Bronx",
  "address_line_1" : "East 210th Street and Bainbridge Avenue",
  "county" : "Bronx",
  "fmnp" : "Y",
  "operation_season" : "July 10 - November 20",
  "longitude" : "-73.879",
  "latitude" : "40.87958",
  "snap_status" : "Y"
}
, {
  "market_name" : "Mott Haven Farmers' Market",
  "zip" : "10454",
  "phone" : "7189241143",
  "operation_hours" : "Wednesday 10am-4pm",
  "location" : "Padre Plaza Community Garden139th St. & St. Anne's Ave., Bronx",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.91697",
    "latitude" : "40.80782"
  },
  "state" : "NY",
  "contact" : "Sheila Young",
  "operation_months_code" : "M",
  "city" : "Bronx",
  "address_line_1" : "E. 139th & 283 St. Saint Anns Ave",
  "county" : "Bronx",
  "fmnp" : "Y",
  "operation_season" : "July 9 - November 12",
  "longitude" : "-73.91697",
  "latitude" : "40.80782",
  "snap_status" : "Y"
}
, {
  "market_name" : "New York Botanical Garden Greenmarket",
  "zip" : "10458",
  "phone" : "2127887476",
  "operation_hours" : "Wednesday  9am-3pm",
  "location" : "Mosholu Gate on Southern Blvd, btwn Mosholu Pkwy& Bedford Park Blvd",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.87952",
    "latitude" : "40.86776"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "M",
  "city" : "Bronx",
  "address_line_1" : "Southern Blvd between Mosholu Pkwy & Bedford Park Blvd",
  "county" : "Bronx",
  "fmnp" : "Y",
  "operation_season" : "June 18 - November 26",
  "longitude" : "-73.87952",
  "latitude" : "40.86776",
  "snap_status" : "Y"
}
, {
  "market_name" : "Northeast Bronx Farmers' Market",
  "zip" : "10469",
  "phone" : "7188629687",
  "operation_hours" : "Thu/Fri/Sat  8am-4pm",
  "location" : "Haffen Park, Hammersley & Wickham Aves.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.83912",
    "latitude" : "40.87268"
  },
  "state" : "NY",
  "contact" : "Nate Dukes",
  "operation_months_code" : "M",
  "city" : "Bronx",
  "address_line_1" : "Hammersley Ave and Wickham Ave",
  "county" : "Bronx",
  "fmnp" : "N",
  "operation_season" : "July - November",
  "longitude" : "-73.83912",
  "latitude" : "40.87268",
  "snap_status" : "N"
}
, {
  "market_name" : "Parkchester/ Virginia Park Greenmarket",
  "zip" : "10472",
  "phone" : "2127887476",
  "operation_hours" : "Friday  8am-4pm",
  "location" : "Westchester Ave. & White Plains Rd.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.86277",
    "latitude" : "40.83301"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "M",
  "city" : "Bronx",
  "address_line_1" : "Westchester Ave and White Plains Rd",
  "county" : "Bronx",
  "fmnp" : "Y",
  "operation_season" : "June 13 - November 21",
  "longitude" : "-73.86277",
  "latitude" : "40.83301",
  "snap_status" : "Y"
}
, {
  "market_name" : "Poe Park Greenmarket",
  "zip" : "10458",
  "phone" : "2127887476",
  "operation_hours" : "Tuesday  8am-3pm",
  "location" : "192nd St. & Grand Concourse,btwn Grand Concourse & Valentine Ave.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.89572",
    "latitude" : "40.86423"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "M",
  "city" : "Bronx",
  "address_line_1" : "Grand Concourse and Valentine E.192nd St",
  "county" : "Bronx",
  "fmnp" : "Y",
  "operation_season" : "July 1 - November 25",
  "longitude" : "-73.89572",
  "latitude" : "40.86423",
  "snap_status" : "Y"
}
, {
  "market_name" : "Riverdale Neighborhood House Youthmarket",
  "zip" : "10466",
  "phone" : "2127883818",
  "operation_hours" : "Thursday  3pm-7pm",
  "location" : "W. 256th St. & Mosholu, RiverdaleNeighborhood House Property",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.90313",
    "latitude" : "40.90388"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org/youthmarket"
  },
  "contact" : "Jackie Bach",
  "operation_months_code" : "M",
  "city" : "Bronx",
  "address_line_1" : "W 256th St. & Mosholu",
  "county" : "Bronx",
  "fmnp" : "Y",
  "operation_season" : "July 10 - November 20",
  "longitude" : "-73.90313",
  "latitude" : "40.90388",
  "snap_status" : "Y"
}
, {
  "market_name" : "Riverdale Y Sunday Farmers' Market",
  "zip" : "10463",
  "phone" : "7185488200",
  "operation_hours" : "Sunday  9am-2pm",
  "location" : "Independence Ave,W. 237th St., Bronx",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.91311",
    "latitude" : "40.88836"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.riverdaley.org/sundaymarket"
  },
  "contact" : "Phyllis Steele",
  "operation_months_code" : "P/M",
  "city" : "Bronx",
  "address_line_1" : "Independence Ave and W 237 Street",
  "county" : "Bronx",
  "fmnp" : "Y",
  "operation_season" : "May 11 - November 16",
  "longitude" : "-73.91311",
  "latitude" : "40.88836",
  "snap_status" : "N"
}
, {
  "market_name" : "South Bronx Farmers' Market",
  "zip" : "10454",
  "phone" : "9176798654",
  "operation_hours" : "Saturday  10am-4pm",
  "location" : "138th Street, Mott Haven, Bronxbtwn Willis & Alexander Aves.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.92297",
    "latitude" : "40.80913"
  },
  "state" : "NY",
  "contact" : "Rose Placencia-Knepper",
  "operation_months_code" : "M",
  "city" : "Bronx",
  "address_line_1" : "330-398 East 138th Street",
  "county" : "Bronx",
  "fmnp" : "Y",
  "operation_season" : "June 14 - November 22",
  "longitude" : "-73.92297",
  "latitude" : "40.80913",
  "snap_status" : "N"
}
, {
  "market_name" : "Wholesale Greenmarket",
  "zip" : "10474",
  "phone" : "2127887476",
  "operation_hours" : "Tues to Sat, 2am - 8am",
  "location" : "Halleck Street and Viele AveAuxilary Lot",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.87989",
    "latitude" : "40.80752"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "M",
  "city" : "Bronx",
  "address_line_1" : "Halleck Street and Viele Avenue",
  "county" : "Bronx",
  "fmnp" : "Y",
  "operation_season" : "May - November",
  "longitude" : "-73.87989",
  "latitude" : "40.80752",
  "snap_status" : "N"
}
, {
  "market_name" : "Binghamton/Otsiningo Park Farmers' Market",
  "zip" : "13905",
  "phone" : "6078623599",
  "operation_hours" : "Saturday  9am-1pm",
  "location" : "Otsiningo Park, Upper Front St., Binghamton 13905",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.90461",
    "latitude" : "42.12016"
  },
  "state" : "NY",
  "contact" : "Peter D. Reynolds",
  "operation_months_code" : "P/M",
  "city" : "Binghamton",
  "address_line_1" : "Bevier St and Otsiningo Park,",
  "county" : "Broome",
  "fmnp" : "Y",
  "operation_season" : "May 3 - October 25",
  "longitude" : "-75.90461",
  "latitude" : "42.12016",
  "snap_status" : "Y"
}
, {
  "market_name" : "Binghamton/Otsiningo WINTER Farmers' Market",
  "zip" : "13901",
  "phone" : "6072356631",
  "operation_hours" : "1st & 3rd Sat. 9pm to 12 Noon",
  "location" : "Metro Center Lobby, 49 Court St.Pyramid Brokerage",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.91211",
    "latitude" : "42.09938"
  },
  "state" : "NY",
  "contact" : "Lauren Tonti",
  "operation_months_code" : "X/W/P",
  "city" : "Binghamton",
  "address_line_1" : "49 Court St.",
  "county" : "Broome",
  "fmnp" : "N",
  "operation_season" : "November 8 - April 18",
  "longitude" : "-75.91211",
  "latitude" : "42.09938",
  "snap_status" : "N"
}
, {
  "market_name" : "Downtown Binghamton Farmers' Market",
  "zip" : "13901",
  "phone" : "6072069471",
  "operation_hours" : "Tue/Fri  9am-2pm",
  "location" : "Court House Square, 98 Collier St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.91161",
    "latitude" : "42.09866"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.binghamtonfarmersmarket.com"
  },
  "contact" : "Eric Denk",
  "operation_months_code" : "M",
  "city" : "Binghamton",
  "address_line_1" : "98 Collier St",
  "county" : "Broome",
  "fmnp" : "Y",
  "operation_season" : "June 6 - October 31",
  "longitude" : "-75.91161",
  "latitude" : "42.09866",
  "snap_status" : "Y"
}
, {
  "market_name" : "Vestal Farmers' Market",
  "zip" : "13850",
  "phone" : "6076254141",
  "operation_hours" : "Sat/Wed  9am-1pm",
  "location" : "Library parking lot, near museum320 Vestal Pkwy E (Rt. 434)",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.05903",
    "latitude" : "42.08533"
  },
  "state" : "NY",
  "contact" : "Lisa Bloodnick",
  "operation_months_code" : "P/M",
  "city" : "Vestal",
  "address_line_1" : "320 Vestal Pkwy",
  "county" : "Broome",
  "fmnp" : "Y",
  "operation_season" : "May 24 - November 26",
  "longitude" : "-76.05903",
  "latitude" : "42.08533",
  "snap_status" : "N"
}
, {
  "market_name" : "Franklinville Farmers' Market",
  "zip" : "14737",
  "phone" : "7169423710",
  "operation_hours" : "Wednesday  3pm-6pm",
  "location" : "13 Park Square (Route 16)",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-78.45771",
    "latitude" : "42.33772"
  },
  "state" : "NY",
  "contact" : "Phyllis Couture",
  "operation_months_code" : "P/M",
  "city" : "Franklinville",
  "address_line_1" : "13 Park Sq",
  "county" : "Cattaraugus",
  "fmnp" : "Y",
  "operation_season" : "May 21 - October 29",
  "longitude" : "-78.45771",
  "latitude" : "42.33772",
  "snap_status" : "Y"
}
, {
  "market_name" : "Olean Southern Tier Farmers' Market",
  "zip" : "14760",
  "phone" : "7169423710",
  "operation_hours" : "Friday  2pm-6pm",
  "location" : "Tractor Supply Store,1900 Constitution Ave., Olean",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-78.45503",
    "latitude" : "42.08294"
  },
  "state" : "NY",
  "contact" : "Phyllis Couture",
  "operation_months_code" : "P/M",
  "city" : "Olean",
  "address_line_1" : "1900 Constitution Ave",
  "county" : "Cattaraugus",
  "fmnp" : "Y",
  "operation_season" : "May 16 - October 31",
  "longitude" : "-78.45503",
  "latitude" : "42.08294",
  "snap_status" : "Y"
}
, {
  "market_name" : "R.E.A.P. Olean Farmers' Market",
  "zip" : "14760",
  "phone" : "7166769181",
  "operation_hours" : "Saturday  8am-1pm",
  "location" : "Jamestown Community College,Olean Campus parking lot, 260 N Union St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-78.42744",
    "latitude" : "42.08078"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.reapfarmersmarket.com"
  },
  "contact" : "Mark Schindlbeck",
  "operation_months_code" : "P/M",
  "city" : "Olean",
  "address_line_1" : "260 North Union Street",
  "county" : "Cattaraugus",
  "fmnp" : "Y",
  "operation_season" : "May 17 - October 25",
  "longitude" : "-78.42744",
  "latitude" : "42.08078",
  "snap_status" : "Y"
}
, {
  "market_name" : "Salamanca Farmers' Market",
  "zip" : "14779",
  "phone" : "7169423710",
  "operation_hours" : "Tuesday  11am-5pm",
  "location" : "12 Park Ave., Jefferson Park",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-78.71739",
    "latitude" : "42.15497"
  },
  "state" : "NY",
  "contact" : "Phyllis Couture",
  "operation_months_code" : "P/M",
  "city" : "Salamanca",
  "address_line_1" : "12 Park Ave",
  "county" : "Cattaraugus",
  "fmnp" : "Y",
  "operation_season" : "May 20 - October 28",
  "longitude" : "-78.71739",
  "latitude" : "42.15497",
  "snap_status" : "Y"
}
, {
  "market_name" : "The Master's Plan Caf? Farmers' Market",
  "zip" : "14041",
  "phone" : "7167259229",
  "operation_hours" : "Sat  9am-1pm    Tue  10am-3pm",
  "location" : "9586 Railroad St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-78.97532",
    "latitude" : "42.41871"
  },
  "state" : "NY",
  "contact" : "Angie Mardino-Miller",
  "operation_months_code" : "M",
  "city" : "Dayton",
  "address_line_1" : "9586 Railroad Street",
  "county" : "Cattaraugus",
  "fmnp" : "Y",
  "operation_season" : "June 14 - November 15",
  "longitude" : "-78.97532",
  "latitude" : "42.41871",
  "snap_status" : "N"
}
, {
  "market_name" : "Auburn Farmers' Market",
  "zip" : "13021",
  "phone" : "3152556871",
  "operation_hours" : "Tue/Thu/Sat  7am-2pm",
  "location" : "96 State StreetCurley's Restaurant Pkg Lot",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.56977",
    "latitude" : "42.93406"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.auburnfarmerscoopmarketinc.com"
  },
  "contact" : "Mark Soper",
  "operation_months_code" : "M",
  "city" : "Auburn",
  "address_line_1" : "96 State Street",
  "county" : "Cayuga",
  "fmnp" : "Y",
  "operation_season" : "June 3 - October 30",
  "longitude" : "-76.56977",
  "latitude" : "42.93406",
  "snap_status" : "Y"
}
, {
  "market_name" : "Moravia Farmers' Market",
  "zip" : "13118",
  "phone" : "3154963545",
  "operation_hours" : "Thursday  10am-5pm",
  "location" : "Kinney Drug Store parking lot, 130 Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.42079",
    "latitude" : "42.71209"
  },
  "state" : "NY",
  "contact" : "Tammy Riker",
  "operation_months_code" : "M",
  "city" : "Moravia",
  "address_line_1" : "130 Main St",
  "county" : "Cayuga",
  "fmnp" : "Y",
  "operation_season" : "June 12 - October 30",
  "longitude" : "-76.42079",
  "latitude" : "42.71209",
  "snap_status" : "N"
}
, {
  "market_name" : "Downtown Jamestown Farmers' Market",
  "zip" : "14701",
  "phone" : "7166642477",
  "operation_hours" : "Thursday  12 Noon-6pm",
  "location" : "Cherry St., btwn 2nd & 3rd Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-79.24315",
    "latitude" : "42.09602"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.jamestownrenaissance.org"
  },
  "contact" : "Christina King",
  "operation_months_code" : "M",
  "city" : "Jamestown",
  "address_line_1" : "119 West 3rd St",
  "county" : "Chautauqua",
  "fmnp" : "Y",
  "operation_season" : "June 5 - October 30",
  "longitude" : "-79.24315",
  "latitude" : "42.09602",
  "snap_status" : "Y"
}
, {
  "market_name" : "Downtown Jamestown WINTER Farmers' Market",
  "zip" : "14701",
  "phone" : "7166642477",
  "operation_hours" : "Thursday 12am - 6pmMonthly",
  "location" : "Renaissance Center119-121 W Third Street",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-79.24315",
    "latitude" : "42.09602"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.jamestownrenaissance.org"
  },
  "contact" : "Tiffani Conti",
  "operation_months_code" : "X/W",
  "city" : "Jamestown",
  "address_line_1" : "119 West Third Street",
  "county" : "Chautauqua",
  "fmnp" : "N",
  "operation_season" : "November 7 - February 27",
  "longitude" : "-79.24315",
  "latitude" : "42.09602",
  "snap_status" : "N"
}
, {
  "market_name" : "Falconer Farmers' Market",
  "zip" : "14733",
  "phone" : "7166654400",
  "operation_hours" : "Saturday  9am-2pm",
  "location" : "Davis Park,W. Main & Homestead Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-79.19952",
    "latitude" : "42.11763"
  },
  "state" : "NY",
  "contact" : "DeEtte Dispenza",
  "operation_months_code" : "M",
  "city" : "Falconer",
  "address_line_1" : "W Main St and Homestead St",
  "county" : "Chautauqua",
  "fmnp" : "Y",
  "operation_season" : "June 7 - October 25",
  "longitude" : "-79.19952",
  "latitude" : "42.11763",
  "snap_status" : "N"
}
, {
  "market_name" : "Fredonia WINTER Farmers' Market",
  "zip" : "14063",
  "phone" : "7166792302",
  "operation_hours" : "Sat 10am - 1pm",
  "location" : "321 East Main St. (Rt 20)Masonic Forest Lodge",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-79.33227",
    "latitude" : "42.44071"
  },
  "state" : "NY",
  "contact" : "Barbara Sam",
  "operation_months_code" : "X/W/P",
  "city" : "Fredonia",
  "address_line_1" : "321 East Main St. (Rte 20)",
  "county" : "Chautauqua",
  "fmnp" : "N",
  "operation_season" : "November - May",
  "longitude" : "-79.33227",
  "latitude" : "42.44071",
  "snap_status" : "Y"
}
, {
  "market_name" : "Lakewood Farmers' Market",
  "zip" : "14750",
  "phone" : "7167638557",
  "operation_hours" : "Tuesday  1pm-5pm",
  "location" : "Chautauqua Ave.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-79.3262",
    "latitude" : "42.10189"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.lakewoodny.com"
  },
  "contact" : "Joe Johnson",
  "operation_months_code" : "M",
  "city" : "Lakewood",
  "address_line_1" : "Chautauqua Ave and West Second St",
  "county" : "Chautauqua",
  "fmnp" : "Y",
  "operation_season" : "June 3 - August 26",
  "longitude" : "-79.3262",
  "latitude" : "42.10189",
  "snap_status" : "Y"
}
, {
  "market_name" : "Westfield Farmers' Market",
  "zip" : "14787",
  "phone" : "7166401166",
  "operation_hours" : "Saturday  9am-2pm",
  "location" : "Rt 20 & Rt 394",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-79.57812",
    "latitude" : "42.32203"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.westfieldny.com/farmersmarket"
  },
  "contact" : "Arianne Correll",
  "operation_months_code" : "P/M",
  "city" : "Westfield",
  "address_line_1" : "Main St and Portage St",
  "county" : "Chautauqua",
  "fmnp" : "Y",
  "operation_season" : "May 31 - September 27",
  "longitude" : "-79.57812",
  "latitude" : "42.32203",
  "snap_status" : "N"
}
, {
  "market_name" : "Elmira Eastside Farmers' Market",
  "zip" : "14901",
  "phone" : "6077344453",
  "operation_hours" : "Friday  3pm-6pm",
  "location" : "West Lawn of Holiday Inn,760 E. Water St., Elmira",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.7922",
    "latitude" : "42.08905"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.ccechemung.org"
  },
  "contact" : "Andrew Fagan",
  "operation_months_code" : "M",
  "city" : "Elmira",
  "address_line_1" : "760 East Water St",
  "county" : "Chemung",
  "fmnp" : "Y",
  "operation_season" : "June 27 - October 17",
  "longitude" : "-76.7922",
  "latitude" : "42.08905",
  "snap_status" : "Y"
}
, {
  "market_name" : "Elmira Grove Park Farmers' Market",
  "zip" : "14901",
  "phone" : "6075464535",
  "operation_hours" : "Monday  3pm-6pm",
  "location" : "4th St. & Walnut Ave.,Grove Park",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.82013",
    "latitude" : "42.0921"
  },
  "state" : "NY",
  "contact" : "Liz Martin",
  "operation_months_code" : "M",
  "city" : "Elmira",
  "address_line_1" : "Walnut Ave and West 4th St",
  "county" : "Chemung",
  "fmnp" : "Y",
  "operation_season" : "June 2 - October 27",
  "longitude" : "-76.82013",
  "latitude" : "42.0921",
  "snap_status" : "Y"
}
, {
  "market_name" : "Elmira Wisner Park Farmers' Market",
  "zip" : "14901",
  "phone" : "6077340341",
  "operation_hours" : "Thursday  10am-2pm",
  "location" : "Wisner Park, Church & Main Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.80826",
    "latitude" : "42.08984"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.wisnermarket.org"
  },
  "contact" : "Jennifer Herrick",
  "operation_months_code" : "M",
  "city" : "Elmira",
  "address_line_1" : "North Main St and West Church St",
  "county" : "Chemung",
  "fmnp" : "Y",
  "operation_season" : "May 29 - September 25",
  "longitude" : "-76.80826",
  "latitude" : "42.08984",
  "snap_status" : "Y"
}
, {
  "market_name" : "Horseheads/Teal Park Farmers' Market",
  "zip" : "14845",
  "phone" : "6077397698",
  "operation_hours" : "Saturday  10am-1pm",
  "location" : "Teal Park, HorseheadsCorner S. Main and Steuben Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.81919",
    "latitude" : "42.16417"
  },
  "state" : "NY",
  "contact" : "Debbie Gessick",
  "operation_months_code" : "M",
  "city" : "Horseheads",
  "address_line_1" : "Corner S. Main and Steuben St.",
  "county" : "Chemung",
  "fmnp" : "Y",
  "operation_season" : "June 28 - September 27",
  "longitude" : "-76.81919",
  "latitude" : "42.16417",
  "snap_status" : "N"
}
, {
  "market_name" : "Bull Thistle Farmers' Market",
  "zip" : "13815",
  "phone" : "6073361811",
  "operation_hours" : "Saturday  9am-1pm",
  "location" : "East Park,Norwich",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.5238",
    "latitude" : "42.53181"
  },
  "state" : "NY",
  "contact" : "Ann Coe",
  "operation_months_code" : "P/M",
  "city" : "Norwich",
  "address_line_1" : "1 East Park Place",
  "county" : "Chenango",
  "fmnp" : "Y",
  "operation_season" : "May 24 - October 25",
  "longitude" : "-75.5238",
  "latitude" : "42.53181",
  "snap_status" : "N"
}
, {
  "market_name" : "Coventry Farmers' Market",
  "zip" : "13778",
  "phone" : "6076567319",
  "operation_hours" : "Sun  12 Noon-6pm    Thu  2:30pm-6pm",
  "location" : "Coventry Fire Station, North Rd.Town Hall NYS Route 235",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.63847",
    "latitude" : "42.31667"
  },
  "state" : "NY",
  "contact" : "Ellen Evans",
  "operation_months_code" : "M",
  "city" : "Coventry",
  "address_line_1" : "North Rd and Volunteer Ln",
  "county" : "Chenango",
  "fmnp" : "Y",
  "operation_season" : "June 1 - November 6",
  "longitude" : "-75.63847",
  "latitude" : "42.31667",
  "snap_status" : "N"
}
, {
  "market_name" : "Chateaugay Lake Farmers' Market",
  "zip" : "12955",
  "phone" : "5187721064",
  "operation_hours" : "Saturday  10am-2pm",
  "location" : "Hollywood Inn, Rt 374, lake narrows, west of Merrill",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.98214",
    "latitude" : "44.78075"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.adirondackfarmersmarket.com"
  },
  "contact" : "Vicky Rayl",
  "operation_months_code" : "M",
  "city" : "Merrill",
  "address_line_1" : "4939 State Route 374",
  "county" : "Clinton",
  "fmnp" : "Y",
  "operation_season" : "June 21 - September 6",
  "longitude" : "-73.98214",
  "latitude" : "44.78075",
  "snap_status" : "N"
}
, {
  "market_name" : "Keeseville Farmers Market",
  "zip" : "12944",
  "phone" : "5187721064",
  "operation_hours" : "Wednesday  10am-2pm",
  "location" : "Riverside Park,behind Library on Front St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.48061",
    "latitude" : "44.50436"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.adirondackfarmersmarket.com"
  },
  "contact" : "Vicky Rayl",
  "operation_months_code" : "M",
  "city" : "Keeseville",
  "address_line_1" : "1721 Front St",
  "county" : "Clinton",
  "fmnp" : "Y",
  "operation_season" : "June 11 - August 27",
  "longitude" : "-73.48061",
  "latitude" : "44.50436",
  "snap_status" : "N"
}
, {
  "market_name" : "Plattsburgh Farmers & Crafters Market",
  "zip" : "12901",
  "phone" : "5183100719",
  "operation_hours" : "Sat  9am-2pm    Wed  10am-2pm",
  "location" : "City parking lotDurkee & Broad Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.45226",
    "latitude" : "44.69535"
  },
  "state" : "NY",
  "contact" : "Patricia Parker",
  "operation_months_code" : "P/M",
  "city" : "Plattsburgh",
  "address_line_1" : "Broad St and Durkee St",
  "county" : "Clinton",
  "fmnp" : "Y",
  "operation_season" : "May 10 - October 11",
  "longitude" : "-73.45226",
  "latitude" : "44.69535",
  "snap_status" : "N"
}
, {
  "market_name" : "Plattsburgh WINTER Farmers' Market",
  "zip" : "12903",
  "phone" : "5186437822",
  "operation_hours" : "Saturday 10am - 1pmEvery Saturday, Oct - Dec1st & 3rd Saturday, Jan - May",
  "location" : "Plattsburgh City Recreation Center, Old Base Oval",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.44546",
    "latitude" : "44.68659"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.plattsburghfarmersmarket.com"
  },
  "contact" : "Beth Spaugh",
  "operation_months_code" : "X/W/P",
  "city" : "Plattsburgh",
  "address_line_1" : "52 U.S. Oval",
  "county" : "Clinton",
  "fmnp" : "Y",
  "operation_season" : "October 18 - May 2",
  "longitude" : "-73.44546",
  "latitude" : "44.68659",
  "snap_status" : "N"
}
, {
  "market_name" : "Copake Hillsdale Farmers' Market",
  "zip" : "12529",
  "phone" : "5183251430",
  "operation_hours" : "Saturday  9am-1pm",
  "location" : "Roeliff Jansen Park,9140 Route 22",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.51686",
    "latitude" : "42.16548"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.facebook.com/copakehillsdalefarmersmarket"
  },
  "contact" : "Diane Creed",
  "operation_months_code" : "P/M",
  "city" : "Hillsdale",
  "address_line_1" : "9140 Route 22",
  "county" : "Columbia",
  "fmnp" : "Y",
  "operation_season" : "May 31 - October 25",
  "longitude" : "-73.51686",
  "latitude" : "42.16548",
  "snap_status" : "N"
}
, {
  "market_name" : "Hudson Farmers' Market",
  "zip" : "12534",
  "phone" : "5188287217",
  "operation_hours" : "Saturday  9am-1pm",
  "location" : "DMV parking lot, Sixth & Columbia Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.78369",
    "latitude" : "42.24866"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.hudsonfarmersmarketny.com"
  },
  "contact" : "Eugene Shetsky",
  "operation_months_code" : "P/M",
  "city" : "Hudson",
  "address_line_1" : "Columbia St and North 6th St",
  "county" : "Columbia",
  "fmnp" : "Y",
  "operation_season" : "May 3 - November 22",
  "longitude" : "-73.78369",
  "latitude" : "42.24866",
  "snap_status" : "Y"
}
, {
  "market_name" : "Kinderhook Farmers' Market",
  "zip" : "12106",
  "phone" : "5187559293",
  "operation_hours" : "Saturday  8:30am-12:30pm",
  "location" : "Village Green, Center of Village",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.69817",
    "latitude" : "42.3954"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.kinderhookfarmersmarket.com"
  },
  "contact" : "Kim Voltz",
  "operation_months_code" : "P/M",
  "city" : "Kinderhook",
  "address_line_1" : "US Route 9 and Hudson St",
  "county" : "Columbia",
  "fmnp" : "Y",
  "operation_season" : "May 3 - October 11",
  "longitude" : "-73.69817",
  "latitude" : "42.3954",
  "snap_status" : "N"
}
, {
  "market_name" : "New Lebanon Country Farmers' Market",
  "zip" : "12125",
  "phone" : "5185051535",
  "operation_hours" : "Sunday  10am-2pm",
  "location" : "36 Old Route 20,New Lebanon",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.56138",
    "latitude" : "42.50837"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.facebook.com/newlebanoncountrymarket"
  },
  "contact" : "Tistrya Houghtling",
  "operation_months_code" : "M",
  "city" : "New Lebanon",
  "address_line_1" : "36 Old Route 20, East Nassau, NY",
  "county" : "Columbia",
  "fmnp" : "Y",
  "operation_season" : "June 1 - September 28",
  "longitude" : "-73.56138",
  "latitude" : "42.50837",
  "snap_status" : "Y"
}
, {
  "market_name" : "Philmont Farmers' Market",
  "zip" : "12565",
  "phone" : "5186727556",
  "operation_hours" : "Sunday  10am-2pm",
  "location" : "116 Main Street",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.65097",
    "latitude" : "42.24868"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.pbinc.org/revitalization"
  },
  "contact" : "Sally Baker",
  "operation_months_code" : "P/M",
  "city" : "Philmont",
  "address_line_1" : "116 Main St",
  "county" : "Columbia",
  "fmnp" : "Y",
  "operation_season" : "May 25 - October 12",
  "longitude" : "-73.65097",
  "latitude" : "42.24868",
  "snap_status" : "Y"
}
, {
  "market_name" : "Cincinnatus Farmers' Market",
  "zip" : "13040",
  "phone" : "6078633828",
  "operation_hours" : "Saturday  9am-12 Noon",
  "location" : "Cortland-Chenango Rural Services,2704 Lower Cincinnatus Rd.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.8959",
    "latitude" : "42.54094"
  },
  "state" : "NY",
  "contact" : "Sister Kathleen Heffron",
  "operation_months_code" : "P/M",
  "city" : "Cincinnatus",
  "address_line_1" : "2704 Lower Cincinnatus Rd",
  "county" : "Cortland",
  "fmnp" : "Y",
  "operation_season" : "May 10 - November 1",
  "longitude" : "-75.8959",
  "latitude" : "42.54094",
  "snap_status" : "N"
}
, {
  "market_name" : "City of Cortland Farmers' Market",
  "zip" : "13045",
  "phone" : "6077493424",
  "operation_hours" : "Tue/Sat  8am-2pm",
  "location" : "Main St., btwn Court & Orchard Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.18044",
    "latitude" : "42.60028"
  },
  "state" : "NY",
  "contact" : "Joan Franklin",
  "operation_months_code" : "M",
  "city" : "Cortland",
  "address_line_1" : "Main St and Orchard St",
  "county" : "Cortland",
  "fmnp" : "Y",
  "operation_season" : "June 3 - October 28",
  "longitude" : "-76.18044",
  "latitude" : "42.60028",
  "snap_status" : "Y"
}
, {
  "market_name" : "Homer Farmers' Market",
  "zip" : "13077",
  "phone" : "6075915979",
  "operation_hours" : "Sat  9am-1pm    Wed  4:30pm-7pm",
  "location" : "Homer Village GreenBtwn Cayuga & Park Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.17869",
    "latitude" : "42.63595"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.homerfarmersmarket.com"
  },
  "contact" : "Tina Minervini",
  "operation_months_code" : "P/M",
  "city" : "Homer",
  "address_line_1" : "South Main St and Central Park Pl",
  "county" : "Cortland",
  "fmnp" : "Y",
  "operation_season" : "May 10 - October 25",
  "longitude" : "-76.17869",
  "latitude" : "42.63595",
  "snap_status" : "Y"
}
, {
  "market_name" : "Deposit Farmers' Market",
  "zip" : "13754",
  "phone" : "6078656531",
  "operation_hours" : "Thursday  10am-2pm",
  "location" : "First United Methodist ChurchWIC Clinic, 107 Second St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.4249",
    "latitude" : "42.06233"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.ccedelaware.org"
  },
  "contact" : "Jeanne Darling",
  "operation_months_code" : "M",
  "city" : "Deposit",
  "address_line_1" : "107 Second St",
  "county" : "Delaware",
  "fmnp" : "Y",
  "operation_season" : "Aug 21 & Sep 18",
  "longitude" : "-75.4249",
  "latitude" : "42.06233",
  "snap_status" : "N"
}
, {
  "market_name" : "Pakatakan Farmers' Market",
  "zip" : "12455",
  "phone" : "8452544290",
  "operation_hours" : "Saturday  9am-2pm",
  "location" : "Round Barn of Halcottville, 46696 State Hwy 30btwn Margaretville & Roxbury",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.64738",
    "latitude" : "42.14907"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://roundbarnfarmersmkt.org"
  },
  "contact" : "Georgianna Fairlie",
  "operation_months_code" : "P/M",
  "city" : "Margaretville",
  "address_line_1" : "46696 State Route 30",
  "county" : "Delaware",
  "fmnp" : "Y",
  "operation_season" : "May 17 - October 11",
  "longitude" : "-74.64738",
  "latitude" : "42.14907",
  "snap_status" : "N"
}
, {
  "market_name" : "Sidney Farmers' Market",
  "zip" : "13838",
  "phone" : "6078656531",
  "operation_hours" : "Tuesday  10am-2pm",
  "location" : "Video Entertainment Plus parking lot,89 Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.39045",
    "latitude" : "42.31426"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.ccedelaware.org"
  },
  "contact" : "Jeanne Darling",
  "operation_months_code" : "M",
  "city" : "Sidney",
  "address_line_1" : "89 Main St",
  "county" : "Delaware",
  "fmnp" : "Y",
  "operation_season" : "July 1 - September 30",
  "longitude" : "-75.39045",
  "latitude" : "42.31426",
  "snap_status" : "N"
}
, {
  "market_name" : "Walton Farmers' Market",
  "zip" : "13856",
  "phone" : "6078656531",
  "operation_hours" : "Wednesday  10am-2pm",
  "location" : "UHS Delaware Valley Hospital,2 Titus Place",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.12792",
    "latitude" : "42.16464"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.ccedelaware.org"
  },
  "contact" : "Jeanne Darling",
  "operation_months_code" : "M",
  "city" : "Walton",
  "address_line_1" : "2 Titus Place",
  "county" : "Delaware",
  "fmnp" : "Y",
  "operation_season" : "1st & 3rd Wednesdays - July 2 - October 15",
  "longitude" : "-75.12792",
  "latitude" : "42.16464",
  "snap_status" : "N"
}
, {
  "market_name" : "Amenia WINTER Farmers' Market",
  "zip" : "12501",
  "phone" : "8453734411",
  "operation_hours" : "Saturday 10am - 2pm Every Saturday, Nov-Dec 1st &3rd Saturday, Jan-Apr",
  "location" : "Gymnasium, Town Hall",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.55493",
    "latitude" : "41.85134"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.ameniafarmersmarket.com"
  },
  "contact" : "Sophie Purdy Meili",
  "operation_months_code" : "X/W/P",
  "city" : "Amenia",
  "address_line_1" : "4988 Route 22",
  "county" : "Dutchess",
  "fmnp" : "N",
  "operation_season" : "November - April",
  "longitude" : "-73.55493",
  "latitude" : "41.85134",
  "snap_status" : "N"
}
, {
  "market_name" : "Arlington Farmers' Market",
  "zip" : "12603",
  "phone" : "8454712863",
  "operation_hours" : "Thursday  3pm-7pm",
  "location" : "Vassar College Alumni Lawn, 123 Raymond Ave., Poughkeepsie",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.89636",
    "latitude" : "41.68187"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.arlingtonhasit.org"
  },
  "contact" : "Bob Legacy",
  "operation_months_code" : "M",
  "city" : "Poughkeepsie",
  "address_line_1" : "123 Raymond Ave",
  "county" : "Dutchess",
  "fmnp" : "Y",
  "operation_season" : "June 5 - October 30",
  "longitude" : "-73.89636",
  "latitude" : "41.68187",
  "snap_status" : "N"
}
, {
  "market_name" : "Beacon Farmers' Market",
  "zip" : "12508",
  "phone" : "8452349325",
  "operation_hours" : "Sunday  11am-3pm",
  "location" : "Riverside, pier across from train stationBy Long Dock Park, near Red Barn(Indoor - Scenic Hudson River Center)",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.9854",
    "latitude" : "41.50576"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.thebeaconfarmersmarket.com"
  },
  "contact" : "Dana O'Malley",
  "operation_months_code" : "YR",
  "city" : "Beacon",
  "address_line_1" : "55 Red Flynn Dr",
  "county" : "Dutchess",
  "fmnp" : "N",
  "operation_season" : "Year-round",
  "longitude" : "-73.9854",
  "latitude" : "41.50576",
  "snap_status" : "Y"
}
, {
  "market_name" : "Hyde Park Farmers' Market",
  "zip" : "12538",
  "phone" : "8452299336",
  "operation_hours" : "Saturday  9am-2pm",
  "location" : "Hyde Park Town Hall,4383 Route 9",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.93645",
    "latitude" : "41.79069"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.hydeparkfarmersmarket.org"
  },
  "contact" : "Dot Chenevert",
  "operation_months_code" : "M",
  "city" : "Hyde Park",
  "address_line_1" : "4383 Route 9",
  "county" : "Dutchess",
  "fmnp" : "N",
  "operation_season" : "June 6 - October 25",
  "longitude" : "-73.93645",
  "latitude" : "41.79069",
  "snap_status" : "N"
}
, {
  "market_name" : "Millerton WINTER Farmers' Market",
  "zip" : "12546",
  "phone" : "5187894259",
  "operation_hours" : "Saturday 10am - 2pmEvery Saturday, Nov - Dec2nd & 4th Saturday, Jan - Apr",
  "location" : "North East Community Ctr51 South Center Street",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.51083",
    "latitude" : "41.95288"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.neccmillerton.org"
  },
  "contact" : "Betsey McCall",
  "operation_months_code" : "X/W/P",
  "city" : "Millerton",
  "address_line_1" : "51 South Center Street",
  "county" : "Dutchess",
  "fmnp" : "N",
  "operation_season" : "November - April",
  "longitude" : "-73.51083",
  "latitude" : "41.95288",
  "snap_status" : "Y"
}
, {
  "market_name" : "Pawling Farmers' Market",
  "zip" : "12564",
  "phone" : "9172244801",
  "operation_hours" : "Saturday  9am-12 Noon",
  "location" : "Pawling Village Green,Charles Colman Blvd.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.60143",
    "latitude" : "41.56315"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.pawlingfarmersmarket.org"
  },
  "contact" : "Terry Deegan",
  "operation_months_code" : "M",
  "city" : "Pawling",
  "address_line_1" : "Village Green, Charles Colman Blvd.",
  "county" : "Dutchess",
  "fmnp" : "Y",
  "operation_season" : "June 21 - September 20",
  "longitude" : "-73.60143",
  "latitude" : "41.56315",
  "snap_status" : "N"
}
, {
  "market_name" : "Rhinebeck Farmers' Market",
  "zip" : "12572",
  "phone" : "9176921274",
  "operation_hours" : "Sunday  10am-2pm",
  "location" : "Municipal lot, 61 E. Market St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.91021",
    "latitude" : "41.92738"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.rhinebeckfarmersmarket.com"
  },
  "contact" : "Cheryl Paff",
  "operation_months_code" : "P/M",
  "city" : "Rhinebeck",
  "address_line_1" : "61 East Market St",
  "county" : "Dutchess",
  "fmnp" : "Y",
  "operation_season" : "May 11 - November 23",
  "longitude" : "-73.91021",
  "latitude" : "41.92738",
  "snap_status" : "N"
}
, {
  "market_name" : "Rhinebeck WINTER Farmers' Market",
  "zip" : "12572",
  "phone" : "9176921274",
  "operation_hours" : "Alternate Sundays 10am - 2pm",
  "location" : "Town Hall, 80 E. Market St",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.90896",
    "latitude" : "41.92677"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.rhinebeckfarmersmarket.com"
  },
  "contact" : "Cheryl Paff",
  "operation_months_code" : "X/W/P",
  "city" : "Rhinebeck",
  "address_line_1" : "80 East Market Street",
  "county" : "Dutchess",
  "fmnp" : "N",
  "operation_season" : "December 7 - April 26",
  "longitude" : "-73.90896",
  "latitude" : "41.92677",
  "snap_status" : "N"
}
, {
  "market_name" : "Vassar College Winter Sun Farms WINTER Farmers' Market",
  "zip" : "12601",
  "phone" : "3477217386",
  "operation_hours" : "Monthly, 3rd Saturday 10am - 1pmDec 17, Jan 21, Feb 18, Mar 17, Apr 21",
  "location" : "Vassar College, Raymond Ave.Poughkeepsie",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.89745",
    "latitude" : "41.686"
  },
  "state" : "NY",
  "contact" : "Mary Woodburn",
  "operation_months_code" : "X/W/P",
  "city" : "Poughkeepsie",
  "address_line_1" : "124 Raymond Ave",
  "county" : "Dutchess",
  "fmnp" : "N",
  "operation_season" : "December - April",
  "longitude" : "-73.89745",
  "latitude" : "41.686",
  "snap_status" : "N"
}
, {
  "market_name" : "Alden Farmers' Market",
  "zip" : "14004",
  "phone" : "7169370103",
  "operation_hours" : "Saturday  8:30am-1pm",
  "location" : "13119 Broadway (Route 20)btwn Tractor Supply & Save a Lot",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-78.49904",
    "latitude" : "42.89784"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.aldenny.org"
  },
  "contact" : "Nancy Hughes",
  "operation_months_code" : "P/M",
  "city" : "Alden",
  "address_line_1" : "13119 Broadway",
  "county" : "Erie",
  "fmnp" : "Y",
  "operation_season" : "May 17 - October 11",
  "longitude" : "-78.49904",
  "latitude" : "42.89784",
  "snap_status" : "N"
}
, {
  "market_name" : "Buffalo/University Community Farmers' Market",
  "zip" : "14214",
  "phone" : "7168293524",
  "operation_hours" : "Saturday  8am-1pm",
  "location" : "University at Buffalo - South Campus,Main Street at Englewood Ave.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-78.81852",
    "latitude" : "42.95764"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.ourheights.org/farmersmarket"
  },
  "contact" : "Linwood Roberts",
  "operation_months_code" : "P/M",
  "city" : "Buffalo",
  "address_line_1" : "Main St and Kenmore Ave",
  "county" : "Erie",
  "fmnp" : "Y",
  "operation_season" : "May 17 - October 18",
  "longitude" : "-78.81852",
  "latitude" : "42.95764",
  "snap_status" : "N"
}
, {
  "market_name" : "Clarence Hollow Farmers' Market",
  "zip" : "14031",
  "phone" : "7167591075",
  "operation_hours" : "Saturday  8am-1pm",
  "location" : "Town parking lot, 10717 Main St. (Rt. 5)",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-78.58904",
    "latitude" : "42.9808"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.clarencehollow.org"
  },
  "contact" : "Cheryl Anthony",
  "operation_months_code" : "M",
  "city" : "Clarence",
  "address_line_1" : "10717 Main St",
  "county" : "Erie",
  "fmnp" : "Y",
  "operation_season" : "June 7 - October 25",
  "longitude" : "-78.58904",
  "latitude" : "42.9808",
  "snap_status" : "N"
}
, {
  "market_name" : "Downtown Buffalo Country Market",
  "zip" : "14202",
  "phone" : "7168563150",
  "operation_hours" : "Tue/Thu  8am-2:30pm",
  "location" : "Buffalo Place, Main St. btwn Court & Church Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-78.87526",
    "latitude" : "42.88316"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.buffaloplace.com"
  },
  "contact" : "Jackie Jonmaire",
  "operation_months_code" : "P/M",
  "city" : "Buffalo",
  "address_line_1" : "Main St and Church St",
  "county" : "Erie",
  "fmnp" : "Y",
  "operation_season" : "May 15 - October 23",
  "longitude" : "-78.87526",
  "latitude" : "42.88316",
  "snap_status" : "N"
}
, {
  "market_name" : "East Aurora Farmers' Market",
  "zip" : "14052",
  "phone" : "7166520951",
  "operation_hours" : "Sat/Wed  7am-1pm",
  "location" : "Aurora Village (TOPS) Plaza, Grey St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-78.63413",
    "latitude" : "42.76593"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.eastaurorafarmersmarket.com"
  },
  "contact" : "Carolyn Husarek",
  "operation_months_code" : "P/M",
  "city" : "East Aurora",
  "address_line_1" : "123 Grey St",
  "county" : "Erie",
  "fmnp" : "Y",
  "operation_season" : "May - November",
  "longitude" : "-78.63413",
  "latitude" : "42.76593",
  "snap_status" : "N"
}
, {
  "market_name" : "Elmwood-Bidwell Farmers' Market",
  "zip" : "14222",
  "phone" : "7166915388",
  "operation_hours" : "Saturday  8am-1pm",
  "location" : "Elmwood Village, Elmwood Ave & Bidwell Pkwy",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-78.87702",
    "latitude" : "42.92371"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.elmwoodmarket.org"
  },
  "contact" : "Karen Vilonen",
  "operation_months_code" : "P/M/X",
  "city" : "Buffalo",
  "address_line_1" : "Elmwood Ave and Bidwell Pkwy",
  "county" : "Erie",
  "fmnp" : "Y",
  "operation_season" : "May 10 - November 29",
  "longitude" : "-78.87702",
  "latitude" : "42.92371",
  "snap_status" : "Y"
}
, {
  "market_name" : "Holland Farmers' Market",
  "zip" : "14080",
  "phone" : "7165379590",
  "operation_hours" : "Sunday  8:30am-2pm",
  "location" : "Municipal lot, Route 16btwn Fire Hall & Ronnie's Pizzeria",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-78.543",
    "latitude" : "42.64204"
  },
  "state" : "NY",
  "contact" : "Marg Wnek",
  "operation_months_code" : "P/M",
  "city" : "Holland",
  "address_line_1" : "49 North Main St",
  "county" : "Erie",
  "fmnp" : "Y",
  "operation_season" : "May 4 - November 23",
  "longitude" : "-78.543",
  "latitude" : "42.64204",
  "snap_status" : "N"
}
, {
  "market_name" : "MAP Mobile Market",
  "zip" : "14213",
  "phone" : "7168825327",
  "operation_hours" : "Tue, Thu, Fri & Sat",
  "location" : "389 Massachusetts Ave.,Buffalo",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-78.89204",
    "latitude" : "42.91657"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.mass-ave.org"
  },
  "contact" : "Danielle Rovillo",
  "operation_months_code" : "P/M",
  "city" : "Buffalo",
  "address_line_1" : "City of Buffalo, Select Communities",
  "county" : "Erie",
  "fmnp" : "Y",
  "operation_season" : "May 17 - November 1",
  "longitude" : "-78.89204",
  "latitude" : "42.91657",
  "snap_status" : "Y"
}
, {
  "market_name" : "Elizabethtown Farmers' Market",
  "zip" : "12932",
  "phone" : "5187721064",
  "operation_hours" : "Friday  9am-1pm",
  "location" : "Behind Adirondack Center Museum",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.59094",
    "latitude" : "44.21505"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.adirondackfarmersmarket.com"
  },
  "contact" : "Vicky Rayl",
  "operation_months_code" : "P/M",
  "city" : "Elizabethtown",
  "address_line_1" : "7590 Court St",
  "county" : "Essex",
  "fmnp" : "Y",
  "operation_season" : "May 16 - October 10",
  "longitude" : "-73.59094",
  "latitude" : "44.21505",
  "snap_status" : "N"
}
, {
  "market_name" : "Farm Fresh Fridays",
  "zip" : "12946",
  "phone" : "5186437822",
  "operation_hours" : "Every other Friday 3pm -7pm",
  "location" : "Green Goddess Natural Market 2051 Saranac Avenue, Lake Placid",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.99913",
    "latitude" : "44.29559"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.plattsburghfarmersmarket.com"
  },
  "contact" : "Beth Spaugh",
  "operation_months_code" : "M",
  "city" : "Lake Placid",
  "address_line_1" : "2051 Saranac Avenue",
  "county" : "Essex",
  "fmnp" : "N",
  "operation_season" : "June 7 - September 24",
  "longitude" : "-73.99913",
  "latitude" : "44.29559",
  "snap_status" : "N"
}
, {
  "market_name" : "Keene Farmers' Market",
  "zip" : "12943",
  "phone" : "5187721064",
  "operation_hours" : "Sunday  9:30am-2pm",
  "location" : "Rt. 73, Marcy Airfield, 1 mi S of Rt. 9N jct.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.78561",
    "latitude" : "44.22067"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.adirondackfarmersmarket.com"
  },
  "contact" : "Vicky Rayl",
  "operation_months_code" : "M",
  "city" : "Keene Valley",
  "address_line_1" : "2253 State Route 73",
  "county" : "Essex",
  "fmnp" : "Y",
  "operation_season" : "June 15 - October 12",
  "longitude" : "-73.78561",
  "latitude" : "44.22067",
  "snap_status" : "N"
}
, {
  "market_name" : "Lake Placid Farmers' Market",
  "zip" : "12946",
  "phone" : "5188345012",
  "operation_hours" : "Wednesday  9am-1pm",
  "location" : "Lake Placid Center for the Arts, 17 Algonquin Dr., upper parking lot",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.99766",
    "latitude" : "44.29367"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.ausablevalleygrange.com"
  },
  "contact" : "Ian Ater",
  "operation_months_code" : "M",
  "city" : "Lake Placid",
  "address_line_1" : "17 Algonquin Dr",
  "county" : "Essex",
  "fmnp" : "N",
  "operation_season" : "June 4 - October 22",
  "longitude" : "-73.99766",
  "latitude" : "44.29367",
  "snap_status" : "N"
}
, {
  "market_name" : "Lake Placid Tri-Lakes Online WINTER Market",
  "zip" : "12946",
  "phone" : "5185247247",
  "operation_hours" : "2nd & 4th Wednesday12 Noon - 6:30pm",
  "location" : "Drop-off at Green Goddess Foods183 Newman Road, Lake Placid",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.98212",
    "latitude" : "44.2703"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.ausablevalleygrange.com"
  },
  "contact" : "Sam Hendren",
  "operation_months_code" : "X/W/P",
  "city" : "Lake Placid",
  "address_line_1" : "183 Sentinel Rd",
  "county" : "Essex",
  "fmnp" : "N",
  "operation_season" : "November - May",
  "longitude" : "-73.98212",
  "latitude" : "44.2703",
  "snap_status" : "N"
}
, {
  "market_name" : "Port Henry Farmers' Market",
  "zip" : "12974",
  "phone" : "5187721064",
  "operation_hours" : "Wednesday  9am-1pm",
  "location" : "Bonnie's Bistro parking lot,4264 Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.45837",
    "latitude" : "44.0445"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.adirondackfarmersmarket.com"
  },
  "contact" : "Vicky Rayl",
  "operation_months_code" : "M",
  "city" : "Port Henry",
  "address_line_1" : "4264 Main St",
  "county" : "Essex",
  "fmnp" : "Y",
  "operation_season" : "June 25 - August 27",
  "longitude" : "-73.45837",
  "latitude" : "44.0445",
  "snap_status" : "N"
}
, {
  "market_name" : "Schroon Lake Farmers' Market",
  "zip" : "12870",
  "phone" : "5188345012",
  "operation_hours" : "Monday  9am-1pm",
  "location" : "Town Hall parking lot,15 Leland Ave",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.76065",
    "latitude" : "43.83669"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.ausablevalleygrange.com"
  },
  "contact" : "Ian Ater",
  "operation_months_code" : "M",
  "city" : "Scroon Lake",
  "address_line_1" : "15 Leland Ave",
  "county" : "Essex",
  "fmnp" : "N",
  "operation_season" : "June 30 - September 1",
  "longitude" : "-73.76065",
  "latitude" : "43.83669",
  "snap_status" : "N"
}
, {
  "market_name" : "Ticonderoga Farmers' Market",
  "zip" : "12883",
  "phone" : "5185856619",
  "operation_hours" : "Saturday  10am-1pm",
  "location" : "Rt 9N at Moses Circle near Liberty Monument",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.43552",
    "latitude" : "43.84791"
  },
  "state" : "NY",
  "contact" : "Matt Courtright",
  "operation_months_code" : "M",
  "city" : "Ticonderoga",
  "address_line_1" : "State Route 9N and Hague Rd",
  "county" : "Essex",
  "fmnp" : "Y",
  "operation_season" : "July 5 - October 11",
  "longitude" : "-73.43552",
  "latitude" : "43.84791",
  "snap_status" : "N"
}
, {
  "market_name" : "Willsboro Farmers' Market",
  "zip" : "12996",
  "phone" : "5187721064",
  "operation_hours" : "Thursday  9am-1pm",
  "location" : "Route 22 - South of Champlain Bank",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.39408",
    "latitude" : "44.36556"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.adirondackfarmersmarket.com"
  },
  "contact" : "Vicky Rayl",
  "operation_months_code" : "M",
  "city" : "Willsboro",
  "address_line_1" : "Maple St and NY Rt 22",
  "county" : "Essex",
  "fmnp" : "Y",
  "operation_season" : "June 19 - September 4",
  "longitude" : "-73.39408",
  "latitude" : "44.36556",
  "snap_status" : "N"
}
, {
  "market_name" : "Malone Farmers' Market",
  "zip" : "12953",
  "phone" : "5187721064",
  "operation_hours" : "Wed  12 Noon-4:30pm",
  "location" : "Malone Airport, Rt. 11across from Wal-Mart",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.32773",
    "latitude" : "44.84733"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.adirondackfarmersmarket.com"
  },
  "contact" : "Vicky Rayl",
  "operation_months_code" : "M",
  "city" : "Malone",
  "address_line_1" : "Airport Road and US 11",
  "county" : "Franklin",
  "fmnp" : "Y",
  "operation_season" : "June 11 - October 15",
  "longitude" : "-74.32773",
  "latitude" : "44.84733",
  "snap_status" : "Y"
}
, {
  "market_name" : "Paul Smiths Farmers' Market",
  "zip" : "12970",
  "phone" : "5187721064",
  "operation_hours" : "Friday  2pm-5pm",
  "location" : "Visitor's Interpretive Center,Route 30",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.25941",
    "latitude" : "44.4485"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.adirondackfarmersmarket.com"
  },
  "contact" : "Vicky Rayl",
  "operation_months_code" : "M",
  "city" : "Paul Smiths",
  "address_line_1" : "8023 New York 30",
  "county" : "Franklin",
  "fmnp" : "Y",
  "operation_season" : "June 27 - September 12",
  "longitude" : "-74.25941",
  "latitude" : "44.4485",
  "snap_status" : "N"
}
, {
  "market_name" : "Saranac Lake Farmers' Market",
  "zip" : "12983",
  "phone" : "5187721064",
  "operation_hours" : "Tuesday  10am-2pm",
  "location" : "Fusion Market,across from boat launch",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.12598",
    "latitude" : "44.32413"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.adirondackfarmersmarket.com"
  },
  "contact" : "Vicky Rayl",
  "operation_months_code" : "P/M",
  "city" : "Saranac Lake",
  "address_line_1" : "111 River St",
  "county" : "Franklin",
  "fmnp" : "Y",
  "operation_season" : "May 13 - September 30",
  "longitude" : "-74.12598",
  "latitude" : "44.32413",
  "snap_status" : "N"
}
, {
  "market_name" : "Saranac Lake Village Farmers' Market",
  "zip" : "12983",
  "phone" : "5188345012",
  "operation_hours" : "Saturday  9am-2pm",
  "location" : "Riverside Park, Main St. & River Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.13178",
    "latitude" : "44.32503"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.ausablevalleygrange.com"
  },
  "contact" : "Ian Ater",
  "operation_months_code" : "M",
  "city" : "Saranac Lake",
  "address_line_1" : "River St and Main St",
  "county" : "Franklin",
  "fmnp" : "N",
  "operation_season" : "June 7 - October 25",
  "longitude" : "-74.13178",
  "latitude" : "44.32503",
  "snap_status" : "N"
}
, {
  "market_name" : "Tupper Lake Farmers' Market",
  "zip" : "12986",
  "phone" : "5187721064",
  "operation_hours" : "Thursday  11am-3pm",
  "location" : "Wild Center Museum",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.43693",
    "latitude" : "44.21956"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.adirondackfarmersmarket.com"
  },
  "contact" : "Vicky Rayl",
  "operation_months_code" : "M",
  "city" : "Tupper Lake",
  "address_line_1" : "1 Museum Drive",
  "county" : "Franklin",
  "fmnp" : "Y",
  "operation_season" : "June 5 - September 18",
  "longitude" : "-74.43693",
  "latitude" : "44.21956",
  "snap_status" : "N"
}
, {
  "market_name" : "Gloversville Farmers' Market",
  "zip" : "12078",
  "phone" : "5188636104",
  "operation_hours" : "Saturday  8:30am-12:30pm",
  "location" : "Elm Street Pavilion,btwn Church & Spring Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.34578",
    "latitude" : "43.05261"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.fultonmontgomeryfarmersmarket.org"
  },
  "contact" : "Anne Marie Johnson",
  "operation_months_code" : "P/M",
  "city" : "Gloversville",
  "address_line_1" : "9 Elm St",
  "county" : "Fulton",
  "fmnp" : "Y",
  "operation_season" : "May 10 - October 18",
  "longitude" : "-74.34578",
  "latitude" : "43.05261",
  "snap_status" : "Y"
}
, {
  "market_name" : "Johnstown Farmers' Market",
  "zip" : "12095",
  "phone" : "5188636104",
  "operation_hours" : "Tuesday  3pm-6pm",
  "location" : "Sir William Park, parking lotbtwn Main and Church Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.37854",
    "latitude" : "43.01507"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.fultonmontgomeryfarmersmarket.org"
  },
  "contact" : "Anne Marie Johnson",
  "operation_months_code" : "P/M",
  "city" : "Johnstown",
  "address_line_1" : "Sir William Park",
  "county" : "Fulton",
  "fmnp" : "Y",
  "operation_season" : "May 20 - October 14",
  "longitude" : "-74.37854",
  "latitude" : "43.01507",
  "snap_status" : "Y"
}
, {
  "market_name" : "Northville Farmers' Market",
  "zip" : "12134",
  "phone" : "5188634211",
  "operation_hours" : "Tue/Fri  2pm-5pm(Tue runs July 5-Sept 27)",
  "location" : "Waterfront Park,behind Timeless Tavern",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.17102",
    "latitude" : "43.22568"
  },
  "state" : "NY",
  "contact" : "Wendy Reu",
  "operation_months_code" : "P/M",
  "city" : "Northville",
  "address_line_1" : "162 South Main St",
  "county" : "Fulton",
  "fmnp" : "Y",
  "operation_season" : "May 23 - October 10",
  "longitude" : "-74.17102",
  "latitude" : "43.22568",
  "snap_status" : "N"
}
, {
  "market_name" : "Batavia Farmers' Market",
  "zip" : "14020",
  "phone" : "5853306161",
  "operation_hours" : "Tue/Fri  8am-4pm",
  "location" : "K-Mart parking lot,8363 Lewiston Rd.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-78.2072",
    "latitude" : "43.00952"
  },
  "state" : "NY",
  "contact" : "Scott Christ",
  "operation_months_code" : "M",
  "city" : "Batavia",
  "address_line_1" : "8363 Lewiston Rd",
  "county" : "Genesee",
  "fmnp" : "Y",
  "operation_season" : "June 3 - October 31",
  "longitude" : "-78.2072",
  "latitude" : "43.00952",
  "snap_status" : "Y"
}
, {
  "market_name" : "Downtown Batavia Farmers' Market",
  "zip" : "14020",
  "phone" : "5853440900",
  "operation_hours" : "Thursday  9am-3:30pm",
  "location" : "Bank Street and Alva Place,In parking lot across from Jerome Center",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-78.18152",
    "latitude" : "42.99906"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.downtownbataviany.com"
  },
  "contact" : "Don Burkel",
  "operation_months_code" : "M",
  "city" : "Batavia",
  "address_line_1" : "Bank Street and Alva Place",
  "county" : "Genesee",
  "fmnp" : "Y",
  "operation_season" : "June 19 - September 25",
  "longitude" : "-78.18152",
  "latitude" : "42.99906",
  "snap_status" : "N"
}
, {
  "market_name" : "Genesee Country Farmers' Market",
  "zip" : "14020",
  "phone" : "7165600853",
  "operation_hours" : "Tue/Fri  8am-5pm",
  "location" : "Batavia Downs Casino parking lot, 8315 Park Rd., Batavia",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-78.20528",
    "latitude" : "43.01001"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.gcfarmersmarket.com"
  },
  "contact" : "Sharon Brent",
  "operation_months_code" : "M",
  "city" : "Batavia",
  "address_line_1" : "8315 Park Rd",
  "county" : "Genesee",
  "fmnp" : "Y",
  "operation_season" : "June 10 - October 31",
  "longitude" : "-78.20528",
  "latitude" : "43.01001",
  "snap_status" : "Y"
}
, {
  "market_name" : "LeRoy Farmers' Market",
  "zip" : "14482",
  "phone" : "5857682527",
  "operation_hours" : "Saturday  9am-12:30pm",
  "location" : "Trigon Park, Route 5 (Main St.)",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.98592",
    "latitude" : "42.97756"
  },
  "state" : "NY",
  "contact" : "Sharon Jeary",
  "operation_months_code" : "M",
  "city" : "Le Roy",
  "address_line_1" : "Trigon Park",
  "county" : "Genesee",
  "fmnp" : "Y",
  "operation_season" : "June 21 - October 11",
  "longitude" : "-77.98592",
  "latitude" : "42.97756",
  "snap_status" : "N"
}
, {
  "market_name" : "Coxsackie Riverside Farmers' Market",
  "zip" : "12051",
  "phone" : "5183303008",
  "operation_hours" : "Wednesday  4pm-7pm",
  "location" : "Coxsackie Riverside Park",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.79703",
    "latitude" : "42.3524"
  },
  "state" : "NY",
  "contact" : "Kimberly Bender",
  "operation_months_code" : "P/M",
  "city" : "Coxsackie",
  "address_line_1" : "1 Betke Blvd",
  "county" : "Greene",
  "fmnp" : "Y",
  "operation_season" : "May 28 - October 22",
  "longitude" : "-73.79703",
  "latitude" : "42.3524",
  "snap_status" : "N"
}
, {
  "market_name" : "Speculator Farmers & Crafters Farmers' Market",
  "zip" : "12164",
  "phone" : "5185484521",
  "operation_hours" : "Thursday  2pm-5pm",
  "location" : "Speculator Village Pavilion",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.36073",
    "latitude" : "43.49679"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.speculatorchamber.com"
  },
  "contact" : "Anna Smith",
  "operation_months_code" : "M",
  "city" : "Speculator",
  "address_line_1" : "State Route 30 and Elliot Ln",
  "county" : "Hamilton",
  "fmnp" : "Y",
  "operation_season" : "June 26 - September 18",
  "longitude" : "-74.36073",
  "latitude" : "43.49679",
  "snap_status" : "N"
}
, {
  "market_name" : "Dolgeville Farmers' Market",
  "zip" : "13329",
  "phone" : "3157258999",
  "operation_hours" : "Saturday  8am-12 Noon",
  "location" : "Kinney Drugs parking lotMain Street",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.77016",
    "latitude" : "43.10522"
  },
  "state" : "NY",
  "contact" : "Carolyn Chavez",
  "operation_months_code" : "P/M",
  "city" : "Dolgeville",
  "address_line_1" : "55 North Main Street",
  "county" : "Herkimer",
  "fmnp" : "Y",
  "operation_season" : "May 17 - October 31",
  "longitude" : "-74.77016",
  "latitude" : "43.10522",
  "snap_status" : "N"
}
, {
  "market_name" : "Herkimer Farmers' Market",
  "zip" : "13350",
  "phone" : "3158950138",
  "operation_hours" : "Monday  1pm-5pm",
  "location" : "Herkimer Arc Association parking lot,420 E. German St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.9865",
    "latitude" : "43.03464"
  },
  "state" : "NY",
  "contact" : "Cat Macera",
  "city" : "Herkimer",
  "address_line_1" : "420 East German St",
  "county" : "Herkimer",
  "fmnp" : "Y",
  "operation_season" : "TBD",
  "longitude" : "-74.9865",
  "latitude" : "43.03464",
  "snap_status" : "Y"
}
, {
  "market_name" : "Ilion Farmers' Market",
  "zip" : "13357",
  "phone" : "3158944660",
  "operation_hours" : "Friday  12 Noon-6pm    Sat  10am-5pm",
  "location" : "Clapsaddle Farm, heated barns437 Otsego St. (State Rt 51 S)",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.04423",
    "latitude" : "43.00028"
  },
  "state" : "NY",
  "contact" : "James Parker",
  "operation_months_code" : "YR",
  "city" : "Ilion",
  "address_line_1" : "437 Otsego St",
  "county" : "Herkimer",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-75.04423",
  "latitude" : "43.00028",
  "snap_status" : "N"
}
, {
  "market_name" : "Little Falls Farmers' Market",
  "zip" : "13365",
  "phone" : "3158662619",
  "operation_hours" : "Saturday  8am-12 Noon",
  "location" : "M&T Bank parking lot, Albany St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.8589",
    "latitude" : "43.04308"
  },
  "state" : "NY",
  "contact" : "Mary Davis",
  "operation_months_code" : "P/M",
  "city" : "Little Falls",
  "address_line_1" : "501 East Main St",
  "county" : "Herkimer",
  "fmnp" : "Y",
  "operation_season" : "May 3 - October 25",
  "longitude" : "-74.8589",
  "latitude" : "43.04308",
  "snap_status" : "N"
}
, {
  "market_name" : "Mohawk Farmers' Market",
  "zip" : "13407",
  "phone" : "3158661671",
  "operation_hours" : "Wednesday  2pm-5pm",
  "location" : "Weller Park,41 West Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.00846",
    "latitude" : "43.01075"
  },
  "state" : "NY",
  "contact" : "Marilyn Bridger",
  "operation_months_code" : "P/M",
  "city" : "Mohawk",
  "address_line_1" : "41 West Main St",
  "county" : "Herkimer",
  "fmnp" : "Y",
  "operation_season" : "May 21 - October 8",
  "longitude" : "-75.00846",
  "latitude" : "43.01075",
  "snap_status" : "N"
}
, {
  "market_name" : "Old Forge Farmers' Market",
  "zip" : "13420",
  "phone" : "3153693353",
  "operation_hours" : "Friday  1pm-5pm",
  "location" : "Park Ave.,behind Old Forge Hardware",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.97286",
    "latitude" : "43.70893"
  },
  "state" : "NY",
  "contact" : "Nicholas Rose",
  "operation_months_code" : "M",
  "city" : "Old Forge",
  "address_line_1" : "Crosby Blvd and Park Ave",
  "county" : "Herkimer",
  "fmnp" : "Y",
  "operation_season" : "June 27 - October 10",
  "longitude" : "-74.97286",
  "latitude" : "43.70893",
  "snap_status" : "Y"
}
, {
  "market_name" : "West Winfield Farmers' Market",
  "zip" : "13491",
  "phone" : "3157948154",
  "operation_hours" : "Wednesday  4pm-7pm",
  "location" : "The Federated Church parking lot, 452 E. Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.18946",
    "latitude" : "42.88486"
  },
  "state" : "NY",
  "contact" : "Patti Laymon",
  "operation_months_code" : "M",
  "city" : "West Winfield",
  "address_line_1" : "452 E. Main St.",
  "county" : "Herkimer",
  "fmnp" : "Y",
  "operation_season" : "June 18 - October 22",
  "longitude" : "-75.18946",
  "latitude" : "42.88486",
  "snap_status" : "N"
}
, {
  "market_name" : "Alexandria Bay Farmers' Market",
  "zip" : "13607",
  "phone" : "3154829531",
  "operation_hours" : "Friday  9am-3pm",
  "location" : "Kinney Drugs Parking Lot, Rt. 12",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.91425",
    "latitude" : "44.33191"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.visitalexbay.org"
  },
  "contact" : "Susan Boyer",
  "operation_months_code" : "P/M",
  "city" : "Alexandria Bay",
  "address_line_1" : "21 New York 12",
  "county" : "Jefferson",
  "fmnp" : "Y",
  "operation_season" : "May 23 - September 19",
  "longitude" : "-75.91425",
  "latitude" : "44.33191",
  "snap_status" : "N"
}
, {
  "market_name" : "Cape Vincent Farmers' Market",
  "zip" : "13618",
  "phone" : "3156542481",
  "operation_hours" : "Saturday  8am-2pm",
  "location" : "Village Green,  Broadway St. (Rt. 12)",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.33472",
    "latitude" : "44.12838"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.capevincent.org"
  },
  "contact" : "Shelley Higgins",
  "operation_months_code" : "M",
  "city" : "Cape Vincent",
  "address_line_1" : "Broadway St and James St",
  "county" : "Jefferson",
  "fmnp" : "Y",
  "operation_season" : "June 21 - October 11",
  "longitude" : "-76.33472",
  "latitude" : "44.12838",
  "snap_status" : "N"
}
, {
  "market_name" : "Carthage Farmers' Market",
  "zip" : "13619",
  "phone" : "3154933590",
  "operation_hours" : "Friday  7am-2pm",
  "location" : "Farmers Market Pavilion, Riverside Dr.(behind Carthage Rescue Squad)",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.61225",
    "latitude" : "43.97798"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.carthageny.com"
  },
  "contact" : "Lori Boland",
  "operation_months_code" : "P/M",
  "city" : "Carthage",
  "address_line_1" : "215 Spring St",
  "county" : "Jefferson",
  "fmnp" : "Y",
  "operation_season" : "May 30 - October 31",
  "longitude" : "-75.61225",
  "latitude" : "43.97798",
  "snap_status" : "Y"
}
, {
  "market_name" : "Greater Watertown-North Country Market",
  "zip" : "13601",
  "phone" : "3157884400",
  "operation_hours" : "Wed  6:30am-3pm",
  "location" : "317 Washington St., Dulles State Office Bldg.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.91116",
    "latitude" : "43.97173"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.watertownny.com"
  },
  "contact" : "Toni Miller",
  "operation_months_code" : "P/M",
  "city" : "Watertown",
  "address_line_1" : "317 Washington Street",
  "county" : "Jefferson",
  "fmnp" : "Y",
  "operation_season" : "May 28 - TBD",
  "longitude" : "-75.91116",
  "latitude" : "43.97173",
  "snap_status" : "Y"
}
, {
  "market_name" : "Stone Mills Farmers' Market",
  "zip" : "13656",
  "phone" : "3156582353",
  "operation_hours" : "Tuesday 4pm -7pm",
  "location" : "Agricultural Museum, 30950 NY Rt. 180 off Rt. 12, S. of LaFargeville, W from I-81 Ex. 49",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.9755",
    "latitude" : "44.1127"
  },
  "state" : "NY",
  "contact" : "Marguerite Raineri",
  "operation_months_code" : "M",
  "city" : "Stone Mills",
  "address_line_1" : "30950 Route 180",
  "county" : "Jefferson",
  "fmnp" : "N",
  "operation_season" : "June 19 - September 18",
  "longitude" : "-75.9755",
  "latitude" : "44.1127",
  "snap_status" : "N"
}
, {
  "market_name" : "Watertown Saturday Farmers' Market",
  "zip" : "13601",
  "phone" : "3157732345",
  "operation_hours" : "Saturday  9am-2pm",
  "location" : "J.B. Wise Pavilion parking lot,175 Black River Parkway",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.90988",
    "latitude" : "43.97651"
  },
  "state" : "NY",
  "contact" : "Samuel J. Biondolillo",
  "operation_months_code" : "M",
  "city" : "Watertown",
  "address_line_1" : "175 Black River Parkway",
  "county" : "Jefferson",
  "fmnp" : "Y",
  "operation_season" : "June 14 - November 1",
  "longitude" : "-75.90988",
  "latitude" : "43.97651",
  "snap_status" : "Y"
}
, {
  "market_name" : "Bartel-Pritchard Square Greenmarket",
  "zip" : "11215",
  "phone" : "2127887476",
  "operation_hours" : "Wednesday  8am-3pm",
  "location" : "Prospect Park West, at 15th St. (inside park entrance)",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.97979",
    "latitude" : "40.66094"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "P/M",
  "city" : "Brooklyn",
  "address_line_1" : "Bartel Pritchard Square",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "May 7 - November 26",
  "longitude" : "-73.97979",
  "latitude" : "40.66094",
  "snap_status" : "Y"
}
, {
  "market_name" : "Bay Ridge Greenmarket",
  "zip" : "11209",
  "phone" : "2127887476",
  "operation_hours" : "Saturday  8am-3pm",
  "location" : "Third Ave. & 95th St.,inside Walgreen's parking lot",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.03362",
    "latitude" : "40.61724"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "Third Ave and 95th St",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "June 7 - November 22",
  "longitude" : "-74.03362",
  "latitude" : "40.61724",
  "snap_status" : "Y"
}
, {
  "market_name" : "Bensonhurst Greenmarket",
  "zip" : "11214",
  "phone" : "2127887476",
  "operation_hours" : "Sunday  9am-4pm",
  "location" : "18th Ave btwn 81st & 82nd Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.99971",
    "latitude" : "40.60971"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "8112 Cristoforo Colombo Blvd",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "June 8 - November 23",
  "longitude" : "-73.99971",
  "latitude" : "40.60971",
  "snap_status" : "Y"
}
, {
  "market_name" : "Boro Park Greenmarket",
  "zip" : "11219",
  "phone" : "2127887476",
  "operation_hours" : "Thursday  8am-3pm",
  "location" : "14th Ave. btwn 49th & 50th Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.98992",
    "latitude" : "40.6337"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "14th Ave and 49th St",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "July 10 - November 20",
  "longitude" : "-73.98992",
  "latitude" : "40.6337",
  "snap_status" : "Y"
}
, {
  "market_name" : "Brooklyn Borough Hall Greenmarket",
  "zip" : "11201",
  "phone" : "2127887476",
  "operation_hours" : "Tue/Thu/Sat  8am-6pm",
  "location" : "Court & Montague Sts.,Supreme Court Plaza",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.99047",
    "latitude" : "40.69375"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "YR",
  "city" : "Brooklyn",
  "address_line_1" : "Court St and Montague St",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-73.99047",
  "latitude" : "40.69375",
  "snap_status" : "Y"
}
, {
  "market_name" : "Brower Park Farmers' Market",
  "zip" : "12213",
  "phone" : "9172736209",
  "operation_hours" : "Saturday  8am-4pm",
  "location" : "Brower Park,Crown Heights, Brooklyn",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.94865",
    "latitude" : "40.67528"
  },
  "state" : "NY",
  "contact" : "Phil Hawkins",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "Brower Park",
  "county" : "Kings",
  "fmnp" : "N",
  "operation_season" : "June 14 - November 15",
  "longitude" : "-73.94865",
  "latitude" : "40.67528",
  "snap_status" : "N"
}
, {
  "market_name" : "Brownsville Community Farmers' Market",
  "zip" : "11212",
  "phone" : "3473884875",
  "operation_hours" : "Saturday  8am-4pm",
  "location" : "514 Rockaway Ave., BrooklynCorner of Rockaway & Sutter Ave.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.91048",
    "latitude" : "40.66746"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.bmsfhc.org"
  },
  "contact" : "Taylor Gordon",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "514 Rockaway Ave",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "July 19 - November 8",
  "longitude" : "-73.91048",
  "latitude" : "40.66746",
  "snap_status" : "Y"
}
, {
  "market_name" : "Brownsville Pitkin Ave Youthmarket",
  "zip" : "11212",
  "phone" : "2127883818",
  "operation_hours" : "Saturday  9am-4pm",
  "location" : "Pitkin Ave & Thomas S. Boyland St.,Brooklyn",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.91358",
    "latitude" : "40.66925"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org/youthmarket"
  },
  "contact" : "Jackie Bach",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "Thomas Boyland St and Pitkin Ave",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "July 12 - November 22",
  "longitude" : "-73.91358",
  "latitude" : "40.66925",
  "snap_status" : "Y"
}
, {
  "market_name" : "Brownsville Rockaway Youthmarket",
  "zip" : "11212",
  "phone" : "2127883818",
  "operation_hours" : "Friday  1pm-7pm",
  "location" : "Rockaway & Livonia Aves. (corner),Brooklyn",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.90895",
    "latitude" : "40.66255"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org/youthmarket"
  },
  "contact" : "Jackie Bach",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "Rockaway Ave and Livonia Ave",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "July 11 - November 21",
  "longitude" : "-73.90895",
  "latitude" : "40.66255",
  "snap_status" : "Y"
}
, {
  "market_name" : "Bushwick Broadway Farmers' Market",
  "zip" : "11385",
  "phone" : "5024940628",
  "operation_hours" : "Thursday  10am-6pm",
  "location" : "Broadway, Brooklynbtwn Halsey St. and Thomas Boyland,",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.91106",
    "latitude" : "40.69952"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.bushwickfarmersmarket.org"
  },
  "contact" : "Travis Tench",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "Halsey St and Broadway Ave.",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "June 12 - November 13",
  "longitude" : "-73.91106",
  "latitude" : "40.69952",
  "snap_status" : "Y"
}
, {
  "market_name" : "Bushwick Campus Farmers' Market",
  "zip" : "11237",
  "phone" : "5024940628",
  "operation_hours" : "Thursday  2pm-5pm",
  "location" : "Irving Ave. & Woodbine St.,Brooklyn",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.9118",
    "latitude" : "40.69755"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.bushwickfarmersmarket.org"
  },
  "contact" : "Travis Tench",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "Irving Ave and Woodbine Ave",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "June 12 - November 13",
  "longitude" : "-73.9118",
  "latitude" : "40.69755",
  "snap_status" : "Y"
}
, {
  "market_name" : "Bushwick Farmers' Market",
  "zip" : "11221",
  "phone" : "5024940628",
  "operation_hours" : "Wednesday  12 Noon-6pm",
  "location" : "Bushwick Ave,btwn Boerum & Mckibbin Sts., Brooklyn",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.93919",
    "latitude" : "40.7057"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.bushwickfarmersmarket.org"
  },
  "contact" : "Travis Tench",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "291 Bushwick Ave",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "June 4 - November 12",
  "longitude" : "-73.93919",
  "latitude" : "40.7057",
  "snap_status" : "Y"
}
, {
  "market_name" : "Bushwick Maria Hernandez Farmers' Market",
  "zip" : "11237",
  "phone" : "5024940628",
  "operation_hours" : "Saturday  9am-4pm",
  "location" : "corner of Knickerbocker Ave. & Starr St.outside Maria Hernandez Park, Brooklyn",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.92539",
    "latitude" : "40.70281"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.bushwickfarmersmarket.org"
  },
  "contact" : "Travis Tench",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "Knickerbocker Ave and Starr St",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "June 7 - November 15",
  "longitude" : "-73.92539",
  "latitude" : "40.70281",
  "snap_status" : "Y"
}
, {
  "market_name" : "Bushwick Myrtle Ave. Farmers' Market",
  "zip" : "11237",
  "phone" : "5024940628",
  "operation_hours" : "Friday 12 Noon-5 pm",
  "location" : "Myrtle Ave. & Grove St.Brooklyn",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.91492",
    "latitude" : "40.69916"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.bushwickfarmersmarket.org"
  },
  "contact" : "Travis Tench",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "Myrtle Ave and Grove St",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "June 6 - November 14",
  "longitude" : "-73.91492",
  "latitude" : "40.69916",
  "snap_status" : "Y"
}
, {
  "market_name" : "Carroll Gardens Greenmarket",
  "zip" : "11231",
  "phone" : "2127887476",
  "operation_hours" : "Sunday  8am-3pm",
  "location" : "Carroll St., btwn Court & Smith Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.99653",
    "latitude" : "40.68106"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "YR",
  "city" : "Brooklyn",
  "address_line_1" : "Carroll St and Court St",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-73.99653",
  "latitude" : "40.68106",
  "snap_status" : "Y"
}
, {
  "market_name" : "Coney Island Farmers' Market",
  "zip" : "11224",
  "phone" : "7182664653",
  "operation_hours" : "Sunday  9am-3pm",
  "location" : "Surf Ave. & W. 16th St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.98337",
    "latitude" : "40.57542"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.astelladevelopment.org"
  },
  "contact" : "Lisa Jones",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "Surf Ave and West 16th Street",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "June 22 - November 23",
  "longitude" : "-73.98337",
  "latitude" : "40.57542",
  "snap_status" : "Y"
}
, {
  "market_name" : "Cooper Park Farmers' Market",
  "zip" : "11211",
  "phone" : "9149234837",
  "operation_hours" : "Sunday  11am-4pm",
  "location" : "Cooper Park,Maspeth Ave. & Olive St., Brooklyn",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.93868",
    "latitude" : "40.71607"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.downtoearthmarkets.com"
  },
  "contact" : "Doug Ornstein",
  "operation_months_code" : "P/M",
  "city" : "Brooklyn",
  "address_line_1" : "Cooper Park",
  "county" : "Kings",
  "fmnp" : "N",
  "operation_season" : "May 25 - November 23",
  "longitude" : "-73.93868",
  "latitude" : "40.71607",
  "snap_status" : "Y"
}
, {
  "market_name" : "Cortelyou Greenmarket",
  "zip" : "11226",
  "phone" : "2127887476",
  "operation_hours" : "Sunday  8am-4pm",
  "location" : "Cortelyou Rd., btwn Argyle and Rugby Rds.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.96617",
    "latitude" : "40.64044"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "YR",
  "city" : "Brooklyn",
  "address_line_1" : "Cortelyou Rd and Argyle Rd",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-73.96617",
  "latitude" : "40.64044",
  "snap_status" : "Y"
}
, {
  "market_name" : "Crown Heights Hamilton Metz Park Farmers' Market",
  "zip" : "11213",
  "phone" : "9176973745",
  "operation_hours" : "Thursday  1pm-7pm",
  "location" : "Hamilton Metz Park, Albany & Lefferts Aves., Brooklyn",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.94001",
    "latitude" : "40.66303"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.seedsinthemiddle.org"
  },
  "contact" : "Nancie Katz",
  "operation_months_code" : "P/M",
  "city" : "Brooklyn",
  "address_line_1" : "Albany Ave and Lefferts Ave",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "May 15 - November 13",
  "longitude" : "-73.94001",
  "latitude" : "40.66303",
  "snap_status" : "Y"
}
, {
  "market_name" : "Crown Heights Parkside Plaza Farmers' Market",
  "zip" : "11226",
  "phone" : "9176973745",
  "operation_hours" : "Friday  9am-7pm",
  "location" : "Parkside Ave.,btwn Ocean & Flatbush Aves., Brooklyn",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.96123",
    "latitude" : "40.65531"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.seedsinthemiddle.org"
  },
  "contact" : "Nancie Katz",
  "operation_months_code" : "P/M",
  "city" : "Brooklyn",
  "address_line_1" : "1-199 Parkside Ave",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "May 16 - November 14",
  "longitude" : "-73.96123",
  "latitude" : "40.65531",
  "snap_status" : "N"
}
, {
  "market_name" : "Cypress Hills Youthmarket",
  "zip" : "11208",
  "phone" : "2127883818",
  "operation_hours" : "Friday  2pm-6pm",
  "location" : "Fulton St., btwn Richmond & Logan Sts., Brooklyn",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.87788",
    "latitude" : "40.68206"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org/youthmarket"
  },
  "contact" : "Jackie Bach",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "Fulton St and Logan St",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "July 11 - November 21",
  "longitude" : "-73.87788",
  "latitude" : "40.68206",
  "snap_status" : "Y"
}
, {
  "market_name" : "East New York Farmers' Market I",
  "zip" : "11207",
  "phone" : "7186497979",
  "operation_hours" : "Saturday  9am-3pm",
  "location" : "Schenck Ave., United Comm. Centersbtwn New Lots & Livonia, Brooklyn",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.88658",
    "latitude" : "40.6647"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.eastnewyorkfarms.org"
  },
  "contact" : "Heather Horgan",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "New Lots Ave and Schenck Ave",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "June 28 - November 15",
  "longitude" : "-73.88658",
  "latitude" : "40.6647",
  "snap_status" : "Y"
}
, {
  "market_name" : "East New York Farmers' Market II",
  "zip" : "11207",
  "phone" : "7186497979",
  "operation_hours" : "Wednesday  3:30pm- 6:30pm",
  "location" : "New Lots & Georgia Aves.,Brooklyn",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.8955",
    "latitude" : "40.66075"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.eastnewyorkfarms.org"
  },
  "contact" : "Heather Horgan",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "New Lots Ave and Alabama Ave",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "July 9 - October 29",
  "longitude" : "-73.8955",
  "latitude" : "40.66075",
  "snap_status" : "Y"
}
, {
  "market_name" : "East Williamsburg Youthmarket",
  "zip" : "11211",
  "phone" : "2127883818",
  "operation_hours" : "Thursday  9pm-4pm",
  "location" : "Grand St. and Graham Ave.,Brooklyn",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.94391",
    "latitude" : "40.71165"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org/youthmarket"
  },
  "contact" : "Jackie Bach",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "Grand Street and Graham Avenue",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "July 10 - November 20",
  "longitude" : "-73.94391",
  "latitude" : "40.71165",
  "snap_status" : "Y"
}
, {
  "market_name" : "Fort Greene Park Greenmarket",
  "zip" : "11205",
  "phone" : "2127887476",
  "operation_hours" : "Saturday  8am-4pm",
  "location" : "Washington Park,btwn Dekalb Ave. & Willoughby St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.97313",
    "latitude" : "40.68962"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "YR",
  "city" : "Brooklyn",
  "address_line_1" : "Washington Park and DeKalb Ave",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-73.97313",
  "latitude" : "40.68962",
  "snap_status" : "Y"
}
, {
  "market_name" : "Graham Avenue Farmers' Market",
  "zip" : "11206",
  "phone" : "7183876643",
  "operation_hours" : "Saturday  8am-4pm",
  "location" : "Cook St.,east of Graham Ave.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.94238",
    "latitude" : "40.70235"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grahamavebid.com"
  },
  "contact" : "Betty Cooney",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "Graham Ave and Cook St",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "July 12 - October 25",
  "longitude" : "-73.94238",
  "latitude" : "40.70235",
  "snap_status" : "Y"
}
, {
  "market_name" : "Grand Army Plaza Greenmarket",
  "zip" : "11238",
  "phone" : "2127887476",
  "operation_hours" : "Saturday  8am-4pm  (Mkt also open on Wed 11/27)",
  "location" : "Flatbush Ave. & Prospect Park West",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.9695",
    "latitude" : "40.67412"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "YR",
  "city" : "Brooklyn",
  "address_line_1" : "Flatbush Ave and Grand Army Plaza",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-73.9695",
  "latitude" : "40.67412",
  "snap_status" : "Y"
}
, {
  "market_name" : "Greenpoint/ McCarren Park Greenmarket",
  "zip" : "11222",
  "phone" : "2127887476",
  "operation_hours" : "Saturday  8am-3pm",
  "location" : "Driggs St. at Union Ave.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.95269",
    "latitude" : "40.72046"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "YR",
  "city" : "Brooklyn",
  "address_line_1" : "Union Ave & Driggs Ave",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-73.95269",
  "latitude" : "40.72046",
  "snap_status" : "Y"
}
, {
  "market_name" : "Greenpoint/ McGolrick Park Farmers' Market",
  "zip" : "11222",
  "phone" : "9149234837",
  "operation_hours" : "Sunday  11am-4pm",
  "location" : "McGolrick Park,Russel St. off Nassau Ave., Brooklyn",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.94336",
    "latitude" : "40.72444"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.downtoearthmarkets.com"
  },
  "contact" : "Doug Ornstein",
  "operation_months_code" : "YR",
  "city" : "Brooklyn",
  "address_line_1" : "McGolrick Park",
  "county" : "Kings",
  "fmnp" : "N",
  "operation_season" : "Year-round",
  "longitude" : "-73.94336",
  "latitude" : "40.72444",
  "snap_status" : "Y"
}
, {
  "market_name" : "Harvest Home Coney Island Farmers' Market",
  "zip" : "11235",
  "phone" : "2128283361",
  "operation_hours" : "Wed/Fri  8am-4pm",
  "location" : "Ocean Parkway,btwn Ave Z & Shore Rd., Brooklyn",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.96578",
    "latitude" : "40.58669"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.harvesthomefm.org"
  },
  "contact" : "Maritza Owens",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "Ocean Pkwy and Avenue Z",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "June 25 - November 26",
  "longitude" : "-73.96578",
  "latitude" : "40.58669",
  "snap_status" : "Y"
}
, {
  "market_name" : "Hattie Carthan After Church Farmers' Market",
  "zip" : "11221",
  "phone" : "7186383566",
  "operation_hours" : "Sunday  1pm-6pm",
  "location" : "49 Van Buren St.,Herban Farm & Bailey's Caf?",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.94359",
    "latitude" : "40.69024"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.hattiecarthancommunitymarket.com"
  },
  "contact" : "Yonnette Fleming",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "49 Van Buren St",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "July 27 - November 23",
  "longitude" : "-73.94359",
  "latitude" : "40.69024",
  "snap_status" : "Y"
}
, {
  "market_name" : "Hattie Carthan Community Farmers' Market",
  "zip" : "11216",
  "phone" : "7186383566",
  "operation_hours" : "Saturday  9am-3pm",
  "location" : "363-365 Clifton Place,btwn Nostrand & Marcy Aves.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.94879",
    "latitude" : "40.68965"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.hattiecarthancommunitymarket.com"
  },
  "contact" : "Yonnette Fleming",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "365 Clifton Pl",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "July 12 - November 22",
  "longitude" : "-73.94879",
  "latitude" : "40.68965",
  "snap_status" : "Y"
}
, {
  "market_name" : "High School for Public Service Youth Market",
  "zip" : "11203",
  "phone" : "2125942155",
  "operation_hours" : "Wed  2:30pm-6:30pm",
  "location" : "600 Kingston Ave., Brooklynbtwn Rutland & Winthrop Aves.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.94384",
    "latitude" : "40.65866"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.hspsfarm.blogspot.com"
  },
  "contact" : "Steve Frillman",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "600 Kingston Ave",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "June 25 - October 29",
  "longitude" : "-73.94384",
  "latitude" : "40.65866",
  "snap_status" : "Y"
}
, {
  "market_name" : "Isabahlia Farmers' Market",
  "zip" : "11212",
  "phone" : "7184983174",
  "operation_hours" : "Saturday  8am-4pm",
  "location" : "Ponell Street Garden410 Livonia Ave, Brooklyn",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.90234",
    "latitude" : "40.6635"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.isabahlialoefinc.org"
  },
  "contact" : "Brenda Thompson-Duchene",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "410 Livonia Ave",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "June 28 - November 1",
  "longitude" : "-73.90234",
  "latitude" : "40.6635",
  "snap_status" : "Y"
}
, {
  "market_name" : "Kensington Youthmarket",
  "zip" : "11218",
  "phone" : "2127883818",
  "operation_hours" : "Saturday  9am-4pm",
  "location" : "Ft. Hamilton Pkwy, btwn E. 4th & E. 5th Sts.corner outside the library",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.97662",
    "latitude" : "40.64915"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org/youthmarket"
  },
  "contact" : "Jackie Bach",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "Fort Hamilton Pkwy and East 5th St",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "July 12 - November 22",
  "longitude" : "-73.97662",
  "latitude" : "40.64915",
  "snap_status" : "Y"
}
, {
  "market_name" : "Malcolm X Blvd. Community Farmers' Market",
  "zip" : "11233",
  "phone" : "7183633085",
  "operation_hours" : "Saturday  8am-3pm",
  "location" : "Jackie Robinson Park,btwn Chauncy & Marion Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.92865",
    "latitude" : "40.67975"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.brooklynrescuemission.org"
  },
  "contact" : "Rev. Robert Jackson",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "Malcolm X Blvd and Marion St",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "July 12 - November 8",
  "longitude" : "-73.92865",
  "latitude" : "40.67975",
  "snap_status" : "Y"
}
, {
  "market_name" : "Marcy Plaza Community Farmers' Market",
  "zip" : "11216",
  "phone" : "7183633085",
  "operation_hours" : "Wednesday  9am-5pm",
  "location" : "1368 Fulton Street, Bedford Stuyvesantbtwn Marcy & Brooklyn Aves., Brooklyn",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.94565",
    "latitude" : "40.68007"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.brooklynrescuemission.org"
  },
  "contact" : "Rev. Robert Jackson",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "1368 Fulton Street",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "July 9 - October 29",
  "longitude" : "-73.94565",
  "latitude" : "40.68007",
  "snap_status" : "Y"
}
, {
  "market_name" : "Park Slope Farmers' Market",
  "zip" : "11215",
  "phone" : "9149234837",
  "operation_hours" : "Sun  10am-5pm    Wed  3pm-7pm (May 14 - Nov 26)",
  "location" : "Fourth St., off Fifth Ave., near P.S. 51",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.98379",
    "latitude" : "40.6722"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.downtoearthmarkets.com"
  },
  "contact" : "Doug Ornstein",
  "operation_months_code" : "YR",
  "city" : "Brooklyn",
  "address_line_1" : "Fourth Street and Fifth Avenue",
  "county" : "Kings",
  "fmnp" : "N",
  "operation_season" : "Year-round (only Sun)",
  "longitude" : "-73.98379",
  "latitude" : "40.6722",
  "snap_status" : "N"
}
, {
  "market_name" : "PS 295 Farmers' Market",
  "zip" : "11215",
  "phone" : "9178877304",
  "operation_hours" : "Thursday  2:30pm-5pm",
  "location" : "330 18th Street,btwn 6th & 7th Avenues, Brooklyn",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.98903",
    "latitude" : "40.66141"
  },
  "state" : "NY",
  "contact" : "Jean Dykstra",
  "operation_months_code" : "P/M",
  "city" : "Brooklyn",
  "address_line_1" : "330 18th Street",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "April 17 - November 13",
  "longitude" : "-73.98903",
  "latitude" : "40.66141",
  "snap_status" : "Y"
}
, {
  "market_name" : "Sunset Park Greenmarket",
  "zip" : "11220",
  "phone" : "2127887476",
  "operation_hours" : "Saturday  8am-3pm",
  "location" : "4th Ave. btwn 59th & 60th Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.01836",
    "latitude" : "40.64081"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "4th Ave and 60th St",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "June 21 - November 22",
  "longitude" : "-74.01836",
  "latitude" : "40.64081",
  "snap_status" : "Y"
}
, {
  "market_name" : "Urban Oasis Farmers' Market",
  "zip" : "11203",
  "phone" : "7182217132",
  "operation_hours" : "Wed  2pm-5:30pm",
  "location" : "Kingsboro Psychiatric Center,681 Clarkson Ave., btwn Troy Ave & 43rd St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.93741",
    "latitude" : "40.65621"
  },
  "state" : "NY",
  "contact" : "Beatrix McLeod",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "681 Clarkson Ave",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "June 18 - November 12",
  "longitude" : "-73.93741",
  "latitude" : "40.65621",
  "snap_status" : "Y"
}
, {
  "market_name" : "Walt Shamel Farmers' Market",
  "zip" : "11217",
  "phone" : "7186854816",
  "operation_hours" : "Saturday  8am-3pm",
  "location" : "Walt Shamel Community Garden,1095 Dean St., BrooklynBetween Beford & Franklin Aves.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.95377",
    "latitude" : "40.67725"
  },
  "state" : "NY",
  "contact" : "Desiree Ortiz",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "1059 Dean Street",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "June 28 - October 25",
  "longitude" : "-73.95377",
  "latitude" : "40.67725",
  "snap_status" : "Y"
}
, {
  "market_name" : "Weeksville Heritage Center Youth Market",
  "zip" : "11213",
  "phone" : "7187565250",
  "operation_hours" : "Saturday  9am-2pm",
  "location" : "1698 Bergen St.Brooklyn",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.95661",
    "latitude" : "40.68121"
  },
  "state" : "NY",
  "contact" : "Yemi Amu",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "1698 Bergen St.",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "July 5 - October 25",
  "longitude" : "-73.95661",
  "latitude" : "40.68121",
  "snap_status" : "Y"
}
, {
  "market_name" : "Williamsburg Greenmarket",
  "zip" : "11211",
  "phone" : "2127887476",
  "operation_hours" : "Thursday  8am-4pm",
  "location" : "Roebling & South 9th St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.961",
    "latitude" : "40.70836"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "M",
  "city" : "Brooklyn",
  "address_line_1" : "Roebling Street and South 9th Street",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "July 10 - November 20",
  "longitude" : "-73.961",
  "latitude" : "40.70836",
  "snap_status" : "Y"
}
, {
  "market_name" : "Windsor Terrace PS 154 Greenmarket",
  "zip" : "11215",
  "phone" : "2127887476",
  "operation_hours" : "Sunday  9am-3pm",
  "location" : "11th Ave.,btwn Sherman St. & Windsor Place",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.97597",
    "latitude" : "40.65699"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "P/M/X",
  "city" : "Brooklyn",
  "address_line_1" : "1625 11th Avenue",
  "county" : "Kings",
  "fmnp" : "Y",
  "operation_season" : "May 11 - December 21",
  "longitude" : "-73.97597",
  "latitude" : "40.65699",
  "snap_status" : "Y"
}
, {
  "market_name" : "Lewis Co. General Hospital Farmers' Market",
  "zip" : "13367",
  "phone" : "3153765087",
  "operation_hours" : "Thursday  11am-3pm",
  "location" : "7785 N. State St., near Children's Clinic back parking lot",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.4981",
    "latitude" : "43.79588"
  },
  "state" : "NY",
  "contact" : "Tina Schell",
  "operation_months_code" : "M",
  "city" : "Lowville",
  "address_line_1" : "7785 North State St",
  "county" : "Lewis",
  "fmnp" : "Y",
  "operation_season" : "June 19 - October 2",
  "longitude" : "-75.4981",
  "latitude" : "43.79588",
  "snap_status" : "Y"
}
, {
  "market_name" : "Lowville Farmers' Market",
  "zip" : "13367",
  "phone" : "3152448616",
  "operation_hours" : "Saturday  8am-1pm",
  "location" : "Lewis County Fairgrounds,5473 Bostwick St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.49091",
    "latitude" : "43.79318"
  },
  "state" : "NY",
  "contact" : "Nichole Boucher",
  "operation_months_code" : "P/M",
  "city" : "Lowville",
  "address_line_1" : "5473 Bostwick Street",
  "county" : "Lewis",
  "fmnp" : "Y",
  "operation_season" : "May 31 - October 25",
  "longitude" : "-75.49091",
  "latitude" : "43.79318",
  "snap_status" : "Y"
}
, {
  "market_name" : "Lyons Falls Farmers' Market",
  "zip" : "13368",
  "phone" : "3153485167",
  "operation_hours" : "Tuesday  12 Noon-6pm",
  "location" : "Riverside Park,6904 Laura St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.35499",
    "latitude" : "43.61391"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.lyonsfallsalive.org"
  },
  "contact" : "Gary Mavis",
  "operation_months_code" : "M",
  "city" : "Lyons Falls",
  "address_line_1" : "6904 Laura St",
  "county" : "Lewis",
  "fmnp" : "Y",
  "operation_season" : "June 17 - October 7",
  "longitude" : "-75.35499",
  "latitude" : "43.61391",
  "snap_status" : "Y"
}
, {
  "market_name" : "Avon Farmers' Market",
  "zip" : "14414",
  "phone" : "5852268118",
  "operation_hours" : "Wednesday  3pm-6pm",
  "location" : "Tops Market,270 E. Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.73382",
    "latitude" : "42.91071"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.avonfarmersmarket.org"
  },
  "contact" : "Christine Quinlan",
  "operation_months_code" : "M",
  "city" : "Avon",
  "address_line_1" : "270 East Main St",
  "county" : "Livingston",
  "fmnp" : "Y",
  "operation_season" : "June 18 - October 15",
  "longitude" : "-77.73382",
  "latitude" : "42.91071",
  "snap_status" : "N"
}
, {
  "market_name" : "Dansville Farmers' Market",
  "zip" : "14437",
  "phone" : "5853352963",
  "operation_hours" : "Friday  11am-4pm",
  "location" : "Airport Hanger parking lot, 50 Maple St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.70836",
    "latitude" : "42.56598"
  },
  "state" : "NY",
  "contact" : "Gary Roth",
  "operation_months_code" : "M",
  "city" : "Dansville",
  "address_line_1" : "50 Maple St",
  "county" : "Livingston",
  "fmnp" : "Y",
  "operation_season" : "June 13 - October 10",
  "longitude" : "-77.70836",
  "latitude" : "42.56598",
  "snap_status" : "Y"
}
, {
  "market_name" : "Geneseo Farmers' Market",
  "zip" : "14454",
  "phone" : "5858804456",
  "operation_hours" : "Thursday  3pm-6:30pm",
  "location" : "Center St. at Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.81679",
    "latitude" : "42.79624"
  },
  "state" : "NY",
  "contact" : "Cate Concannon",
  "operation_months_code" : "M",
  "city" : "Geneseo",
  "address_line_1" : "Main St and Center St",
  "county" : "Livingston",
  "fmnp" : "Y",
  "operation_season" : "June 19 - October 16",
  "longitude" : "-77.81679",
  "latitude" : "42.79624",
  "snap_status" : "Y"
}
, {
  "market_name" : "Lima Presbyterian Church Farmers' Market",
  "zip" : "14485",
  "phone" : "5855821737",
  "operation_hours" : "Tuesday  3pm-6pm",
  "location" : "Routes 5 & 20, corner of Route 15A",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.61175",
    "latitude" : "42.90496"
  },
  "state" : "NY",
  "contact" : "Beverly Gillette",
  "operation_months_code" : "M",
  "city" : "Lima",
  "address_line_1" : "West Main St and Rochester St",
  "county" : "Livingston",
  "fmnp" : "Y",
  "operation_season" : "June 17 - October 28",
  "longitude" : "-77.61175",
  "latitude" : "42.90496",
  "snap_status" : "N"
}
, {
  "market_name" : "Mount Morris Village Farmers' Market",
  "zip" : "14510",
  "phone" : "5856584160",
  "operation_hours" : "Tuesday  12 Noon-4pm",
  "location" : "36 N Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.87658",
    "latitude" : "42.73078"
  },
  "state" : "NY",
  "contact" : "Lisa Torcello",
  "operation_months_code" : "M",
  "city" : "Mount Morris",
  "address_line_1" : "36 North Main St",
  "county" : "Livingston",
  "fmnp" : "Y",
  "operation_season" : "June 17 - October 7",
  "longitude" : "-77.87658",
  "latitude" : "42.73078",
  "snap_status" : "Y"
}
, {
  "market_name" : "Cazenovia Farmers' Market",
  "zip" : "13035",
  "phone" : "3156554429",
  "operation_hours" : "Saturday  9am-2pm",
  "location" : "Memorial ParkAlbany St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.8552",
    "latitude" : "42.92987"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.cazenoviachamber.com"
  },
  "contact" : "Aileen Randolph",
  "operation_months_code" : "P/M",
  "city" : "Cazenovia",
  "address_line_1" : "Albany St and Sullivan St",
  "county" : "Madison",
  "fmnp" : "Y",
  "operation_season" : "May 10 - November 1",
  "longitude" : "-75.8552",
  "latitude" : "42.92987",
  "snap_status" : "N"
}
, {
  "market_name" : "Cazenovia WINTER Farmers' Market",
  "zip" : "13035",
  "phone" : "3152248122",
  "operation_hours" : "Monthly, 3rd Sat 10am-1pm",
  "location" : "American Legion Hall, 26 Chenango St",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.85111",
    "latitude" : "42.9243"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.cazenoviachamber.com"
  },
  "contact" : "Andy Shepard",
  "operation_months_code" : "X/W/P",
  "city" : "Cazenovia",
  "address_line_1" : "26 Chenango Street",
  "county" : "Madison",
  "fmnp" : "N",
  "operation_season" : "November 15 - April 18",
  "longitude" : "-75.85111",
  "latitude" : "42.9243",
  "snap_status" : "N"
}
, {
  "market_name" : "Circa Restaurant WINTER Farmers Market",
  "zip" : "13035",
  "phone" : "3156558768",
  "operation_hours" : "Monthly, 1st Saturday 9am - 12 Noon",
  "location" : "76 Albany Street, Cazenovia",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.85316",
    "latitude" : "42.92963"
  },
  "state" : "NY",
  "contact" : "Alicyn Hart",
  "operation_months_code" : "X/W/P",
  "city" : "Cazenovia",
  "address_line_1" : "76 Albany Street",
  "county" : "Madison",
  "fmnp" : "N",
  "operation_season" : "December - April",
  "longitude" : "-75.85316",
  "latitude" : "42.92963",
  "snap_status" : "N"
}
, {
  "market_name" : "Hamilton Farmers' Market",
  "zip" : "13346",
  "phone" : "3158241111",
  "operation_hours" : "Saturday  8am-1pm",
  "location" : "Village Green, Broad & E. Broad Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.54436",
    "latitude" : "42.82684"
  },
  "state" : "NY",
  "contact" : "Kim Taranto",
  "operation_months_code" : "P/M",
  "city" : "Hamilton",
  "address_line_1" : "Broad St and Payne St",
  "county" : "Madison",
  "fmnp" : "Y",
  "operation_season" : "May 3 - November 1",
  "longitude" : "-75.54436",
  "latitude" : "42.82684",
  "snap_status" : "Y"
}
, {
  "market_name" : "Hamilton Parry's Hardware WINTER Farmers' Market",
  "zip" : "13346",
  "phone" : "3158240002",
  "operation_hours" : "Monthly, 3rd Saturday 8am - 12pm",
  "location" : "100 Union StreetHamilton",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.55009",
    "latitude" : "42.83406"
  },
  "state" : "NY",
  "contact" : "Gwenn Werner",
  "operation_months_code" : "X/W/P",
  "city" : "Hamilton",
  "address_line_1" : "100 Utica Street",
  "county" : "Madison",
  "fmnp" : "N",
  "operation_season" : "November - April",
  "longitude" : "-75.55009",
  "latitude" : "42.83406",
  "snap_status" : "N"
}
, {
  "market_name" : "Morrisville WINTER Farmers' Market",
  "zip" : "13408",
  "phone" : "3156843402",
  "operation_hours" : "Monthly, 1st Saturday 9am - 1pm",
  "location" : "Madison Hall, Rt. 20, Second floorNear Morrisville State College",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.64018",
    "latitude" : "42.89868"
  },
  "state" : "NY",
  "contact" : "Duane Button",
  "operation_months_code" : "X/W/P",
  "city" : "Morrisville",
  "address_line_1" : "Madison Hall Association, Morrisville, NY",
  "county" : "Madison",
  "fmnp" : "N",
  "operation_season" : "November 2 - April 5",
  "longitude" : "-75.64018",
  "latitude" : "42.89868",
  "snap_status" : "N"
}
, {
  "market_name" : "Oneida Farmers' Market",
  "zip" : "13421",
  "phone" : "3153634308",
  "operation_hours" : "Thursday  9am-2pm",
  "location" : "Oneida & Main Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.65251",
    "latitude" : "43.09617"
  },
  "state" : "NY",
  "contact" : "Marty Winchell",
  "operation_months_code" : "M",
  "city" : "Oneida",
  "address_line_1" : "Oneida Street and Main Street",
  "county" : "Madison",
  "fmnp" : "Y",
  "operation_season" : "June 5 - October 30",
  "longitude" : "-75.65251",
  "latitude" : "43.09617",
  "snap_status" : "Y"
}
, {
  "market_name" : "Poolville WINTER Farmers' Market",
  "zip" : "13346",
  "phone" : "3158241720",
  "operation_hours" : "2nd & 4th  Saturday 10am - 12 Noon",
  "location" : "Poolville Community Center (PCC), 7484 Willey Road",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.50631",
    "latitude" : "42.77282"
  },
  "state" : "NY",
  "contact" : "Susan Tallman",
  "operation_months_code" : "X/W/P",
  "city" : "Poolville",
  "address_line_1" : "7484 Willey Road",
  "county" : "Madison",
  "fmnp" : "N",
  "operation_season" : "November - April",
  "longitude" : "-75.50631",
  "latitude" : "42.77282",
  "snap_status" : "N"
}
, {
  "market_name" : "Brighton Farmers' Market",
  "zip" : "14618",
  "phone" : "5852698918",
  "operation_hours" : "Sunday  9am-1pm",
  "location" : "Brighton High School lot,1150 Winton Rd. South",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.56808",
    "latitude" : "43.12204"
  },
  "state" : "NY",
  "contact" : "Sue Gardner-Smith",
  "operation_months_code" : "P/M",
  "city" : "Rochester",
  "address_line_1" : "1150 Winton Rd South",
  "county" : "Monroe",
  "fmnp" : "Y",
  "operation_season" : "May 25 - October 26",
  "longitude" : "-77.56808",
  "latitude" : "43.12204",
  "snap_status" : "Y"
}
, {
  "market_name" : "Brighton WINTER Farmers' Market",
  "zip" : "14618",
  "phone" : "5852698918",
  "operation_hours" : "Sunday 1pm - 4pm",
  "location" : "Brookside Center220 Idlewood Rd.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.56809",
    "latitude" : "43.11275"
  },
  "state" : "NY",
  "contact" : "Sue Gardner-Smith",
  "operation_months_code" : "X/W/P",
  "city" : "Rochester",
  "address_line_1" : "220 Idlewood Road",
  "county" : "Monroe",
  "fmnp" : "N",
  "operation_season" : "November 3 - April 13",
  "longitude" : "-77.56809",
  "latitude" : "43.11275",
  "snap_status" : "N"
}
, {
  "market_name" : "Brockport Farmers' Market",
  "zip" : "14420",
  "phone" : "5856373602",
  "operation_hours" : "Sunday  8am-1pm",
  "location" : "Market St., off Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.9385",
    "latitude" : "43.21556"
  },
  "state" : "NY",
  "contact" : "Charlene Veltz",
  "operation_months_code" : "M",
  "city" : "Brockport",
  "address_line_1" : "Main St and Market St",
  "county" : "Monroe",
  "fmnp" : "Y",
  "operation_season" : "June 15 - October 26",
  "longitude" : "-77.9385",
  "latitude" : "43.21556",
  "snap_status" : "N"
}
, {
  "market_name" : "Fairport Farmers' Market",
  "zip" : "14450",
  "phone" : "5854213209",
  "operation_hours" : "Saturday  7am-12 Noon",
  "location" : "58 S. Main St., parking lotbehind Bank of America",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.44214",
    "latitude" : "43.09992"
  },
  "state" : "NY",
  "contact" : "Fritz May",
  "operation_months_code" : "P/M",
  "city" : "Fairport",
  "address_line_1" : "58 South Main St",
  "county" : "Monroe",
  "fmnp" : "Y",
  "operation_season" : "May 3 - November 22",
  "longitude" : "-77.44214",
  "latitude" : "43.09992",
  "snap_status" : "N"
}
, {
  "market_name" : "Genesee Valley RMA Farmers' Market",
  "zip" : "14623",
  "phone" : "5854244600",
  "operation_hours" : "Friday  11am-5pm",
  "location" : "Administration Bldg. (south parking lot), 900 Jefferson Rd., Henrietta",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.61401",
    "latitude" : "43.09005"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.geneseevalleyregionalmarketauthority.com"
  },
  "contact" : "William Mulligan, Jr.",
  "operation_months_code" : "M",
  "city" : "Henrietta",
  "address_line_1" : "900 Jefferson Rd.",
  "county" : "Monroe",
  "fmnp" : "Y",
  "operation_season" : "May 30 - October 31",
  "longitude" : "-77.61401",
  "latitude" : "43.09005",
  "snap_status" : "N"
}
, {
  "market_name" : "Greece Ridge Mall Farmers' Market",
  "zip" : "14626",
  "phone" : "5852251140",
  "operation_hours" : "Thu/Sat  9am-3pm",
  "location" : "Ridge & Long Pond Rds.,Sears overflow Parking Lot, Rochester",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.6959",
    "latitude" : "43.20477"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.themallatgreeceridge.com"
  },
  "contact" : "Melanie Fazio",
  "operation_months_code" : "M",
  "city" : "Greece",
  "address_line_1" : "317 Greece Ridge Center Dr",
  "county" : "Monroe",
  "fmnp" : "Y",
  "operation_season" : "June 7 - October 25",
  "longitude" : "-77.6959",
  "latitude" : "43.20477",
  "snap_status" : "N"
}
, {
  "market_name" : "Highland Park WINTER Farmers' Market",
  "zip" : "14620",
  "phone" : "5855687835",
  "operation_hours" : "Wednesday 3pm - 6pm",
  "location" : "Cornell Cooperative Ext249 Highway Ave, 14620",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.6075",
    "latitude" : "43.12867"
  },
  "state" : "NY",
  "contact" : "Del Ippolito",
  "operation_months_code" : "X/W/P",
  "city" : "Rochester",
  "address_line_1" : "249 Highland Avenue",
  "county" : "Monroe",
  "fmnp" : "N",
  "operation_season" : "November 2 - May 2",
  "longitude" : "-77.6075",
  "latitude" : "43.12867",
  "snap_status" : "Y"
}
, {
  "market_name" : "Irondequoit Farmers' Market",
  "zip" : "14617",
  "phone" : "5853366085",
  "operation_hours" : "Thursday  4pm-Dusk",
  "location" : "Town Hall Lawn, 1280 Titus Ave., Rochester",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.58154",
    "latitude" : "43.21118"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.irondequoit.org"
  },
  "contact" : "Dianne Schleifer",
  "operation_months_code" : "P/M",
  "city" : "Rochester",
  "address_line_1" : "1280 Titus Ave",
  "county" : "Monroe",
  "fmnp" : "Y",
  "operation_season" : "May 29 - October 23",
  "longitude" : "-77.58154",
  "latitude" : "43.21118",
  "snap_status" : "Y"
}
, {
  "market_name" : "Monroe Village Farmers' Market",
  "zip" : "14607",
  "phone" : "5854734470",
  "operation_hours" : "Wednesday  4pm-7pm",
  "location" : "Blessed Sacrament Church lot,534 Oxford St., Rochester",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.58914",
    "latitude" : "43.14443"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.monroevillagefarmersmarket.org"
  },
  "contact" : "Allen Krisiloff",
  "operation_months_code" : "M",
  "city" : "Rochester",
  "address_line_1" : "534 Oxford St.",
  "county" : "Monroe",
  "fmnp" : "Y",
  "operation_season" : "June 11 - October 15",
  "longitude" : "-77.58914",
  "latitude" : "43.14443",
  "snap_status" : "Y"
}
, {
  "market_name" : "North Chili Farmers' Market",
  "zip" : "14514",
  "phone" : "5852930841",
  "operation_hours" : "Saturday  8am-1pm",
  "location" : "Methodist Church, 2200 Westside Drive, Rochester",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.78969",
    "latitude" : "43.12648"
  },
  "state" : "NY",
  "contact" : "James Miller",
  "operation_months_code" : "M",
  "city" : "North Chilli",
  "address_line_1" : "2200 Westside Dr",
  "county" : "Monroe",
  "fmnp" : "Y",
  "operation_season" : "June 14 - October 25",
  "longitude" : "-77.78969",
  "latitude" : "43.12648",
  "snap_status" : "N"
}
, {
  "market_name" : "Penfield Farmers' Market",
  "zip" : "14526",
  "phone" : "5853771982",
  "operation_hours" : "Sunday 10am - 2pm",
  "location" : "Grossman's Garden & Home1801 Fairport Nine Mile Point Rd",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.44146",
    "latitude" : "43.12338"
  },
  "state" : "NY",
  "contact" : "Rebecca Ward",
  "operation_months_code" : "YR",
  "city" : "Fairport",
  "address_line_1" : "1801 Fairport 9 Mile Point Rd",
  "county" : "Monroe",
  "fmnp" : "N",
  "operation_season" : "Year-round",
  "longitude" : "-77.44146",
  "latitude" : "43.12338",
  "snap_status" : "N"
}
, {
  "market_name" : "Pittsford Farmers' Market",
  "zip" : "14618",
  "phone" : "5857338104",
  "operation_hours" : "Tue/Sat  9am-1pm",
  "location" : "Pittsford Colony Plaza,3400 Monroe Ave.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.53524",
    "latitude" : "43.10222"
  },
  "state" : "NY",
  "contact" : "Cindy Christ",
  "operation_months_code" : "P/M",
  "city" : "Rochester",
  "address_line_1" : "3400 Monroe Ave",
  "county" : "Monroe",
  "fmnp" : "Y",
  "operation_season" : "May 6 - November 25",
  "longitude" : "-77.53524",
  "latitude" : "43.10222",
  "snap_status" : "N"
}
, {
  "market_name" : "Rochester Public Market",
  "zip" : "14609",
  "phone" : "5854286907",
  "operation_hours" : "Tue/Thu  6am-1pm    Sat  5am-3pm",
  "location" : "280 N. Union St.off East Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.59016",
    "latitude" : "43.1657"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.cityofrochester.gov/publicmarket"
  },
  "contact" : "Cindy De Coste",
  "operation_months_code" : "YR",
  "city" : "Rochester",
  "address_line_1" : "280 North Union St.",
  "county" : "Monroe",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-77.59016",
  "latitude" : "43.1657",
  "snap_status" : "Y"
}
, {
  "market_name" : "Rochester/East Side WINTER Farmers' Market",
  "zip" : "14526",
  "phone" : "5853489022",
  "operation_hours" : "Tuesday 3pm - 6pm",
  "location" : "2555 Baird Rd., Penfield, NY",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.46387",
    "latitude" : "43.1347"
  },
  "state" : "NY",
  "contact" : "Mary Bartolotta",
  "operation_months_code" : "X/W/P",
  "city" : "Penfield",
  "address_line_1" : "255 Baird Road",
  "county" : "Monroe",
  "fmnp" : "N",
  "operation_season" : "November - April",
  "longitude" : "-77.46387",
  "latitude" : "43.1347",
  "snap_status" : "N"
}
, {
  "market_name" : "Rochester/South Wedge Farmers' Market",
  "zip" : "14620",
  "phone" : "5852698918",
  "operation_hours" : "Thursday  4pm-7pm",
  "location" : "100 Alexander St. lot, at S. Clinton Ave.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.60243",
    "latitude" : "43.14598"
  },
  "state" : "NY",
  "contact" : "Sue Gardner-Smith",
  "operation_months_code" : "M",
  "city" : "Rochester",
  "address_line_1" : "100 Alexander St",
  "county" : "Monroe",
  "fmnp" : "Y",
  "operation_season" : "June 12 - October 16",
  "longitude" : "-77.60243",
  "latitude" : "43.14598",
  "snap_status" : "Y"
}
, {
  "market_name" : "Rochester/Washington Square Farmers' Market",
  "zip" : "14604",
  "phone" : "5853283380",
  "operation_hours" : "Wednesday  11am-2pm",
  "location" : "Washington Square Park,181 S. Clinton Ave.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.60533",
    "latitude" : "43.15352"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.foodlinkny.org"
  },
  "contact" : "Mitch Gruber",
  "operation_months_code" : "M",
  "city" : "Rochester",
  "address_line_1" : "181 South Clinton Ave",
  "county" : "Monroe",
  "fmnp" : "Y",
  "operation_season" : "June 25 - September 3",
  "longitude" : "-77.60533",
  "latitude" : "43.15352",
  "snap_status" : "Y"
}
, {
  "market_name" : "Rochester/Westside Farmers' Market",
  "zip" : "14611",
  "phone" : "5854368999",
  "operation_hours" : "Tuesday  4pm-7:30pm",
  "location" : "St. Monica's Church parking lot,831 Genesee St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.636",
    "latitude" : "43.13373"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.westsidemarketrochester.com"
  },
  "contact" : "Jackie Farrell",
  "operation_months_code" : "M",
  "city" : "Rochester",
  "address_line_1" : "831 Genesee St",
  "county" : "Monroe",
  "fmnp" : "Y",
  "operation_season" : "June 10 - October 14",
  "longitude" : "-77.636",
  "latitude" : "43.13373",
  "snap_status" : "Y"
}
, {
  "market_name" : "Scottsville Midweek Farmers' Market",
  "zip" : "14546",
  "phone" : "5858893981",
  "operation_hours" : "Wednesday  4pm -7pm",
  "location" : "61 Main Street American Legion Pkg Lot",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.75548",
    "latitude" : "43.0193"
  },
  "state" : "NY",
  "contact" : "Marcy McCall",
  "operation_months_code" : "M",
  "city" : "Scottsville",
  "address_line_1" : "61 Main St",
  "county" : "Monroe",
  "fmnp" : "Y",
  "operation_season" : "June 4 - September 24",
  "longitude" : "-77.75548",
  "latitude" : "43.0193",
  "snap_status" : "N"
}
, {
  "market_name" : "Webster Joe Obbie Farmers' Market",
  "zip" : "14580",
  "phone" : "3155898703",
  "operation_hours" : "Wednesday  2pm - 6pmSaturday  8am - 1pm",
  "location" : "Webster Town Center,Holt & Ridge Rd.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.44665",
    "latitude" : "43.21035"
  },
  "state" : "NY",
  "contact" : "Fedele Noto",
  "operation_months_code" : "M",
  "city" : "Webster",
  "address_line_1" : "Holt Road and Ridge Road",
  "county" : "Monroe",
  "fmnp" : "Y",
  "operation_season" : "June 14 - November 1",
  "longitude" : "-77.44665",
  "latitude" : "43.21035",
  "snap_status" : "Y"
}
, {
  "market_name" : "Amsterdam Sanford Farm Farmers' Market",
  "zip" : "12010",
  "phone" : "5188636104",
  "operation_hours" : "Wednesday  3pm-6pm",
  "location" : "Sanford Stud Farm, Rt 30 Nbtwn Walmart & Walgreens",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.18542",
    "latitude" : "42.96078"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.fultonmontgomeryfarmersmarket.org"
  },
  "contact" : "Anne Marie Johnson",
  "operation_months_code" : "P/M",
  "city" : "Amsterdam",
  "address_line_1" : "110 Town Square Dr",
  "county" : "Montgomery",
  "fmnp" : "Y",
  "operation_season" : "May 14 - October 29",
  "longitude" : "-74.18542",
  "latitude" : "42.96078",
  "snap_status" : "Y"
}
, {
  "market_name" : "Canajoharie Farmers' Market",
  "zip" : "13317",
  "phone" : "5186734434",
  "operation_hours" : "Saturday  10am-1pm",
  "location" : "Arkell Museum lot,2 Erie Blvd.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.572",
    "latitude" : "42.90736"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.canajohariefarmersmarket.com"
  },
  "contact" : "Dolores Jacksland",
  "operation_months_code" : "M",
  "city" : "Canajoharie",
  "address_line_1" : "2 Erie Blvd",
  "county" : "Montgomery",
  "fmnp" : "Y",
  "operation_season" : "June 7 - October 25",
  "longitude" : "-74.572",
  "latitude" : "42.90736",
  "snap_status" : "N"
}
, {
  "market_name" : "Fort Plain Farmers' Market",
  "zip" : "13339",
  "phone" : "5189934271",
  "operation_hours" : "Thursday  1pm-5pm",
  "location" : "Parking lot on 12 Willet St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.62118",
    "latitude" : "42.93177"
  },
  "state" : "NY",
  "contact" : "Annette Bayes",
  "operation_months_code" : "P/M",
  "city" : "Fort Plain",
  "address_line_1" : "12 Willet Street",
  "county" : "Montgomery",
  "fmnp" : "Y",
  "operation_season" : "May 29 - November 27",
  "longitude" : "-74.62118",
  "latitude" : "42.93177",
  "snap_status" : "N"
}
, {
  "market_name" : "Baldwin WINTER Farmers' Market",
  "zip" : "11510",
  "phone" : "5162977997",
  "operation_hours" : "Saturday 9am - 1pm",
  "location" : "American Legion Hall2754 Grand Ave.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.6128",
    "latitude" : "40.64249"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.longislandfarmersmarkets.com"
  },
  "contact" : "Jaime Greci",
  "operation_months_code" : "X/W/P",
  "city" : "Baldwin",
  "address_line_1" : "2754 Grand Avenue",
  "county" : "Nassau",
  "fmnp" : "N",
  "operation_season" : "December 7 - April 26",
  "longitude" : "-73.6128",
  "latitude" : "40.64249",
  "snap_status" : "N"
}
, {
  "market_name" : "Crossroads Farmers' Market",
  "zip" : "11565",
  "phone" : "5162977997",
  "operation_hours" : "Thursday  10am-4pm",
  "location" : "Crossroads Farm,480 Hempstead Ave., Malverne",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.66384",
    "latitude" : "40.6805"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.longislandfarmersmarkets.com"
  },
  "contact" : "Jaime Greci",
  "operation_months_code" : "M",
  "city" : "Malverne",
  "address_line_1" : "480 Hempstead Ave",
  "county" : "Nassau",
  "fmnp" : "Y",
  "operation_season" : "June 5 - November 20",
  "longitude" : "-73.66384",
  "latitude" : "40.6805",
  "snap_status" : "N"
}
, {
  "market_name" : "Freeport Community Youth Market",
  "zip" : "11520",
  "phone" : "5163783415",
  "operation_hours" : "Saturday  11am-4pm",
  "location" : "Freeport Recreation Center Parking Lot,130 East Merrick Rd.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.57474",
    "latitude" : "40.65449"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.cedarmore.org"
  },
  "contact" : "Debra Wheat-Williams",
  "operation_months_code" : "M",
  "city" : "Freeport",
  "address_line_1" : "130 East Merrick Rd",
  "county" : "Nassau",
  "fmnp" : "Y",
  "operation_season" : "July 12 - October 25",
  "longitude" : "-73.57474",
  "latitude" : "40.65449",
  "snap_status" : "Y"
}
, {
  "market_name" : "Garden City Farmers' Market",
  "zip" : "11530",
  "phone" : "6313233653",
  "operation_hours" : "Tuesday  7am-1pm",
  "location" : "101 Co. Seat Dr., off Old Country Rd3rd parking lot behind Supreme Ct. Bldg.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.63505",
    "latitude" : "40.73609"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.longislandgrowersmarket.com"
  },
  "contact" : "Ethel Terry",
  "operation_months_code" : "P/M",
  "city" : "Garden City",
  "address_line_1" : "County Seat Dr and Supreme Court Dr",
  "county" : "Nassau",
  "fmnp" : "Y",
  "operation_season" : "May 27 - November 25",
  "longitude" : "-73.63505",
  "latitude" : "40.73609",
  "snap_status" : "N"
}
, {
  "market_name" : "Kennedy Plaza Farmers' Market",
  "zip" : "11561",
  "phone" : "6316785227",
  "operation_hours" : "Wed  10am-4pmSaturday 9am-2pm",
  "location" : "1 West Chester St., Long BeachCorner of National Blvd. & Park Ave.,",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.66594",
    "latitude" : "40.58941"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.ligreenmarket.org"
  },
  "contact" : "Bernadette Martin",
  "operation_months_code" : "P/M",
  "city" : "Long Beach",
  "address_line_1" : "1 West Chester St",
  "county" : "Nassau",
  "fmnp" : "Y",
  "operation_season" : "May 3 - November 26",
  "longitude" : "-73.66594",
  "latitude" : "40.58941",
  "snap_status" : "Y"
}
, {
  "market_name" : "Kennedy Plaza WINTER Farmers' Market",
  "zip" : "11561",
  "phone" : "5184576880",
  "operation_hours" : "Saturday 10am - 2pm",
  "location" : "Kennedy Plaza City Hall, One West Chester Street, Long Beach",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.66636",
    "latitude" : "40.5896"
  },
  "state" : "NY",
  "contact" : "TBA TBA",
  "operation_months_code" : "X/W",
  "city" : "Long Beach",
  "address_line_1" : "1 Westchester Street",
  "county" : "Nassau",
  "fmnp" : "N",
  "operation_season" : "December 7 - February 22",
  "longitude" : "-73.66636",
  "latitude" : "40.5896",
  "snap_status" : "Y"
}
, {
  "market_name" : "Kings Park Farmers' Market",
  "zip" : "11754",
  "phone" : "6316785227",
  "operation_hours" : "Sunday  9am-2pm",
  "location" : "Route 25A, Main St. Municipal LotAcross from Fire Dept., 2 Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.25243",
    "latitude" : "40.88422"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.ligreenmarket.org"
  },
  "contact" : "Bernadette Martin",
  "operation_months_code" : "P/M",
  "city" : "Kings Park",
  "address_line_1" : "1 E. Main St.",
  "county" : "Nassau",
  "fmnp" : "Y",
  "operation_season" : "May 18 - November 23",
  "longitude" : "-73.25243",
  "latitude" : "40.88422",
  "snap_status" : "Y"
}
, {
  "market_name" : "Locust Valley Farmers' Market",
  "zip" : "11560",
  "phone" : "6313233653",
  "operation_hours" : "Saturday  7am-12 Noon",
  "location" : "115 Forest Ave.across from Post Office",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.59994",
    "latitude" : "40.87555"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.longislandgrowersmarket.com"
  },
  "contact" : "Ethel Terry",
  "operation_months_code" : "M",
  "city" : "Locust Valley",
  "address_line_1" : "115 Forest Ave",
  "county" : "Nassau",
  "fmnp" : "Y",
  "operation_season" : "June 7 - November 22",
  "longitude" : "-73.59994",
  "latitude" : "40.87555",
  "snap_status" : "N"
}
, {
  "market_name" : "New Cassel Youth Market",
  "zip" : "11590",
  "phone" : "5169979399",
  "operation_hours" : "Saturday  11am-3pm",
  "location" : "First Baptist Church parking lot,211 Garden St., Westbury",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.56789",
    "latitude" : "40.76179"
  },
  "state" : "NY",
  "contact" : "Traci Caines",
  "operation_months_code" : "M",
  "city" : "Westbury",
  "address_line_1" : "211 Garden St",
  "county" : "Nassau",
  "fmnp" : "Y",
  "operation_season" : "July 12 - November 22",
  "longitude" : "-73.56789",
  "latitude" : "40.76179",
  "snap_status" : "Y"
}
, {
  "market_name" : "New Hyde Park Farmers' Market",
  "zip" : "11040",
  "phone" : "5162977997",
  "operation_hours" : "Saturday  8am-1pm",
  "location" : "Municipal parking lot,near Village Hall, 1441 Jericho Turnpike",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.68046",
    "latitude" : "40.73386"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.longislandfarmersmarkets.com"
  },
  "contact" : "Jaime Greci",
  "operation_months_code" : "P/M",
  "city" : "New Hyde Park",
  "address_line_1" : "1441 Jericho Turnpike",
  "county" : "Nassau",
  "fmnp" : "Y",
  "operation_season" : "May 31 - November 22",
  "longitude" : "-73.68046",
  "latitude" : "40.73386",
  "snap_status" : "Y"
}
, {
  "market_name" : "Port Washington Organic Farmers' Market",
  "zip" : "11050",
  "phone" : "5168830887",
  "operation_hours" : "Saturday  8am-12 Noon",
  "location" : "Port Washington Town Dock, Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.7019",
    "latitude" : "40.83153"
  },
  "state" : "NY",
  "contact" : "Patti Wood",
  "operation_months_code" : "M",
  "city" : "Port Washington",
  "address_line_1" : "Main St and Covert St",
  "county" : "Nassau",
  "fmnp" : "Y",
  "operation_season" : "June 7 - October 25",
  "longitude" : "-73.7019",
  "latitude" : "40.83153",
  "snap_status" : "N"
}
, {
  "market_name" : "Rockville Centre Farmers' Market",
  "zip" : "11570",
  "phone" : "6313233653",
  "operation_hours" : "Sunday  7am-12 Noon",
  "location" : "Sunrise Hgwy & Longbeach Rd.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.6321",
    "latitude" : "40.65712"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.longislandgrowersmarket.com"
  },
  "contact" : "Ethel Terry",
  "operation_months_code" : "P/M",
  "city" : "Rockville Centre",
  "address_line_1" : "Sunrise Hwy and Long Beach Rd",
  "county" : "Nassau",
  "fmnp" : "Y",
  "operation_season" : "May 25 - November 23",
  "longitude" : "-73.6321",
  "latitude" : "40.65712",
  "snap_status" : "N"
}
, {
  "market_name" : "Roosevelt Community Youth Market",
  "zip" : "11575",
  "phone" : "5165442955",
  "operation_hours" : "Sunday  11am-4pm",
  "location" : "380 Nassau Rd., Family Health Clinic parking lot",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.59092",
    "latitude" : "40.68185"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.rooseveltfarmersmarket.com"
  },
  "contact" : "Clara Gillens",
  "operation_months_code" : "M",
  "city" : "Roosevelt",
  "address_line_1" : "380 Nassau Rd",
  "county" : "Nassau",
  "fmnp" : "Y",
  "operation_season" : "July 13 - October 26",
  "longitude" : "-73.59092",
  "latitude" : "40.68185",
  "snap_status" : "Y"
}
, {
  "market_name" : "Roslyn-North Hills Farmers' Market",
  "zip" : "11577",
  "phone" : "6313233653",
  "operation_hours" : "Wednesday  7am-1pm",
  "location" : "Christopher Morley Park,500 Searing Town Rd.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.66277",
    "latitude" : "40.78188"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.longislandgrowersmarket.com"
  },
  "contact" : "Ethel Terry",
  "operation_months_code" : "P/ M",
  "city" : "Roslyn Heights",
  "address_line_1" : "500 Searingtown Rd",
  "county" : "Nassau",
  "fmnp" : "Y",
  "operation_season" : "May 28 - November 26",
  "longitude" : "-73.66277",
  "latitude" : "40.78188",
  "snap_status" : "N"
}
, {
  "market_name" : "Seaford Farmers' Market",
  "zip" : "11783",
  "phone" : "6313233653",
  "operation_hours" : "Saturday  7am-12 Noon",
  "location" : "Seaford Railroad Station, Parking Lot 3Sunrise Highway, Across from 7-Eleven",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.48657",
    "latitude" : "40.67572"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.longislandgrowersmarket.com"
  },
  "contact" : "Ethel Terry",
  "operation_months_code" : "P/M",
  "city" : "Seaford",
  "address_line_1" : "Seaford Railroad Station",
  "county" : "Nassau",
  "fmnp" : "Y",
  "operation_season" : "May 24 - November 22",
  "longitude" : "-73.48657",
  "latitude" : "40.67572",
  "snap_status" : "N"
}
, {
  "market_name" : "Spinney Hill Farmers' Market",
  "zip" : "11021",
  "phone" : "6316785227",
  "operation_hours" : "Sunday  10am-2pm",
  "location" : "125 Community Drive,Northshore LIJ parking lot, Great Neck",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.70454",
    "latitude" : "40.78414"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.ligreenmarket.org"
  },
  "contact" : "Bernadette Martin",
  "operation_months_code" : "M",
  "city" : "Great Neck",
  "address_line_1" : "125 Community Drive",
  "county" : "Nassau",
  "fmnp" : "Y",
  "operation_season" : "July 13 - October 26",
  "longitude" : "-73.70454",
  "latitude" : "40.78414",
  "snap_status" : "Y"
}
, {
  "market_name" : "Abingdon Square Greenmarket",
  "zip" : "10014",
  "phone" : "2127887476",
  "operation_hours" : "Saturday  8am-2pm",
  "location" : "West 12th St and 8th Ave",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.00557",
    "latitude" : "40.73691"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "YR",
  "city" : "New York",
  "address_line_1" : "Hudson St and 8th Ave",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-74.00557",
  "latitude" : "40.73691",
  "snap_status" : "Y"
}
, {
  "market_name" : "Bowling Green Greenmarket",
  "zip" : "10004",
  "phone" : "2127887476",
  "operation_hours" : "Tue/Thu  8am-5pm(Mkt open 11/27 - closed 11/28)",
  "location" : "Broadway, at Battery Place",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.01327",
    "latitude" : "40.70453"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "YR",
  "city" : "New York",
  "address_line_1" : "Broadway and Bowling Green",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-74.01327",
  "latitude" : "40.70453",
  "snap_status" : "Y"
}
, {
  "market_name" : "Broadway French Farmers' Market",
  "zip" : "10018",
  "phone" : "9143181067",
  "operation_hours" : "Tue/Wed/Fri  11am-6pm",
  "location" : "Broadway,btwn 35th & 36th Sts., Manhattan",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.98783",
    "latitude" : "40.75069"
  },
  "state" : "NY",
  "contact" : "Johanna Safar",
  "operation_months_code" : "P/M",
  "city" : "Manhattan",
  "address_line_1" : "Broadway and 35th Street",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "May 2 - November 26",
  "longitude" : "-73.98783",
  "latitude" : "40.75069",
  "snap_status" : "N"
}
, {
  "market_name" : "City Hall Park Greenmarket",
  "zip" : "10007",
  "phone" : "2127887476",
  "operation_hours" : "Tue/Fri  8am-4pm",
  "location" : "Broadway, at Chambers St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.0063",
    "latitude" : "40.71419"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "P/M/X",
  "city" : "New York",
  "address_line_1" : "Broadway and Chambers St",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "March 11 - December 23",
  "longitude" : "-74.0063",
  "latitude" : "40.71419",
  "snap_status" : "Y"
}
, {
  "market_name" : "Columbia Greenmarket",
  "zip" : "10027",
  "phone" : "2127887476",
  "operation_hours" : "Thu/Sun  8am-5pm",
  "location" : "Broadway, btwn 114th & 116th Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.96449",
    "latitude" : "40.80738"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "YR",
  "city" : "New York",
  "address_line_1" : "Broadway and West 116th St",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-73.96449",
  "latitude" : "40.80738",
  "snap_status" : "Y"
}
, {
  "market_name" : "Dag Hammarskjold Plaza Greenmarket",
  "zip" : "10017",
  "phone" : "2127887476",
  "operation_hours" : "Wednesday  8am-4pm",
  "location" : "E. 47th St.,btwn 2nd & First Aves.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.96989",
    "latitude" : "40.75298"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "YR",
  "city" : "New York",
  "address_line_1" : "East 47th St and Second Ave",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-73.96989",
  "latitude" : "40.75298",
  "snap_status" : "Y"
}
, {
  "market_name" : "Downtown PATH Greenmarket",
  "zip" : "10007",
  "phone" : "2127887476",
  "operation_hours" : "Tuesday  8am-6pm",
  "location" : "West Broadway,btwn Barclay & Park Place",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.00765",
    "latitude" : "40.71257"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "YR",
  "city" : "New York",
  "address_line_1" : "Broadway and Park Pl",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-74.00765",
  "latitude" : "40.71257",
  "snap_status" : "N"
}
, {
  "market_name" : "East 82 St./St. Stephens Greenmarket",
  "zip" : "10028",
  "phone" : "2127887476",
  "operation_hours" : "Saturday  9am-2:30pm",
  "location" : "82nd St., btwn First & York Aves.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.9506",
    "latitude" : "40.77394"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "YR",
  "city" : "New York",
  "address_line_1" : "408 East 82nd Street",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-73.9506",
  "latitude" : "40.77394",
  "snap_status" : "Y"
}
, {
  "market_name" : "East 92 St. Greenmarket",
  "zip" : "10128",
  "phone" : "2127887476",
  "operation_hours" : "Sunday  9am-4pm",
  "location" : "First Ave.,btwn 92nd & 93rd Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.94658",
    "latitude" : "40.78071"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "M",
  "city" : "New York",
  "address_line_1" : "East 92nd St and First Ave",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "June 22 - November 23",
  "longitude" : "-73.94658",
  "latitude" : "40.78071",
  "snap_status" : "Y"
}
, {
  "market_name" : "Fort Washington Greenmarket",
  "zip" : "10032",
  "phone" : "2127887476",
  "operation_hours" : "Tuesday  8am-4pm",
  "location" : "Fort Washington Ave. & 168th St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.94229",
    "latitude" : "40.84217"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "M",
  "city" : "New York",
  "address_line_1" : "Fort Washington Ave and West 168th St",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "June 3 - November 25",
  "longitude" : "-73.94229",
  "latitude" : "40.84217",
  "snap_status" : "Y"
}
, {
  "market_name" : "Grass Roots Farmers' Market",
  "zip" : "10030",
  "phone" : "9175158046",
  "operation_hours" : "Sat/Tue  9am-4pm",
  "location" : "Jackie Robinson Park, 145th St., Manhattanbtwn Edgecomb & Bradhurst Aves.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.94385",
    "latitude" : "40.82365"
  },
  "state" : "NY",
  "contact" : "Fred Wilson",
  "operation_months_code" : "M",
  "city" : "New York",
  "address_line_1" : "West 145th St and Edgecombe Ave",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "July 12 - November 25",
  "longitude" : "-73.94385",
  "latitude" : "40.82365",
  "snap_status" : "Y"
}
, {
  "market_name" : "Hamilton Heights Green Youth Market",
  "zip" : "10031",
  "phone" : "2122837044",
  "operation_hours" : "Wednesday  11am-5pm",
  "location" : "Johnny Hartman PlazaAmsterdam Ave., btwn 143rd & 144th Streets, Manhattan",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.94855",
    "latitude" : "40.82396"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.brotherhood-sistersol.org"
  },
  "contact" : "Lorisse Bentine",
  "operation_months_code" : "M",
  "city" : "Manhattan",
  "address_line_1" : "143rd Street and Amsterdam Ave",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "July 2 - November 26",
  "longitude" : "-73.94855",
  "latitude" : "40.82396",
  "snap_status" : "Y"
}
, {
  "market_name" : "Harlem State Office Building Farmers' Market",
  "zip" : "10027",
  "phone" : "6463517611",
  "operation_hours" : "Tuesday  10am-7pm",
  "location" : "163 W 125 St,Adam Clayton Powell Jr. State Office Bldg",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.94755",
    "latitude" : "40.80898"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.125thstreetfarmersmarket.com"
  },
  "contact" : "Tupacamaru Tiwoni",
  "operation_months_code" : "M",
  "city" : "New York",
  "address_line_1" : "163 West 125 Street",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "June 10 - November 25",
  "longitude" : "-73.94755",
  "latitude" : "40.80898",
  "snap_status" : "Y"
}
, {
  "market_name" : "Harvest Home East Harlem Farmers' Market",
  "zip" : "10029",
  "phone" : "2128283361",
  "operation_hours" : "Tue/Thu  8am-4pm",
  "location" : "E. 104th St. & Third Ave.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.94564",
    "latitude" : "40.79024"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.harvesthomefm.org"
  },
  "contact" : "Maritza Owens",
  "operation_months_code" : "M",
  "city" : "New York",
  "address_line_1" : "East 104th St and Third Ave",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "June 26 - November 25",
  "longitude" : "-73.94564",
  "latitude" : "40.79024",
  "snap_status" : "N"
}
, {
  "market_name" : "Harvest Home Harlem Hospital Farmers' Market",
  "zip" : "10037",
  "phone" : "2128283361",
  "operation_hours" : "Friday  8am-4pm",
  "location" : "506 Lenox Ave., btwn W 135th & W 137th Aves., Manhattan",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.93985",
    "latitude" : "40.81539"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.harvesthomefm.org"
  },
  "contact" : "Maritza Owens",
  "operation_months_code" : "M",
  "city" : "New York",
  "address_line_1" : "137th Street and Lennox Avenue",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "June 27 - November 21",
  "longitude" : "-73.93985",
  "latitude" : "40.81539",
  "snap_status" : "Y"
}
, {
  "market_name" : "Harvest Home Lenox Ave. Farmers' Market",
  "zip" : "10027",
  "phone" : "2128283361",
  "operation_hours" : "Saturday  8am-4pm",
  "location" : "Lenox Ave btwn W 117th & W 118th Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.9489",
    "latitude" : "40.80295"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.harvesthomefm.org"
  },
  "contact" : "Maritza Owens",
  "operation_months_code" : "M",
  "city" : "New York",
  "address_line_1" : "150 Lenox Avenue",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "June 28 - November 22",
  "longitude" : "-73.9489",
  "latitude" : "40.80295",
  "snap_status" : "Y"
}
, {
  "market_name" : "Harvest Home Metropolitan Farmers' Market",
  "zip" : "10029",
  "phone" : "2128283361",
  "operation_hours" : "Friday  8am-4pm",
  "location" : "99th St. & 3rd Ave.,Manhattan",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.94792",
    "latitude" : "40.78713"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.harvesthomefm.org"
  },
  "contact" : "Maritza Owens",
  "operation_months_code" : "M",
  "city" : "New York",
  "address_line_1" : "East 99th St and Third Ave",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "June 27 - November 21",
  "longitude" : "-73.94792",
  "latitude" : "40.78713",
  "snap_status" : "Y"
}
, {
  "market_name" : "Harvest Home West Harlem Farmers' Market",
  "zip" : "10031",
  "phone" : "2128283361",
  "operation_hours" : "Tuesday  8am-4pm",
  "location" : "137th St. & Broadway,Manhattan",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.95404",
    "latitude" : "40.82136"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.harvesthomefm.org"
  },
  "contact" : "Maritza Owens",
  "operation_months_code" : "M",
  "city" : "New York",
  "address_line_1" : "137th St and Broadway",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "June 24 - November 25",
  "longitude" : "-73.95404",
  "latitude" : "40.82136",
  "snap_status" : "Y"
}
, {
  "market_name" : "Herban Farmers' Market at Mt. Morris",
  "zip" : "10027",
  "phone" : "6463517611",
  "operation_hours" : "Saturday  10am-5pm",
  "location" : "Marcus Garvey Parkat 124th St. & 5th Ave.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.9449",
    "latitude" : "40.80502"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.125thstreetfarmersmarket.com"
  },
  "contact" : "Tupacamaru Tiwoni",
  "operation_months_code" : "M",
  "city" : "New York",
  "address_line_1" : "18 Mt Morris Park W",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "June 28 - November 15",
  "longitude" : "-73.9449",
  "latitude" : "40.80502",
  "snap_status" : "Y"
}
, {
  "market_name" : "Inwood Park Greenmarket",
  "zip" : "10034",
  "phone" : "2127887476",
  "operation_hours" : "Saturday  8am-3pm",
  "location" : "Isham St., btwn Seaman & Cooper Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.9209",
    "latitude" : "40.86988"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "YR",
  "city" : "New York",
  "address_line_1" : "Isham St and Seaman St",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-73.9209",
  "latitude" : "40.86988",
  "snap_status" : "Y"
}
, {
  "market_name" : "La Marqueta Farmers' Market",
  "zip" : "10029",
  "phone" : "2123123621",
  "operation_hours" : "Thu - Sat 8am - 5pm",
  "location" : "East 115th St. & Park Ave., East Harlem1590 Park Ave",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.94388",
    "latitude" : "40.79868"
  },
  "state" : "NY",
  "contact" : "Lisa Thompson",
  "operation_months_code" : "YR",
  "city" : "New York",
  "address_line_1" : "East 115th St and Park Ave",
  "county" : "New York",
  "fmnp" : "N",
  "operation_season" : "Year-round",
  "longitude" : "-73.94388",
  "latitude" : "40.79868",
  "snap_status" : "N"
}
, {
  "market_name" : "Lower East Side Youthmarket",
  "zip" : "10002",
  "phone" : "2127883818",
  "operation_hours" : "Thursday  1pm-7pm",
  "location" : "Grand St. btwn Pitt & Bialystoker Sts.,Manhattan",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.9843",
    "latitude" : "40.71523"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org/youthmarket"
  },
  "contact" : "Jackie Bach",
  "operation_months_code" : "M",
  "city" : "New York",
  "address_line_1" : "Grand St and Pitt St",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "July 10 - November 20",
  "longitude" : "-73.9843",
  "latitude" : "40.71523",
  "snap_status" : "Y"
}
, {
  "market_name" : "Morningside Park Farmers' Market",
  "zip" : "10025",
  "phone" : "9149234837",
  "operation_hours" : "Saturday  9am-5pm",
  "location" : "W. 110th St. & Manhattan Ave.,Manhattan",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.95965",
    "latitude" : "40.80116"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.downtoearthmarkets.com"
  },
  "contact" : "Doug Ornstein",
  "operation_months_code" : "P/M/X",
  "city" : "New York",
  "address_line_1" : "West 110th St and Manhattan Ave",
  "county" : "New York",
  "fmnp" : "N",
  "operation_season" : "May 24 - December 6",
  "longitude" : "-73.95965",
  "latitude" : "40.80116",
  "snap_status" : "Y"
}
, {
  "market_name" : "Mount Sinai Hospital Greenmarket",
  "zip" : "10029",
  "phone" : "2127887476",
  "operation_hours" : "Wednesday  8am-5pm",
  "location" : "Madison Ave. at 99th St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.95276",
    "latitude" : "40.78918"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "M",
  "city" : "New York",
  "address_line_1" : "East 99th St and Madison Ave",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "June 25 - November 26",
  "longitude" : "-73.95276",
  "latitude" : "40.78918",
  "snap_status" : "Y"
}
, {
  "market_name" : "Port Authority Bus Terminal Greenmarket",
  "zip" : "10036",
  "phone" : "2127887476",
  "operation_hours" : "Thursday  8am-5pm",
  "location" : "42nd St. & 8th Ave.,inside Bus Terminal",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.98979",
    "latitude" : "40.75723"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "YR",
  "city" : "New York",
  "address_line_1" : "8th Ave and West 42nd St",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-73.98979",
  "latitude" : "40.75723",
  "snap_status" : "N"
}
, {
  "market_name" : "Project EATS Frederick Douglas Houses Farmers' Market",
  "zip" : "10025",
  "phone" : "2126121528",
  "operation_hours" : "Saturday  10am-2pm",
  "location" : "Frederick Douglass Houses,101 Street, btwn Columbus & Amsterdam Aves., Manhattan",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.96822",
    "latitude" : "40.79703"
  },
  "state" : "NY",
  "contact" : "Kadeesha Williams",
  "operation_months_code" : "P/M",
  "city" : "New York",
  "address_line_1" : "830 Amsterdam Ave",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "May 31 - November 22",
  "longitude" : "-73.96822",
  "latitude" : "40.79703",
  "snap_status" : "N"
}
, {
  "market_name" : "PS 11 WINTER Farmers' Market",
  "zip" : "10011",
  "phone" : "9176530594",
  "operation_hours" : "Monthly, Wednesday 8am - 10am",
  "location" : "320 West 21st St., Manhattan",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.00073",
    "latitude" : "40.74455"
  },
  "state" : "NY",
  "contact" : "Deborah Osbourne",
  "operation_months_code" : "X/W/P",
  "city" : "New York",
  "address_line_1" : "320 West 21st Street",
  "county" : "New York",
  "fmnp" : "N",
  "operation_season" : "December - April",
  "longitude" : "-74.00073",
  "latitude" : "40.74455",
  "snap_status" : "Y"
}
, {
  "market_name" : "Rockefeller Center Greenmarket",
  "zip" : "10112",
  "phone" : "2127887476",
  "operation_hours" : "Wed/Thu/Fri  8am-5pm",
  "location" : "Rockefeller Plaza, at 50th St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.97846",
    "latitude" : "40.75907"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "M",
  "city" : "New York",
  "address_line_1" : "Rockefeller Plaza and West 50th St",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "July 23 - August 29",
  "longitude" : "-73.97846",
  "latitude" : "40.75907",
  "snap_status" : "N"
}
, {
  "market_name" : "Saint Mark's Church Greenmarket",
  "zip" : "10003",
  "phone" : "2127887476",
  "operation_hours" : "Tuesday  8am-6pm",
  "location" : "E. 10th St., at 2nd Ave.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.98682",
    "latitude" : "40.72975"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "M",
  "city" : "New York",
  "address_line_1" : "East 10th St and Second Ave",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "June 3 - November 25",
  "longitude" : "-73.98682",
  "latitude" : "40.72975",
  "snap_status" : "Y"
}
, {
  "market_name" : "SoHA Square Farmers' Market",
  "zip" : "10026",
  "phone" : "6312137642",
  "operation_hours" : "Thu/Fri  11am-7pm",
  "location" : "W. 117th St. & 8th Ave., Manhattan2171 Frederick Douglass Blvd.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.95487",
    "latitude" : "40.80511"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.sohasquare.com"
  },
  "contact" : "Tiffany Simone",
  "operation_months_code" : "M/X",
  "city" : "Manhattan",
  "address_line_1" : "W 117th and Frederick Douglass Blvd",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "June 5 - December 18",
  "longitude" : "-73.95487",
  "latitude" : "40.80511",
  "snap_status" : "Y"
}
, {
  "market_name" : "Staten Island Ferry Whitehall Greenmarket",
  "zip" : "10005",
  "phone" : "2127887476",
  "operation_hours" : "Tue/Fri  8am-7pm",
  "location" : "4 South St., inside Ferry Terminal Bldg.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.01213",
    "latitude" : "40.70155"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "YR",
  "city" : "New York",
  "address_line_1" : "4 South St",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-74.01213",
  "latitude" : "40.70155",
  "snap_status" : "Y"
}
, {
  "market_name" : "Stuyvesant Town Greenmarket",
  "zip" : "10009",
  "phone" : "2127887476",
  "operation_hours" : "Sunday  9:30am-4pm",
  "location" : "Stuyvesant Town,14th St. loop & Ave. A (southend of Oval)",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.97889",
    "latitude" : "40.73108"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "P/M/X",
  "city" : "New York",
  "address_line_1" : "1 Stuyvesant Oval",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "May 4 - November 23",
  "longitude" : "-73.97889",
  "latitude" : "40.73108",
  "snap_status" : "Y"
}
, {
  "market_name" : "Tompkins Square Greenmarket",
  "zip" : "10009",
  "phone" : "2127887476",
  "operation_hours" : "Sunday  9am-6pm",
  "location" : "Tompkins Square Park,Ave. A & E. 7th St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.98353",
    "latitude" : "40.72602"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "YR",
  "city" : "New York",
  "address_line_1" : "Avenue A and East 7th St",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-73.98353",
  "latitude" : "40.72602",
  "snap_status" : "Y"
}
, {
  "market_name" : "Tribeca Greenmarket",
  "zip" : "10007",
  "phone" : "2127887476",
  "operation_hours" : "Wed/Sat  8am-3pm(Wed 3/12-12/24)",
  "location" : "Greenwich St.,btwn Chambers & Duane Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.01097",
    "latitude" : "40.7163"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "YR",
  "city" : "New York",
  "address_line_1" : "Greenwich St and Chambers St",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-74.01097",
  "latitude" : "40.7163",
  "snap_status" : "Y"
}
, {
  "market_name" : "Tucker Square Greenmarket",
  "zip" : "10023",
  "phone" : "2127887476",
  "operation_hours" : "Thu/Sat  8am-5pm",
  "location" : "Columbus Ave., at 66th Street",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.98158",
    "latitude" : "40.77361"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "YR",
  "city" : "New York",
  "address_line_1" : "Columbus and West 66th St",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-73.98158",
  "latitude" : "40.77361",
  "snap_status" : "Y"
}
, {
  "market_name" : "Union Square Greenmarket",
  "zip" : "10003",
  "phone" : "2127887476",
  "operation_hours" : "M/W/F/Sat  8am-6pm",
  "location" : "E. 17th St. & Broadway",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.99029",
    "latitude" : "40.73712"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "YR",
  "city" : "New York",
  "address_line_1" : "Broadway and West 17th St",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-73.99029",
  "latitude" : "40.73712",
  "snap_status" : "Y"
}
, {
  "market_name" : "West 175th St. Greenmarket",
  "zip" : "10033",
  "phone" : "2127887476",
  "operation_hours" : "Thursday  8am-5pm",
  "location" : "175th St. btwn Wadsworth & Broadway",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.93847",
    "latitude" : "40.84622"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "M",
  "city" : "New York",
  "address_line_1" : "West 175th St and Broadway",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "June 26 - November 20",
  "longitude" : "-73.93847",
  "latitude" : "40.84622",
  "snap_status" : "Y"
}
, {
  "market_name" : "West 57th St. Greenmarket",
  "zip" : "10019",
  "phone" : "2127887476",
  "operation_hours" : "Sat/Wed  8am-5pm  (Wed opens May 7)",
  "location" : "Ninth Ave., btwn 56th & 57th Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.98572",
    "latitude" : "40.76792"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "P/M/X",
  "city" : "New York",
  "address_line_1" : "West 57th St and Ninth Ave",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "April 19 - December 20",
  "longitude" : "-73.98572",
  "latitude" : "40.76792",
  "snap_status" : "Y"
}
, {
  "market_name" : "West 79th St. Greenmarket",
  "zip" : "10024",
  "phone" : "2127887476",
  "operation_hours" : "Sunday  9am-5pm",
  "location" : "Columbus Ave., W. 78th &  W. 81st Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.97548",
    "latitude" : "40.78195"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "YR",
  "city" : "New York",
  "address_line_1" : "West 79th St and Columbus Ave",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-73.97548",
  "latitude" : "40.78195",
  "snap_status" : "Y"
}
, {
  "market_name" : "West 97th Street Greenmarket",
  "zip" : "10025",
  "phone" : "2127887476",
  "operation_hours" : "Friday  8am-2pm",
  "location" : "97th St.,btwn Amsterdam & Columbus Aves.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.96701",
    "latitude" : "40.79356"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "YR",
  "city" : "New York",
  "address_line_1" : "West 97th St and Columbus Ave",
  "county" : "New York",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-73.96701",
  "latitude" : "40.79356",
  "snap_status" : "Y"
}
, {
  "market_name" : "Lockport Farmers' Market",
  "zip" : "14094",
  "phone" : "7164396776",
  "operation_hours" : "Daily  9am-9pm",
  "location" : "South lot on Walnut St.West of Pine St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-78.69197",
    "latitude" : "43.16882"
  },
  "state" : "NY",
  "contact" : "Richelle Pasceri",
  "operation_months_code" : "YR",
  "city" : "Lockport",
  "address_line_1" : "Walnut St and Pine St",
  "county" : "Niagara",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-78.69197",
  "latitude" : "43.16882",
  "snap_status" : "N"
}
, {
  "market_name" : "Middleport Community Farmers' Market",
  "zip" : "14105",
  "phone" : "7165149645",
  "operation_hours" : "Wednesday  2pm-6pm",
  "location" : "7 Eleven parking lot, 81 Rochester Rd.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-78.48445",
    "latitude" : "43.20528"
  },
  "state" : "NY",
  "contact" : "Lynn & Stacey McAvoy",
  "operation_months_code" : "M",
  "city" : "Middleport",
  "address_line_1" : "81 Rochester Road",
  "county" : "Niagara",
  "fmnp" : "Y",
  "operation_season" : "June 11 - October 29",
  "longitude" : "-78.48445",
  "latitude" : "43.20528",
  "snap_status" : "Y"
}
, {
  "market_name" : "Niagara Falls City Market",
  "zip" : "14301",
  "phone" : "7167540798",
  "operation_hours" : "Mon/Wed/Fri  9am-5pm",
  "location" : "Pine Ave., Market Squarebtwn 18th & 19th Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-79.04017",
    "latitude" : "43.0951"
  },
  "state" : "NY",
  "contact" : "Victor Muto",
  "operation_months_code" : "YR",
  "city" : "Niagara Falls",
  "address_line_1" : "Pine Ave and 18th St",
  "county" : "Niagara",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-79.04017",
  "latitude" : "43.0951",
  "snap_status" : "N"
}
, {
  "market_name" : "North Tonawanda City Farmers' Market",
  "zip" : "14120",
  "phone" : "7168306025",
  "operation_hours" : "Tue/Thu/Sat  7am-1pm",
  "location" : "Robinson & Bryant Streets (Corner)",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-78.86971",
    "latitude" : "43.03386"
  },
  "state" : "NY",
  "contact" : "John Long",
  "operation_months_code" : "YR",
  "city" : "North Tonawanda",
  "address_line_1" : "Robinson St and Bryant Street",
  "county" : "Niagara",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-78.86971",
  "latitude" : "43.03386",
  "snap_status" : "Y"
}
, {
  "market_name" : "City of Sherrill Farmers' Market",
  "zip" : "13461",
  "phone" : "3153636525",
  "operation_hours" : "Tuesday  12 Noon-5pm",
  "location" : "377 Sherrill Rd, Next to the Gazebo",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.5984",
    "latitude" : "43.0725"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.sherrillny.org/farmersmarket"
  },
  "contact" : "Sara Getman",
  "operation_months_code" : "M",
  "city" : "Sherrill",
  "address_line_1" : "Sherrill Rd and Park St",
  "county" : "Oneida",
  "fmnp" : "Y",
  "operation_season" : "June 10 - October 7",
  "longitude" : "-75.5984",
  "latitude" : "43.0725",
  "snap_status" : "N"
}
, {
  "market_name" : "Clinton Farmers' Market",
  "zip" : "13323",
  "phone" : "3158531735",
  "operation_hours" : "Thursday  10am-4pm",
  "location" : "Village Green,West Park Row",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.37883",
    "latitude" : "43.04823"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.clintonnychamber.org"
  },
  "contact" : "Ferris Betrus Jr.",
  "operation_months_code" : "M",
  "city" : "Clinton",
  "address_line_1" : "College St and West Park Row",
  "county" : "Oneida",
  "fmnp" : "Y",
  "operation_season" : "June 5 - October 16",
  "longitude" : "-75.37883",
  "latitude" : "43.04823",
  "snap_status" : "N"
}
, {
  "market_name" : "Oneida County Public Market",
  "zip" : "13501",
  "phone" : "3157983639",
  "operation_hours" : "Saturday  9am-1pm",
  "location" : "Downtown Utica, 321 Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.223",
    "latitude" : "43.10364"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.oneidacountymarket.com"
  },
  "contact" : "Elizabeth Irons",
  "operation_months_code" : "P/M",
  "city" : "Utica",
  "address_line_1" : "1st St. and Main St.",
  "county" : "Oneida",
  "fmnp" : "Y",
  "operation_season" : "May 17 - October 25",
  "longitude" : "-75.223",
  "latitude" : "43.10364",
  "snap_status" : "Y"
}
, {
  "market_name" : "Oneida County WINTER Public Market",
  "zip" : "13501",
  "phone" : "3157985800",
  "operation_hours" : "Saturday 9am - 1pmBi-weekly, Nov - DecMonthly, 2nd Sat, Jan-Apr",
  "location" : "Inside Historic Union Station, Downtown Utica",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.2239",
    "latitude" : "43.10393"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.oneidacountymarket.com"
  },
  "contact" : "Brian Noonan",
  "operation_months_code" : "X/W/P",
  "city" : "Utica",
  "address_line_1" : "321 Main Street",
  "county" : "Oneida",
  "fmnp" : "N",
  "operation_season" : "November 8 - April 11",
  "longitude" : "-75.2239",
  "latitude" : "43.10393",
  "snap_status" : "Y"
}
, {
  "market_name" : "Rome Vendors Market",
  "zip" : "13440",
  "phone" : "3153395182",
  "operation_hours" : "Friday  9am-5pm",
  "location" : "101 W. Dominick St.,Berkshire Bank parking lot",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.46034",
    "latitude" : "43.21208"
  },
  "state" : "NY",
  "contact" : "Judith Wagner",
  "operation_months_code" : "P/M",
  "city" : "Rome",
  "address_line_1" : "101 West Dominick Street",
  "county" : "Oneida",
  "fmnp" : "Y",
  "operation_season" : "May 2 - November 7",
  "longitude" : "-75.46034",
  "latitude" : "43.21208",
  "snap_status" : "Y"
}
, {
  "market_name" : "Trenton Farmers' Market",
  "zip" : "13354",
  "phone" : "3158654423",
  "operation_hours" : "Saturday  9am-1pm",
  "location" : "Village Green, Holland Patent",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.25754",
    "latitude" : "43.24132"
  },
  "state" : "NY",
  "contact" : "Nick Keblish",
  "operation_months_code" : "M",
  "city" : "Holland Patent",
  "address_line_1" : "Main St and Church St",
  "county" : "Oneida",
  "fmnp" : "Y",
  "operation_season" : "June 14 - October 11",
  "longitude" : "-75.25754",
  "latitude" : "43.24132",
  "snap_status" : "Y"
}
, {
  "market_name" : "Utica Farmers' Market",
  "zip" : "13501",
  "phone" : "3157920114",
  "operation_hours" : "Wednesday  8am-5pm",
  "location" : "Chancellor Park, Elizabeth Street",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.22483",
    "latitude" : "43.10043"
  },
  "state" : "NY",
  "contact" : "Thalia Hunter",
  "operation_months_code" : "M",
  "city" : "Utica",
  "address_line_1" : "Bleeker St and 1st St",
  "county" : "Oneida",
  "fmnp" : "Y",
  "operation_season" : "June 4 - November 5",
  "longitude" : "-75.22483",
  "latitude" : "43.10043",
  "snap_status" : "Y"
}
, {
  "market_name" : "Vernon Center Park Farmers' Market",
  "zip" : "13476",
  "phone" : "3153359635",
  "operation_hours" : "Thursday  12 Noon - 5:30pm",
  "location" : "Route 26,Vernon Center",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.53837",
    "latitude" : "43.07713"
  },
  "state" : "NY",
  "contact" : "Tom Geer",
  "operation_months_code" : "M",
  "city" : "Vernon",
  "address_line_1" : "8 Ruth Street",
  "county" : "Oneida",
  "fmnp" : "N",
  "operation_season" : "June 6 - October 10",
  "longitude" : "-75.53837",
  "latitude" : "43.07713",
  "snap_status" : "N"
}
, {
  "market_name" : "Village of Waterville Farmers' Market",
  "zip" : "13480",
  "phone" : "3157505785",
  "operation_hours" : "Wednesday  11am-6pm",
  "location" : "122 Barton Ave.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.37875",
    "latitude" : "42.91417"
  },
  "state" : "NY",
  "contact" : "Debra Atkinson",
  "operation_months_code" : "M",
  "city" : "Waterville",
  "address_line_1" : "Village Green",
  "county" : "Oneida",
  "fmnp" : "Y",
  "operation_season" : "June 4 - October 29",
  "longitude" : "-75.37875",
  "latitude" : "42.91417",
  "snap_status" : "N"
}
, {
  "market_name" : "Westmoreland Farmers' Market",
  "zip" : "13490",
  "phone" : "3158535901",
  "operation_hours" : "Sat  9am-12 Noon    Sun  9am-1pm",
  "location" : "Seymour's Diner,Route 233",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.41752",
    "latitude" : "43.16332"
  },
  "state" : "NY",
  "contact" : "Denise & Bernie Szarek",
  "operation_months_code" : "M",
  "city" : "Westmoreland",
  "address_line_1" : "4834 State Route 233",
  "county" : "Oneida",
  "fmnp" : "Y",
  "operation_season" : "June 1 - October 5",
  "longitude" : "-75.41752",
  "latitude" : "43.16332",
  "snap_status" : "N"
}
, {
  "market_name" : "Westmoreland WINTER Farmers' Market",
  "zip" : "13490",
  "phone" : "3158535901",
  "operation_hours" : "Monthly, 1st Saturday 9am - 12 Noon",
  "location" : "Fire House Station, Station Rd.Westmoreland, 13490",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.40006",
    "latitude" : "43.11626"
  },
  "state" : "NY",
  "contact" : "Denise & Bernie Szarek",
  "operation_months_code" : "X/W/P",
  "city" : "Westmoreland",
  "address_line_1" : "1 Station Road",
  "county" : "Oneida",
  "fmnp" : "N",
  "operation_season" : "November - April",
  "longitude" : "-75.40006",
  "latitude" : "43.11626",
  "snap_status" : "N"
}
, {
  "market_name" : "Downtown Syracuse Farmers' Market",
  "zip" : "13202",
  "phone" : "3154228284",
  "operation_hours" : "Tuesday  7am-3pm",
  "location" : "Clinton Square",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.15354",
    "latitude" : "43.05054"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.downtownsyracuse.com"
  },
  "contact" : "Charles McFadden",
  "operation_months_code" : "M",
  "city" : "Syracuse",
  "address_line_1" : "Clinton St and Water St",
  "county" : "Onondaga",
  "fmnp" : "N",
  "operation_season" : "June 10 - October 14",
  "longitude" : "-76.15354",
  "latitude" : "43.05054",
  "snap_status" : "Y"
}
, {
  "market_name" : "Fayetteville Farmers' Market",
  "zip" : "13066",
  "phone" : "3156912327",
  "operation_hours" : "Thursday  3pm-7pm",
  "location" : "Fayetteville Town Center",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.00504",
    "latitude" : "43.0295"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.fayettevillefarmersmarketcny.com"
  },
  "contact" : "Stephanie Lipsey",
  "operation_months_code" : "M",
  "city" : "Fayetteville",
  "address_line_1" : "102 Salt Springs Road",
  "county" : "Onondaga",
  "fmnp" : "Y",
  "operation_season" : "June 5 - October 30",
  "longitude" : "-76.00504",
  "latitude" : "43.0295",
  "snap_status" : "N"
}
, {
  "market_name" : "Liverpool Bayberry Plaza Farmers' Market",
  "zip" : "13090",
  "phone" : "3156521463",
  "operation_hours" : "Wednesday  8am-3pm",
  "location" : "Kinney lot, 7608 Oswego Rd.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.22751",
    "latitude" : "43.14036"
  },
  "state" : "NY",
  "contact" : "Sheila Perrotti",
  "operation_months_code" : "P/M",
  "city" : "Liverpool",
  "address_line_1" : "Blackberry Rd and Oswego Rd",
  "county" : "Onondaga",
  "fmnp" : "Y",
  "operation_season" : "May 15 - November 1",
  "longitude" : "-76.22751",
  "latitude" : "43.14036",
  "snap_status" : "N"
}
, {
  "market_name" : "Skaneateles Farmers' Market",
  "zip" : "13152",
  "phone" : "3157279320",
  "operation_hours" : "Thursday  3:30-6:30   Saturday 10am-1pm",
  "location" : "One East Austin StreetAustin Park Pavilion",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.4309",
    "latitude" : "42.95089"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.townofskaneateles.com"
  },
  "contact" : "Sue Murphy",
  "operation_months_code" : "P/M",
  "city" : "Skaneateles",
  "address_line_1" : "Austin St and Jordan St",
  "county" : "Onondaga",
  "fmnp" : "Y",
  "operation_season" : "May 15 - October 11",
  "longitude" : "-76.4309",
  "latitude" : "42.95089",
  "snap_status" : "N"
}
, {
  "market_name" : "Syracuse Farm Fresh Mobile Market",
  "zip" : "13205",
  "phone" : "3154758136",
  "operation_hours" : "Mon-Fri  9am-5pm",
  "location" : "(315) 345-0600 www.ssinterfaithcdc.orgContact for locations & times",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.13779",
    "latitude" : "42.99798"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.southsideinterfaithcdc.org"
  },
  "contact" : "Diane Turner",
  "operation_months_code" : "YR",
  "city" : "Syracuse",
  "address_line_1" : "Syracuse Inner-city Neighborhoods",
  "county" : "Onondaga",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-76.13779",
  "latitude" : "42.99798",
  "snap_status" : "Y"
}
, {
  "market_name" : "Syracuse/CNY Regional Market",
  "zip" : "13208",
  "phone" : "3154228647",
  "operation_hours" : "Sat/Sun  7am-2pmThu 7am-2pm - May-Nov",
  "location" : "2100 Park St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.16835",
    "latitude" : "43.07269"
  },
  "state" : "NY",
  "contact" : "Eugene Elemos",
  "operation_months_code" : "YR",
  "city" : "Syracuse",
  "address_line_1" : "Park St and Farmers Market Pl",
  "county" : "Onondaga",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-76.16835",
  "latitude" : "43.07269",
  "snap_status" : "Y"
}
, {
  "market_name" : "Canandaigua Farmers' Market",
  "zip" : "14424",
  "phone" : "5853297666",
  "operation_hours" : "Sat  8:30am-12:30pm",
  "location" : "Mills & Bemon Sts.,East side of Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.27837",
    "latitude" : "42.88534"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.canandaiguafarmersmarket.com"
  },
  "contact" : "Phillip Munson",
  "operation_months_code" : "M",
  "city" : "Canandaigua",
  "address_line_1" : "Beeman St and Mill St",
  "county" : "Ontario",
  "fmnp" : "Y",
  "operation_season" : "June 7 - October 25",
  "longitude" : "-77.27837",
  "latitude" : "42.88534",
  "snap_status" : "N"
}
, {
  "market_name" : "Geneva Farmers' Market",
  "zip" : "14456",
  "phone" : "3157897811",
  "operation_hours" : "Thursday  7am-1:30pm",
  "location" : "Municipal parking lot, Exchange St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.98096",
    "latitude" : "42.8691"
  },
  "state" : "NY",
  "contact" : "Marie Milligan",
  "operation_months_code" : "M",
  "city" : "Geneva",
  "address_line_1" : "400 Exchange St",
  "county" : "Ontario",
  "fmnp" : "Y",
  "operation_season" : "June 12 - October 23",
  "longitude" : "-76.98096",
  "latitude" : "42.8691",
  "snap_status" : "N"
}
, {
  "market_name" : "VA Farmers' Market Canandaigua",
  "zip" : "14424",
  "phone" : "5853937803",
  "operation_hours" : "Tuesday  1:30pm-5:00pm",
  "location" : "VA Medical Center, 400 Fort Hill Ave., Canandaigua",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.27033",
    "latitude" : "42.90096"
  },
  "state" : "NY",
  "contact" : "Debbie Brahm",
  "operation_months_code" : "M",
  "city" : "Canandaigua",
  "address_line_1" : "400 Fort Hill Ave",
  "county" : "Ontario",
  "fmnp" : "Y",
  "operation_season" : "June 17 - October 14",
  "longitude" : "-77.27033",
  "latitude" : "42.90096",
  "snap_status" : "N"
}
, {
  "market_name" : "Victor Farmers' Market",
  "zip" : "14564",
  "phone" : "5857425073",
  "operation_hours" : "Wednesday  3pm-7pm",
  "location" : "Village Hall Parking Lot,60 East Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.40859",
    "latitude" : "42.98134"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.victorldc.org"
  },
  "contact" : "Kathy Rayburn",
  "operation_months_code" : "M",
  "city" : "Victor",
  "address_line_1" : "60 East Main St",
  "county" : "Ontario",
  "fmnp" : "N",
  "operation_season" : "June 4 - October 29",
  "longitude" : "-77.40859",
  "latitude" : "42.98134",
  "snap_status" : "N"
}
, {
  "market_name" : "Goshen Farmers' Market",
  "zip" : "10924",
  "phone" : "8452947741",
  "operation_hours" : "Friday  10am-5pm",
  "location" : "Village Square",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.32408",
    "latitude" : "41.40219"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.goshennychamber.com"
  },
  "contact" : "Lynn Cione",
  "operation_months_code" : "P/M",
  "city" : "Goshen",
  "address_line_1" : "Main St and Church St",
  "county" : "Orange",
  "fmnp" : "Y",
  "operation_season" : "May 23 - October 31",
  "longitude" : "-74.32408",
  "latitude" : "41.40219",
  "snap_status" : "N"
}
, {
  "market_name" : "Middletown Farmers' Market",
  "zip" : "10940",
  "phone" : "8453438075",
  "operation_hours" : "Saturday  8am-1pm",
  "location" : "Erie Way, btwn Montgomery & Cottage Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.41459",
    "latitude" : "41.44814"
  },
  "state" : "NY",
  "contact" : "Anne Kelly",
  "operation_months_code" : "M",
  "city" : "Middletown",
  "address_line_1" : "32-48 Cottage Street",
  "county" : "Orange",
  "fmnp" : "Y",
  "operation_season" : "June 7 - October 25",
  "longitude" : "-74.41459",
  "latitude" : "41.44814",
  "snap_status" : "N"
}
, {
  "market_name" : "Newburgh Mall Farmers' Market",
  "zip" : "12550",
  "phone" : "8455641400",
  "operation_hours" : "Saturday  10am-2pm",
  "location" : "Newburgh Mall Parking lot",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.0714",
    "latitude" : "41.51758"
  },
  "state" : "NY",
  "contact" : "Katie Levato",
  "operation_months_code" : "M",
  "city" : "Newburgh",
  "address_line_1" : "1401 New York 300",
  "county" : "Orange",
  "fmnp" : "Y",
  "operation_season" : "July 5 - September 27",
  "longitude" : "-74.0714",
  "latitude" : "41.51758",
  "snap_status" : "N"
}
, {
  "market_name" : "Newburgh/Downing Park Farmers' Market",
  "zip" : "12550",
  "phone" : "8455655559",
  "operation_hours" : "Friday  10am-3pm",
  "location" : "Rt. 9W & Rt. 52 Robinson Ave. & South St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.02051",
    "latitude" : "41.50754"
  },
  "state" : "NY",
  "contact" : "Anthony Sculley",
  "operation_months_code" : "M",
  "city" : "Newburgh",
  "address_line_1" : "Robinson Ave and South St",
  "county" : "Orange",
  "fmnp" : "Y",
  "operation_season" : "July 11 - October 31",
  "longitude" : "-74.02051",
  "latitude" : "41.50754",
  "snap_status" : "Y"
}
, {
  "market_name" : "Newburgh/Healthy Orange Farmers' Market",
  "zip" : "12550",
  "phone" : "8455685247",
  "operation_hours" : "Tuesday  10am-2pm",
  "location" : "House of Refuge parking lot,131 Broadway",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.01254",
    "latitude" : "41.50009"
  },
  "state" : "NY",
  "contact" : "Meg Oakes",
  "operation_months_code" : "M",
  "city" : "Newburgh",
  "address_line_1" : "131 Broadway",
  "county" : "Orange",
  "fmnp" : "Y",
  "operation_season" : "July 1 - October 14",
  "longitude" : "-74.01254",
  "latitude" : "41.50009",
  "snap_status" : "N"
}
, {
  "market_name" : "Pine Bush Farmers' Market",
  "zip" : "12566",
  "phone" : "8459780273",
  "operation_hours" : "Saturday  9am-2pm",
  "location" : "62 Main St., municipal parking lotbehind Town Hall",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.30034",
    "latitude" : "41.60953"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.pinebushfarmersmarket.com"
  },
  "contact" : "Jacquelyn Carter",
  "operation_months_code" : "P/M",
  "city" : "Pine Bush",
  "address_line_1" : "62 Main St",
  "county" : "Orange",
  "fmnp" : "Y",
  "operation_season" : "May 31 - October 18",
  "longitude" : "-74.30034",
  "latitude" : "41.60953",
  "snap_status" : "N"
}
, {
  "market_name" : "Pine Island WINTER Farmers' Market",
  "zip" : "10969",
  "phone" : "8452588152",
  "operation_hours" : "2nd & 3rd Saturday 10am - 3pm",
  "location" : "W. Rogowski Farm327-329 Glenwood Rd, Pine Island",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.47705",
    "latitude" : "41.27899"
  },
  "state" : "NY",
  "contact" : "Wendy Vandercliff",
  "operation_months_code" : "X/W",
  "city" : "Pine Island",
  "address_line_1" : "327 Glenwood Road",
  "county" : "Orange",
  "fmnp" : "N",
  "operation_season" : "December - March",
  "longitude" : "-74.47705",
  "latitude" : "41.27899",
  "snap_status" : "N"
}
, {
  "market_name" : "Village of Chester Farmers' Market",
  "zip" : "10918",
  "phone" : "8454766241",
  "operation_hours" : "Sunday  9am-3pm",
  "location" : "1 Winkler Place",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.27068",
    "latitude" : "41.36259"
  },
  "state" : "NY",
  "contact" : "Kerri-Ann Lynch",
  "operation_months_code" : "M",
  "city" : "Chester",
  "address_line_1" : "Winkler Place",
  "county" : "Orange",
  "fmnp" : "Y",
  "operation_season" : "June 1 - October 26",
  "longitude" : "-74.27068",
  "latitude" : "41.36259",
  "snap_status" : "N"
}
, {
  "market_name" : "Walden Farmers' Market",
  "zip" : "12586",
  "phone" : "8454766241",
  "operation_hours" : "Thursday  2pm-7pm",
  "location" : "Village Square",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.1895",
    "latitude" : "41.55983"
  },
  "state" : "NY",
  "contact" : "Kerri-Ann Lynch",
  "operation_months_code" : "M",
  "city" : "Walden",
  "address_line_1" : "5 Scofield St",
  "county" : "Orange",
  "fmnp" : "Y",
  "operation_season" : "June 19 - October 2",
  "longitude" : "-74.1895",
  "latitude" : "41.55983",
  "snap_status" : "Y"
}
, {
  "market_name" : "Warwick Valley Farmers' Market",
  "zip" : "10990",
  "phone" : "8459860043",
  "operation_hours" : "Sunday  9am-2pm",
  "location" : "South St. parking lot, Municipal lot, 1 block east of Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.35858",
    "latitude" : "41.25656"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.warwickvalleyfarmersmarket.org"
  },
  "contact" : "Penny Steyer",
  "operation_months_code" : "P/M",
  "city" : "Warwick",
  "address_line_1" : "South St and Bank St",
  "county" : "Orange",
  "fmnp" : "Y",
  "operation_season" : "May 11 - November 23",
  "longitude" : "-74.35858",
  "latitude" : "41.25656",
  "snap_status" : "N"
}
, {
  "market_name" : "West Point/Town of Highlands Farmers' Market",
  "zip" : "10928",
  "phone" : "8454462459",
  "operation_hours" : "Sunday  9am-2pm",
  "location" : "Main St, Municipal lot, across from Visitor's Center",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.96434",
    "latitude" : "41.3723"
  },
  "state" : "NY",
  "contact" : "Joanne Devereaux",
  "operation_months_code" : "M",
  "city" : "Highlands",
  "address_line_1" : "Main St and Cozzens Ave",
  "county" : "Orange",
  "fmnp" : "Y",
  "operation_season" : "June 15 - October 26",
  "longitude" : "-73.96434",
  "latitude" : "41.3723",
  "snap_status" : "N"
}
, {
  "market_name" : "Albion/Orleans County Farmers' Market",
  "zip" : "14411",
  "phone" : "5857983986",
  "operation_hours" : "Saturday  9am-2pm",
  "location" : "Save-A-Lot-parking lot, 320 West Ave.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-78.20337",
    "latitude" : "43.24081"
  },
  "state" : "NY",
  "contact" : "Ann Nice",
  "operation_months_code" : "M",
  "city" : "Albion",
  "address_line_1" : "320 West Ave",
  "county" : "Orleans",
  "fmnp" : "Y",
  "operation_season" : "June 7 - November 1",
  "longitude" : "-78.20337",
  "latitude" : "43.24081",
  "snap_status" : "N"
}
, {
  "market_name" : "Medina/Orleans County Farmers' Market",
  "zip" : "14103",
  "phone" : "5857983986",
  "operation_hours" : "Thursday  12 Noon-5pm",
  "location" : "Erie Canal Basin - municipal parking lot behind main street",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-78.387",
    "latitude" : "43.22167"
  },
  "state" : "NY",
  "contact" : "Ann Nice",
  "operation_months_code" : "M",
  "city" : "Medina",
  "address_line_1" : "Main St and Manilla Pl",
  "county" : "Orleans",
  "fmnp" : "Y",
  "operation_season" : "June 12 - October 30",
  "longitude" : "-78.387",
  "latitude" : "43.22167",
  "snap_status" : "N"
}
, {
  "market_name" : "Fulton Farmers' Market",
  "zip" : "13069",
  "phone" : "3153457681",
  "operation_hours" : "Saturday  8am-1pm",
  "location" : "Canalview Park & Shop lot, South Second St. (Rt. 481)",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.41577",
    "latitude" : "43.32321"
  },
  "state" : "NY",
  "contact" : "Nate Emmons",
  "operation_months_code" : "P/M",
  "city" : "Fulton",
  "address_line_1" : "South Second St and Canalview Mall",
  "county" : "Oswego",
  "fmnp" : "Y",
  "operation_season" : "May 24 - October 25",
  "longitude" : "-76.41577",
  "latitude" : "43.32321",
  "snap_status" : "Y"
}
, {
  "market_name" : "Hillside Farmers' Market",
  "zip" : "13142",
  "phone" : "3152984085",
  "operation_hours" : "Friday 10am-2pm    Sat/Sun  9am-5pm",
  "location" : "7753 State Route 3 (Seaway Trail), Pulaski",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.17348",
    "latitude" : "43.58759"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.hillsidefleamarkets.com"
  },
  "contact" : "Dennis Palmer",
  "operation_months_code" : "P/M",
  "city" : "Pulaski",
  "address_line_1" : "7753 State Route 3",
  "county" : "Oswego",
  "fmnp" : "Y",
  "operation_season" : "May 3 - September 28",
  "longitude" : "-76.17348",
  "latitude" : "43.58759",
  "snap_status" : "N"
}
, {
  "market_name" : "New Haven Farmers' Market",
  "zip" : "13121",
  "phone" : "3159633900",
  "operation_hours" : "Monday  3pm-6pm",
  "location" : "Town Hall,Route 104",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.31714",
    "latitude" : "43.47981"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.newhavenny.com"
  },
  "contact" : "Debra Allen",
  "operation_months_code" : "M",
  "city" : "New Haven",
  "address_line_1" : "4279 State Route 104",
  "county" : "Oswego",
  "fmnp" : "Y",
  "operation_season" : "June 2 - September 15",
  "longitude" : "-76.31714",
  "latitude" : "43.47981",
  "snap_status" : "N"
}
, {
  "market_name" : "Oswego Farmers' Market",
  "zip" : "13126",
  "phone" : "3153457681",
  "operation_hours" : "Thursday  4:30pm-8pm",
  "location" : "West First St.,btwn Bridge & W. Oneida Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.51127",
    "latitude" : "43.45656"
  },
  "state" : "NY",
  "contact" : "Nate Emmons",
  "operation_months_code" : "P/M",
  "city" : "Oswego",
  "address_line_1" : "West Bridge St and West 1st St",
  "county" : "Oswego",
  "fmnp" : "Y",
  "operation_season" : "May 22 - October 9",
  "longitude" : "-76.51127",
  "latitude" : "43.45656",
  "snap_status" : "Y"
}
, {
  "market_name" : "Pulaski Farmers' Market",
  "zip" : "13142",
  "phone" : "3152986407",
  "operation_hours" : "Friday  4pm-8pm",
  "location" : "South Park, Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.12813",
    "latitude" : "43.56714"
  },
  "state" : "NY",
  "contact" : "Brian Leary",
  "operation_months_code" : "M",
  "city" : "Pulaski",
  "address_line_1" : "Lake St and Broad St",
  "county" : "Oswego",
  "fmnp" : "Y",
  "operation_season" : "June 6 - September 26",
  "longitude" : "-76.12813",
  "latitude" : "43.56714",
  "snap_status" : "N"
}
, {
  "market_name" : "Volney Farmers' Market",
  "zip" : "13069",
  "phone" : "3155938288",
  "operation_hours" : "Tuesday  3pm-6pm",
  "location" : "State Route 3",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.35841",
    "latitude" : "43.34151"
  },
  "state" : "NY",
  "contact" : "Barbara MacEwen",
  "operation_months_code" : "M",
  "city" : "Fulton",
  "address_line_1" : "1445 Co. Rt. 6",
  "county" : "Oswego",
  "fmnp" : "Y",
  "operation_season" : "June 3 - September 30",
  "longitude" : "-76.35841",
  "latitude" : "43.34151",
  "snap_status" : "N"
}
, {
  "market_name" : "Cooperstown Farmers' Market",
  "zip" : "13326",
  "phone" : "6075478881",
  "operation_hours" : "Saturday  9am-2pmTuesday 12 Noon-5pm, Jul-Aug(Jan-Apr, Sat Only, 10am-2pm)",
  "location" : "Pioneer Alley, 101 Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.92526",
    "latitude" : "42.70001"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.cooperstownfarmersmarket.org"
  },
  "contact" : "Ellen Pope",
  "operation_months_code" : "YR",
  "city" : "Cooperstown",
  "address_line_1" : "101 Main St",
  "county" : "Otsego",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-74.92526",
  "latitude" : "42.70001",
  "snap_status" : "Y"
}
, {
  "market_name" : "Morris Farmers' Market",
  "zip" : "13808",
  "phone" : "6072635423",
  "operation_hours" : "Thursday  3pm-6pm",
  "location" : "Main St.,behind Firehouse",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.24686",
    "latitude" : "42.54813"
  },
  "state" : "NY",
  "contact" : "Paul Tourtellotte",
  "operation_months_code" : "P/M",
  "city" : "Morris",
  "address_line_1" : "Main St and Church St",
  "county" : "Otsego",
  "fmnp" : "Y",
  "operation_season" : "May 29 - October 9",
  "longitude" : "-75.24686",
  "latitude" : "42.54813",
  "snap_status" : "N"
}
, {
  "market_name" : "Oneonta Farmers' Market",
  "zip" : "13820",
  "phone" : "6074370158",
  "operation_hours" : "Saturday  9am-1pm",
  "location" : "Main St. Plaza (Rt. 7)near Key Bank, 202 Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.06185",
    "latitude" : "42.454"
  },
  "state" : "NY",
  "contact" : "Dana LaCroix",
  "operation_months_code" : "P/M/X",
  "city" : "Oneonta",
  "address_line_1" : "202 Main Street",
  "county" : "Otsego",
  "fmnp" : "Y",
  "operation_season" : "May 17 - October 25",
  "longitude" : "-75.06185",
  "latitude" : "42.454",
  "snap_status" : "N"
}
, {
  "market_name" : "Oneonta WINTER Farmers' Market",
  "zip" : "13820",
  "phone" : "6074370158",
  "operation_hours" : "Saturday 9am-1pmEvery Saturday, Nov 1-Dec 202nd & 4th Saturday, Jan-May",
  "location" : "Main St. Garage Walkwaynear Latte Lounge, 196 Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.06202",
    "latitude" : "42.45386"
  },
  "state" : "NY",
  "contact" : "Dana LaCroix",
  "operation_months_code" : "W/P",
  "city" : "Oneonta",
  "address_line_1" : "196 Main Street",
  "county" : "Otsego",
  "fmnp" : "N",
  "operation_season" : "November - May",
  "longitude" : "-75.06202",
  "latitude" : "42.45386",
  "snap_status" : "N"
}
, {
  "market_name" : "Richfield Springs Area Farmers' Market",
  "zip" : "13439",
  "phone" : "3158582703",
  "operation_hours" : "Thursday  2pm-6pm    Saturday 8am - 1pm",
  "location" : "Spring Park, Main St. (Rt. 20)across from Post Office",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.98512",
    "latitude" : "42.85342"
  },
  "state" : "NY",
  "contact" : "Ronald Bayzon",
  "operation_months_code" : "M",
  "city" : "Richfield Springs",
  "address_line_1" : "Main St and Church St",
  "county" : "Otsego",
  "fmnp" : "Y",
  "operation_season" : "June 21 - October 25",
  "longitude" : "-74.98512",
  "latitude" : "42.85342",
  "snap_status" : "N"
}
, {
  "market_name" : "Brewster Farmers' Market",
  "zip" : "10509",
  "phone" : "9146716262",
  "operation_hours" : "Wed/Sat  9am-2pm",
  "location" : "Municipal lot, 208 E. Main St., Rts. 22 & 6 & 202",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.60705",
    "latitude" : "41.39526"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.brewsterfarmersmarket.org"
  },
  "contact" : "K.C. Anderson",
  "operation_months_code" : "M",
  "city" : "Brewster",
  "address_line_1" : "208 E. Main St",
  "county" : "Putnam",
  "fmnp" : "Y",
  "operation_season" : "June 11 - November 22",
  "longitude" : "-73.60705",
  "latitude" : "41.39526",
  "snap_status" : "N"
}
, {
  "market_name" : "Cold Spring Farmers' Market",
  "zip" : "10516",
  "phone" : "8452145441",
  "operation_hours" : "Saturday  8:30am-1:30pm",
  "location" : "1601 Rt 9D, Boscobel House & Gardens",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.9377",
    "latitude" : "41.41038"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.csfmmarket.org"
  },
  "contact" : "Krystal Ford",
  "operation_months_code" : "P/M",
  "city" : "Cold Spring",
  "address_line_1" : "1601 State Route 9D",
  "county" : "Putnam",
  "fmnp" : "Y",
  "operation_season" : "May 10 - November 22",
  "longitude" : "-73.9377",
  "latitude" : "41.41038",
  "snap_status" : "N"
}
, {
  "market_name" : "Cold Spring WINTER Farmers' Market",
  "zip" : "10516",
  "phone" : "8452145441",
  "operation_hours" : "Saturday  8:30am-1:30pm",
  "location" : "St. Mary's Church, Parish Hall",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.95478",
    "latitude" : "41.42005"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.csfmmarket.org"
  },
  "contact" : "Krystal Ford",
  "operation_months_code" : "X/W/P",
  "city" : "Cold Spring",
  "address_line_1" : "Main and Chesnut",
  "county" : "Putnam",
  "fmnp" : "N",
  "operation_season" : "November - April",
  "longitude" : "-73.95478",
  "latitude" : "41.42005",
  "snap_status" : "N"
}
, {
  "market_name" : "Astoria Greenmarket",
  "zip" : "11106",
  "phone" : "2127887476",
  "operation_hours" : "Wednesday  8am-3pm",
  "location" : "14th St., btwn 31st Ave. & 31st Rd.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.93203",
    "latitude" : "40.76825"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "M",
  "city" : "Astoria",
  "address_line_1" : "14th St and 31st Ave",
  "county" : "Queens",
  "fmnp" : "Y",
  "operation_season" : "July 9 - November 26",
  "longitude" : "-73.93203",
  "latitude" : "40.76825",
  "snap_status" : "Y"
}
, {
  "market_name" : "Corona Greenmarket",
  "zip" : "11368",
  "phone" : "2127887476",
  "operation_hours" : "Friday  8am-3pm",
  "location" : "Roosevelt Ave. at 103rd St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.86271",
    "latitude" : "40.74988"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "M",
  "city" : "Corona",
  "address_line_1" : "Roosevelt Ave and 103rd St",
  "county" : "Queens",
  "fmnp" : "Y",
  "operation_season" : "July 11 - November 21",
  "longitude" : "-73.86271",
  "latitude" : "40.74988",
  "snap_status" : "Y"
}
, {
  "market_name" : "Culinary Kids Farmers' Market",
  "zip" : "11691",
  "phone" : "3473210423",
  "operation_hours" : "Saturday  10am-3pm",
  "location" : "30-15 Seagirt Blvd. & Beach 31 St.,Far Rockaway",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.76384",
    "latitude" : "40.59581"
  },
  "state" : "NY",
  "contact" : "Malisa Rivera",
  "operation_months_code" : "M",
  "city" : "Far Rockaway",
  "address_line_1" : "Seagirt Blvd and Beach 31st St",
  "county" : "Queens",
  "fmnp" : "Y",
  "operation_season" : "June 7 - September 27",
  "longitude" : "-73.76384",
  "latitude" : "40.59581",
  "snap_status" : "Y"
}
, {
  "market_name" : "Elmhurst Hospital Greenmarket",
  "zip" : "11373",
  "phone" : "2127887476",
  "operation_hours" : "Tuesday  8am-4pm",
  "location" : "41st Ave.,btwn 80th & 81st Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.88548",
    "latitude" : "40.7458"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "M/X",
  "city" : "Elmhurst",
  "address_line_1" : "41st Ave and 80th St",
  "county" : "Queens",
  "fmnp" : "Y",
  "operation_season" : "June 3 - December 23",
  "longitude" : "-73.88548",
  "latitude" : "40.7458",
  "snap_status" : "Y"
}
, {
  "market_name" : "Farm Rockaway Farmers' Market",
  "zip" : "11692",
  "phone" : "3473210423",
  "operation_hours" : "Saturday  10am-5pm",
  "location" : "Farm Rockaway, Averne444 Beach 58th St. & Beach Channel Dr.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.78804",
    "latitude" : "40.59446"
  },
  "state" : "NY",
  "contact" : "Marion Moses",
  "operation_months_code" : "M",
  "city" : "Queens",
  "address_line_1" : "58th Street and Beach Channel Drive",
  "county" : "Queens",
  "fmnp" : "Y",
  "operation_season" : "June 21 - September 27",
  "longitude" : "-73.78804",
  "latitude" : "40.59446",
  "snap_status" : "Y"
}
, {
  "market_name" : "Forest Hills Greenmarket",
  "zip" : "11375",
  "phone" : "2127887476",
  "operation_hours" : "Sunday  8am-3pm",
  "location" : "South side of Queens Blvd at 70th Ave.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.84639",
    "latitude" : "40.72188"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "YR",
  "city" : "Queens",
  "address_line_1" : "Queens Blvd and 70th Ave",
  "county" : "Queens",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-73.84639",
  "latitude" : "40.72188",
  "snap_status" : "Y"
}
, {
  "market_name" : "Jackson Heights Greenmarket",
  "zip" : "11372",
  "phone" : "2127887476",
  "operation_hours" : "Sunday  8am- 3pm",
  "location" : "34th Ave. btwn 77th & 78th Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.88968",
    "latitude" : "40.7532"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "YR",
  "city" : "Jackson Heights",
  "address_line_1" : "34th Ave and 77th St",
  "county" : "Queens",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-73.88968",
  "latitude" : "40.7532",
  "snap_status" : "Y"
}
, {
  "market_name" : "Jamaica Farmers' Market",
  "zip" : "11432",
  "phone" : "9149234837",
  "operation_hours" : "Fri/Sat  8:30am-4pm",
  "location" : "160th St. off Jamaica Ave.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.79914",
    "latitude" : "40.70374"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.downtoearthmarkets.com"
  },
  "contact" : "Doug Ornstein",
  "operation_months_code" : "M",
  "city" : "Jamaica",
  "address_line_1" : "160th St and Jamaica Ave",
  "county" : "Queens",
  "fmnp" : "N",
  "operation_season" : "June 20 - November 22",
  "longitude" : "-73.79914",
  "latitude" : "40.70374",
  "snap_status" : "Y"
}
, {
  "market_name" : "Joseph Addabbo FHC Farmers' Market",
  "zip" : "11692",
  "phone" : "7189457150",
  "operation_hours" : "Saturday  8am-2pm",
  "location" : "Family Health Center parking lot,6200 Beach Channel Dr, Arverne, Queens",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.79174",
    "latitude" : "40.59322"
  },
  "state" : "NY",
  "contact" : "Viviana Fajardo",
  "operation_months_code" : "M",
  "city" : "Arverne",
  "address_line_1" : "6200 Beach Channel Dr",
  "county" : "Queens",
  "fmnp" : "Y",
  "operation_season" : "July 12 - November 22",
  "longitude" : "-73.79174",
  "latitude" : "40.59322",
  "snap_status" : "N"
}
, {
  "market_name" : "Long Island City Youthmarket",
  "zip" : "11101",
  "phone" : "2127883818",
  "operation_hours" : "Saturday  9am-4pm",
  "location" : "Vernon Blvd. btwn 47th & 48th Aves.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.9537",
    "latitude" : "40.74401"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org/youthmarket"
  },
  "contact" : "Jackie Bach",
  "operation_months_code" : "M",
  "city" : "Long Island City",
  "address_line_1" : "Vernon Blvd and 48th Ave",
  "county" : "Queens",
  "fmnp" : "Y",
  "operation_season" : "July 12 - November 22",
  "longitude" : "-73.9537",
  "latitude" : "40.74401",
  "snap_status" : "Y"
}
, {
  "market_name" : "Pomonok Farmers' Market",
  "zip" : "11365",
  "phone" : "7185916060",
  "operation_hours" : "Wed  9am-4pm",
  "location" : "QCH Pomonok Center, 67-09 Kissena Blvd., Flushing",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.8141",
    "latitude" : "40.73513"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.qchnyc.org"
  },
  "contact" : "Amy Tam-Liao",
  "operation_months_code" : "M",
  "city" : "Flushing",
  "address_line_1" : "67-09 Kissena Blvd",
  "county" : "Queens",
  "fmnp" : "Y",
  "operation_season" : "July 9 - November 26",
  "longitude" : "-73.8141",
  "latitude" : "40.73513",
  "snap_status" : "Y"
}
, {
  "market_name" : "Queens Botanical Garden Farmers' Market",
  "zip" : "11355",
  "phone" : "9149234837",
  "operation_hours" : "Friday  8:30am-4pm",
  "location" : "Sidewalk outside Garden, Dahlia Ave.,off Main St., Flushing",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.82636",
    "latitude" : "40.75186"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.downtoearthmarkets.com"
  },
  "contact" : "Doug Ornstein",
  "operation_months_code" : "M",
  "city" : "Flushing",
  "address_line_1" : "Main St and Dahlia Ave",
  "county" : "Queens",
  "fmnp" : "N",
  "operation_season" : "June 20 - November 21",
  "longitude" : "-73.82636",
  "latitude" : "40.75186",
  "snap_status" : "Y"
}
, {
  "market_name" : "Ridgewood Youthmarket",
  "zip" : "11385",
  "phone" : "2127883818",
  "operation_hours" : "Saturday  10am-3pm",
  "location" : "Myrtle & Cyrpess Aves.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.90619",
    "latitude" : "40.70011"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org/youthmarket"
  },
  "contact" : "Jackie Bach",
  "operation_months_code" : "M",
  "city" : "Ridgewood",
  "address_line_1" : "Myrtle Ave and Cypress Ave",
  "county" : "Queens",
  "fmnp" : "Y",
  "operation_season" : "July 12 - November 22",
  "longitude" : "-73.90619",
  "latitude" : "40.70011",
  "snap_status" : "Y"
}
, {
  "market_name" : "Rockaway Beach Youthmarket",
  "zip" : "11692",
  "phone" : "2127883818",
  "operation_hours" : "Saturday  11am-3pm",
  "location" : "Rockaway Beach Blvd. & Beach 67th St.,Arverne (Far Rockaway)",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.79707",
    "latitude" : "40.59087"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org/youthmarket"
  },
  "contact" : "Jackie Bach",
  "operation_months_code" : "M",
  "city" : "Arverne",
  "address_line_1" : "2-99-2-1 Beach 68th St",
  "county" : "Queens",
  "fmnp" : "Y",
  "operation_season" : "July 12 - August 30",
  "longitude" : "-73.79707",
  "latitude" : "40.59087",
  "snap_status" : "Y"
}
, {
  "market_name" : "Socrates Sculpture Park Greenmarket",
  "zip" : "11106",
  "phone" : "2127887476",
  "operation_hours" : "Saturday  8am-4pm",
  "location" : "Vernon Blvd. & Broadway",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.93618",
    "latitude" : "40.76769"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "M",
  "city" : "Astoria",
  "address_line_1" : "Vernon Blvd and Broadway",
  "county" : "Queens",
  "fmnp" : "Y",
  "operation_season" : "June 7 - November 22",
  "longitude" : "-73.93618",
  "latitude" : "40.76769",
  "snap_status" : "Y"
}
, {
  "market_name" : "Sunnyside Greenmarket",
  "zip" : "11104",
  "phone" : "2127887476",
  "operation_hours" : "Saturday  8am-3pm",
  "location" : "Skillman Ave.,btwn 42nd & 43rd Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.92173",
    "latitude" : "40.74699"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "P/M/X",
  "city" : "Sunnyside",
  "address_line_1" : "Skillman Ave and 42nd St",
  "county" : "Queens",
  "fmnp" : "Y",
  "operation_season" : "May 10 - December 20",
  "longitude" : "-73.92173",
  "latitude" : "40.74699",
  "snap_status" : "Y"
}
, {
  "market_name" : "Capital District Veggie Mobile - Rensselaer",
  "zip" : "12180",
  "phone" : "5182748685",
  "operation_hours" : "Tue - Thur, Sat",
  "location" : "Contact for locations & times518-274-8685  or visit www.cdcg.org",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.69551",
    "latitude" : "42.72484"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.cdcg.org"
  },
  "contact" : "EJ Krans",
  "operation_months_code" : "YR",
  "city" : "Troy",
  "address_line_1" : "Rensselaer Inner-city Neighborhoods",
  "county" : "Rensselaer",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-73.69551",
  "latitude" : "42.72484",
  "snap_status" : "Y"
}
, {
  "market_name" : "North Greenbush Farmers' Market",
  "zip" : "12180",
  "phone" : "5182834306",
  "operation_hours" : "Thursday  2:30pm-6pm",
  "location" : "Twin Town Little League Park, Williams Rd.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.67672",
    "latitude" : "42.69013"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.townofng.com"
  },
  "contact" : "Kathryn Conolly",
  "operation_months_code" : "M",
  "city" : "North Greenbush",
  "address_line_1" : "95 Williams Rd",
  "county" : "Rensselaer",
  "fmnp" : "Y",
  "operation_season" : "June 12 - September 11",
  "longitude" : "-73.67672",
  "latitude" : "42.69013",
  "snap_status" : "N"
}
, {
  "market_name" : "Troy Waterfront WINTER Farmers Market",
  "zip" : "12180",
  "phone" : "5187084216",
  "operation_hours" : "Saturday 9am - 2pm",
  "location" : "Uncle Sam Atrium, Downtown Troy49 4th Street",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.68897",
    "latitude" : "42.73211"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.troymarket.org"
  },
  "contact" : "Monica Kurzejeski",
  "operation_months_code" : "X/W/P",
  "city" : "Troy",
  "address_line_1" : "49 4th Street",
  "county" : "Rensselaer",
  "fmnp" : "N",
  "operation_season" : "November - April",
  "longitude" : "-73.68897",
  "latitude" : "42.73211",
  "snap_status" : "Y"
}
, {
  "market_name" : "Saint George Greenmarket",
  "zip" : "10301",
  "phone" : "2127887476",
  "operation_hours" : "Saturday  8am-2pm",
  "location" : "St. Mark's Place at Hyatt St.,Theater parking lot",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.07791",
    "latitude" : "40.64159"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "P/M",
  "city" : "Staten Island",
  "address_line_1" : "St Marks Pl and Hyatt St",
  "county" : "Richmond",
  "fmnp" : "Y",
  "operation_season" : "May 3 - November 22",
  "longitude" : "-74.07791",
  "latitude" : "40.64159",
  "snap_status" : "Y"
}
, {
  "market_name" : "Staten Island Mall Greenmarket",
  "zip" : "10314",
  "phone" : "2127887476",
  "operation_hours" : "Saturday  8am-3pm",
  "location" : "Richmond Ave. entrance,inside parking lot",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.16607",
    "latitude" : "40.58199"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.grownyc.org"
  },
  "contact" : "Chelsea Whittaker",
  "operation_months_code" : "M",
  "city" : "Staten Island",
  "address_line_1" : "2655 Richmond Ave",
  "county" : "Richmond",
  "fmnp" : "Y",
  "operation_season" : "June 14 - November 22",
  "longitude" : "-74.16607",
  "latitude" : "40.58199",
  "snap_status" : "Y"
}
, {
  "market_name" : "Nyack Farmers' Market",
  "zip" : "10960",
  "phone" : "8453532221",
  "operation_hours" : "Sat  8am-1pm    Thu  8am-2pm",
  "location" : "Municipal parking lot, Main St. & Franklin Ave.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.92161",
    "latitude" : "41.09154"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.nyackchamber.org"
  },
  "contact" : "Pam Moskowitz",
  "operation_months_code" : "P/M",
  "city" : "Nyack",
  "address_line_1" : "Main St and Franklin St",
  "county" : "Rockland",
  "fmnp" : "Y",
  "operation_season" : "June 7 - November 22",
  "longitude" : "-73.92161",
  "latitude" : "41.09154",
  "snap_status" : "N"
}
, {
  "market_name" : "Palisades Indoor WINTER Farmers' Market",
  "zip" : "10964",
  "phone" : "8453982521",
  "operation_hours" : "Saturday 9am - 1pm",
  "location" : "675 Oak Tree Rd Community Center",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.91767",
    "latitude" : "41.01152"
  },
  "state" : "NY",
  "contact" : "Carol Baxter",
  "operation_months_code" : "W/P",
  "city" : "Palisades",
  "address_line_1" : "675 Oak Tree Road",
  "county" : "Rockland",
  "fmnp" : "N",
  "operation_season" : "January 18 - May 17",
  "longitude" : "-73.91767",
  "latitude" : "41.01152",
  "snap_status" : "N"
}
, {
  "market_name" : "Suffern WINTER Farmers' Market",
  "zip" : "10901",
  "phone" : "6463394746",
  "operation_hours" : "Twice a month, Saturday 9am - 2pm",
  "location" : "Suffern Community Center41 Washington Ave",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.14905",
    "latitude" : "41.11578"
  },
  "state" : "NY",
  "contact" : "Alexandria Evans",
  "operation_months_code" : "X/W/P",
  "city" : "Suffern",
  "address_line_1" : "41 Washington Ave",
  "county" : "Rockland",
  "fmnp" : "N",
  "operation_season" : "December - May",
  "longitude" : "-74.14905",
  "latitude" : "41.11578",
  "snap_status" : "N"
}
, {
  "market_name" : "Ballston Spa Farmers' Market",
  "zip" : "12020",
  "phone" : "5188852772",
  "operation_hours" : "Sat  9am-12 Noon    Thu  3pm-6pm",
  "location" : "Wiswall Park, Front & Low Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.84964",
    "latitude" : "43.00256"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.ballston.org"
  },
  "contact" : "Ellen Mottola",
  "operation_months_code" : "M",
  "city" : "Ballston Spa",
  "address_line_1" : "Front St and Low St",
  "county" : "Saratoga",
  "fmnp" : "Y",
  "operation_season" : "June 12 - October 18",
  "longitude" : "-73.84964",
  "latitude" : "43.00256",
  "snap_status" : "N"
}
, {
  "market_name" : "Burnt Hills Farmers' Market",
  "zip" : "12027",
  "phone" : "5183993488",
  "operation_hours" : "Saturday  9am-1pm",
  "location" : "Lakehill Rd. & Route 50,Burnt Hills",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.89848",
    "latitude" : "42.91021"
  },
  "state" : "NY",
  "contact" : "Gaynell Bliss",
  "operation_months_code" : "P/M",
  "city" : "Burnt Hills",
  "address_line_1" : "809 Saratoga Road",
  "county" : "Saratoga",
  "fmnp" : "Y",
  "operation_season" : "May 10 - October 25",
  "longitude" : "-73.89848",
  "latitude" : "42.91021",
  "snap_status" : "N"
}
, {
  "market_name" : "Clifton Park/Saratoga Farmers' Market",
  "zip" : "12065",
  "phone" : "5188952701",
  "operation_hours" : "Thursday  2pm-5pm",
  "location" : "St. George's Church,912 Rt. 146 at Maxwell Drive",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.79782",
    "latitude" : "42.866"
  },
  "state" : "NY",
  "contact" : "Charles Holub",
  "operation_months_code" : "M",
  "city" : "Clifton Park",
  "address_line_1" : "912 State Route 146",
  "county" : "Saratoga",
  "fmnp" : "Y",
  "operation_season" : "June 26 - October 30",
  "longitude" : "-73.79782",
  "latitude" : "42.866",
  "snap_status" : "N"
}
, {
  "market_name" : "Gansevoort Farmers' Market",
  "zip" : "12831",
  "phone" : "5187920198",
  "operation_hours" : "Thursday  3pm-6pm",
  "location" : "Village Park,Corner of Route 32",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.65167",
    "latitude" : "43.19612"
  },
  "state" : "NY",
  "contact" : "Linda Gifford",
  "operation_months_code" : "M",
  "city" : "Gansevoort",
  "address_line_1" : "State Route 32 and Wilton-Gansevoort Rd",
  "county" : "Saratoga",
  "fmnp" : "Y",
  "operation_season" : "June 5 - October 30",
  "longitude" : "-73.65167",
  "latitude" : "43.19612",
  "snap_status" : "N"
}
, {
  "market_name" : "Malta/Saratoga Farmers' Market",
  "zip" : "12020",
  "phone" : "5188952701",
  "operation_hours" : "Tuesday  3pm-6pm",
  "location" : "Allerdice parking lot,2570 Route 9",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.78945",
    "latitude" : "42.97694"
  },
  "state" : "NY",
  "contact" : "Charles Holub",
  "operation_months_code" : "M",
  "city" : "Ballston Spa",
  "address_line_1" : "2570 Route 9",
  "county" : "Saratoga",
  "fmnp" : "Y",
  "operation_season" : "June 3 - October 28",
  "longitude" : "-73.78945",
  "latitude" : "42.97694",
  "snap_status" : "N"
}
, {
  "market_name" : "Saratoga Farmers' Market",
  "zip" : "12866",
  "phone" : "5186642510",
  "operation_hours" : "Sat  9am-1pm    Wed  3pm-6pm",
  "location" : "Summer location-High Rock Park, Saratoga Springs",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.78304",
    "latitude" : "43.08288"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.saratogafarmersmarket.org"
  },
  "contact" : "Justine Denison",
  "operation_months_code" : "X",
  "city" : "Saratoga Springs",
  "address_line_1" : "High Rock Ave and Lake Ave",
  "county" : "Saratoga",
  "fmnp" : "Y",
  "operation_season" : "May 3 - October 29",
  "longitude" : "-73.78304",
  "latitude" : "43.08288",
  "snap_status" : "Y"
}
, {
  "market_name" : "Saratoga WINTER Farmers' Market",
  "zip" : "12866",
  "phone" : "5186642510",
  "operation_hours" : "Saturday 9am - 1:00pm",
  "location" : "Lincoln Baths BuildingSaratoga Spa State Park, 65 South Broadway, Saratoga Springs",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.78991",
    "latitude" : "43.06444"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.saratogafarmersmarket.org"
  },
  "contact" : "Justine Denison",
  "operation_months_code" : "X/W/P",
  "city" : "Saratoga",
  "address_line_1" : "65 South Broadway",
  "county" : "Saratoga",
  "fmnp" : "N",
  "operation_season" : "November - April",
  "longitude" : "-73.78991",
  "latitude" : "43.06444",
  "snap_status" : "Y"
}
, {
  "market_name" : "South Glens Falls Farmers' Market",
  "zip" : "12803",
  "phone" : "5187920198",
  "operation_hours" : "Monday  10am-1pm",
  "location" : "Village Park, Spring St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.63221",
    "latitude" : "43.30035"
  },
  "state" : "NY",
  "contact" : "Linda Gifford",
  "operation_months_code" : "M",
  "city" : "South Glens Falls",
  "address_line_1" : "64 Spring St",
  "county" : "Saratoga",
  "fmnp" : "Y",
  "operation_season" : "June 2 - October 27",
  "longitude" : "-73.63221",
  "latitude" : "43.30035",
  "snap_status" : "N"
}
, {
  "market_name" : "Town of Galway Farmers' Market",
  "zip" : "12074",
  "phone" : "5188825367",
  "operation_hours" : "Friday  3pm-6pm",
  "location" : "Pavilion at Town playing fields,5078 Sacandaga Rd., Route 147",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.03011",
    "latitude" : "43.00913"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.galwayfarmersmarket.org"
  },
  "contact" : "Susan Sutch",
  "operation_months_code" : "M",
  "city" : "Galway",
  "address_line_1" : "5078 Sacandaga Road",
  "county" : "Saratoga",
  "fmnp" : "Y",
  "operation_season" : "June 27 - September 26",
  "longitude" : "-74.03011",
  "latitude" : "43.00913",
  "snap_status" : "N"
}
, {
  "market_name" : "Capital District Veggie Mobile - Schenectady",
  "zip" : "12307",
  "phone" : "5182748685",
  "operation_hours" : "Friday & Saturday",
  "location" : "Contact for locations & times518-274-8685  or visit www.cdcg.org",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.93304",
    "latitude" : "42.80651"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.cdcg.org"
  },
  "contact" : "EJ Krans",
  "operation_months_code" : "YR",
  "city" : "Schenectady",
  "address_line_1" : "Schenectady Inner-city Neighborhoods",
  "county" : "Schenectady",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-73.93304",
  "latitude" : "42.80651",
  "snap_status" : "Y"
}
, {
  "market_name" : "Farm to Preschool I Farmers' Market",
  "zip" : "12305",
  "phone" : "5184267181",
  "operation_hours" : "Tuesday  2:30pm-5:30pm",
  "location" : "YWCA NENY44 Washington Ave., Schenectady",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.9492",
    "latitude" : "42.81645"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.facebook.com/Farm2Preschool"
  },
  "contact" : "Darlene Yule",
  "operation_months_code" : "M",
  "city" : "Schenectady",
  "address_line_1" : "44 Washington Ave",
  "county" : "Schenectady",
  "fmnp" : "Y",
  "operation_season" : "June 17 - September 16",
  "longitude" : "-73.9492",
  "latitude" : "42.81645",
  "snap_status" : "Y"
}
, {
  "market_name" : "Farm to Preschool II Farmers' Market",
  "zip" : "12304",
  "phone" : "5184267181",
  "operation_hours" : "Thursday  2pm-5pm",
  "location" : "Parsons Child and Family Center125 Bigelow Ave., Schenectady",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.92505",
    "latitude" : "42.79534"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.facebook.com/Farm2Preschool"
  },
  "contact" : "Darlene Yule",
  "operation_months_code" : "M",
  "city" : "Schenectady",
  "address_line_1" : "125 Bigelow Ave",
  "county" : "Schenectady",
  "fmnp" : "Y",
  "operation_season" : "June 19 - September 18",
  "longitude" : "-73.92505",
  "latitude" : "42.79534",
  "snap_status" : "Y"
}
, {
  "market_name" : "Schenectady Bellevue Farmers' Market",
  "zip" : "12306",
  "phone" : "5183930403",
  "operation_hours" : "Thursday  4pm-7pm",
  "location" : "2176 Broadway",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.96735",
    "latitude" : "42.797"
  },
  "state" : "NY",
  "contact" : "Jacqueline Hurd",
  "operation_months_code" : "M",
  "city" : "Schenectady",
  "address_line_1" : "2176 Broadway",
  "county" : "Schenectady",
  "fmnp" : "Y",
  "operation_season" : "June 12 - September 25",
  "longitude" : "-73.96735",
  "latitude" : "42.797",
  "snap_status" : "Y"
}
, {
  "market_name" : "Schenectady City Hall Farmers' Market",
  "zip" : "12305",
  "phone" : "5183862225",
  "operation_hours" : "Thursday  9am-1:30pm",
  "location" : "City Hall, Franklin & Jay Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.94032",
    "latitude" : "42.81378"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.schenectadyfarmersmarket.com"
  },
  "contact" : "Steve Feeney",
  "operation_months_code" : "P/M/W",
  "city" : "Schenectady",
  "address_line_1" : "Franklin St and Jay St",
  "county" : "Schenectady",
  "fmnp" : "Y",
  "operation_season" : "May 8 - October 30",
  "longitude" : "-73.94032",
  "latitude" : "42.81378",
  "snap_status" : "Y"
}
, {
  "market_name" : "Schenectady Greenmarket",
  "zip" : "12305",
  "phone" : "5189860318",
  "operation_hours" : "Sunday  10am-2pm",
  "location" : "Jay & Franklin Sts., near City Hall",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.94137",
    "latitude" : "42.81253"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.schenectadygreenmarket.org"
  },
  "contact" : "Jennifer Jennings",
  "operation_months_code" : "P/M",
  "city" : "Schenectady",
  "address_line_1" : "State St and Jay St",
  "county" : "Schenectady",
  "fmnp" : "Y",
  "operation_season" : "May 4 - October 26",
  "longitude" : "-73.94137",
  "latitude" : "42.81253",
  "snap_status" : "Y"
}
, {
  "market_name" : "Schenectady St. Luke's Farmers' Market",
  "zip" : "12304",
  "phone" : "5183862225",
  "operation_hours" : "Tuesday  9am-1pm",
  "location" : "St. Luke's Church,1235 State Street",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.92413",
    "latitude" : "42.79894"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.schenectadyfarmersmarket.com"
  },
  "contact" : "Steve Feeney",
  "operation_months_code" : "M",
  "city" : "Schenectady",
  "address_line_1" : "1235 State St",
  "county" : "Schenectady",
  "fmnp" : "Y",
  "operation_season" : "June 17 - October 28",
  "longitude" : "-73.92413",
  "latitude" : "42.79894",
  "snap_status" : "Y"
}
, {
  "market_name" : "Schenectady Union St. Farmers' Market",
  "zip" : "12309",
  "phone" : "5184640889",
  "operation_hours" : "Saturday 9am - 1:30pm",
  "location" : "Caldwell & Bankers Real Estate parking1760 Union St, Niskayuna 12309",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.8992",
    "latitude" : "42.8022"
  },
  "state" : "NY",
  "contact" : "Al Lansing",
  "operation_months_code" : "P/M",
  "city" : "Niskayuna",
  "address_line_1" : "1760 Union St",
  "county" : "Schenectady",
  "fmnp" : "Y",
  "operation_season" : "May 3 - November 1",
  "longitude" : "-73.8992",
  "latitude" : "42.8022",
  "snap_status" : "N"
}
, {
  "market_name" : "Schenectady WINTER Greenmarket",
  "zip" : "12305",
  "phone" : "5189860318",
  "operation_hours" : "Sunday 10am - 2pm",
  "location" : "Proctors Theater, 432 State St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.94208",
    "latitude" : "42.81206"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.schenectadygreenmarket.org"
  },
  "contact" : "Jennifer Jennings",
  "operation_months_code" : "X/W/P",
  "city" : "Schenectady",
  "address_line_1" : "432 State Street",
  "county" : "Schenectady",
  "fmnp" : "N",
  "operation_season" : "November - April",
  "longitude" : "-73.94208",
  "latitude" : "42.81206",
  "snap_status" : "Y"
}
, {
  "market_name" : "Schoharie Co. Festival Farmers' Market",
  "zip" : "12043",
  "phone" : "5182842609",
  "operation_hours" : "Sat  10am-2pm    Wed  3pm-5pm, starts July 23",
  "location" : "McCarthy Tire Center parking lot,942 E. Main, Rt. 7E, Cobleskill",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.46711",
    "latitude" : "42.67886"
  },
  "state" : "NY",
  "contact" : "Donna Olsen",
  "operation_months_code" : "M",
  "city" : "Cobleskill",
  "address_line_1" : "942 East Main St",
  "county" : "Schoharie",
  "fmnp" : "Y",
  "operation_season" : "July 12 - October 11",
  "longitude" : "-74.46711",
  "latitude" : "42.67886",
  "snap_status" : "Y"
}
, {
  "market_name" : "Sharon Springs Farmers' Market",
  "zip" : "13459",
  "phone" : "5189350940",
  "operation_hours" : "Saturday  9am-1pm",
  "location" : "Main Street, near Roseboro Hotel",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.61721",
    "latitude" : "42.79545"
  },
  "state" : "NY",
  "contact" : "Kate Miller",
  "operation_months_code" : "P/M",
  "city" : "Sharon Springs",
  "address_line_1" : "Main Street and Washington Street",
  "county" : "Schoharie",
  "fmnp" : "Y",
  "operation_season" : "May 24 - October 4",
  "longitude" : "-74.61721",
  "latitude" : "42.79545",
  "snap_status" : "Y"
}
, {
  "market_name" : "Sharon Springs WINTER Farmers' Market",
  "zip" : "13459",
  "phone" : "5189350940",
  "operation_hours" : "Saturday 10am - 12 NOONMonthly, 1st Saturday",
  "location" : "Library",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.61967",
    "latitude" : "42.79083"
  },
  "state" : "NY",
  "contact" : "Kate Miller",
  "operation_months_code" : "W/P",
  "city" : "Sharon Springs",
  "address_line_1" : "129 Main Street",
  "county" : "Schoharie",
  "fmnp" : "N",
  "operation_season" : "November - May",
  "longitude" : "-74.61967",
  "latitude" : "42.79083",
  "snap_status" : "Y"
}
, {
  "market_name" : "Watkins Glen WINTER Farmers' Market",
  "zip" : "14891",
  "phone" : "6075464535",
  "operation_hours" : "Friday 3pm - 6pm",
  "location" : "St. James EpiscopalParish Hall 112 6th Street",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.87153",
    "latitude" : "42.37961"
  },
  "state" : "NY",
  "contact" : "Liz Martin",
  "operation_months_code" : "X/W",
  "city" : "Watkins Glen",
  "address_line_1" : "112 6th Street",
  "county" : "Schuyler",
  "fmnp" : "N",
  "operation_season" : "November 1 - February 28",
  "longitude" : "-76.87153",
  "latitude" : "42.37961",
  "snap_status" : "N"
}
, {
  "market_name" : "Seneca Falls Farmers' Market",
  "zip" : "13148",
  "phone" : "3155399251",
  "operation_hours" : "Wednesday  9am-1:30pm",
  "location" : "People's Park,Water Street, by the Canal",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.80005",
    "latitude" : "42.90412"
  },
  "state" : "NY",
  "contact" : "Patti Battley",
  "operation_months_code" : "M",
  "city" : "Seneca Falls",
  "address_line_1" : "Water St and Bridge St",
  "county" : "Seneca",
  "fmnp" : "Y",
  "operation_season" : "June 11 - October 15",
  "longitude" : "-76.80005",
  "latitude" : "42.90412",
  "snap_status" : "Y"
}
, {
  "market_name" : "Canton Farmers' Market",
  "zip" : "13617",
  "phone" : "3152448475",
  "operation_hours" : "Tue/Fri  9am-2pm",
  "location" : "Village Green, Main & Park Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.16921",
    "latitude" : "44.59564"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.cantonfarmersmarket.org"
  },
  "contact" : "Zoe Baker",
  "operation_months_code" : "P/M",
  "city" : "Canton",
  "address_line_1" : "Main St and Park St",
  "county" : "St. Lawrence",
  "fmnp" : "Y",
  "operation_season" : "May 9 - October 31",
  "longitude" : "-75.16921",
  "latitude" : "44.59564",
  "snap_status" : "Y"
}
, {
  "market_name" : "Fowler Farmers' Market",
  "zip" : "13642",
  "phone" : "3152120456",
  "operation_hours" : "Friday  3pm-6pm",
  "location" : "Bob's Market,Route 58, next to Tripp Fuels",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.39121",
    "latitude" : "44.28284"
  },
  "state" : "NY",
  "contact" : "Lorraine Taylor",
  "operation_months_code" : "M",
  "city" : "Fowler",
  "address_line_1" : "Farm to Market Rd and Route 58",
  "county" : "St. Lawrence",
  "fmnp" : "Y",
  "operation_season" : "June 6 - September 26",
  "longitude" : "-75.39121",
  "latitude" : "44.28284",
  "snap_status" : "N"
}
, {
  "market_name" : "Gouverneur Farmers' Market",
  "zip" : "13642",
  "phone" : "3152120456",
  "operation_hours" : "Thursday  9am-2pm",
  "location" : "Village Park, Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.46764",
    "latitude" : "44.33524"
  },
  "state" : "NY",
  "contact" : "Lorraine Taylor",
  "operation_months_code" : "M",
  "city" : "Gouverneur",
  "address_line_1" : "Church St and John St",
  "county" : "St. Lawrence",
  "fmnp" : "Y",
  "operation_season" : "June 5 - October 16",
  "longitude" : "-75.46764",
  "latitude" : "44.33524",
  "snap_status" : "Y"
}
, {
  "market_name" : "Hammond Farmers and Artisans Market",
  "zip" : "13646",
  "phone" : "3153245032",
  "operation_hours" : "Wednesday  3:30pm-7:00pm",
  "location" : "Hammond Museum, Rt 37",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.69412",
    "latitude" : "44.44895"
  },
  "state" : "NY",
  "contact" : "Lori Thistle",
  "operation_months_code" : "M",
  "city" : "Hammond",
  "address_line_1" : "Hammond Museum",
  "county" : "St. Lawrence",
  "fmnp" : "Y",
  "operation_season" : "July 2 - October 1",
  "longitude" : "-75.69412",
  "latitude" : "44.44895",
  "snap_status" : "N"
}
, {
  "market_name" : "Massena Sunday Farmers' Market",
  "zip" : "13662",
  "phone" : "3157695322",
  "operation_hours" : "Sunday  8am-3pm",
  "location" : "Main Street, in front of Old Chamber of Commerce",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.89334",
    "latitude" : "44.93114"
  },
  "state" : "NY",
  "contact" : "Shirley Peck",
  "operation_months_code" : "M",
  "city" : "Massena",
  "address_line_1" : "60 Main St",
  "county" : "St. Lawrence",
  "fmnp" : "Y",
  "operation_season" : "July 6 - October 26",
  "longitude" : "-74.89334",
  "latitude" : "44.93114",
  "snap_status" : "Y"
}
, {
  "market_name" : "Massena Thursday Farmers' Market",
  "zip" : "13362",
  "phone" : "3157695322",
  "operation_hours" : "Thursday  9am-5pm",
  "location" : "Triple A parking lot",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.87095",
    "latitude" : "44.93605"
  },
  "state" : "NY",
  "contact" : "Shirley Peck",
  "operation_months_code" : "M",
  "city" : "Massena",
  "address_line_1" : "345 E Orvis St",
  "county" : "St. Lawrence",
  "fmnp" : "Y",
  "operation_season" : "July 10 - October 30",
  "longitude" : "-74.87095",
  "latitude" : "44.93605",
  "snap_status" : "Y"
}
, {
  "market_name" : "Norwood Farmers' Market",
  "zip" : "13668",
  "phone" : "3157695322",
  "operation_hours" : "Monday  10am-5pm",
  "location" : "Park Square, Main (Rt. 56) & Park Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.99353",
    "latitude" : "44.74905"
  },
  "state" : "NY",
  "contact" : "Shirley Peck",
  "operation_months_code" : "M",
  "city" : "Norwood",
  "address_line_1" : "Main St and Park St",
  "county" : "St. Lawrence",
  "fmnp" : "Y",
  "operation_season" : "July 7 - October 27",
  "longitude" : "-74.99353",
  "latitude" : "44.74905",
  "snap_status" : "N"
}
, {
  "market_name" : "Ogdensburg Saturday Green Market",
  "zip" : "13669",
  "phone" : "5618013786",
  "operation_hours" : "Saturday  9am-1pm",
  "location" : "Library Park, 300 block Riverside Ave.(Oct - Dec - at First Presbyterian Church)",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.49459",
    "latitude" : "44.69972"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.ogdensburgny.com"
  },
  "contact" : "Sandra Porter",
  "operation_months_code" : "P/M",
  "city" : "Ogdensburg",
  "address_line_1" : "Riverside St and State St",
  "county" : "St. Lawrence",
  "fmnp" : "Y",
  "operation_season" : "May 10 - September 27",
  "longitude" : "-75.49459",
  "latitude" : "44.69972",
  "snap_status" : "Y"
}
, {
  "market_name" : "Ogdensburg Thursday Green Market",
  "zip" : "13669",
  "phone" : "5618013786",
  "operation_hours" : "Thursday  2pm-5pm",
  "location" : "CHMC,King St & Mansion Ave",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.50066",
    "latitude" : "44.69189"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.ogdensburgny.com"
  },
  "contact" : "Sandra Porter",
  "operation_months_code" : "P/M",
  "city" : "Ogdensburg",
  "address_line_1" : "King St and Mansion Ave",
  "county" : "St. Lawrence",
  "fmnp" : "Y",
  "operation_season" : "May 15 - September 25",
  "longitude" : "-75.50066",
  "latitude" : "44.69189",
  "snap_status" : "Y"
}
, {
  "market_name" : "Ogdensburgh WINTER Saturday Green Market",
  "zip" : "13669",
  "phone" : "5186388530",
  "operation_hours" : "Saturday 9am - 1pm",
  "location" : "First Presbyterian Church311 Franklin St., Fellowship Hall",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.49022",
    "latitude" : "44.69805"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.glensfallsfarmersmarket.com"
  },
  "contact" : "David Porter",
  "operation_months_code" : "M/X",
  "city" : "Ogdensburg",
  "address_line_1" : "311 Franklin Street",
  "county" : "St. Lawrence",
  "fmnp" : "N",
  "operation_season" : "October 5th - December 14th",
  "longitude" : "-75.49022",
  "latitude" : "44.69805",
  "snap_status" : "Y"
}
, {
  "market_name" : "Potsdam Main Street Farmers' Market",
  "zip" : "13676",
  "phone" : "7167257782",
  "operation_hours" : "Sat/Wed  9am-2pm",
  "location" : "Main St.,Opposite Roxy Theater",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.98493",
    "latitude" : "44.66865"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.thepotsdamfarmersmarket.org"
  },
  "contact" : "Laura Popielski",
  "operation_months_code" : "P/M",
  "city" : "Potsdam",
  "address_line_1" : "Main St and Union St",
  "county" : "St. Lawrence",
  "fmnp" : "Y",
  "operation_season" : "May 10 - October 25",
  "longitude" : "-74.98493",
  "latitude" : "44.66865",
  "snap_status" : "Y"
}
, {
  "market_name" : "Potsdam WINTER Farmers' Market",
  "zip" : "13676",
  "phone" : "3153447421",
  "operation_hours" : "Saturday 8:30am - 12 NOON",
  "location" : "Cheel Arena,Clarkson University",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.00202",
    "latitude" : "44.66391"
  },
  "state" : "NY",
  "contact" : "Marie Cook",
  "operation_months_code" : "X/W/P",
  "city" : "Potsdam",
  "address_line_1" : "8 Clarkson Ave",
  "county" : "St. Lawrence",
  "fmnp" : "N",
  "operation_season" : "November - April",
  "longitude" : "-75.00202",
  "latitude" : "44.66391",
  "snap_status" : "N"
}
, {
  "market_name" : "Winthrop Farmers' Market",
  "zip" : "13697",
  "phone" : "3157695322",
  "operation_hours" : "Friday  9am-5pm",
  "location" : "Parking Lot, near old KeyBankacross from Agway",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.78794",
    "latitude" : "44.79402"
  },
  "state" : "NY",
  "contact" : "Shirley Peck",
  "operation_months_code" : "M",
  "city" : "Winthrop",
  "address_line_1" : "645 New York 11C",
  "county" : "St. Lawrence",
  "fmnp" : "Y",
  "operation_season" : "July 11 - October 31",
  "longitude" : "-74.78794",
  "latitude" : "44.79402",
  "snap_status" : "N"
}
, {
  "market_name" : "Bath Saturday Farmers' Market",
  "zip" : "14810",
  "phone" : "6077763577",
  "operation_hours" : "Saturday  9am-2pm",
  "location" : "Pulteney Park,Steuben St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.31842",
    "latitude" : "42.33353"
  },
  "state" : "NY",
  "contact" : "Phillip Glosick",
  "operation_months_code" : "P/M",
  "city" : "Bath",
  "address_line_1" : "Steuben St and Liberty St",
  "county" : "Steuben",
  "fmnp" : "Y",
  "operation_season" : "May 10 - November 1",
  "longitude" : "-77.31842",
  "latitude" : "42.33353",
  "snap_status" : "N"
}
, {
  "market_name" : "Bath Wednesday Farmers' Market",
  "zip" : "14810",
  "phone" : "6075275045",
  "operation_hours" : "Wednesday  9am-3pm",
  "location" : "Pulteney Square Park Steuben St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.31842",
    "latitude" : "42.33353"
  },
  "state" : "NY",
  "contact" : "David Clarke",
  "operation_months_code" : "P/M",
  "city" : "Bath",
  "address_line_1" : "Steuben St and Liberty St",
  "county" : "Steuben",
  "fmnp" : "Y",
  "operation_season" : "May 7 - October 29",
  "longitude" : "-77.31842",
  "latitude" : "42.33353",
  "snap_status" : "Y"
}
, {
  "market_name" : "Corning Farmers' Market",
  "zip" : "14830",
  "phone" : "6079376292",
  "operation_hours" : "Thursday  10am - 2pm",
  "location" : "Riverfront Centennial Park,Corning's Gaffer District",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.05339",
    "latitude" : "42.1443"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.gafferdistrict.com"
  },
  "contact" : "Lin Kotlinski",
  "operation_months_code" : "M",
  "city" : "Corning",
  "address_line_1" : "Centennial Park, East Tioga Ave",
  "county" : "Steuben",
  "fmnp" : "Y",
  "operation_season" : "June 5 - October 30",
  "longitude" : "-77.05339",
  "latitude" : "42.1443",
  "snap_status" : "N"
}
, {
  "market_name" : "Babylon Village Farmers' Market",
  "zip" : "11702",
  "phone" : "5162977997",
  "operation_hours" : "Sunday  8am-1pm",
  "location" : "LIRR Babylon Station parking lot,Railroad and Deer Park Aves.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.32594",
    "latitude" : "40.6996"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.longislandfarmersmarkets.com"
  },
  "contact" : "Jaime Greci",
  "operation_months_code" : "M",
  "city" : "Babylon",
  "address_line_1" : "Railroad Ave and N Carll Ave",
  "county" : "Suffolk",
  "fmnp" : "Y",
  "operation_season" : "June 1 - November 23",
  "longitude" : "-73.32594",
  "latitude" : "40.6996",
  "snap_status" : "Y"
}
, {
  "market_name" : "Commack WINTER Farmers' Market",
  "zip" : "11725",
  "phone" : "6314629800",
  "operation_hours" : "Every Sunday 9am - 1pm",
  "location" : "74 Hauppauge Rd, Y JCC, near public library, across from Hamlet",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.30334",
    "latitude" : "40.82922"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://suffolkyjcc.org"
  },
  "contact" : "Alice Levy",
  "operation_months_code" : "X/W",
  "city" : "Commack",
  "address_line_1" : "74 Hauppauge Road",
  "county" : "Suffolk",
  "fmnp" : "N",
  "operation_season" : "December 15 - February 23",
  "longitude" : "-73.30334",
  "latitude" : "40.82922",
  "snap_status" : "Y"
}
, {
  "market_name" : "East Hampton Farmers' Market",
  "zip" : "11937",
  "phone" : "6317259133",
  "operation_hours" : "Friday  9am-1pm",
  "location" : "Nick & Toni's lot, 136 N. Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-72.18124",
    "latitude" : "40.97017"
  },
  "state" : "NY",
  "contact" : "Katherine Plumb",
  "operation_months_code" : "P/M",
  "city" : "Easthampton",
  "address_line_1" : "136 North Main St",
  "county" : "Suffolk",
  "fmnp" : "Y",
  "operation_season" : "May 23 - September 26",
  "longitude" : "-72.18124",
  "latitude" : "40.97017",
  "snap_status" : "Y"
}
, {
  "market_name" : "Farmingdale Farmers' Market",
  "zip" : "11735",
  "phone" : "5166942859",
  "operation_hours" : "Sunday  10am-3pm",
  "location" : "Village Green, Town Hall",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.44599",
    "latitude" : "40.73406"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.eatlocallongisland.com"
  },
  "contact" : "Jim Thompson",
  "operation_months_code" : "M",
  "city" : "Farmingdale",
  "address_line_1" : "211-A Main St.",
  "county" : "Suffolk",
  "fmnp" : "Y",
  "operation_season" : "June 1 - November 23",
  "longitude" : "-73.44599",
  "latitude" : "40.73406",
  "snap_status" : "Y"
}
, {
  "market_name" : "Flanders Farm Fresh Youth Market",
  "zip" : "11901",
  "phone" : "6317022417",
  "operation_hours" : "Saturday  10am-2pm",
  "location" : "Crohan Community Senior Center, 655 Flanders Road (Rt 24)",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-72.63666",
    "latitude" : "40.90867"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.southamptontownny.gov"
  },
  "contact" : "Nancy Lynott",
  "operation_months_code" : "M",
  "city" : "Flanders",
  "address_line_1" : "655 Flanders Rd",
  "county" : "Suffolk",
  "fmnp" : "Y",
  "operation_season" : "June 21 - October 18",
  "longitude" : "-72.63666",
  "latitude" : "40.90867",
  "snap_status" : "Y"
}
, {
  "market_name" : "Greater Bellport Community Youth Market",
  "zip" : "11713",
  "phone" : "6312869090",
  "operation_hours" : "Saturday  11am-4pm",
  "location" : "Boys & Girls Club,471 Atlantic Ave., Bellport",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-72.94828",
    "latitude" : "40.77519"
  },
  "state" : "NY",
  "contact" : "Tracie Romandetti",
  "operation_months_code" : "M",
  "city" : "Bellport",
  "address_line_1" : "471 Atlantic Avenue",
  "county" : "Suffolk",
  "fmnp" : "Y",
  "operation_season" : "July 12 - October 18",
  "longitude" : "-72.94828",
  "latitude" : "40.77519",
  "snap_status" : "Y"
}
, {
  "market_name" : "Greater Bellport Farmers' Market",
  "zip" : "11713",
  "phone" : "5184576880",
  "operation_hours" : "Saturday 11 am - 4pm",
  "location" : "685 Station Rd., near corner of Brookhaven Ave.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-72.94364",
    "latitude" : "40.77797"
  },
  "state" : "NY",
  "contact" : "TBA TBA",
  "operation_months_code" : "M",
  "city" : "Bellport",
  "address_line_1" : "685 Station Road",
  "county" : "Suffolk",
  "fmnp" : "N",
  "operation_season" : "July 7 - October",
  "longitude" : "-72.94364",
  "latitude" : "40.77797",
  "snap_status" : "Y"
}
, {
  "market_name" : "Greenport Farmers' Market",
  "zip" : "11944",
  "phone" : "6317743965",
  "operation_hours" : "Saturday  9am-1pm",
  "location" : "United Methodist Church lot, 624 1st St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-72.36245",
    "latitude" : "41.10717"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.greenportfarmersmarket.com"
  },
  "contact" : "Lara McNeil",
  "operation_months_code" : "P/M",
  "city" : "Greenport",
  "address_line_1" : "624 1st St",
  "county" : "Suffolk",
  "fmnp" : "Y",
  "operation_season" : "May 24 - October 11",
  "longitude" : "-72.36245",
  "latitude" : "41.10717",
  "snap_status" : "Y"
}
, {
  "market_name" : "Hampton Bays Farmers' Market",
  "zip" : "11946",
  "phone" : "6317456160",
  "operation_hours" : "Saturday  9am-1pm",
  "location" : "165 Ponquogue Ave.,St. Mary's Church lawn",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-72.51301",
    "latitude" : "40.8593"
  },
  "state" : "NY",
  "contact" : "Paula Godfrey",
  "operation_months_code" : "P/M",
  "city" : "Hampton Bays",
  "address_line_1" : "165 Ponquogue Ave",
  "county" : "Suffolk",
  "fmnp" : "Y",
  "operation_season" : "May 24 - August 30",
  "longitude" : "-72.51301",
  "latitude" : "40.8593",
  "snap_status" : "N"
}
, {
  "market_name" : "Huntington Village Farmers' Market",
  "zip" : "11743",
  "phone" : "6313233653",
  "operation_hours" : "Sunday  7am-12 Noon",
  "location" : "Downtown Huntington Village, Off of Elm St. municipal parking lot, Main St. Rt. 25A, E. of Rt. 110Main St, Rt. 25A, east of Rt. 110 N.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.42629",
    "latitude" : "40.87121"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.longislandgrowersmarket.com"
  },
  "contact" : "Ethel Terry",
  "operation_months_code" : "P/M",
  "city" : "Huntington",
  "address_line_1" : "State Route 110 and Main St",
  "county" : "Suffolk",
  "fmnp" : "Y",
  "operation_season" : "May 25 - November 23",
  "longitude" : "-73.42629",
  "latitude" : "40.87121",
  "snap_status" : "N"
}
, {
  "market_name" : "Huntington WINTER Farmers' Market",
  "zip" : "11746",
  "phone" : "5162977997",
  "operation_hours" : "Sunday  10am - 2pm",
  "location" : "Jack Abrams School155 Lowndes Ave, Huntington Station",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.41394",
    "latitude" : "40.8542"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.longislandfarmersmarkets.com"
  },
  "contact" : "Jaime Greci",
  "operation_months_code" : "X/W/P",
  "city" : "Huntington Station",
  "address_line_1" : "115 Lowndes Road",
  "county" : "Suffolk",
  "fmnp" : "N",
  "operation_season" : "December 2 - April 27",
  "longitude" : "-73.41394",
  "latitude" : "40.8542",
  "snap_status" : "N"
}
, {
  "market_name" : "Islip Farmers' Market",
  "zip" : "11751",
  "phone" : "6313233653",
  "operation_hours" : "Saturday  7am-12 Noon",
  "location" : "Town Hall parking lotRt. 27A, Montauk Hwy., west of Rt. 111",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.20731",
    "latitude" : "40.73028"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.longislandgrowersmarket.com"
  },
  "contact" : "Ethel Terry",
  "operation_months_code" : "P/M",
  "city" : "Islip",
  "address_line_1" : "State Route 27A and State Route 111",
  "county" : "Suffolk",
  "fmnp" : "Y",
  "operation_season" : "May 24 - November 22",
  "longitude" : "-73.20731",
  "latitude" : "40.73028",
  "snap_status" : "N"
}
, {
  "market_name" : "Montauk Farmers' Market",
  "zip" : "11954",
  "phone" : "6316682355",
  "operation_hours" : "Thursday  9am-2pm",
  "location" : "Montauk Village Green, 743 Montauk Hwy",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-71.94424",
    "latitude" : "41.03436"
  },
  "state" : "NY",
  "contact" : "Laraine Creegan",
  "operation_months_code" : "M",
  "city" : "Montauk",
  "address_line_1" : "742 Montauk Hwy",
  "county" : "Suffolk",
  "fmnp" : "Y",
  "operation_season" : "June 12 - October 9",
  "longitude" : "-71.94424",
  "latitude" : "41.03436",
  "snap_status" : "N"
}
, {
  "market_name" : "Nesconset Plaza Farmers' Market",
  "zip" : "11767",
  "phone" : "6316785227",
  "operation_hours" : "Saturday  9am-1pm",
  "location" : "Nesconset Plaza,127 Smithtown Blvd.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.16174",
    "latitude" : "40.83836"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.ligreenmarket.org"
  },
  "contact" : "Bernadette Martin",
  "operation_months_code" : "M",
  "city" : "Nesconset",
  "address_line_1" : "127 Smithtown Boulevard",
  "county" : "Suffolk",
  "fmnp" : "Y",
  "operation_season" : "June 7 - November 22",
  "longitude" : "-73.16174",
  "latitude" : "40.83836",
  "snap_status" : "Y"
}
, {
  "market_name" : "Patchogue Farmers' Market",
  "zip" : "11772",
  "phone" : "6313233653",
  "operation_hours" : "Friday  8am-1pm",
  "location" : "7-Eleven parking lot, Montauk Hwy., 225 E. Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.00872",
    "latitude" : "40.76664"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.longislandgrowersmarket.com"
  },
  "contact" : "Ethel Terry",
  "operation_months_code" : "M",
  "city" : "Patchogue",
  "address_line_1" : "225 East Main Street",
  "county" : "Suffolk",
  "fmnp" : "Y",
  "operation_season" : "July 4 - November 21",
  "longitude" : "-73.00872",
  "latitude" : "40.76664",
  "snap_status" : "N"
}
, {
  "market_name" : "Port Jefferson Farmers' Market",
  "zip" : "11776",
  "phone" : "6313233653",
  "operation_hours" : "Thursday  10am-4:30pm",
  "location" : "Steam Room parking lot,Rts. 25A & 112",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.05283",
    "latitude" : "40.93177"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.longislandgrowersmarket.com"
  },
  "contact" : "Ethel Terry",
  "operation_months_code" : "M",
  "city" : "Port Jefferson",
  "address_line_1" : "State Route 25A and State Route 112",
  "county" : "Suffolk",
  "fmnp" : "Y",
  "operation_season" : "July 12 - October 4",
  "longitude" : "-73.05283",
  "latitude" : "40.93177",
  "snap_status" : "N"
}
, {
  "market_name" : "Riverhead Saturday Farmers' Market",
  "zip" : "11901",
  "phone" : "6317273200",
  "operation_hours" : "Saturday 10am-2pm",
  "location" : "117 East Main St. & Peconic Riverfront",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-72.66031",
    "latitude" : "40.91709"
  },
  "state" : "NY",
  "contact" : "Chris Kempner",
  "operation_months_code" : "X/P/M",
  "city" : "Riverhead",
  "address_line_1" : "117 East Main Street, Riverhead, NY",
  "county" : "Suffolk",
  "fmnp" : "Y",
  "operation_season" : "February - November",
  "longitude" : "-72.66031",
  "latitude" : "40.91709",
  "snap_status" : "N"
}
, {
  "market_name" : "Riverhead Thursday Farmers' Market",
  "zip" : "11901",
  "phone" : "6313233653",
  "operation_hours" : "Thursday  11am-4pm",
  "location" : "Downtown Riverhead, near Aquarium at Peconic River",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-72.66253",
    "latitude" : "40.91696"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.longislandgrowersmarket.com"
  },
  "contact" : "Ethel Terry",
  "operation_months_code" : "M",
  "city" : "Riverhead",
  "address_line_1" : "Main St and Peconic Ave",
  "county" : "Suffolk",
  "fmnp" : "Y",
  "operation_season" : "June 5 - November 6",
  "longitude" : "-72.66253",
  "latitude" : "40.91696",
  "snap_status" : "N"
}
, {
  "market_name" : "Rocky Point Farmers Market",
  "zip" : "11778",
  "phone" : "6318493488",
  "operation_hours" : "Sunday  8am-1pm",
  "location" : "Old Depot Park (Broadway & Prince Rd.) Rocky Point, Long Island",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-72.92391",
    "latitude" : "40.94927"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.rockypointfarmersandartisansmarket.org"
  },
  "contact" : "Charles Bevington",
  "operation_months_code" : "P/M",
  "city" : "Rocky Point",
  "address_line_1" : "Broadway and Prince Rd",
  "county" : "Suffolk",
  "fmnp" : "Y",
  "operation_season" : "May 11 - November 23",
  "longitude" : "-72.92391",
  "latitude" : "40.94927",
  "snap_status" : "N"
}
, {
  "market_name" : "Sag Harbor Farmers' Market",
  "zip" : "11963",
  "phone" : "6318994799",
  "operation_hours" : "Saturday  9am-1pm",
  "location" : "Breakwater Yacht Club parking lot,Bay & Burke Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-72.29134",
    "latitude" : "41.00106"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.sagharborfarmersmarket.org"
  },
  "contact" : "Jean Gaul",
  "operation_months_code" : "P/M",
  "city" : "Sag Harbor",
  "address_line_1" : "Bay St and Burke St",
  "county" : "Suffolk",
  "fmnp" : "Y",
  "operation_season" : "May 17 - October 25",
  "longitude" : "-72.29134",
  "latitude" : "41.00106",
  "snap_status" : "Y"
}
, {
  "market_name" : "Shiloh Community Youth Market",
  "zip" : "11798",
  "phone" : "6316434786",
  "operation_hours" : "Saturday  1pm-4pm",
  "location" : "221 Merritt Ave., Wyandanch",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.36709",
    "latitude" : "40.75311"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.wyandanchcdc.org"
  },
  "contact" : "Sondra Cochran",
  "operation_months_code" : "M",
  "city" : "Wyandanch",
  "address_line_1" : "221 Merritt Ave",
  "county" : "Suffolk",
  "fmnp" : "Y",
  "operation_season" : "July 12 - October 4",
  "longitude" : "-73.36709",
  "latitude" : "40.75311",
  "snap_status" : "Y"
}
, {
  "market_name" : "Tanger Outlets Farmers' Market",
  "zip" : "11729",
  "phone" : "5166942859",
  "operation_hours" : "Saturday  10am-3pm",
  "location" : "152 The Arches Circle,Tanger Outlets, Deer Park",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.30346",
    "latitude" : "40.76401"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.eatlocallongisland.com"
  },
  "contact" : "Jim Thompson",
  "operation_months_code" : "M",
  "city" : "Deer Park",
  "address_line_1" : "152 The Arches Circle",
  "county" : "Suffolk",
  "fmnp" : "Y",
  "operation_season" : "June 7 - November 1",
  "longitude" : "-73.30346",
  "latitude" : "40.76401",
  "snap_status" : "Y"
}
, {
  "market_name" : "TFCU Artisanal Farmers' Market",
  "zip" : "11788",
  "phone" : "6313970197",
  "operation_hours" : "Thursday  11:30am-5:30pm",
  "location" : "Teachers Federal Credit Union,102 Motor Pkwy, Hauppauge",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.26663",
    "latitude" : "40.80711"
  },
  "state" : "NY",
  "contact" : "Cindy Sierra",
  "operation_months_code" : "M",
  "city" : "Hauppague",
  "address_line_1" : "102 Motor Parkway",
  "county" : "Suffolk",
  "fmnp" : "N",
  "operation_season" : "June 5 - October 30",
  "longitude" : "-73.26663",
  "latitude" : "40.80711",
  "snap_status" : "N"
}
, {
  "market_name" : "Bethel Woods Harvest Festival Farmers' Market",
  "zip" : "12783",
  "phone" : "8452952448",
  "operation_hours" : "Sunday  11am-4pm",
  "location" : "Hurd & W. Shore Rds., Bethel",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.88208",
    "latitude" : "41.70295"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.bethelwoodscenter.org"
  },
  "contact" : "Channyn Cullingan",
  "operation_months_code" : "M",
  "city" : "Bethel",
  "address_line_1" : "Hurd Rd and West Shore Rd",
  "county" : "Sullivan",
  "fmnp" : "Y",
  "operation_season" : "September 7 - October 5",
  "longitude" : "-74.88208",
  "latitude" : "41.70295",
  "snap_status" : "N"
}
, {
  "market_name" : "Callicoon WINTER Farmers' Market",
  "zip" : "12723",
  "phone" : "8662702015",
  "operation_hours" : "Sunday 11am - 2pmEvery Sunday in December, Jan 12 & 26, Feb 23, Mar 9 & 23, Apr 6 & 27",
  "location" : "Delaware Youth Center8 Creamery Road, Callicoon 12723",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-75.05712",
    "latitude" : "41.76418"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.sullivancountyfarmersmarkets.org"
  },
  "contact" : "Danielle Gaebel",
  "operation_months_code" : "X/W/P",
  "city" : "Callicoon",
  "address_line_1" : "8 Creamery Road",
  "county" : "Sullivan",
  "fmnp" : "N",
  "operation_season" : "December - April",
  "longitude" : "-75.05712",
  "latitude" : "41.76418",
  "snap_status" : "Y"
}
, {
  "market_name" : "Monticello Eat Healthy Farmers' Market",
  "zip" : "12701",
  "phone" : "8452926180",
  "operation_hours" : "1st & 3rd Mondays  11am-2pm",
  "location" : "Sullivan County Office Building",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.68137",
    "latitude" : "41.65467"
  },
  "state" : "NY",
  "contact" : "Michelle Lipari",
  "operation_months_code" : "M",
  "city" : "Monticello",
  "address_line_1" : "2 Pleasant Street",
  "county" : "Sullivan",
  "fmnp" : "Y",
  "operation_season" : "July 7 - October 20",
  "longitude" : "-74.68137",
  "latitude" : "41.65467",
  "snap_status" : "N"
}
, {
  "market_name" : "Rock Hill Farmers' Market",
  "zip" : "12775",
  "phone" : "8458072034",
  "operation_hours" : "Saturday  10am-1pm",
  "location" : "223 Rock Hill Drive",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.59634",
    "latitude" : "41.62515"
  },
  "state" : "NY",
  "contact" : "Melinda Meddaugh",
  "operation_months_code" : "M",
  "city" : "Rock Hill",
  "address_line_1" : "223 Rock Hill Drive",
  "county" : "Sullivan",
  "fmnp" : "Y",
  "operation_season" : "June 7 - September 6",
  "longitude" : "-74.59634",
  "latitude" : "41.62515",
  "snap_status" : "N"
}
, {
  "market_name" : "Candor Farmers' Market",
  "zip" : "13743",
  "phone" : "6075897367",
  "operation_hours" : "Thursday  4pm-7pm",
  "location" : "101 Owego Rd.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.33317",
    "latitude" : "42.23249"
  },
  "state" : "NY",
  "contact" : "Terry Carling",
  "operation_months_code" : "M",
  "city" : "Candor",
  "address_line_1" : "101 Owego Rd",
  "county" : "Tioga",
  "fmnp" : "Y",
  "operation_season" : "June - October",
  "longitude" : "-76.33317",
  "latitude" : "42.23249",
  "snap_status" : "N"
}
, {
  "market_name" : "Spencer-Van Etten Farmers' Market",
  "zip" : "14883",
  "phone" : "6075897367",
  "operation_hours" : "Saturday  9am-12 Noon",
  "location" : "Nichols Park Pond, near Fire Dept.Route 34, Spencer",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.49267",
    "latitude" : "42.21138"
  },
  "state" : "NY",
  "contact" : "Terry Carling",
  "operation_months_code" : "M",
  "city" : "Spencer",
  "address_line_1" : "Owego Street Exd and N Main St",
  "county" : "Tioga",
  "fmnp" : "Y",
  "operation_season" : "June - October",
  "longitude" : "-76.49267",
  "latitude" : "42.21138",
  "snap_status" : "N"
}
, {
  "market_name" : "Waverly Farmers' Market",
  "zip" : "14892",
  "phone" : "6076874020",
  "operation_hours" : "Monday  3:30pm-6:30pm",
  "location" : "Muldoon Park, Pennsylvania & Park Aves.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.53661",
    "latitude" : "42.00483"
  },
  "state" : "NY",
  "contact" : "Andy Fagan",
  "operation_months_code" : "M",
  "city" : "Waverly",
  "address_line_1" : "Pennsylvania Ave and Park Ave",
  "county" : "Tioga",
  "fmnp" : "Y",
  "operation_season" : "June 23 - October 13",
  "longitude" : "-76.53661",
  "latitude" : "42.00483",
  "snap_status" : "Y"
}
, {
  "market_name" : "Caroline Farmers' Market/Brooktondale",
  "zip" : "14817",
  "phone" : "6073519913",
  "operation_hours" : "Saturday  10am-2pm",
  "location" : "Brooktondale Community Center522 Valley Rd.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.37118",
    "latitude" : "42.38322"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.carolinefarmersmarket.com"
  },
  "contact" : "Donna Gilbert",
  "operation_months_code" : "P/M",
  "city" : "Brooktondale",
  "address_line_1" : "522 Valley Rd",
  "county" : "Tompkins",
  "fmnp" : "Y",
  "operation_season" : "May 3  - October 25",
  "longitude" : "-76.37118",
  "latitude" : "42.38322",
  "snap_status" : "Y"
}
, {
  "market_name" : "Groton Youth Market",
  "zip" : "13073",
  "phone" : "6072275173",
  "operation_hours" : "Tuesday  3:30pm-6:30pm",
  "location" : "Center Village Court Apts., 200 South St. (Rt. 38)",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.36848",
    "latitude" : "42.58532"
  },
  "state" : "NY",
  "contact" : "Avi Miner",
  "operation_months_code" : "M",
  "city" : "Groton",
  "address_line_1" : "200 South St",
  "county" : "Tompkins",
  "fmnp" : "Y",
  "operation_season" : "July 1 - September 16",
  "longitude" : "-76.36848",
  "latitude" : "42.58532",
  "snap_status" : "Y"
}
, {
  "market_name" : "Ithaca Farmers' Market (Dewitt Park)",
  "zip" : "14850",
  "phone" : "6072737109",
  "operation_hours" : "Tuesday  9am-2pm    Thursday  4pm-7pm",
  "location" : "Dewitt Park, N. Cayuga & E. Buffalo Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.49911",
    "latitude" : "42.44131"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.ithacamarket.com"
  },
  "contact" : "Rose Ryan",
  "operation_months_code" : "P/M",
  "city" : "Ithaca",
  "address_line_1" : "North Cayuga St and East Buffalo St",
  "county" : "Tompkins",
  "fmnp" : "Y",
  "operation_season" : "May 6 - October 28",
  "longitude" : "-76.49911",
  "latitude" : "42.44131",
  "snap_status" : "Y"
}
, {
  "market_name" : "Ithaca Farmers' Market (East Hill)",
  "zip" : "14850",
  "phone" : "6072737109",
  "operation_hours" : "Wednesday  4pm-7pm",
  "location" : "East Hill Plaza380 Pine Tree Rd",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.46638",
    "latitude" : "42.43837"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.ithacamarket.com"
  },
  "contact" : "Rose Ryan",
  "operation_months_code" : "M",
  "city" : "Ithaca",
  "address_line_1" : "380 Pine Tree Road",
  "county" : "Tompkins",
  "fmnp" : "Y",
  "operation_season" : "June 4 - October 29",
  "longitude" : "-76.46638",
  "latitude" : "42.43837",
  "snap_status" : "N"
}
, {
  "market_name" : "Ithaca Farmers' Market (Steamboat)",
  "zip" : "14850",
  "phone" : "6072737109",
  "operation_hours" : "Saturday  9am-3pmSunday  10am-3pm",
  "location" : "Steamboat Landing, 545 Third St. off Rt. 13",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.5073",
    "latitude" : "42.45098"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.ithacamarket.com"
  },
  "contact" : "Rose Ryan",
  "operation_months_code" : "P/M/X",
  "city" : "Ithaca",
  "address_line_1" : "545 Third Street",
  "county" : "Tompkins",
  "fmnp" : "Y",
  "operation_season" : "April 5 - December 20",
  "longitude" : "-76.5073",
  "latitude" : "42.45098",
  "snap_status" : "Y"
}
, {
  "market_name" : "Ithaca WINTER Farmers' Market",
  "zip" : "14850",
  "phone" : "6073876952",
  "operation_hours" : "Saturday 10am - 2pm",
  "location" : "The Space@GreenStar700 West Buffalo, Ithaca",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.51111",
    "latitude" : "42.44067"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.ithacamarket.com"
  },
  "contact" : "Cathy Koken",
  "operation_months_code" : "W",
  "city" : "Ithaca",
  "address_line_1" : "Greenstar Cooperative Market, West Buffalo Street",
  "county" : "Tompkins",
  "fmnp" : "N",
  "operation_season" : "January 10 - March 28",
  "longitude" : "-76.51111",
  "latitude" : "42.44067",
  "snap_status" : "Y"
}
, {
  "market_name" : "Trumansburg Farmers' Market",
  "zip" : "14886",
  "phone" : "6073876501",
  "operation_hours" : "Wednesday  4pm-7pm",
  "location" : "Village Park,  corner of Main & Hector Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.66579",
    "latitude" : "42.54224"
  },
  "state" : "NY",
  "contact" : "Tammy Morse",
  "operation_months_code" : "P/M",
  "city" : "Trumansburg",
  "address_line_1" : "State Route 96 and State Route 227",
  "county" : "Tompkins",
  "fmnp" : "Y",
  "operation_season" : "May 14 - October 29",
  "longitude" : "-76.66579",
  "latitude" : "42.54224",
  "snap_status" : "Y"
}
, {
  "market_name" : "Gardiner WINTER Farmers' Market",
  "zip" : "12525",
  "phone" : "8452550087",
  "operation_hours" : "Monthly, 3rd Saturday 11am - 2pm",
  "location" : "Gardiner Library,133 Farmers Turnpike",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.15248",
    "latitude" : "41.67842"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.gardinerlibrary.org"
  },
  "contact" : "Anne Rogers",
  "operation_months_code" : "X",
  "city" : "Gardiner",
  "address_line_1" : "133 Farmer's Turnpike",
  "county" : "Ulster",
  "fmnp" : "N",
  "operation_season" : "November - December",
  "longitude" : "-74.15248",
  "latitude" : "41.67842",
  "snap_status" : "N"
}
, {
  "market_name" : "Highland Farmers' Market",
  "zip" : "12528",
  "phone" : "8456912144",
  "operation_hours" : "Wednesday  2pm-6pm",
  "location" : "199 Route 299",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.99148",
    "latitude" : "41.74365"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.townoflloyd.com"
  },
  "contact" : "Kate Jonietz",
  "operation_months_code" : "M",
  "city" : "Highland",
  "address_line_1" : "199 Route 299",
  "county" : "Ulster",
  "fmnp" : "Y",
  "operation_season" : "June 4 - October 8",
  "longitude" : "-73.99148",
  "latitude" : "41.74365",
  "snap_status" : "N"
}
, {
  "market_name" : "Kingston WINTER Farmers' Market",
  "zip" : "12401",
  "phone" : "3472762606",
  "operation_hours" : "1st & 3rd Saturday 10am - 2pm",
  "location" : "Bethany Hall, Old Dutch Church272 Wall Street, corner Wall & Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.01884",
    "latitude" : "41.93286"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.kingstonfarmersmarket.org"
  },
  "contact" : "Lori Hylton",
  "operation_months_code" : "X/W/P",
  "city" : "Kingston",
  "address_line_1" : "272 Wall Street",
  "county" : "Ulster",
  "fmnp" : "N",
  "operation_season" : "December - April",
  "longitude" : "-74.01884",
  "latitude" : "41.93286",
  "snap_status" : "N"
}
, {
  "market_name" : "Milton/Heart of the Hudson Valley Farmers' Market",
  "zip" : "12547",
  "phone" : "8454642789",
  "operation_hours" : "Saturday  9am-2pm",
  "location" : "Cluett-Schantz Memorial Park1801-1805 Rt 9W",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.9609",
    "latitude" : "41.65722"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.hhvfarmersmarket.com"
  },
  "contact" : "Sheila Mannese",
  "operation_months_code" : "M",
  "city" : "Milton",
  "address_line_1" : "State Route 9W and St James Rd",
  "county" : "Ulster",
  "fmnp" : "Y",
  "operation_season" : "June 14 - October 22",
  "longitude" : "-73.9609",
  "latitude" : "41.65722",
  "snap_status" : "N"
}
, {
  "market_name" : "New Paltz Winter Sun Farms WINTER Farmers' Markets",
  "zip" : "12561",
  "phone" : "3477217386",
  "operation_hours" : "Monthly, 2nd Saturday 10am - 3pmDec 14, Jan 11, Feb 8, Mar 8, Apr 12",
  "location" : "New Paltz Community Ctr., Veteran Dr.Behind Town Hall, off Rt 32",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-74.08106",
    "latitude" : "41.75673"
  },
  "state" : "NY",
  "contact" : "Mary Woodburn",
  "operation_months_code" : "X/W/P",
  "city" : "New Paltz",
  "address_line_1" : "1 Veterans Drive",
  "county" : "Ulster",
  "fmnp" : "N",
  "operation_season" : "December - April",
  "longitude" : "-74.08106",
  "latitude" : "41.75673",
  "snap_status" : "N"
}
, {
  "market_name" : "Saugerties Farmers' Market",
  "zip" : "12477",
  "phone" : "8452466491",
  "operation_hours" : "Saturday  10am-2pm",
  "location" : "Cahill School Parking Lot,115 Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.94896",
    "latitude" : "42.07899"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.saugertiesfarmersmarket.com"
  },
  "contact" : "Barry Benepe",
  "operation_months_code" : "P/M",
  "city" : "Saugerties",
  "address_line_1" : "115 Main St",
  "county" : "Ulster",
  "fmnp" : "Y",
  "operation_season" : "May 24 - October 25",
  "longitude" : "-73.94896",
  "latitude" : "42.07899",
  "snap_status" : "Y"
}
, {
  "market_name" : "Saugerties WINTER Farmers' Market",
  "zip" : "12477",
  "phone" : "8452466491",
  "operation_hours" : "Monthly, Saturday  10am-2pmNov 22 & Dec 20",
  "location" : "Saugerties Senior Center207 Market Street",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.95503",
    "latitude" : "42.08426"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.saugertiesfarmersmarket.com"
  },
  "contact" : "Barry Benepe",
  "operation_months_code" : "X",
  "city" : "Saugerties",
  "address_line_1" : "207 Market Street",
  "county" : "Ulster",
  "fmnp" : "N",
  "operation_season" : "November - December",
  "longitude" : "-73.95503",
  "latitude" : "42.08426",
  "snap_status" : "Y"
}
, {
  "market_name" : "Chestertown Farmers' Market",
  "zip" : "12817",
  "phone" : "5184576880",
  "operation_hours" : "Wednesday 10am - 2pm",
  "location" : "Town Hall",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.80513",
    "latitude" : "43.64865"
  },
  "state" : "NY",
  "contact" : "TBA TBA",
  "operation_months_code" : "M",
  "city" : "Chestertown",
  "address_line_1" : "6307 State Route 9",
  "county" : "Warren",
  "fmnp" : "N",
  "operation_season" : "June - October",
  "longitude" : "-73.80513",
  "latitude" : "43.64865",
  "snap_status" : "N"
}
, {
  "market_name" : "Glens Falls Farmers' Market",
  "zip" : "12801",
  "phone" : "5187920438",
  "operation_hours" : "Saturday  8am-12 Noon",
  "location" : "South Street Market Pavilion",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.64698",
    "latitude" : "43.30993"
  },
  "state" : "NY",
  "contact" : "Richard Sandora",
  "operation_months_code" : "P/M",
  "city" : "Glens Falls",
  "address_line_1" : "25 South Street",
  "county" : "Warren",
  "fmnp" : "Y",
  "operation_season" : "May 3 - October 25",
  "longitude" : "-73.64698",
  "latitude" : "43.30993",
  "snap_status" : "Y"
}
, {
  "market_name" : "Glens Falls WINTER Farmers' Market",
  "zip" : "12801",
  "phone" : "5183076239",
  "operation_hours" : "Saturday 9am - 12 NOON",
  "location" : "Christ Church United, 54 Bay Street",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.64708",
    "latitude" : "43.31269"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.gffma.com"
  },
  "contact" : "John Dickinson",
  "operation_months_code" : "X/W/P",
  "city" : "Glens Falls",
  "address_line_1" : "54 Bay Street",
  "county" : "Warren",
  "fmnp" : "N",
  "operation_season" : "November 30 - April 26",
  "longitude" : "-73.64708",
  "latitude" : "43.31269",
  "snap_status" : "Y"
}
, {
  "market_name" : "Queensbury Farmers' Market",
  "zip" : "12804",
  "phone" : "5187920438",
  "operation_hours" : "Monday  3pm-6pm",
  "location" : "Sport Zone, parking lotRoute 9 (across from Suttons)",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.68632",
    "latitude" : "43.34352"
  },
  "state" : "NY",
  "contact" : "Richard Sandora",
  "operation_months_code" : "M",
  "city" : "Queensbury",
  "address_line_1" : "1043 State Route 9",
  "county" : "Warren",
  "fmnp" : "Y",
  "operation_season" : "June 2 - October13",
  "longitude" : "-73.68632",
  "latitude" : "43.34352",
  "snap_status" : "Y"
}
, {
  "market_name" : "Cambridge Farmers' Market",
  "zip" : "12816",
  "phone" : "5182227191",
  "operation_hours" : "Sunday  10am-2pm",
  "location" : "Grass area next to Cambridge Hotel4 West Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.38146",
    "latitude" : "43.02848"
  },
  "state" : "NY",
  "contact" : "Sarah Ashton",
  "operation_months_code" : "P/M",
  "city" : "Cambridge",
  "address_line_1" : "4 West Main Street",
  "county" : "Washington",
  "fmnp" : "Y",
  "operation_season" : "May 18 - October 12",
  "longitude" : "-73.38146",
  "latitude" : "43.02848",
  "snap_status" : "N"
}
, {
  "market_name" : "Cambridge WINTER Farmers' Market",
  "zip" : "12816",
  "phone" : "5182611877",
  "operation_hours" : "Sunday 10am - 2pm",
  "location" : "Lovejoy Building, Cambridge Freight Yard",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.37994",
    "latitude" : "43.02866"
  },
  "state" : "NY",
  "contact" : "Fran Morrison",
  "operation_months_code" : "X",
  "city" : "Cambridge",
  "address_line_1" : "5 Washington Ave",
  "county" : "Washington",
  "fmnp" : "N",
  "operation_season" : "November - December 22",
  "longitude" : "-73.37994",
  "latitude" : "43.02866",
  "snap_status" : "N"
}
, {
  "market_name" : "Fort Edward Farmers' Market",
  "zip" : "12828",
  "phone" : "5187920198",
  "operation_hours" : "Friday  10am-1pm",
  "location" : "Broadway Bowl, 359 Broadway, Route 4",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.58721",
    "latitude" : "43.28393"
  },
  "state" : "NY",
  "contact" : "Linda Gifford",
  "operation_months_code" : "M",
  "city" : "Fort Edward",
  "address_line_1" : "359 Broadway",
  "county" : "Washington",
  "fmnp" : "Y",
  "operation_season" : "June 6 - October 24",
  "longitude" : "-73.58721",
  "latitude" : "43.28393",
  "snap_status" : "N"
}
, {
  "market_name" : "Granville Rt. 22 Farmers' Market",
  "zip" : "12832",
  "phone" : "5184990209",
  "operation_hours" : "Monday  2pm-5pm",
  "location" : "Quacker St., Big Lots",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.2656",
    "latitude" : "43.39979"
  },
  "state" : "NY",
  "contact" : "George Armstrong",
  "operation_months_code" : "P/M",
  "city" : "Granville",
  "address_line_1" : "70 Quacker St",
  "county" : "Washington",
  "fmnp" : "Y",
  "operation_season" : "May 26 - October 20",
  "longitude" : "-73.2656",
  "latitude" : "43.39979",
  "snap_status" : "Y"
}
, {
  "market_name" : "Greenwich Farmers' Market",
  "zip" : "12834",
  "phone" : "5189447149",
  "operation_hours" : "Wednesday  3pm-6pm",
  "location" : "Seventy Main, historical bldg 70 Main St. (Winter Indoors)",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.49854",
    "latitude" : "43.08931"
  },
  "state" : "NY",
  "contact" : "Julie Callahan",
  "operation_months_code" : "YR",
  "city" : "Greenwich",
  "address_line_1" : "70 Main Street",
  "county" : "Washington",
  "fmnp" : "Y",
  "operation_season" : "Year-round",
  "longitude" : "-73.49854",
  "latitude" : "43.08931",
  "snap_status" : "N"
}
, {
  "market_name" : "Hudson Falls Farmers' Market",
  "zip" : "12839",
  "phone" : "5187920198",
  "operation_hours" : "Tuesday  10am-1pm",
  "location" : "Sutherland Pet Store, 1161 Dix Ave.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.58262",
    "latitude" : "43.32024"
  },
  "state" : "NY",
  "contact" : "Linda Gifford",
  "operation_months_code" : "M",
  "city" : "Hudson Falls",
  "address_line_1" : "1161 Dix Ave",
  "county" : "Washington",
  "fmnp" : "Y",
  "operation_season" : "June 3 - October 28",
  "longitude" : "-73.58262",
  "latitude" : "43.32024",
  "snap_status" : "N"
}
, {
  "market_name" : "Salem Rt. 22 Farmers' Market",
  "zip" : "12865",
  "phone" : "5184990209",
  "operation_hours" : "Saturday  10am-1pm",
  "location" : "Village Park, Rt. 22",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.32837",
    "latitude" : "43.17322"
  },
  "state" : "NY",
  "contact" : "George Armstrong",
  "operation_months_code" : "P/M",
  "city" : "Salem",
  "address_line_1" : "Route 22 and Park Drive",
  "county" : "Washington",
  "fmnp" : "Y",
  "operation_season" : "May 25 - Mid October",
  "longitude" : "-73.32837",
  "latitude" : "43.17322",
  "snap_status" : "Y"
}
, {
  "market_name" : "Whitehall Rt. 22 Farmers' Market",
  "zip" : "12887",
  "phone" : "5184990209",
  "operation_hours" : "Tuesday  1pm-4pm",
  "location" : "Park on Boulevard, across from canal",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.4054",
    "latitude" : "43.54858"
  },
  "state" : "NY",
  "contact" : "George Armstrong",
  "operation_months_code" : "P/M",
  "city" : "Whitehall",
  "address_line_1" : "Route 22 and Poultney Street",
  "county" : "Washington",
  "fmnp" : "Y",
  "operation_season" : "May 27 - October 21",
  "longitude" : "-73.4054",
  "latitude" : "43.54858",
  "snap_status" : "Y"
}
, {
  "market_name" : "Ginegaw Farmers' Market",
  "zip" : "14568",
  "phone" : "3159861400",
  "operation_hours" : "Tuesday  2:30pm-6pm",
  "location" : "Ginegaw Park,1980 Route 441, Walworth",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.28888",
    "latitude" : "43.13404"
  },
  "state" : "NY",
  "contact" : "Jacqueline VanLare",
  "operation_months_code" : "M",
  "city" : "Walworth",
  "address_line_1" : "1980 Route 441",
  "county" : "Wayne",
  "fmnp" : "Y",
  "operation_season" : "June 17 - October 14",
  "longitude" : "-77.28888",
  "latitude" : "43.13404",
  "snap_status" : "N"
}
, {
  "market_name" : "Macedon Farmers' Market",
  "zip" : "14502",
  "phone" : "3159865932",
  "operation_hours" : "Wed  3:30pm-6:30pm",
  "location" : "32 Main St., Rt 31",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.30581",
    "latitude" : "43.06681"
  },
  "state" : "NY",
  "contact" : "William Hammond",
  "operation_months_code" : "M",
  "city" : "Macedon",
  "address_line_1" : "32 Main St",
  "county" : "Wayne",
  "fmnp" : "Y",
  "operation_season" : "June 18 - October 15",
  "longitude" : "-77.30581",
  "latitude" : "43.06681",
  "snap_status" : "N"
}
, {
  "market_name" : "Newark Farmers' Market",
  "zip" : "14513",
  "phone" : "3153319129",
  "operation_hours" : "Thursday  2:30pm-6pm",
  "location" : "Central Park,Church Street",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.09522",
    "latitude" : "43.04468"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.facebook.com/newarkfarmersmarket"
  },
  "contact" : "Jessica Wells",
  "operation_months_code" : "M",
  "city" : "Newark",
  "address_line_1" : "Church St and South Main St",
  "county" : "Wayne",
  "fmnp" : "Y",
  "operation_season" : "June 5 - October 16",
  "longitude" : "-77.09522",
  "latitude" : "43.04468",
  "snap_status" : "Y"
}
, {
  "market_name" : "Sodus Farmers' Market",
  "zip" : "14551",
  "phone" : "3154838029",
  "operation_hours" : "Wednesday  2:30pm-6pm",
  "location" : "Sodus Methodist Church parking lot, 58 W. Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.06587",
    "latitude" : "43.23615"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://sutmc.org/farmersmarket"
  },
  "contact" : "Sandy Hall",
  "operation_months_code" : "M",
  "city" : "Sodus",
  "address_line_1" : "58 West Main St",
  "county" : "Wayne",
  "fmnp" : "Y",
  "operation_season" : "June 11 - October 8",
  "longitude" : "-77.06587",
  "latitude" : "43.23615",
  "snap_status" : "Y"
}
, {
  "market_name" : "Wolcott Area Farmers' Market",
  "zip" : "14590",
  "phone" : "5854025866",
  "operation_hours" : "Thursday  1pm-6pm",
  "location" : "Northup Park,New Hartford St., Wolcott",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-76.81491",
    "latitude" : "43.21855"
  },
  "state" : "NY",
  "contact" : "Juli Bixby",
  "operation_months_code" : "M",
  "city" : "Wolcott",
  "address_line_1" : "Washington Street and New Hartford Street",
  "county" : "Wayne",
  "fmnp" : "Y",
  "operation_season" : "June 12 - October 16",
  "longitude" : "-76.81491",
  "latitude" : "43.21855",
  "snap_status" : "Y"
}
, {
  "market_name" : "Bronxville Farmers' Market",
  "zip" : "10708",
  "phone" : "9147792522",
  "operation_hours" : "Saturday  8:30am-1pm",
  "location" : "Stone Place at Paxton Ave.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.83779",
    "latitude" : "40.94"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.bronxvillefarmersmarket.com"
  },
  "contact" : "Mary Liz Mulligan",
  "operation_months_code" : "P/M",
  "city" : "Bronxville",
  "address_line_1" : "Stone Pl and Paxton Ave",
  "county" : "Westchester",
  "fmnp" : "Y",
  "operation_season" : "May 10 - November 22",
  "longitude" : "-73.83779",
  "latitude" : "40.94",
  "snap_status" : "N"
}
, {
  "market_name" : "Chappaqua WINTER Farmers' Market",
  "zip" : "10514",
  "phone" : "9144788068",
  "operation_hours" : "Saturday  8:30am-1pm",
  "location" : "Parish Hall, inside St. Mary's Church191 S. Greeley Ave.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.77339",
    "latitude" : "41.1558"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.hastingsfarmersmarket.org"
  },
  "contact" : "Pascale Le Draoulec",
  "operation_months_code" : "X/W/P",
  "city" : "Chappaqua",
  "address_line_1" : "191 South Greeley Ave",
  "county" : "Westchester",
  "fmnp" : "N",
  "operation_season" : "December - April",
  "longitude" : "-73.77339",
  "latitude" : "41.1558",
  "snap_status" : "N"
}
, {
  "market_name" : "Dobbs Ferry Farmers' Market",
  "zip" : "10522",
  "phone" : "9146932935",
  "operation_hours" : "Friday  9am-4pm",
  "location" : "Cedar & Main Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.87365",
    "latitude" : "41.01628"
  },
  "state" : "NY",
  "contact" : "Carol Avila",
  "operation_months_code" : "M",
  "city" : "Dobbs Ferry",
  "address_line_1" : "Cedar St and Main St",
  "county" : "Westchester",
  "fmnp" : "N",
  "operation_season" : "June 6 - November 21",
  "longitude" : "-73.87365",
  "latitude" : "41.01628",
  "snap_status" : "N"
}
, {
  "market_name" : "Hartsdale Farmers' Market",
  "zip" : "10530",
  "phone" : "9146932935",
  "operation_hours" : "Saturday  8am-3pm",
  "location" : "Hartsdale Train Station,East Hartsdale Ave.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.79656",
    "latitude" : "41.01072"
  },
  "state" : "NY",
  "contact" : "Carol Avila",
  "operation_months_code" : "M",
  "city" : "Hartsdale",
  "address_line_1" : "East Hartsdale Ave and Fenimore Rd",
  "county" : "Westchester",
  "fmnp" : "N",
  "operation_season" : "June 7 - November 22",
  "longitude" : "-73.79656",
  "latitude" : "41.01072",
  "snap_status" : "N"
}
, {
  "market_name" : "Hastings WINTER Farmers' Market",
  "zip" : "10706",
  "phone" : "9144788068",
  "operation_hours" : "2nd & 4th Saturday 9am - 1pm",
  "location" : "James Harmon Community Center, 44 Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.88071",
    "latitude" : "40.99413"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.hastingsfarmersmarket.org"
  },
  "contact" : "Pascale Le Draoulec",
  "operation_months_code" : "X/W",
  "city" : "Hastings-on-Hudson",
  "address_line_1" : "44 Main Street",
  "county" : "Westchester",
  "fmnp" : "N",
  "operation_season" : "December - March",
  "longitude" : "-73.88071",
  "latitude" : "40.99413",
  "snap_status" : "Y"
}
, {
  "market_name" : "Mamaroneck WINTER Farmers' Market",
  "zip" : "10543",
  "phone" : "9149234837",
  "operation_hours" : "Saturday  9am - 1pm",
  "location" : "Saint Thomas Church, Heathcote Hall168 W. Boston Post Rd.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.73465",
    "latitude" : "40.94809"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.communitymarkets.biz"
  },
  "contact" : "Miriam Haas",
  "operation_months_code" : "W/P",
  "city" : "Mamaroneck",
  "address_line_1" : "168 West Boston Post Road",
  "county" : "Westchester",
  "fmnp" : "N",
  "operation_season" : "January - May",
  "longitude" : "-73.73465",
  "latitude" : "40.94809",
  "snap_status" : "N"
}
, {
  "market_name" : "Mount Kisco WINTER Farmers' Market",
  "zip" : "10549",
  "phone" : "9145896615",
  "operation_hours" : "Saturday 9am - 1pm",
  "location" : "St. Mark's Church85 East Main Street",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.72415",
    "latitude" : "41.19839"
  },
  "state" : "NY",
  "contact" : "Sandra Lena",
  "operation_months_code" : "X/W/P",
  "city" : "Mount Kisco",
  "address_line_1" : "351 East Main Street",
  "county" : "Westchester",
  "fmnp" : "N",
  "operation_season" : "November - June",
  "longitude" : "-73.72415",
  "latitude" : "41.19839",
  "snap_status" : "N"
}
, {
  "market_name" : "New Rochelle Grand Market",
  "zip" : "10801",
  "phone" : "9177446456",
  "operation_hours" : "Saturday  9am-2pm",
  "location" : "1 Library Green",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.78299",
    "latitude" : "40.91014"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.newrochellegrandmarket.com"
  },
  "contact" : "Bo Kemp",
  "operation_months_code" : "M",
  "city" : "New Rochelle",
  "address_line_1" : "Library Green",
  "county" : "Westchester",
  "fmnp" : "Y",
  "operation_season" : "May 31 - November 22",
  "longitude" : "-73.78299",
  "latitude" : "40.91014",
  "snap_status" : "N"
}
, {
  "market_name" : "Peekskill Farmers' Market",
  "zip" : "10566",
  "phone" : "9144184920",
  "operation_hours" : "Saturday  8am-2pm",
  "location" : "Bank St.,btwn Main (Rt. 6) & Park Sts.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.91906",
    "latitude" : "41.29179"
  },
  "state" : "NY",
  "contact" : "Corinna Makris",
  "operation_months_code" : "M",
  "city" : "Peekskill",
  "address_line_1" : "Main St and Bank St",
  "county" : "Westchester",
  "fmnp" : "Y",
  "operation_season" : "June 7 - November 22",
  "longitude" : "-73.91906",
  "latitude" : "41.29179",
  "snap_status" : "N"
}
, {
  "market_name" : "Pleasantville Farmers' Market",
  "zip" : "10570",
  "phone" : "9142054545",
  "operation_hours" : "Saturday  8:30am-1pm",
  "location" : "Parking lot at Memorial Plaza,off Manville Rd., next to Train Station",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.79218",
    "latitude" : "41.13526"
  },
  "state" : "NY",
  "contact" : "Steven Bates",
  "operation_months_code" : "P/M/X",
  "city" : "Pleasantville",
  "address_line_1" : "Manville Rd and Wheeler Ave",
  "county" : "Westchester",
  "fmnp" : "Y",
  "operation_season" : "May 24 - November 22",
  "longitude" : "-73.79218",
  "latitude" : "41.13526",
  "snap_status" : "N"
}
, {
  "market_name" : "Pleasantville WINTER Farmers Market",
  "zip" : "10570",
  "phone" : "9142054545",
  "operation_hours" : "Saturday 9am - 1pm",
  "location" : "Middle School, 40 Romer Ave",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.78538",
    "latitude" : "41.13451"
  },
  "state" : "NY",
  "contact" : "Steven Bates",
  "operation_months_code" : "X/W/P",
  "city" : "Pleasantville",
  "address_line_1" : "40 Romer Ave",
  "county" : "Westchester",
  "fmnp" : "N",
  "operation_season" : "December 6 - May 9",
  "longitude" : "-73.78538",
  "latitude" : "41.13451",
  "snap_status" : "N"
}
, {
  "market_name" : "Saint John's Church - Yonkers Farmers' Market",
  "zip" : "10701",
  "phone" : "9145128156",
  "operation_hours" : "Thursday  8am-4:30pm",
  "location" : "Church Courtyard, One Hudson St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.89879",
    "latitude" : "40.93364"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.stjohnsfarmersmarket.blogspot.com"
  },
  "contact" : "Father John Hamilton",
  "operation_months_code" : "M",
  "city" : "Yonkers",
  "address_line_1" : "1 Hudson St",
  "county" : "Westchester",
  "fmnp" : "Y",
  "operation_season" : "July 10 - November 20",
  "longitude" : "-73.89879",
  "latitude" : "40.93364",
  "snap_status" : "N"
}
, {
  "market_name" : "Saw Mill River Youth Market",
  "zip" : "10705",
  "phone" : "9143752151",
  "operation_hours" : "Friday  3pm-7pm",
  "location" : "Van der Donck Park,Larkin Plaza",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.90136",
    "latitude" : "40.93523"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.groundworkhv.org"
  },
  "contact" : "Curt Collier",
  "operation_months_code" : "M",
  "city" : "Yonkers",
  "address_line_1" : "Nepperhan St and Market Place",
  "county" : "Westchester",
  "fmnp" : "Y",
  "operation_season" : "June 6 - October 24",
  "longitude" : "-73.90136",
  "latitude" : "40.93523",
  "snap_status" : "Y"
}
, {
  "market_name" : "Stone Barns Center WINTER Farmers' Market",
  "zip" : "10591",
  "phone" : "9143666200",
  "operation_hours" : "Monthly, 2nd Sunday 1pm - 4pm",
  "location" : "Stone Barns Center for Food & Agriculture 630 Bedford Rd., Tarrytown",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.82909",
    "latitude" : "41.10306"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.stonebarnscenter.org"
  },
  "contact" : "Nina Johnson",
  "operation_months_code" : "W/P",
  "city" : "Tarrytown",
  "address_line_1" : "630 Bedford Road",
  "county" : "Westchester",
  "fmnp" : "N",
  "operation_season" : "January - April",
  "longitude" : "-73.82909",
  "latitude" : "41.10306",
  "snap_status" : "N"
}
, {
  "market_name" : "Westchester Indoor WINTER Farmers' Market",
  "zip" : "10606",
  "phone" : "9148647077",
  "operation_hours" : "Monthly, Sunday 10am - 3pmNov 24, Dec 29, Jan 26, Feb 23, Mar 30",
  "location" : "Westchester County Center, lower level198 Central Ave, White Plains",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.77886",
    "latitude" : "41.03707"
  },
  "state" : "NY",
  "contact" : "Beth Bricker",
  "operation_months_code" : "X/W",
  "city" : "White Plains",
  "address_line_1" : "198 N Central Ave",
  "county" : "Westchester",
  "fmnp" : "N",
  "operation_season" : "November - March",
  "longitude" : "-73.77886",
  "latitude" : "41.03707",
  "snap_status" : "N"
}
, {
  "market_name" : "White Plains (International) Farmers' Market",
  "zip" : "10601",
  "phone" : "9143181067",
  "operation_hours" : "Wednesday  8am-4pm",
  "location" : "125 Court St.,btwn Martine Ave. & Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.76627",
    "latitude" : "41.02904"
  },
  "state" : "NY",
  "contact" : "Johanna Safar",
  "operation_months_code" : "P/M",
  "city" : "White Plains",
  "address_line_1" : "125 Court St",
  "county" : "Westchester",
  "fmnp" : "Y",
  "operation_season" : "April 30 - November 26",
  "longitude" : "-73.76627",
  "latitude" : "41.02904",
  "snap_status" : "N"
}
, {
  "market_name" : "Perry Farmers' Market",
  "zip" : "14530",
  "phone" : "5859913893",
  "operation_hours" : "Sat  8:30am-12:30pm",
  "location" : "Perry Festival Plaza, S. Main Street, Downtown Perry",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-78.00218",
    "latitude" : "42.71842"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.perryfarmersmarket.com"
  },
  "contact" : "Rick Hauser",
  "operation_months_code" : "M",
  "city" : "Perry",
  "address_line_1" : "Main St and Borden Ave",
  "county" : "Wyoming",
  "fmnp" : "Y",
  "operation_season" : "June 21 - September 27",
  "longitude" : "-78.00218",
  "latitude" : "42.71842",
  "snap_status" : "N"
}
, {
  "market_name" : "Warsaw Farmers' Market",
  "zip" : "14569",
  "phone" : "5855911358",
  "operation_hours" : "Thursday  12 Noon-4pm",
  "location" : "Full Gospel Church parking lot,2444 N. Main St.",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-78.13047",
    "latitude" : "42.76344"
  },
  "state" : "NY",
  "contact" : "Patricia Reiter",
  "operation_months_code" : "M",
  "city" : "Warsaw",
  "address_line_1" : "2456-2444 New York State Bicycle Route 19",
  "county" : "Wyoming",
  "fmnp" : "Y",
  "operation_season" : "July 10 - October 16",
  "longitude" : "-78.13047",
  "latitude" : "42.76344",
  "snap_status" : "N"
}
, {
  "market_name" : "Branchport Farmers' Market",
  "zip" : "14418",
  "phone" : "3157303981",
  "operation_hours" : "Tuesday  4pm-6:30pm",
  "location" : "Branchport Fire Dept., 3686 Rte 54A",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.15125",
    "latitude" : "42.59953"
  },
  "state" : "NY",
  "contact" : "Natalie Baris",
  "operation_months_code" : "M",
  "city" : "Branchport",
  "address_line_1" : "3686 Rte 54A",
  "county" : "Yates",
  "fmnp" : "Y",
  "operation_season" : "June 3 - October 28",
  "longitude" : "-77.15125",
  "latitude" : "42.59953",
  "snap_status" : "Y"
}
, {
  "market_name" : "Branchport WINTER Farmers' Market",
  "zip" : "14418",
  "phone" : "3157303981",
  "operation_hours" : "Alternate Tuesdays 4pm - 5:30pm",
  "location" : "Branchport Library",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.14373",
    "latitude" : "42.60022"
  },
  "state" : "NY",
  "contact" : "Natalie Baris",
  "operation_months_code" : "X/W/P",
  "city" : "Branchport",
  "address_line_1" : "3699 New York 54A",
  "county" : "Yates",
  "fmnp" : "N",
  "operation_season" : "November - May",
  "longitude" : "-77.14373",
  "latitude" : "42.60022",
  "snap_status" : "Y"
}
, {
  "market_name" : "The Windmill Farmers' Market",
  "zip" : "14527",
  "phone" : "3155363032",
  "operation_hours" : "Saturday  8am-4:30pm",
  "location" : "3900 Route 14A at Hobson Roadin Penn Yan",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.03609",
    "latitude" : "42.57687"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.thewindmill.com"
  },
  "contact" : "Juanita Dombroski",
  "operation_months_code" : "P/M/X",
  "city" : "Penn Yan",
  "address_line_1" : "3900 State Route 14A",
  "county" : "Yates",
  "fmnp" : "Y",
  "operation_season" : "April 26 - December 13",
  "longitude" : "-77.03609",
  "latitude" : "42.57687",
  "snap_status" : "N"
}
, {
  "market_name" : "Yates Co. Co-op Farm & Craft Market",
  "zip" : "14527",
  "phone" : "6072435234",
  "operation_hours" : "Saturday  7:30am-12 Noon",
  "location" : "Main St. north of Elm St., on sidewalk, Penn Yan",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-77.05365",
    "latitude" : "42.66095"
  },
  "state" : "NY",
  "market_link" : {
    "url" : "http://www.pyfarmersmarket.wordpress.com"
  },
  "contact" : "Rivka Davis",
  "operation_months_code" : "P/M",
  "city" : "Penn Yan",
  "address_line_1" : "Main St and Elm St",
  "county" : "Yates",
  "fmnp" : "Y",
  "operation_season" : "May 24 - October 18",
  "longitude" : "-77.05365",
  "latitude" : "42.66095",
  "snap_status" : "N"
}
 ];
$scope.mypath=$scope.paths[1];

$scope.changeMarker= function(){
    var newloc={
  "market_name" : "Capital District Farmers' Market",
  "zip" : "12204",
  "phone" : "5184640889",
  "operation_hours" : "Saturday  9am-1pm",
  "location" : "Pavillion at 381 BroadwayMenands",
  "location_points" : {
    "needs_recoding" : false,
    "longitude" : "-73.72001",
    "latitude" : "42.69621"
  },
  "state" : "NY",
  "contact" : "Al Lansing",
  "operation_months_code" : "P/M",
  "city" : "Menands",
  "address_line_1" : "381 Broadway",
  "county" : "Albany",
  "fmnp" : "Y",
  "operation_season" : "May 3 - October 25",
  "longitude" : "-73.72001",
  "latitude" : "42.69621",
  "snap_status" : "Y"
}
;

    $scope.paths.push(newloc);
    
}

$scope.inputclick=function(item){
  console.log(1);
  $scope.mypath=item;
}

  } ]);
  
    

 
  

