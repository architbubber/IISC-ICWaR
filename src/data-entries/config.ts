/*******************************************************************************************************************************/
//                                                  !!! ATTENTION !!!                                                          //
//                                                                                                                             //
//             /\                    THIS IS A HIGHLY VOLATILE FILE. ONLY AUTHORISED                           /\              //
//            /  \                   PERSONNEL FAMILIAR WITH WORKING OF THE SITE SHOULD                       /  \             //
//           /    \                  MAKE ANY CHANGES TO THIS FILE.                                          /    \            //
//          /  |   \                                                                                        /  |   \           //
//         /   |    \                                                                                      /   |    \          //
//        /    |     \               ANY CHANGES TO THIS FILE WILL DIRECTLY AFFECT THE WEBSITE            /    |     \         //
//       /            \              AND MAY RESULT IN CRASH OR OTHER POSSIBLE SCENARIOS.                /            \        //
//      /      *       \                                                                                /      *       \       //
//     /_ _ _ _ _ _ _ __\                                                                              /_ _ _ _ _ _ _ __\      //
//                                                !! HANDLE WITH CARE !!                                                       //
//                                                                                                                             //
/*******************************************************************************************************************************/
export const configurations = {

  "global-settings":{
    "font-family":'Sabon-next-lt',
    "font-size":'15px'
  },

  "spreeMailUrl":"https://formspree.io/f/xzblzjgk",

  "colorPallete":[
    '#8D8741',
    '#659DBD',
    '#DAAD86',
    '#BC986A',
    '#FBEEC1'
  ],

  "navbar":{
    "navLinksStyle":{
      'color':'white',
      'background-color': '#b7d8f3e8',//#b7d8f3e8
  },
    'style':{
      'background-color': '#ffffff',//Color behind IISC And ICWaR Logo
      'border':'none',
      // 'min-height': '10vh',
      'font-size':'25px'
    },
    "navMenu":[
      {
        "name":"Home",
        "link":"#"
      },
      {
        "name":"People",
        "hasDropdown":true,
        "dropdownStyle":{
          'color':'#fefefe',
          'background-color': '#a23838f9',//#8d4736ff
          'font-size':'25px'
        },
        "dropdownItems":[
          {
            "name":"Faculty",
            "hasSubDropdown":false,
            "link":"/people?type=faculty"
          },
          {
            "name":"Visitors",
            "link":"/people?type=visitors"
          },
          {
            "name":"Research Students",
            "link":"/people?type=researchStudents"
          },
          {
            "name":"Post Doctoral Scholars",
            "link":"/people?type=postDoctoralScholars"
          },
          {
            "name":"Project Staff",
            "link":"/people?type=projectStaff"
          },
          {
            "name":"Office Staff",
            "link":"/people?type=officeStaff"
          },
        ],
      },
      {
        "name":"Research",
        "link":"/research"
      },
      {
        "name":"Publications",
        "link":"/publications"
      },
      {
        "name":"Activities & Events",
        "hasDropdown":true,
        "dropdownStyle":{
          'color':'white',
          'background-color': '#a23838f9',
          'border-top':'none',
          'font-size':'25px'
        },
        "dropdownItems":[
          {
            "name":"Workshops And Short Courses",
            "link":"/events/workshop-and-meetings",
            "hasSubDropdown":true,
            "dropdownStyle":{
              'color':'white',
              'background-color': '#a23838f9',
              'border-top':'none',
              'font-size':'25px'
            },
            "subDropdownItems":[
              {
                "name":"Seminars",
                "link":"/events/seminars-and-publications"
              },
              {
                "name":"Meetings",
                "link":"/events/workshop-and-meetings"
              },
              {
                "name":"Outreach",
                "link":"/event"
              }]
          },
          {
            "name":"Monsoon School",
            "link":"/events/monsoon-school"
          }
        ],
      },
      {
        "name":"About",
        "hasDropdown":true,
        "dropdownStyle":{
          'color':'white',
          'background-color': '#a23838f9',
          'border-top':'none',
          'font-size':'25px'
        },
        "dropdownItems":[
          {
            "name":"History",
            "link":"/about-us"
          },
          {
            "name":"Program",
            "link":"/hw"
          },
          {
            "name":"Infrastructure",
            "link":"/centres-and-facilities"
          }
        ],
      }
    ]
  },

  "footer":{
    "style":{
      //  "background-color": "#0e0e0e",
       "background-color": "#08394f",
       "color":"red"
    }
  }
}
