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
    'style':{
      'background-color': 'white',
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
        "name":"Research",
        "link":"/research"
      },
      {
        "name":"People",
        "hasDropdown":true,
        "dropdownStyle":{
          'color':'white',
          'background-color': '#739ad9',
          'border-top':'none',
          'font-size':'25px'
        },
        "dropdownItems":[
          {
            "name":"Faculty",
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
        "name":"Collaborations",
        "link":"/Collaborations"
      },
      {
        "name":"Publications",
        "link":"/publications"
      }
    ],
    "navLinks":{
        // 'font-weight': 'bolder',
        'color':'white',
        'background-color': '#739ad9',
    },
    "facultyDropDown":{
      "style":{
        'color':'white',
        'background-color': '#739ad9',
        'border-top':'none',
        'font-size':'25px'
      }
    },
    "eventsDropDown":{
      "style":{
        'color':'white',
        'background-color': '#739ad9',
        'border-top':'none',
        'font-size':'25px'
      }
    },
    "moreDropDown":{
      "style":{
        'color':'white',
        'background-color': '#739ad9',
        'border-top':'none',
        'font-size':'25px'
      }
    }
  },

  "footer":{
    "style":{
       "background-color": "#0e0e0e",
    }
  }
}
